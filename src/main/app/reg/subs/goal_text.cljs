(ns app.reg.subs.goal-text
  (:require
    [re-frame.core :refer [reg-sub]]))

(reg-sub :goal-text (fn [db _] (get db :goal-text)))

