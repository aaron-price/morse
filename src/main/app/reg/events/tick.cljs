(ns app.reg.events.tick
  (:require
    [day8.re-frame.tracing :refer-macros [fn-traced]]
    [re-frame.core :refer [reg-event-fx reg-event-db]]))


(defn blank-ticker []
  {:time (.now js/Date)
   :count 0})


(defn next-ticker [{c :count}]
  {:count (inc c)
   :time (.now js/Date)})


(reg-event-fx
  :tick
  (fn-traced 
    [cofx _]
    "So it turns out you don't really have to do much here.
     As long as the db is refreshing at a regular interval,
       the predictive text will work."
    (let [prev-ticker (get-in cofx [:db :ticker])
          ticker (next-ticker prev-ticker)
          prev-db (:db cofx)
          db (assoc prev-db :ticker ticker)]

      {:db db})))


(reg-event-fx
  :start-ticker
  (fn-traced 
    [cofx _]
    (let [ticker (blank-ticker)
          db (assoc (:db cofx) :ticker ticker)]
    {:db db
     :dispatch-interval {:dispatch [:tick]
                         :id :ticker
                         :ms (get-in cofx [:db :unit])}})))


(reg-event-fx
  :stop-ticker
  (fn-traced 
    [cofx _]
    {:clear-interval {:id :ticker}}))
