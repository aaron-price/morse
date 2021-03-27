(ns app.reg.all
  (:require
    [app.reg.effects.interval]

    [app.reg.events.challenge]
    [app.reg.events.initialize]
    [app.reg.events.put-log]
    [app.reg.events.tap]
    [app.reg.events.tick]
    [app.reg.events.text-input]
    [app.reg.events.wpm]

    [app.reg.subs.challenge]
    [app.reg.subs.log-morse-code]
    [app.reg.subs.text-output]
    [app.reg.subs.unit]
  ))
