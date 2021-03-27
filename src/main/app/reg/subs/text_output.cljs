(ns app.reg.subs.text-output
  (:require
    [app.helpers.parse :refer [plain->code]]
    [re-frame.core :refer [reg-sub]]))

(reg-sub 
  :text-output 
    (fn [{ti :text-input} _] 
      (if (some? ti)
        (plain->code ti)
        [])))


