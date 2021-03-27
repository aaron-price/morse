(ns app.reg.subs.goal-code
  (:require
    [re-frame.core :refer [reg-sub]]))

(reg-sub :goal-code (fn [db _] (get db :goal-code)))


