(ns app.component.sandbox
  (:require
    [app.helpers.parse :refer [count-code]]
    [app.component.bar :refer [morse-code-bar]]
    [app.component.button :refer [default-btn]]
    [app.component.wpm-controller :refer [wpm-controller]]
    [app.component.text-form :refer [text-input text-output]]
    [re-frame.core :refer [dispatch subscribe]]
  ))


(def morse-code ["." "charspace" "." "-" "charspace" "-" "wordspace" "." "-" "charspace" "-" "wordspace" "." "-" "charspace" "-" "wordspace" "." "-" "charspace" "-" "wordspace" ])

(defn page []
  (let [mc @(subscribe [:predict->morse-code])
        t (count-code mc)
        slice (if (< t 15) 
                0
                (- t 15)) 
       ]
  [:div
    [wpm-controller]
    [morse-code-bar morse-code {:slice slice}]
    [default-btn]
    [morse-code-bar mc {:slice slice}]
  ]))
