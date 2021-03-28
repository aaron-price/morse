goog.provide('app.views.time_bar');
app.views.time_bar.styles = (function app$views$time_bar$styles(timelog){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".time-bar",".time-bar",133611264),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(timelog)),"rem"].join(''),new cljs.core.Keyword(null,"min-width","min-width",1926193728),"1rem",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#AAA",new cljs.core.Keyword(null,"border","border",1444987323),"solid #DDD thin",new cljs.core.Keyword(null,"height","height",1025178622),"1rem"], null)], null)], null)], 0))], null);
});
app.views.time_bar.time_bar = (function app$views$time_bar$time_bar(log){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["timelog",log], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),app.views.time_bar.styles(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(23),(41),(41),(4)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.time-bar","div.time-bar",275809829),"TIMMMME"], null)], null);
});

//# sourceMappingURL=app.views.time_bar.js.map
