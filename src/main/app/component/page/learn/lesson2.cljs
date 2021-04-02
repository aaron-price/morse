(ns app.component.page.learn.lesson1
  (:require
    [app.component.wpm-controller :refer [wpm-controller]]
    [app.component.challenge :refer [challenge-master]]
    [app.component.button :refer [reset-log]]
  ))

(defn page []
  [:div
    [:h2 "Lesson 1"]
    [reset-log]
    [wpm-controller]
    [challenge-master
      [{:plain "A ET E T ATE AET TEA" 
        :note "Let's first figure out timing. Pay attention to the background for a hint. And you can adjust the WPM to make it run faster or slower. Notice how 'ET' is identical to 'A', so it all comes down to proper timing."}
       {:plain "E T EEE TT TEE" :hide-code? true
        :note "Ok smarty pants, can you tap 'E' and 'T' without help? (E . T -)"}
       
       {:plain "A T E ATE TEA" :hide-code? false
        :note "Quick refresher with 'A' before we start doing that one blind, too (A .-)"}
       
       {:plain "A T E ATE TEA" :hide-code? true :hide-log-code? true
        :note "Somebody ATE the hints! We're going in blind. You can do this!"}
      ]]
    ])
