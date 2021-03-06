(ns app.reg.all
  (:require
    [app.reg.effects.interval]

    [app.reg.events.challenge]
    [app.reg.events.initialize]
    [app.reg.events.put-log]
    [app.reg.events.reset-log]
    [app.reg.events.tap]
    [app.reg.events.tick]
    [app.reg.events.text-input]
    [app.reg.events.whitelist]
    [app.reg.events.wpm]

    [app.reg.subs.btn-type]
    [app.reg.subs.challenge]
    [app.reg.subs.count-log]
    [app.reg.subs.log-morse-code]
    [app.reg.subs.text-output]
    [app.reg.subs.unit]
    [app.reg.subs.ticker]
    [app.reg.subs.whitelist]
  ))
