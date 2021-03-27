(ns app.reg.events.text-input
  (:require
    [day8.re-frame.tracing :refer-macros [fn-traced]]
    [re-frame.core :refer [reg-event-db]]
  ))

(reg-event-db
  :text-input
  (fn-traced [db [_ text]]
    (assoc db :text-input text)))
