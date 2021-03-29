(ns app.component.root
  (:require
    [app.component.sandbox :as sandbox] 
  ))

(defn root []
  [:div "Welcome. This is a work in progress."
    [:div [:a {:href "/learn/lesson1"} "Lesson 1: Getting started"]]
  ])
;
;;(defn learn []
;;  [chapter1/page])
;
;(defn listen []
;  [:div "Hey! Listen!"])
;
;(defn tap []
;  [:div "Tappa tappa tappa..."])
;
;(defn challenges []
;  [:div "Challenger"])
;
;(defn sandbox []
;  [sandbox/page])
