(ns app.reg.events.reset-log
  (:require
    [day8.re-frame.tracing :refer-macros [fn-traced]]
    [re-frame.core :refer [reg-event-fx reg-event-db]]))


(reg-event-db
  :reset-log
  (fn-traced [db [_ entry]]
    (assoc db :log [])))
