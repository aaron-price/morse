(ns app.component.wpm-controller
  (:require
    [re-frame.core :refer [dispatch subscribe]]
    [app.reg.events.wpm :refer [current-wpm]]
  ))


(defn wpm-controller []
  ; disabled buttons when the log has started
  ; Because parsing is based on speed, it would change the code you already entered.
  ; @TODO maybe someday make it so you can change wpm on the fly. 
  (let [disabled? (not (empty? @(subscribe [:log->morse-code])))
        wpm (current-wpm @(subscribe [:unit]))
        inc-evt #(dispatch [:inc-wpm])
        dec-evt #(dispatch [:dec-wpm])]
      [:div.wpm.wrapper
        [:div.text "WPM: " wpm]
        [:button.inc {:disabled disabled? :on-click (fn [e]
                                                      (.preventDefault e)
                                                      (inc-evt))} "+"]
        [:button.dec {:disabled disabled? :on-click (fn [e]
                                                      (.preventDefault e)
                                                      (dec-evt))} "-"]]))
