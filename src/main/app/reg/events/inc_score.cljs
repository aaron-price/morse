(ns app.reg.events.inc-score
  (:require
    [day8.re-frame.tracing :refer-macros [fn-traced]]
    [re-frame.core :refer [reg-event-fx]]))

(reg-event-fx 
  :inc-score
  (fn-traced [{db :db} _]
    {:db (update-in db [:score] inc)}))
