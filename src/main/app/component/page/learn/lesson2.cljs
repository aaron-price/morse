(ns app.component.page.learn.lesson2
  (:require
    [app.component.wpm-controller :refer [wpm-controller]]
    [app.component.challenge :refer [challenge-master]]
    [app.component.button :refer [reset-log]]
  ))

(defn page []
  [:div
    [:h2 "Lesson 2"]
;    [reset-log]
    [wpm-controller]
    [challenge-master
      [{:plain "N NEAT TEN ANT" 
        :note "This one was brought to you by the letter 'N'."}

       {:plain "NNN AN NET" :hide-code? true
        :note "You can do it blind, it's not that hard."}
       
      ]]
    ])
