(ns app.reg.events.challenge
  (:require
    [day8.re-frame.tracing :refer-macros [fn-traced]]
    [re-frame.core :refer [reg-event-fx]]
    [app.helpers.parse :refer [plain->code]]
  ))

(reg-event-fx
  :add-challenge
  (fn-traced 
    [{db :db} [_ txt]]
    {:db (assoc db :challenge
                {:plain txt
                 :morse-code (plain->code txt)
                 })}))
