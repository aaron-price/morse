(ns app.component.page.learn
  (:require
    [app.component.wpm-controller :refer [wpm-controller]]
    [app.component.challenge :refer [challenge-master]]
    [app.component.button :refer [reset-log]]
    [app.challenges :refer [challenge-group]]
    [re-frame.core :refer [subscribe]]
  ))

(defn page []
  [:div
    [wpm-controller]
    [challenge-master
      (challenge-group @(subscribe [:whitelist]))]])

