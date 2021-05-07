(ns app.reg.events.whitelist
  (:require
    [cljs.spec.alpha :as s]
    [day8.re-frame.tracing :refer-macros [fn-traced]]
    [re-frame.core :refer [reg-event-fx reg-event-db]]
  ))


(defn add-to-whitelist [db character]
  (update db :whitelist (fn [old] (conj old character))))

(reg-event-db
  :add-to-whitelist
  (fn-traced
    [db [_ character]]
    (add-to-whitelist db character)))


(defn remove-from-whitelist [db character]
  (update db :whitelist 
            (fn [old] 
              (clojure.set/difference old #{character}))))

(reg-event-db
  :remove-from-whitelist
  (fn-traced
    [db [_ character]]
    (remove-from-whitelist db character)))


(reg-event-db
  :set-whitelist
  (fn-traced
    [db [_ whitelist]]
    (assoc db :whitelist whitelist)))
