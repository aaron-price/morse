(ns app.component.bar
  (:require
    [cljs.spec.alpha :as s]
    ;[app.helpers.interop :refer [get-node]]
    [re-frame.core :refer [dispatch subscribe]]
    ;[app.helpers.parser :refer [morse-text->flat-morse-text]]
    [app.helpers.parse :refer [code->counted-plain] :as p]
    [garden.core :refer [css]]
    [defun.core :refer [fun defun]]
    [cljs.core.match :refer [match]]
  ))

(def unit-width 1)

(defn add-slice []
  (str "translateX(" (* -1 @(subscribe [:log-size])) "rem)"))

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


(defn code-bar [code {id :id}]
  (let [
    attr {:style {:transform (add-slice)
          :transition-duration "200ms"}}
    attr (if id (assoc attr :id id) attr)]
  [:div.morse-code-bar.-inner attr
    (map-indexed get-unit code)]))


(defn plain-bar [code {}]
  (let [counted-plain (code->counted-plain code)]
    [:div.morse-code-bar.-inner
      {:style {:transform (add-slice)
               :transition-duration "200ms"}}
      (map-indexed
        get-plain
        counted-plain)]))


(s/def ::bar-opts (s/keys :opt-un [
                                   ::hide-plain? 
                                   ::hide-code?]))
(defn morse-code-bar [code opts]
  {:pre [(s/valid? ::p/morse-code code) 
         (s/valid? ::bar-opts opts)]}
  (let [{:keys [hide-plain? hide-code? id
                hide-log-plain? hide-log-code?] 
         ;:or   {hide-plain? false hide-code? false}
         } opts
        code-hidden? (if id hide-log-code? hide-code?)
        plain-hidden? (if id hide-log-plain? hide-plain?)
        num-bars (reduce
                   #(if-not %2 (inc %1) %1)
                   0
                   [hide-code? hide-plain?])
        bar-height (str (* 3 num-bars) "rem")

        outer-attrs {:style {:height bar-height}}]

  [:div.morse-code-bar.-outer outer-attrs
    (if-not plain-hidden? [plain-bar code opts])
    (if-not code-hidden?  [code-bar code opts])]))
