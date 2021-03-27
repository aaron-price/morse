(ns app.views.goal
  (:require
    [re-frame.core :refer [subscribe]]
;    [app.views.code :refer [code-card]]
  ))
;
;
;(defn goal-text []
;  (let [text @(subscribe [:goal-text])]
;    [:div text]))
;
;(defn goal-code []
;  (let [code @(subscribe [:goal-code])]
;    [:<> (map
;           (fn [sym] [:div sym])
;           code)]))
;
;(defn goal-card []
;  (code-card @(subscribe [:goal-code])))
