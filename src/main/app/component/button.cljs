(ns app.component.button
  (:require ;["tone" :as tone]
    [re-frame.core :refer [dispatch]]
  ))

(defn default-btn []
  [:div.button-parent
    [:button#btn.basic 
      {:on-mouse-down #(dispatch [:tap-down])
       :on-mouse-up   #(dispatch [:tap-up])} 
     "TAP HERE"]])

(defn reset-log []
  [:button {:on-mouse-up #(dispatch [:reset-log])} "Reset"])
