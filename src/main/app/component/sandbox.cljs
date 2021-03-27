(ns app.component.sandbox
  (:require
    ;[app.component.bar :refer [input-bar morse-code-bar]]
    [app.component.bar :refer [morse-code-bar]]
    [app.component.button :refer [default-btn]]
    [app.component.speedform :refer [speedform]]
    [app.component.text-form :refer [text-input text-output]]
    [re-frame.core :refer [dispatch subscribe]]
  ))

(defn new-challenge-btn []
  [:button {:on-click #(dispatch [:add-challenge "HELLO WORLD"])}
    "New Challenge"])

(def morse-code ["." "charspace" "." "-" "charspace" "-" "wordspace" "." "-" "charspace" "-" "wordspace" "." "-" "charspace" "-" "wordspace" "." "-" "charspace" "-" "wordspace" ])

(defn page []
  (prn "mc lots" @(subscribe [:challenge :morse-code]))
  [:div "SANDBOX" @(subscribe [:unit])
    [morse-code-bar morse-code {:slice 0}]
    ;[speedform]
    [default-btn]
    ;[input-bar @(subscribe [:predict->morse-code]) {}]
    ;[:hr]
    ;[:div
    ;  [text-input]
    ;  [text-output]
    ;]

    [:hr]
    [:h1 "CHALLENGE"]
    [new-challenge-btn]
    [:h3 @(subscribe [:challenge :plain])]
    ;[input-bar @(subscribe [:challenge :morse-code]) {}]
  ])
