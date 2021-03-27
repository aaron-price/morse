(ns app.reg.subs.predictive-log
  (:require
    [app.helpers.predict :refer [predict-log]]
    [app.helpers.parser :refer [log->morse-text]]
    [re-frame.core :refer [reg-sub]]))

(reg-sub :predictive-log 
         (fn [{:keys [log unit]} _]
           (->> log
                predict-log
                (log->morse-text unit))))

