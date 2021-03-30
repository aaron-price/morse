(ns app.component.button
  (:require ;["tone" :as tone]
    [cljs.core.match :refer [match]]
    [re-frame.core :refer [dispatch subscribe]]
  ))

(defn handle-slide [v]
  (cond 
    (= v 0) (dispatch [:tap-down])
    (= v 1) (dispatch [:tap-up])))


(defn slider-btn []
  [:div.rangeslider-wrap
    [:input {:type "range"
             :min "0"
             :max "1"
             :step "1"
             :on-change #(handle-slide (-> % 
                                           .-target
                                           .-value
                                           int))
             }]])
;  [:div.button-parent "Drag up and down"
;    [:input.slider {:type "range" 
;             :min "0" :max "1" :step "1"
;             :on-change #(handle-slide (-> % 
;                                           .-target 
;                                           .-value 
;                                           int))}]]
;)

(defn default-btn []
  [:div.button-parent "Tap Below"
    [:div#btn.basic 
      {:on-pointer-down (fn [e]
                          (.preventDefault e)
                          (dispatch [:tap-down]))
       :on-pointer-up   (fn [e]
                          (.preventDefault e)
                          (dispatch [:tap-up]))} 
     ]])

(defn reset-log []
  [:button {:on-pointer-up (fn [e]
                             (.preventDefault e)
                             (dispatch [:reset-log]))} "Reset"])

(defn render-btn []
  (match @(subscribe [:btn-type])
         :slider [slider-btn]
         :click  [default-btn]))
