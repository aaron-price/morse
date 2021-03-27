(ns app.reg.subs.log-morse-text
  (:require
    [app.helpers.parse :refer [log->morse-text]]
    [re-frame.core :refer [reg-sub]]))


(reg-sub :log-morse-text (fn [{:keys [log unit]} _]
                (log->morse-text unit log)))
