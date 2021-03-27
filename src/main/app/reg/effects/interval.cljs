(ns app.reg.effects.interval
  (:require
    [cljs.spec.alpha :as s]
    [re-frame.core :as re-frame :refer [reg-fx]]))

(s/def ::dispatch sequential?)
(s/def ::ms int?)
(s/def ::id any?)
(s/def ::dispatch-interval-args (s/keys :req-un [::dispatch ::ms ::id]))

(def registered-keys (atom {:ticker nil}))

(reg-fx
  :dispatch-interval
  (fn [{evt :dispatch ms :ms id :id :as config}]
    (s/assert ::dispatch-interval-args config)
    (if (nil? (get @registered-keys id))
      (let [interval-id (js/setInterval #(re-frame/dispatch evt) ms)]
        (swap! registered-keys assoc id interval-id)))))

(reg-fx
  :clear-interval
  (fn [{:keys [:id]}]
    (when-let [interval-id (get @registered-keys id)]
      (js/clearInterval interval-id)
      (swap! registered-keys dissoc id))))
