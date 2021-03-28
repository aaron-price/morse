goog.provide('app.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inc-score","inc-score",-1336437637),(function (p__36790,_){
var map__36791 = p__36790;
var map__36791__$1 = (((((!((map__36791 == null))))?(((((map__36791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36791):map__36791);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36791__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780)], null),cljs.core.inc)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return app.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"put-log","put-log",-951616073),(function (db,p__36794){
var vec__36795 = p__36794;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36795,(0),null);
var entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36795,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log","log",-1595516004)], null),(function (p1__36793_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__36793_SHARP_,entry);
}));
}));

//# sourceMappingURL=app.events.js.map
