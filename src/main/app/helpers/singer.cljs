(ns app.helpers.singer
  (:require
    [cljs.core.match :refer [match]]
  ))


(defn full-notes [notes]
  "Remove duplicate rests, add persistant time
  [1 :play] [1 :rest] [2 :rest]
  => [{:t :play :d 1 :start 0}
      {:t :rest :d 3 :start 1}]"
  (get
    (reduce
      (fn [{:keys [start notes]} [dur t]]
          {:start (+ start dur)
           :notes (conj notes [dur t start])})
      {:start 0 :notes []}
      notes)
    :notes))


(defn make-notes [flat-morse-text]
  (reduce
    (fn [acc t]
      (match t
             "." (-> acc (conj [1 :play] [1 :rest]))
             "-" (-> acc (conj [3 :play] [1 :rest]))
             " " (-> acc (conj [2 :rest]))))
    []
    flat-morse-text))


(defn flatten-morse-text [morse-text]
  (reduce 
    (fn [acc char-vec]
      (-> acc
        (concat char-vec)
        (concat [" "])))
    []
    morse-text))


(defn sing-notes
  [unit morse-text]
  (let [notes (-> morse-text
                  flatten-morse-text
                  make-notes
                  full-notes)]
  (doseq [[dur typ start] notes]
    (match [dur typ]
           [1 :play] (.play_dit js/window start unit)
           [3 :play] (.play_dah js/window start unit)
           [_ _]     :noop))))
