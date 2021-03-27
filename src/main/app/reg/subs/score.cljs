(ns app.reg.subs.score
  (:require
    [re-frame.core :refer [reg-sub]]))

(reg-sub :score (fn [db _] (get db :score)))
