(ns app.views.code
  (:require
    [cljs.core.match :refer [match]]
    [defun.core :refer [defun]]
    ;[app.helpers.parser :refer [morse-text->plain-text-vec]]
  ))
;
;(defun block-size 
;  ([acc "."] (+ acc 1))
;  ([acc "-"] (+ acc 3))
;  ([acc " "] (+ acc 3))
;  ([morse-syms] (reduce block-size 0 morse-syms)))
;
;(defn code-card__char [morse plain]
;  (let [block-width (str (block-size morse) "rem")]
;  [:div.code-card__char {:style {:width block-width
;                                 :min-width "2rem"}}
;    [:div.code-card__plain plain]
;    [:div.code-card__morse 
;      (map-indexed
;        (fn [idx c]
;          (let [sym-width (str (block-size c) "rem")]
;            [:div.code-card__morse-sym-out 
;              {:key idx :style {:width sym-width}}
;              [:p.code-card__morse-sym-in
;                (if (= c " ") {:style {:visibility "hidden"}})
;                (if (= c " ") "space" c)
;                ]]))
;                  
;        morse)]
;  ]))
;
;
;(defn code-card__outer
;  [morse-text plain-text]
;  [:div.code-card__outer 
;    (map-indexed
;      (fn [idx ch]
;        [:<> {:key idx}
;          [code-card__char (nth morse-text idx) ch]])
;      plain-text)])
;
;
;(defn code-card [morse-text]
;  (let [plain-text (morse-text->plain-text-vec morse-text)]
;    [code-card__outer morse-text plain-text]))
;
