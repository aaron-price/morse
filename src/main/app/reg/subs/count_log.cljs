(ns app.reg.subs.count-log
  (:require
    [re-frame.core :refer [reg-sub]]
  ))

(reg-sub :count-log (fn [db] (-> db :log count)))
