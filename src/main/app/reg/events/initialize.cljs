(ns app.reg.events.initialize
  (:require
    [app.db :refer [default_db]]
    [day8.re-frame.tracing :refer-macros [fn-traced]]
    [re-frame.core :refer [reg-event-fx reg-event-db]]))


(reg-event-db
  :initialize
  (fn-traced [_ _]
    default_db))
