(ns app.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [app.helpers.interop :refer [get-node]]
            [reitit.frontend :as ri]
            [reitit.frontend.easy :as rie]
            [reitit.coercion.spec :as rss]
            ;[cljs.core.match :refer [match]]
            [reagent.dom :as rd]
            [app.helpers.parse]
            [app.reg.all]
            [app.component.page.learn :as learn]
            [app.component.page.learn.lesson1 :as lesson1]
            [app.component.page.learn.lesson2 :as lesson2]
            [app.component.page.learn.lesson3 :as lesson3]
            [app.component.page.device :as device]
            [app.component.root :as root]))


(def routes
  [
    ["/" {:name ::index :view root/root}] 
    ["/learn" {:name ::learn :view learn/page}]
    ["/learn/lesson1" {:name ::lesson1 :view lesson1/page}]
    ["/learn/lesson2" {:name ::lesson2 :view lesson2/page}]
    ["/learn/lesson3" {:name ::lesson3 :view lesson3/page}]
    ["/device" {:name ::device
                :view device/page}]
  ])

(def router (ri/router routes))

(defn init []
  (let [path (.. js/window -location -pathname)
        path (cond
               (.. js/window is_mobile) "/device"
               :else path)
        route (ri/match-by-path router path)
        view (get-in route [:data :view])
        node (get-node "root")]

    (rf/dispatch-sync [:initialize route])
    (rf/dispatch-sync [:initialize route])
    
    (rd/render view node)))
