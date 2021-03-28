(ns app.reg.events.initialize
  (:require
    [app.db :refer [default_db]]
    [day8.re-frame.tracing :refer-macros [fn-traced]]
    [cljs.core.match :refer [match]]
    [app.helpers.parse :refer [plain->code]]
    [re-frame.core :refer [reg-event-fx reg-event-db]]))

(defn route-data [route]
  (match (-> route :data :name name keyword)
         ;:lesson1 {:challenge {:plain "ATE" 
         ;                      :state "ready"
         ;                      :code (plain->code "ATE")}}
         _ {}))


(reg-event-db
  :initialize
  (fn-traced [_ [_ route]]
    (merge default_db (route-data route))))
