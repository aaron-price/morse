(ns app.component.speedform
  (:require
    [re-frame.core :refer [dispatch subscribe]]
    [app.reg.events.wpm :refer [current-wpm]]
  ))

(defn speedform []
  [:div {:style {:display "flex" :width "100%"}} 
    [:div "WPM: " (current-wpm @(subscribe [:unit]))]
    [:button {:on-click #(dispatch [:inc-wpm])} "+"]
    [:button {:on-click #(dispatch [:dec-wpm])} "-"]
  ])
