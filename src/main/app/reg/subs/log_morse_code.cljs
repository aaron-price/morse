(ns app.reg.subs.log-morse-code
  (:require
    [app.helpers.parse :refer [parse-log]]
    [cljs.core.match :refer [match]]
    [app.helpers.predict :refer [predict-log]]
    [re-frame.core :refer [reg-sub]]))


(reg-sub 
  :log->morse-code 
  (fn [{:keys [log unit]} _]
    (parse-log unit log)))

(reg-sub 
  :predict->morse-code 
  (fn [{:keys [log unit]} _]
    (->> log
         predict-log
         (parse-log unit))))

(defn count-code [code]
  (reduce
    (fn [acc sym]
      (+ acc
         (match sym
                "." 1
                "-" 3
                "charspace" 1
                "wordspace" 7)))
    0
    code))

(defn size-offset [num-units]
  (cond
    (< num-units 15) 0
    :else (- num-units 15)))

(reg-sub
  :log-size
  (fn [{:keys [unit log]} _]
    (let [size (->> log
                    predict-log
                    (parse-log unit)
                    count-code
                    size-offset)]
      size)))
