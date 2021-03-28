goog.provide('app.reg.events.inc_score');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inc-score","inc-score",-1336437637),(function (p__40778,_){
var map__40779 = p__40778;
var map__40779__$1 = (((((!((map__40779 == null))))?(((((map__40779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40779):map__40779);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40779__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780)], null),cljs.core.inc)], null);
}));

//# sourceMappingURL=app.reg.events.inc_score.js.map
