(ns app.helpers.parse-test
  (:require [cljs.test :refer [deftest is]]
            [app.helpers.parse :as p]))

(def unit 100)
(def c1 {:type :down :time 0})
(def c2 {:type :up   :time 100})
(def c3 {:type :down :time 200}) 
(def c4 {:type :up   :time 500})
(def c5 {:type :down :time 800})
(def c6 {:type :up   :time 1800})
(def c7 {:type :tick :time 2800})
(def log1 [c1 c2 c3 c4 c5 c6 c7])

(deftest durations
  (is (= 1 (p/get-duration 100 8000 8100)))
  (is (= 0 (p/get-duration 200 8000 8100)))
  (is (= 2 (p/get-duration 100 8000 8200)))
  (is (= 1 (p/get-duration 100 8000 8170))))

(deftest parse-log-pair
  (is (= (p/parse-log-pair unit c1 c2) "."))
  (is (= (p/parse-log-pair unit c2 c3) "symspace"))
  (is (= (p/parse-log-pair unit c3 c4) "-"))
  (is (= (p/parse-log-pair unit c4 c5) "charspace"))
  (is (= (p/parse-log-pair unit c5 c6) "-"))
  (is (= (p/parse-log-pair unit c6 c7) "wordspace")))

(deftest parse-log
  ; Automatically removes the redundant "symspace"
  (is (= ["." "-" "charspace" "-" "wordspace"] 
         (p/parse-log unit log1))))


;
(deftest parse-spaces
  (is (= (p/parse-spaces ["." "-" "charspace" "-" "wordspace"])
         [["." "-"] ["-"] ["wordspace"]]))  
  (is (= (p/parse-spaces ["." "-" "charspace" "-"])
         [["." "-"] ["-"]]))
)

(deftest spaced-code->spaced-plain
  (is (= (p/spaced-code->spaced-plain [ ["." "-"] ["-"] ]) ["A" "T"]))
  (is (= (p/spaced-code->spaced-plain [ ["." "-"] ["-"] ["wordspace"] ["."]]) ["A" "T" " " "E"])))

(deftest log->plain
  (is (= (p/log->plain unit log1)
         "AT ")))

(deftest plain->code
  (is (= (p/plain->code "AT E.")
         ["." "-" "charspace" "-" "wordspace" "."])))

(deftest code->plain
  (is (= (p/code->plain ["." "-" "charspace" "-" "wordspace" "."])
         "AT E")))

(deftest plain-counting
  (is (= (p/code->counted-plain ["." "-" "charspace" "-" "wordspace" "."])
         [
           {:count 4 :char "A" :num-syms 2}
           {:count 3 :char "T" :num-syms 1}
           {:count 7 :char " " :num-syms 1}
           {:count 1 :char "E" :num-syms 1}
         ])))
