goog.provide('app.reg.events.tick');
app.reg.events.tick.blank_ticker = (function app$reg$events$tick$blank_ticker(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),Date.now(),new cljs.core.Keyword(null,"count","count",2139924085),(0)], null);
});
app.reg.events.tick.next_ticker = (function app$reg$events$tick$next_ticker(p__56748){
var map__56749 = p__56748;
var map__56749__$1 = (((((!((map__56749 == null))))?(((((map__56749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56749):map__56749);
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56749__$1,new cljs.core.Keyword(null,"count","count",2139924085));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),(c + (1)),new cljs.core.Keyword(null,"time","time",1385887882),Date.now()], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tick","tick",-835886976),(function (cofx,_){

var prev_ticker = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"ticker","ticker",214613162)], null));
var ticker = app.reg.events.tick.next_ticker(prev_ticker);
var prev_db = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx);
var db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(prev_db,new cljs.core.Keyword(null,"ticker","ticker",214613162),ticker);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-ticker","start-ticker",573884074),(function (cofx,_){
var ticker = app.reg.events.tick.blank_ticker();
var db = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"ticker","ticker",214613162),ticker),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"challenge","challenge",1302148691),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"running","running",1554969103));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"dispatch-interval","dispatch-interval",-1358911768),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick","tick",-835886976)], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ticker","ticker",214613162),new cljs.core.Keyword(null,"ms","ms",-1152709733),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"unit","unit",375175175)], null))], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stop-ticker","stop-ticker",-1801221445),(function (cofx,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear-interval","clear-interval",-68384603),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ticker","ticker",214613162)], null)], null);
}));

//# sourceMappingURL=app.reg.events.tick.js.map
