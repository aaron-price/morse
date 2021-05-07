(ns app.component.page.learn.lesson3
  (:require
    [app.component.wpm-controller :refer [wpm-controller]]
    [app.component.challenge :refer [challenge-master]]
    [app.component.button :refer [reset-log]]
    [app.challenges :refer [generate-challenge]]
  ))

(defn page []
  [:div
    [:h2 "Lesson 3"]
;    [reset-log]
    [wpm-controller]
    [challenge-master
      [
       (generate-challenge {:note "Next we learn 'M'"} 
                           #{" " "A" "T" "E" "N" "M"})
       
       (generate-challenge {:hide-code? true} 
                           #{" " "A" "T" "E" "N" "M"})
       
       (generate-challenge {:hide-code? true :hide-log-code? true} 
                           #{" " "A" "T" "E" "N" "M"})
       
      ]]
    ])


