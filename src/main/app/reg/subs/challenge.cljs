(ns app.reg.subs.challenge
  (:require
    [re-frame.core :refer [reg-sub]]))

(reg-sub :challenge (fn [db [_ subfield]] 
                      (if subfield
                        (get-in db [:challenge subfield])
                        (:challenge db))))


