(ns app.component.button
  (:require ;["tone" :as tone]
    [re-frame.core :refer [dispatch]]
  ))

(defn default-btn []
  [:div.button-parent
    [:button#btn.basic 
      {:on-pointer-down #(dispatch [:tap-down])
       :on-pointer-up   #(dispatch [:tap-up])} 
     "TAP HERE"]])

(defn reset-log []
  [:button {:on-pointer-up #(dispatch [:reset-log])} "Reset"])
