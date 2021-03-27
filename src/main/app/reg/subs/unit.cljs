(ns app.reg.subs.unit
  (:require
    [re-frame.core :refer [reg-sub]]))

(reg-sub :unit (fn [db _] (get db :unit)))


