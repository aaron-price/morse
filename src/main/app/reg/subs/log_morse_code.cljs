(ns app.reg.subs.log-morse-code
  (:require
    [app.helpers.parse :refer [parse-log]]
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
