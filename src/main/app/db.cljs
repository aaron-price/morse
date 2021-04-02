(ns app.db
  (:require
    [cljs.core.match :refer [match]]
    [reagent.core :as r]))


(def chart
  {" " ["wordspace"]
   "A" ["." "-"]
   "B" ["-" "." "." "."]
   "C" ["-" "." "-" "."]
   "D" ["-" "." "."]
   "E" ["."]
   "F" ["." "." "-" "."]
   "G" ["-" "-" "."]
   "H" ["." "." "." "."]
   "I" ["." "."]
   "J" ["." "-" "-" "-"]
   "K" ["-" "." "-"]
   "L" ["." "-" "." "."]
   "M" ["-" "-"]
   "N" ["-" "."]
   "O" ["-" "-" "-"]
   "P" ["." "-" "-" "."]
   "Q" ["-" "-" "." "-"]
   "R" ["." "-" "."]
   "S" ["." "." "."]
   "T" ["-"]
   "U" ["." "." "-"]
   "V" ["." "." "." "-"]
   "W" ["." "-" "-"]
   "X" ["-" "." "." "-"]
   "Y" ["-" "." "-" "-"]
   "Z" ["-" "-" "." "."]
  })

; @TODO deprecated! Remove when safe.
(def sym-chart
  (reduce
    (fn [acc [k v]]
      (match k
             " " (assoc acc k [:space])
             :else (assoc acc k (vec (map keyword v)))))
    {}
    chart))

(def ticker {:time (.now js/Date)
             :count 0})

(def default_db 
  {:log []
   :unit 200
   :score 0
   :btn-type :click
   :challenge {:text "" :curr-code [] :state :waiting :index 0}
   :input-text ""
   :ticker ticker})
