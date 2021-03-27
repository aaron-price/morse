(ns app.helpers.predict-test
  (:require [cljs.test :refer [deftest is]]
            [app.helpers.parser :refer []]
            [app.helpers.predict :refer [predict-log]]))

(def log1 [])
(def log2 [{:type :down, :time 100}])
(def log3 [{:type :down, :time 100}
           {:type :up,   :time 200}])

;(deftest predictions
;  ;(is (= " " (predict log1 0)))
;  ;(is (= "." (predict log2 1)))
;  ;(is (= "-" (predict log2 3)))
;  ;(is (= " " (predict log3 3)))
;  (is (= [] (predict-log log3 3)))
;)

