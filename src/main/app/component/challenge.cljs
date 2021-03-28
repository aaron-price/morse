(ns app.component.challenge
  (:require
    [cljs.spec.alpha :as s]
    [re-frame.core :refer [subscribe dispatch-sync dispatch]]
    [app.helpers.parse :refer [parse-spaces count-code]]
    [app.helpers.interop :refer [get-node]]
    [app.component.bar :refer [morse-code-bar]]
    [app.component.button :refer [default-btn]]
  ))


(defn render-challenge [spec chal-code log-code]
  [:<>
    [:h3 (:note spec)]
    [morse-code-bar chal-code spec]
    [:hr]
    [default-btn]
    [morse-code-bar log-code (assoc spec :id "log-bar")]
    ])


(defn render-victory [spec chal-code log-code]
  [:div "Good job, you did it!"])


(defn render-fail [spec chal-code log-code]
  [:div "Hmm that's not quite right."
    [morse-code-bar chal-code spec]
    [:hr]
    [:button {:on-click #(dispatch [:reset-challenge])} "Try Again"]
    [morse-code-bar log-code {:failed true}]])

(defn safe-nth [coll idx]
  (if (<= (count coll) idx)
    (nth coll (dec idx))
    (nth coll idx)))


(defn challenge-master [abnormal-specs]
  (dispatch-sync [:init-challenges abnormal-specs])
  (fn []
    (let [log-code @(subscribe [:predict->morse-code])
          db-challenge @(subscribe [:challenge])
          {:keys [state index challenge-specs curr-code]} db-challenge
          spec (safe-nth challenge-specs index)]
      (cond
        (= state :completed) [render-victory spec curr-code log-code]
        (= state :failed) [render-fail spec curr-code log-code]
        :else [render-challenge spec curr-code log-code]))))
