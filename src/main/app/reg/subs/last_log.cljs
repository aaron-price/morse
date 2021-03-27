(ns app.reg.subs.last-log
  (:require
    [re-frame.core :refer [reg-sub]]))

(reg-sub :last-log (fn [{:keys [log]} _]
                (last log)))
