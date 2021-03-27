(ns app.helpers.parse
  (:require
    [cljs.spec.alpha :as s]
    [cljs.core.match :refer [match]]
    [defun.core :refer [fun]]
    [app.db :refer [chart]]
  ))

;;;; SPECS ;;;;
;;;; Morse code ;;;;
(s/def ::loose-morse-sym  
  #{"." "-" "charspace" "wordspace" "symspace"}); "pendingup" "pendingdown" "symspace"})

(s/def ::morse-sym 
  #{"." "-" "charspace" "wordspace"})

(s/def ::morse-code (s/coll-of ::morse-sym))
  (s/valid? ::morse-code ["." "-" "charspace" "wordspace"])

(s/def ::loose-morse-code (s/coll-of ::loose-morse-sym))
  (s/valid? ::loose-morse-code ["." "-" "charspace" "wordspace" "symspace"]); "pendingup" "pendingdown"])

(s/def ::spaced-code (s/coll-of ::morse-code))
  (s/valid? ::spaced-code [ ["." "-"] ["-"] ["wordspace"]])

;;;; Raw Logs ;;;;
(s/def ::type #{:down :up :tick})
(s/def ::time integer?) ; 182350139585
(s/def ::log-entry (s/keys :req-un [::type ::time])) ; {:type :up, :time 1832413290}
(s/def ::log (s/coll-of ::log-entry)) ; [{:type :down, :time ...}, {:type :up, :time ...}]

(def sample-entry {:type :down, :time 18413250135})
(s/valid? ::log-entry sample-entry)
(s/valid? ::log [sample-entry sample-entry])


;;;; Plain Text ;;;;
(def avail-chars (set (keys chart)))
(defn plain-text? [s] (every? avail-chars s))

(s/def ::plain-char avail-chars) 
(s/def ::plain-text plain-text?)
(s/def ::plain-text-loose string?)
(s/def ::spaced-plain (s/coll-of ::plain-char))

(s/valid? ::plain-char "A")
(s/valid? ::plain-text "HELLO WORLD")
(s/valid? ::plain-text-loose "AfadfFGzcxv.,")
(s/valid? ::spaced-plain ["H" "I"   " "   "T" "H" "E" "R" "E"])


(defn get-duration [unit t1 t2]
  (-> (- t2 t1)
      (/ unit)
      Math/floor))

(defn parse-log-pair [unit a b]
  {:pre [(integer? unit) (s/valid? ::log-entry a) (s/valid? ::log-entry b)]
   :post [(s/valid? ::loose-morse-sym %)]}
  (let [
    {atime :time atype :type} a
    {btime :time btype :type} b
    duration (get-duration unit atime btime)
  ]
    (match [atype duration]
           [:down (_ :guard #(>= % 3))]  "-"
           [:down  _]                    "."
           [:up   (_ :guard #(>= % 7))]  "wordspace"
           [:up   (_ :guard #(>= % 3))]  "charspace"
           [_      _]                    "symspace")))


(defn parse-log [unit log]
  {:pre [(integer? unit) (s/valid? ::log log)]
   :post [(s/valid? ::morse-code %)]}
  (loop [acc [], l log]
    (if (< (count l) 2) acc
      (let [a (first l)
            b (second l)
            sym (parse-log-pair unit a b)
            new-acc (if (= sym "symspace") 
                        acc 
                        (conj acc sym))]
      (recur 
        new-acc
        (rest l))))))


(defn- get-spaced-code [morse-code]
  (reduce
    (fn [{:keys [resolved pending] :as acc} sym]
      (match sym
        "charspace" (-> acc
                        (assoc :resolved (conj resolved pending))
                        (assoc :pending []))
        "wordspace" (-> acc
                        (assoc :resolved (conj resolved pending ["wordspace"]))
                        (assoc :pending []))
        _ (assoc acc :pending (conj pending sym))))
    {:resolved []
     :pending []}
    morse-code))


(defn parse-spaces [morse-code]
  {:pre [(s/valid? ::morse-code morse-code)]
   :post [(s/valid? ::spaced-code %)]}
  (let [
    {:keys [resolved pending]} (get-spaced-code morse-code)
    resolved (if (empty? pending) resolved
               (conj resolved pending))
  ] resolved))


(defn spaced-code->spaced-plain [spaced-code]
  {:pre [(s/valid? ::spaced-code spaced-code)]
   :post [(s/valid? ::spaced-plain %)]}
  (let [inv-chart (clojure.set/map-invert chart)]
    (map inv-chart spaced-code)))


(defn log->plain [unit log]
  {:pre [(integer? unit) (s/valid? ::log log)]
   :post [(s/valid? ::plain-text %)]}
  (->> (parse-log unit log)
       parse-spaces
       spaced-code->spaced-plain
       (clojure.string/join "")))


(defn- plain-chars->morse-code [list-of-chars]
  (loop [acc []
         li list-of-chars]
    (if (empty? li) acc
      (let [
        a (first li)
        b (second li)
        tl (rest li)
        morse (get chart a)
        new-acc (concat acc morse) 
        new-acc (match [a b]
                  [_   nil] new-acc
                  [" " _]   new-acc
                  [_   " "] new-acc
                  [_   _]   (concat new-acc ["charspace"]))
      ]
        (recur 
          new-acc
          tl)))))

(defn plain->code [plain]
  {:pre [(s/valid? ::plain-text-loose plain)]
   ;:post [(s/explain ::morse-code %)]
   }
  (let [plain-chars (clojure.string/split plain #"")
        strict-chars (filter avail-chars plain-chars)
        morse-chars (plain-chars->morse-code strict-chars)
  ]
    (prn morse-chars)
    morse-chars))
