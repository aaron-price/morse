(ns app.component.bar
  (:require
    [re-frame.core :refer [dispatch subscribe]]
    ;[app.helpers.parser :refer [morse-text->flat-morse-text]]
    [app.helpers.parse :refer [code->counted-plain]]
    [garden.core :refer [css]]
    [defun.core :refer [fun defun]]
    [cljs.core.match :refer [match]]
  ))

(def unit-width 1)


(defn add-slice [slice]
  (if slice
    (str "translateX(" (* -1 unit-width slice) "rem)")))


(defun get-unit 
  ([i "."]
    [:div.morse-code-bar.-unit.-dot {:key i}
      [:div.-content]])
  ([i "-"]
    [:div.morse-code-bar.-unit.-dash {:key i} 
      [:div.-content]])
  ([i "charspace"]
    [:div.morse-code-bar.-unit.-charspace {:key i} 
      [:div.-content]])
  ([i "wordspace"]
    [:div.morse-code-bar.-unit.-wordspace {:key i}
      [:div.-content]]))


(defn get-plain [i {ch :char unit-width :count margin :num-syms}]
  [:div.morse-code-bar.-plain {:key i}
    (cond 
      (= " " ch) [:div.-wordspace [:div.-content]]
      :else [:<> [:div.-letter    {:style {:margin-right margin
                                           :width (str unit-width "rem")}}
                   [:div.-content ch]]
                 [:div.-charspace [:div.-content]]])])


(defn code-bar [code {slice :slice}]
  [:div.morse-code-bar.-inner
    {:style {:transform (add-slice slice)}}
    (map-indexed get-unit code)])

(defn plain-bar [code {slice :slice}]
  (let [counted-plain (code->counted-plain code)]
    (prn counted-plain)
    [:div.morse-code-bar.-inner
      {:style {:transform (add-slice slice)}}
      (map-indexed
        get-plain
        ;(fn [i {ch :char width :count margin :num-sym}]
        ;  [:<> {:key i}
        ;    (match ch
        ;           " " [:div.morse-code-bar.-plain.-wordspace
        ;                 {:style {:margin-right margin}}]
        ;           _ [:div.morse-code-bar.-plain.-letter
        ;               {:style {:width (str width "rem")
        ;                        :margin-right margin}} ch])
        ;    [:div.morse-code-bar.-plain.-charspace]
        ;  ])
        counted-plain)
    ]))

(defn morse-code-bar [code opts]
  [:div.morse-code-bar.-outer
    [plain-bar code opts]
    [code-bar code opts]])
