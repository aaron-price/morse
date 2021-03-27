(ns app.reg.subs.ticker
  (:require
    [app.helpers.parser :refer [log->morse-text]]
    [re-frame.core :refer [reg-sub]]))

(reg-sub :ticker 
         (fn [{:keys [ticker unit]} _]
           ticker))
