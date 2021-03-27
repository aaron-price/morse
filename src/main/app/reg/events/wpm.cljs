(ns app.reg.events.wpm
  (:require
    [day8.re-frame.tracing :refer-macros [fn-traced]]
    [re-frame.core :refer [reg-event-fx]]))

; re-frame db :unit measures ms-per-unit.

(def ms-per-minute (* 60 1000)) ;60,000
(def units-per-word 50)

; 60000 / 50 = 1200 therefore: 
; if 1wpm, then 1200 ms per unit.
; if 2wpm, then  600 ms per unit
;

(defn current-wpm [ms-per-unit]
  (let [word-dur (* ms-per-unit units-per-word)
        words-per-minute (/ ms-per-minute word-dur)
        wpm (Math/round words-per-minute)]
    wpm))

(defn wpm->ms [wpm]
  (/
    ms-per-minute
    (* wpm units-per-word)))

(defn inc-wpm [unit-dur]
  (-> unit-dur
      current-wpm
      inc
      wpm->ms
      Math/round))


(defn dec-wpm [unit-dur]
  (-> unit-dur
      current-wpm
      dec
      wpm->ms
      Math/round))

(reg-event-fx 
  :dec-wpm
  (fn-traced [{db :db} _]
    {:db (update db :unit dec-wpm)}))

(reg-event-fx 
  :inc-wpm
  (fn-traced [{db :db} _]
    {:db (update db :unit inc-wpm)}))



