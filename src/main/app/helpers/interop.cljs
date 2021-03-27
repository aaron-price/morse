(ns app.helpers.interop)

(defn get-node [id]
  (-> js/document
      (.getElementById id)))

(defn set-node [id v]
  (-> js/document
      (.getElementById id)
      (.-innerHTML)
      (set! v)))
