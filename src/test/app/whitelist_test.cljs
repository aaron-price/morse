(ns app.whitelist-test
  (:require [cljs.test :refer [deftest is]]
            [app.reg.events.whitelist :as wl]
  ))


(deftest whitelist
  (let [
    db {:whitelist #{" " "A"}}
    db2 (wl/add-to-whitelist db "B")
    db3 (wl/remove-from-whitelist db2 "B")
  ]
    (is (= (:whitelist db2) #{" " "B" "A"}))
    (is (= db db3))))
