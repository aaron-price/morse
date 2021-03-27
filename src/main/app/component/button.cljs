(ns app.component.button
  (:require ;["tone" :as tone]
    [re-frame.core :refer [dispatch]]
  ))

(defn default-btn []
  [:div.button-parent
    [:button#btn {:on-mouse-down #(dispatch [:tap-down])
                  :on-mouse-up   #(dispatch [:tap-up])} 
     "TAP"]])
