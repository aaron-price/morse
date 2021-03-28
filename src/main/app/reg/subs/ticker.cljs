(ns app.reg.subs.ticker
  (:require
    [re-frame.core :refer [reg-sub]]))

(reg-sub :ticker (fn [{ticker :ticker} _] ticker))
(reg-sub :ticker-time (fn [{{t :time} :ticker} _] t))
(reg-sub :ticker-count (fn [{{n :count} :ticker} _] n))


