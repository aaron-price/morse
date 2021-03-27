(ns app.views.time-bar
  (:require
    [garden.core :refer [css]]
  ))

(defn styles [timelog]
  [:style
   (css [[:.time-bar {:max-width (str (count timelog) "rem")
                      :min-width "1rem"
                      :background-color "#AAA"
                      :border "solid #DDD thin"
                      :height "1rem"}]])])

(defn time-bar [log]
  (let [
    
  ]
  (prn "timelog" log)
  [:<>
    (styles [2 3 23  41 41 4])
    [:div.time-bar "TIMMMME"]]))
