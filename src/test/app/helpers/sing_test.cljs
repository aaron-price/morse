(ns app.helpers.sing-test
  (:require [cljs.test :refer [deftest is]]
            [app.helpers.singer :as sg]
  ))

(def mt1 '(["." "-" "."] ["."]))
(def flat-mt ["." "-" "." " " "." " "])

(deftest predictions
  (is (= (sg/flatten-morse-text mt1) flat-mt))
  (is (= (sg/make-notes flat-mt) [
                                  [1 :play]
                                  [1 :rest]
                                  [3 :play]
                                  [1 :rest]
                                  [1 :play]
                                  [1 :rest]
                                  [2 :rest]
                                  [1 :play]
                                  [1 :rest]
                                  [2 :rest]
                                  ]))
  ;(is (= ["." "-" " " "."] (make-notes '(["." "-"] ["."]))))
;  ;(is (= " " (predict log1 0)))
;  ;(is (= "." (predict log2 1)))
;  ;(is (= "-" (predict log2 3)))
;  ;(is (= " " (predict log3 3)))
;  (is (= [] (predict-log log3 3)))
)


