(ns app.helpers.predict)


(defn alternate-type [t]
  (if (= t :up) :down :up))


(defn predict-log [log]
  (let [t (-> log last :type alternate-type)
        entry {:type t :time (.now js/Date)}]
    (conj log entry)))
