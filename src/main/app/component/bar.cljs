(ns app.component.bar
  (:require
    [re-frame.core :refer [dispatch subscribe]]
    ;[app.helpers.parser :refer [morse-text->flat-morse-text]]
    ;[app.helpers.parse :refer []]
    [garden.core :refer [css]]
    [defun.core :refer [fun]]
    [cljs.core.match :refer [match]]
  ))

(def ticker-width 1)
(defn width [n] (str (* n ticker-width) "rem"))


(defn styles []
  [:style
    (css [[:.outer-bar {:background-color "#AAA"
                        :height "3rem"
                        :display "flex"
                        :width "90vw"}]
          
          [:.input-bar {:display "block"
                        }]
          [:.outer-3unit {:border-right "solid #DDD thin"
                          :display "flex"
                          :height "100%"
                          :padding "0 0.25rem"
                          :width (width 2.75)}]
          [:.outer-unit { :border-right "solid #DDD thin"
                          :height "100%"
                          :width (width 1)}]
          [:.outer-unit7 { :border-right "solid #DDD thin"
                           :height "100%"
                           :width (width 7)}]
          [:.outer-dot { :border-right "solid #DDD thin"
                         :display "flex"
                         :justify-content "center"
                             :height "100%"
                             :width (width 1)}]
          [:.inner-unit { :display "flex"
                          :height "100%"
                          :flex-direction "column"
                          :width "33%"}]
          [:.inner-top {  :border-bottom "solid #000 0.25rem"
                             :height "50%"
                             :width "100%"}]
          [:.inner-bottom {:height "50%"
                              :width "100%"}]
          [:.dot-content {;:width "100%"
                          :width "0.25rem"
                          :height "0.25rem"
                          ;:border "solid #000 thick"
                          :margin-top "1.35rem"
                          :background-color "#000"
                          }]
         ])])


(defn dash [i]
  [:div.outer-3unit {:key i}
    [:div.inner-unit
      [:div.inner-top]
      [:div.inner-bottom]]
    [:div.inner-unit
      [:div.inner-top]
      [:div.inner-bottom]]
    [:div.inner-unit
      [:div.inner-top]
      [:div.inner-bottom]]])


(defn dot [i]
  [:div.outer-dot {:key i}
    [:div.dot-content]])


(defn charspace [i]
  [:div.outer-unit {:key i}])


(defn wordspace [i]
  [:div.outer-unit7 {:key i}])


(defn input-bar [morse-code opts]
  [:div.input-bar
    (styles) 
    [:div.outer-bar
      (map-indexed
        (fun
          ([i "."]         [:<> {:key i} [dot i]])
          ([i "-"]         [:<> {:key i} [dash i]])
          ([i "charspace"] [:<> {:key i} [charspace i]])
          ([i "wordspace"] [:<> {:key i} [wordspace i]]))
        morse-code)]])
