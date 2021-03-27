(ns app.reg.events.put-log
  (:require
    [day8.re-frame.tracing :refer-macros [fn-traced]]
    [re-frame.core :refer [reg-event-fx reg-event-db]]))


(reg-event-db
  :put-log
  (fn-traced [db [_ entry]]
    (update db :log #(conj % entry))))
