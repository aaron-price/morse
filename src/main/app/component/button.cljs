(ns app.component.button
  (:require ;["tone" :as tone]
    [re-frame.core :refer [dispatch]]
  ))


(defn default-btn []
  [:div.button-parent
    [:button#btn.basic 
      {:on-pointer-down (fn [e]
                          (.preventDefault e)
                          (dispatch [:tap-down]))
       :on-pointer-up   (fn [e]
                          (.preventDefault e)
                          (dispatch [:tap-up]))} 
     "TAP HERE"]])

(defn reset-log []
  [:button {:on-pointer-up (fn [e]
                             (.preventDefault e)
                             (dispatch [:reset-log]))} "Reset"])
