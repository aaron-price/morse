(ns app.helpers.parser
  (:require
    [cljs.core.match :refer [match]]
    [app.db :refer [chart sym-chart]]))
;
;(comment
;  "
;  log entry: map of format {:type (:down | :up), :time (epoch ms)}
;  log:       vector of log entries
;  inferred-entry: log entry with a keyword value which may or may NOT be true (yet). 
;  inter-symbol-space (:sym): space between dots and dashes within a single character (. sym - within 'A')
;  inter-char-space (:char): space between dots and dashes of DIFFERENT characters    (. char - between 'E' and 'T')
;  inter-word-space (:word): space between words. (' ' in 'hello world')
;  inferred-value: (:. | :- | :sym | :char | :word | :pending) 
;  inflog: log of entries with inferred values
;  morse-code: vector of inferred value keywords noted above
;  morse-code-group: vector of keywords (:. | :- | :space). No more pending or inference.
;  mcg: Alias of morse-code-group 
;  morse-code-groups: list of morse-code-groups. Split by characters. '([:.] [:space] [:. :-] [:- :. :. :.])
;  morse-text: code-groups using plaintext instead of keywords.  ^ => '(['.'] [' '] ['.' '-'] ['-' '.' '.' '.'])
;  plain-text-vec: Morse-text, except chars become alphanumeric. ^ => ['E' ' ' 'A' 'B']
;  plain-text: a string. Plain-text-vec after joining.           ^ => 'E AB'
;  flat-morse-text: morse-text but all one seq. ['.' ' ' '.' '-']
;")
;
;(defn infer-value 
;  "Take two log entries, return the value keyword of the first one."
;  [unit a b]
;  (if (nil? b) :pending
;  (let [dot-time #(< % (* 2 unit))
;        dah-time #(< % (* 4 unit))
;        {atype :type atime :time} a
;        {btype :type btime :time} b
;       ]
;
;  (match [(- btime atime) atype btype]
;         [(t :guard dot-time) :down _] :.
;         [_                   :down _] :-
;         [(t :guard dot-time) :up   _] :sym
;         [(t :guard dah-time) :up   _] :char
;         [_                   :up   _] :word))))
;
;
;(defn infer-log 
;  "Take log of entries, add value to each. 
;   Note that it can only look backward in time,
;     therefore you should finish it with a {:type :tick} to give some future context"
;  ([unit log] (infer-log unit log []))
;  ([unit log acc]
;  (if (empty? log) acc
;
;  (let [[firs secon] log
;        value (infer-value unit firs secon)
;        entry (assoc firs :value value)] 
;
;    (infer-log unit (rest log) (conj acc entry))))))
;
;
;(defn inflog->morse-code 
;  "Take inflog, return morse-code. 
;   See comments at top of this module for details about both."
;  [inflog]
;  (reduce
;    (fn [acc {value :value}]
;      (cond
;        (= value :sym) acc
;        :else          (conj acc value)))
;    []
;    inflog))
;
;(defn morse-code->mcg [code]
;  (let [
;    build (reduce
;            (fn [{chargroup :chargroup text :text :as acc} sym]
;              (match sym
;                     :pending acc ; <- Might need to be something else
;                     :char {:chargroup [] :text (conj text chargroup)}
;                     :word {:chargroup [] :text (-> text 
;                                                    (conj chargroup)
;                                                    (conj [:space]))}
;                     _     {:chargroup (conj chargroup sym) :text text}))
;            {:chargroup [] :text []}
;            code)
;        
;    {chg :chargroup txt :text} build
;  ]
;    (if (empty? chg)
;      txt
;      (conj txt chg))))
;
;(defn morse-code-groups->morse-text [groups]
;  (map
;    (fn [g]
;      (match g
;             [:space] [" "]
;             :else (->> g (map name) vec)))
;    groups))
;
;(defn morse-text->plain-text-vec [morse-text]
;  (let [ichart (clojure.set/map-invert chart)]
;    (map
;      (fn [mt]
;        (get ichart mt))
;      morse-text)))
;
;(defn log->morse-text [unit log]
;  (-> (infer-log unit log)
;        inflog->morse-code
;        ;morse-code->morse-code-groups
;        morse-code->mcg
;        morse-code-groups->morse-text))
;
;(defn log->plain-text [unit log]
;  (-> (infer-log unit log)
;        inflog->morse-code
;        ;morse-code->morse-code-groups
;        morse-code->mcg
;        morse-code-groups->morse-text
;        morse-text->plain-text-vec
;        clojure.string/join))
;
;(defn text-vect->sym-vect [text-vect]
;  (map sym-chart text-vect))
;
;(defn sym-vect->morse-text [sym-vect]
;  (map
;    (fn [char-vec]
;      (map name char-vec))
;    sym-vect))
;
;(defn plain-text->sym-vect [text]
;  (-> text
;      (clojure.string/split #"")
;      rest ; Leading whitespace for some reason...
;      vec
;      text-vect->sym-vect))
;
;(defn plain-text->morse-text [plain-text]
;  (-> plain-text
;      plain-text->sym-vect
;      sym-vect->morse-text
;  ))
;
;; @TODO NOW
;; rewrite this
;; must have spaces between groups i.e. [ ["."] ["-"] ]
;; But must not have trailing, leading, or duplicate spaces.
;(defn safe-add-space [acc]
;  (cond
;    (empty? acc) acc
;    (= " " (last acc)) acc
;    :else  (concat [" "])))
;
;(defn strip-last-space [li]
;  (cond
;    (= " " (last li)) (drop-last li)
;    :else li))
;
;(defn strip-trailing-space [li]
;  (match (last li)
;         " " (drop-last li)
;         _   li))
;
;(defn strip-dupe-space [li]
;  (reduce
;    (fn [acc txt]
;      (match [acc txt]
;        [(_ :guard empty?) " "] acc
;        [(_ :guard #(= " " (last %))) " "] acc
;        [_  _]   (conj acc txt)))
;    []
;    li))
;
;(defn li2->li1 [li] (flatten li))
;
;(defn morse-text->flat-morse-text 
;  [mt]
;  (-> mt
;      li2->li1
;      strip-dupe-space
;      ))
