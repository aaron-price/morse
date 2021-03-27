(ns app.ticker
  (:require
    [re-frame.core :refer [dispatch subscribe reg-event-db reg-event-fx]]
    [cljs.core.async :refer [chan >! <! timeout]]
    [cljs.core.async :refer-macros [go]]
    ;[app.helpers.parser :refer [log->morse-text]]
  ))

;(def ticker-chan (chan))
;(def ticker-online (atom true))
;(defn start-ticker [] (reset! ticker-online true))
;(defn stop-ticker [] (reset! ticker-online false))

;(defn tick []
;  (let [online (atom true)
;        c (chan)]
;    (go (while @online
;          (>! c "Tick")
;          (prn (<! c))
;          (dispatch [:inc-score])
;          (timeout 250)))))
;
;(comment
;(tick)
;)
;
;; Do not put the ticker in re-frame.
;; Although it does work, it breaks re-frame-10x for unknown reasons.
;; Instead I think the 'correct' way is to have js/window manage it
;; and every tick might dispatch a tick, passing in its data.
;
;
;(defn update-morse-text [{:keys [log unit] :as db}]
;
;  (let [tick-entry {:time (.now js/Date) ;(+ unit (.now js/Date))
;                    :type :tick}
;        tick-log (conj log tick-entry)
;        new-text (log->morse-text unit tick-log)]
;    (assoc db :morse-text-log new-text)))
;
;(defn grr []
;  (prn "FUCKITY FUCK"))
;
;(defn start-ticker []
;  (. js/window (spawn_ticker #(prn "DO IT NOW") 500)))
;  ;(. js/window (spawn_ticker #(dispatch [:inc-score]) 500)))
;(defn stop-ticker []
;  (. js/window clear_ticker))
;;
;;(reg-event-fx
;;  :start-ticker
;;  (fn []
;;    {:dispatch-interval {:dispatch [:tick]
;;                         :id :dispatch-ticker
;;                         :ms 30}}))
;;(reg-event-db
;;  :start-ticker
;;  (fn [{db :db} _] ;{:keys [unit ticker] :as db} _]
;;    (if (nil? (get-in db [:ticker :interval]))
;;      (let [interval (js/setInterval #(dispatch [:tick]) 30)
;;            db (assoc-in db [:ticker :interval] (:interval db))]
;;        {:db db})
;;      {:db db})))
;
;
;(reg-event-fx
;  :stop-ticker
;  (fn []
;    {:clear-interval {:id :dispatch-ticker}}))
;
;;(reg-event-db
;;  :stop-ticker
;;  ;(fn [{:keys [ticker] :as db} _]
;;  (fn [{db :db} _]
;;    (let [interval (get-in db [:ticker :interval])]
;;      (if-not (nil? interval) (js/clearInterval interval))
;;      {:db (assoc-in db [:ticker interval] nil)})))
;
;
;(defn reset-stale [db] (assoc db :tick-stale 0))
;(defn inc-stale [{:keys [tick-stale] :as db}] 
;  (assoc db :tick-stale 0))
;
;(defn inc-tick [db]
;  (let [tick-count (or (:tick-count db) 0)
;        new-count (inc tick-count)
;        stale-count (or (:tick-stale db) 0)
;        new-stale (inc stale-count)]
;    (-> db
;        (assoc :tick-count new-count)
;        (assoc :tick-stale new-stale))))
;
;(reg-event-fx 
;  :tick
;  (fn [{db :db} _]
;    {:db (-> db
;             update-morse-text
;             inc-tick)}))
