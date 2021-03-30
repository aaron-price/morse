(ns app.reg.events.challenge-test
  (:require [cljs.test :refer [deftest is]]
            [app.reg.events.challenge :as c]))

(def spec1 {:plain "A" :hide-plain? true})
(def spec2 {:code ["."]})

(deftest normalize-specs
  (is (= (c/normalize-specs [spec1 spec2])
         [
          {:plain "A" :hide-plain? true 
           :hide-log-plain? false :hide-code? false 
           :hide-log-code? false :note ""
           :wpm nil :code ["." "-"]}
          {:plain "E" :hide-plain? false :note ""
           :hide-log-plain? false :hide-log-code? false
           :hide-code? false :wpm nil :code ["."]}
         ])))

(def dbc1 {:index 0 
           :curr-code ["."] 
           :state :running
           :challenge-specs [{:code ["."] :plain "E" :hide-plain? false :hide-code? false :wpm nil}
                             {:code ["." "-"] :plain "A" :hide-plain? false :hide-code? false :wpm nil}]})

(def dbc2 {:index 1 
           :curr-code ["." "-"] 
           :state :running
           :challenge-specs [{:code ["."] :plain "E" :hide-plain? false :hide-code? false :wpm nil}
                             {:code ["." "-"] :plain "A" :hide-plain? false :hide-code? false :wpm nil}]})
(def dbcnil {:index 1
           :curr-code [] 
           :state :completed
           :challenge-specs [{:code ["."] :plain "E" :hide-plain? false :hide-code? false :wpm nil}
                             {:code ["." "-"] :plain "A" :hide-plain? false :hide-code? false :wpm nil}]})

(deftest next-challenge
  (is (= (c/next-challenge dbc1) dbc2))
  (is (= (c/next-challenge dbc2) dbcnil))
)

(deftest complete?
  (is (= false (c/challenge-complete? dbc1 ["-"])))
  (is (= true (c/challenge-complete? dbc1 ["."]))))

(deftest fail?
  (is (= false (c/challenge-failed? dbc2 ["."])))
  (is (= true (c/challenge-failed? dbc2 ["-"])))
  (is (= true (c/challenge-failed? dbc2 ["-" "."])))
  (is (= false (c/challenge-failed? dbc2 ["." "-"])))
)
