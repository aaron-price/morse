(ns app.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [app.helpers.interop :refer [get-node]]
            [cljs.core.match :refer [match]]
            [reagent.dom :as rd]
            [app.helpers.parse]
            [app.reg.all]
            [app.component.root :as root]))


(defn router [endpoint]
  (match endpoint
         "/" root/root
         "/sandbox" root/sandbox
         ;"/learn" root/learn
         "/tap" root/tap
         "/challenges" root/challenges
         "/listen" root/listen))


(defn init []
  ; Due to re-frame-10x, we must do this twice
  ; OR do it async
  ; Which seems even more troublesome
  (rf/dispatch-sync [:initialize])
  (rf/dispatch-sync [:initialize])
  (rd/render [(router (.. js/window -location -pathname))]
             (get-node "root")))
