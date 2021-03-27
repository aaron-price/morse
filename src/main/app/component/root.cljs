(ns app.component.root
  (:require
    ;[app.component.learn.chapter1 :as chapter1] 
    [app.component.sandbox :as sandbox] 
  ))

(defn root []
  [:div "Welcome"
    [:div [:a {:href "/learn"} "Learn"]]
    [:div [:a {:href "/listen"} "Free Listen"]]
    [:div [:a {:href "/tap"} "Free Tap"]]
    [:div [:a {:href "/challenges"} "Challenges"]]])

;(defn learn []
;  [chapter1/page])

(defn listen []
  [:div "Hey! Listen!"])

(defn tap []
  [:div "Tappa tappa tappa..."])

(defn challenges []
  [:div "Challenger"])

(defn sandbox []
  [sandbox/page])
