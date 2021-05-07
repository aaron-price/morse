(ns app.challenges
  (:require
    [cljs.spec.alpha :as s]
    [app.words :refer [allowed-words]]
  ))

;(prn (words/allowed-words #{"A" "T" "O" "E"}))

(def all-allowed-chars 
  #{"A" "B" "C" "D" "E" "F" "G" "H" "I" "J" "K" "L"
    "M" "N" "O" "P" "Q" "R" "S" "T" "U" "V" "W" "X"
    "Y" "Z" "1" "2" "3" "4" "5" "6" "7" "8" "9" "0"
    " "})

(s/def ::allowed-chars all-allowed-chars)
(s/def ::allowed-strings-subset #(clojure.set/subset? % all-allowed-chars))

(s/def ::note string?)
(s/def ::plain string?)
(s/def ::hide-log-code? boolean?)
(s/def ::hide-code? boolean?)
(s/def ::hide-log-plain? boolean?)
(s/def ::hide-plain? boolean?)

(s/def ::challenge-spec-loose 
  (s/keys :opt-un [::note ::plain ::hide-code? ::hide-log-code? 
                   ::hide-plain? ::hide-log-plain?]))

(s/def ::challenge-spec 
  (s/keys :req-un [::note ::plain ::hide-code? ::hide-log-code? 
                   ::hide-plain? ::hide-log-plain?]))


(defn rand-str [n str-set] 
  {:pre [(s/valid? integer? n) (s/valid? ::allowed-strings-subset str-set)]
   :post [(s/valid? string? %)]}
  (let [strings (vec str-set)]
    (clojure.string/join 
      (repeatedly n 
        #(rand-nth strings)))))


(defn rand-words [n str-set] 
  {:pre [(s/valid? integer? n) (s/valid? ::allowed-strings-subset str-set)]
   :post [(s/valid? string? %)]}
  (let [strings (vec (allowed-words str-set))]
    (clojure.string/join " " 
      (repeatedly n 
        #(rand-nth strings)))))


(defn generate-challenge [loose-spec allowed-chars]
  {:pre [(s/valid? ::challenge-spec-loose loose-spec)
         (s/valid? ::allowed-strings-subset allowed-chars)]
   :post [(s/valid? ::challenge-spec %)]}

  (let [
    {:keys [plain note hide-code? hide-log-code? hide-plain? hide-log-plain?]
     :or {note ""
          plain (rand-words 7 allowed-chars)
          hide-code? false
          hide-log-code? false
          hide-plain? false
          hide-log-plain? false}} loose-spec]

    {:note note
     :plain plain
     :hide-code? hide-code?
     :hide-plain? hide-plain?
     :hide-log-plain? hide-log-plain?
     :hide-log-code? hide-log-code?}))

(defn challenge-group [allowed-chars]
  #{(generate-challenge {} allowed-chars)
    (generate-challenge {:hide-code? true} allowed-chars)
    (generate-challenge {:hide-code? true 
                         :hide-log-code? true} allowed-chars)})
