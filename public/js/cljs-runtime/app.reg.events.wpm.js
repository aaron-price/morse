goog.provide('app.reg.events.wpm');
app.reg.events.wpm.ms_per_minute = ((60) * (1000));
app.reg.events.wpm.units_per_word = (50);
app.reg.events.wpm.current_wpm = (function app$reg$events$wpm$current_wpm(ms_per_unit){
var word_dur = (ms_per_unit * app.reg.events.wpm.units_per_word);
var words_per_minute = (app.reg.events.wpm.ms_per_minute / word_dur);
var wpm = Math.round(words_per_minute);
return wpm;
});
app.reg.events.wpm.wpm__GT_ms = (function app$reg$events$wpm$wpm__GT_ms(wpm){
return (app.reg.events.wpm.ms_per_minute / (wpm * app.reg.events.wpm.units_per_word));
});
app.reg.events.wpm.inc_wpm = (function app$reg$events$wpm$inc_wpm(unit_dur){
return Math.round(app.reg.events.wpm.wpm__GT_ms((app.reg.events.wpm.current_wpm(unit_dur) + (1))));
});
app.reg.events.wpm.dec_wpm = (function app$reg$events$wpm$dec_wpm(unit_dur){
return Math.round(app.reg.events.wpm.wpm__GT_ms((app.reg.events.wpm.current_wpm(unit_dur) - (1))));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dec-wpm","dec-wpm",1983908162),(function (p__38018,_){
var map__38019 = p__38018;
var map__38019__$1 = (((((!((map__38019 == null))))?(((((map__38019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38019):map__38019);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38019__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"unit","unit",375175175),app.reg.events.wpm.dec_wpm)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inc-wpm","inc-wpm",-885592066),(function (p__38021,_){
var map__38022 = p__38021;
var map__38022__$1 = (((((!((map__38022 == null))))?(((((map__38022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38022):map__38022);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38022__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"unit","unit",375175175),app.reg.events.wpm.inc_wpm)], null);
}));

//# sourceMappingURL=app.reg.events.wpm.js.map
