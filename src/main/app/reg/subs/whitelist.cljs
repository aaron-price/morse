(ns app.reg.subs.whitelist
  (:require
    [re-frame.core :refer [reg-sub]]))

(reg-sub :whitelist (fn [db _] (:whitelist db)))


