goog.provide('app.helpers.predict');
app.helpers.predict.alternate_type = (function app$helpers$predict$alternate_type(t){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword(null,"up","up",-269712113))){
return new cljs.core.Keyword(null,"down","down",1565245570);
} else {
return new cljs.core.Keyword(null,"up","up",-269712113);
}
});
app.helpers.predict.predict_log = (function app$helpers$predict$predict_log(log){
var t = app.helpers.predict.alternate_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.last(log)));
var entry = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),t,new cljs.core.Keyword(null,"time","time",1385887882),Date.now()], null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(log,entry);
});

//# sourceMappingURL=app.helpers.predict.js.map
