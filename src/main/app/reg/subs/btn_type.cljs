(ns app.reg.subs.btn-type
  (:require
    [re-frame.core :refer [reg-sub]]))

(reg-sub :btn-type (fn [db _] (:btn-type db)))


