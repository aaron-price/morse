(ns app.component.text-form
  (:require
    [re-frame.core :refer [dispatch subscribe]]
    ;[app.component.bar :refer [input-bar]]
  ))

(defn text-input []
  [:input {:on-change #(dispatch [:text-input (-> % .-target .-value)])}])

(defn text-output []
  (let [code @(subscribe [:text-output])]
    (prn "CODOE" code)
  ;  (if code
  ;    [input-bar code {}])
  ))
