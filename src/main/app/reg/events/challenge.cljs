(ns app.reg.events.challenge
  (:require
    [cljs.spec.alpha :as s]
    [day8.re-frame.tracing :refer-macros [fn-traced]]
    [re-frame.core :refer [reg-event-fx reg-event-db]]
    [app.helpers.parse :as p]
  ))

(s/def ::state #{:waiting :running :completed :failed})

(s/def ::abnormal-challenge-spec (s/keys :opt-un [::plain ::code 
                                                  ::hide-plain? ::hide-code? 
                                                  ::hide-log-plain?
                                                  ::hide-log-code?
                                                  ::note ::wpm]))
(s/def ::challenge-spec (s/keys :opt-un [::wpm]
                                :req-un [::plain ::code 
                                         ::hide-plain? ::hide-code? 
                                         ::hide-log-plain?
                                         ::hide-log-code?
                                         ::note ::wpm]))

(s/def ::db-challenge (s/keys :req-un [::index ::state ::challenge-specs ::curr-code]))

(s/def ::index integer?)
(s/def ::challenge-specs (s/coll-of ::challenge-spec))
(s/def ::abnormal-challenge-specs (s/coll-of ::abnormal-challenge-spec))
(s/def ::curr-code ::p/morse-code)
(def empty-db-challenge {:index 0 :state :waiting :challenge-specs [] :curr-code []})


(defn normalize-specs [specs]
  {:pre [(s/valid? ::abnormal-challenge-specs specs)]
   :post [(s/valid? ::challenge-specs %)]}

  (reduce
    (fn [acc {:keys [plain code hide-plain? hide-code? 
                     hide-log-plain? hide-log-code? note wpm] 
              :or {hide-plain? false hide-code? false 
                   hide-log-plain? false hide-code-plain? false
                   note ""}
              :as spec}]
      (let [
        plain (if plain plain (p/code->plain code))
        code (if code code (p/plain->code plain))
        new-spec {:plain plain
                  :code code
                  :wpm wpm
                  :note note
                  :hide-plain? hide-plain?
                  :hide-code? hide-code?
                  :hide-log-plain? hide-log-plain?
                  :hide-log-code?  hide-log-code?
                  }
      ] (conj acc new-spec)))
    []
    specs))


(defn create-db-challenge [specs]
  {:pre [(s/valid? ::challenge-specs specs)]
   :post [(s/valid? ::db-challenge %)]}

  (let [specs (normalize-specs specs)]
    (merge 
      empty-db-challenge 
      {:challenge-specs specs
       :curr-code (get (first specs) :code)})))

(defn done-challenge [db-challenge]
  {:pre [(s/valid? ::db-challenge db-challenge)]
   :post [(s/valid? ::db-challenge %)]}
  
  {})


(defn finish-challenges [])
(defn inc-challenges [])

(defn next-challenge [old-challenge]
  {:pre [(s/valid? ::db-challenge old-challenge)]
   :post [(s/valid? ::db-challenge %)]}

  (let [{:keys [state challenge-specs index]} old-challenge 
        num-specs (count challenge-specs)
        done? (= (inc index) num-specs)
        idx (min (inc index) (dec num-specs))
        spec (if done? {:code []} (nth challenge-specs idx))
        curr (:code spec)
        state (if done? :completed state)]

    (merge old-challenge {:index idx 
                          :state state
                          :curr-code curr})))


(defn challenge-complete? [db-challenge log-code]
  {:pre [(s/valid? ::db-challenge db-challenge)
         (s/valid? ::p/morse-code log-code)]
   :post [(s/valid? boolean? %)]}

  (let [{:keys [state curr-code]} db-challenge]
    (cond
      (not= state :running) false
      :else (= log-code curr-code))))


; WARNING! Do not pass in predictive code here. It WILL fail.
(defn challenge-failed? [db-challenge log-code]
  {:pre [(s/valid? ::db-challenge db-challenge)
         (s/valid? ::p/morse-code log-code)]
   :post [(s/valid? boolean? %)]}

  (let [{:keys [state curr-code]} db-challenge
        sub-chal (take (count log-code) curr-code)]
    (cond
      (not= state :running) false
      :else (not= log-code sub-chal))))


(reg-event-db
  :init-challenges
  (fn-traced
    [db [_ challenge-specs]]
    (let [specs (normalize-specs challenge-specs)
          db-challenge (create-db-challenge specs)]
      (assoc db :challenge db-challenge))))


(reg-event-fx
  :next-challenge
  (fn-traced
    [cofx _]
    (let [db (:db cofx)
          {:keys [index challenge-specs] :as challenge} (:challenge db)
          next-c (next-challenge challenge)]
    {:db (assoc db :challenge next-c)})))


(reg-event-db
  :set-challenge-state
  (fn-traced
    [db [_ state]]
    (assoc-in db [:challenge :state] state)))


(reg-event-fx
  :check-work
  (fn-traced
    [cofx _]
    (let [db-challenge (get-in cofx [:db :challenge])
          unit         (get-in cofx [:db :unit])
          log-code     (p/parse-log unit (get-in cofx [:db :log]))
          complete?    (challenge-complete? db-challenge log-code)
          fail?        (challenge-failed? db-challenge log-code)]
      (cond
        complete? {:fx [[:dispatch [:reset-log]]
                        [:dispatch [:stop-ticker]]
                        [:dispatch [:next-challenge]]]}
        fail?     {:fx [[:dispatch [:stop-ticker]]
                        [:dispatch [:set-challenge-state :failed]]]}
        :else     {}))))

(reg-event-fx
  :reset-challenge
  (fn-traced
    [cofx _]
    {:fx [[:dispatch [:reset-log]]
          [:dispatch [:set-challenge-state :waiting]]]}))
