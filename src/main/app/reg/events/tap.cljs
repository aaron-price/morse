(ns app.reg.events.tap
  (:require
    [day8.re-frame.tracing :refer-macros [fn-traced]]
    [re-frame.core :refer [reg-event-fx]]
  ))

; This is for the tap button, the star of the show.

(defn entry [t]
  {:type t :time (.now js/Date)})

(reg-event-fx
  :tap-down
  (fn-traced [cofx _]
    (. js/window play_tone)
    {:fx [[:dispatch [:put-log (entry :down)]]
          [:dispatch [:start-ticker]]
         ]}))


(reg-event-fx
  :tap-up
  (fn-traced [cofx _]
    (. js/window stop_tone)
    {:fx [[:dispatch [:put-log (entry :up)]]
          [:dispatch [:start-ticker]]
          [:dispatch [:check-work]]
         ]}))
