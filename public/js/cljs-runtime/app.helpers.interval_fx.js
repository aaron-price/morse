goog.provide('app.helpers.interval_fx');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.helpers.interval-fx","dispatch","app.helpers.interval-fx/dispatch",1122827669),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),cljs.core.sequential_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.helpers.interval-fx","ms","app.helpers.interval-fx/ms",-1350792257),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.helpers.interval-fx","id","app.helpers.interval-fx/id",-1307166544),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.helpers.interval-fx","dispatch-interval-args","app.helpers.interval-fx/dispatch-interval-args",1904098248),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.helpers.interval-fx","dispatch","app.helpers.interval-fx/dispatch",1122827669),new cljs.core.Keyword("app.helpers.interval-fx","ms","app.helpers.interval-fx/ms",-1350792257),new cljs.core.Keyword("app.helpers.interval-fx","id","app.helpers.interval-fx/id",-1307166544)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.helpers.interval-fx","dispatch","app.helpers.interval-fx/dispatch",1122827669),new cljs.core.Keyword("app.helpers.interval-fx","ms","app.helpers.interval-fx/ms",-1350792257),new cljs.core.Keyword("app.helpers.interval-fx","id","app.helpers.interval-fx/id",-1307166544)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36751){
return cljs.core.map_QMARK_(G__36751);
}),(function (G__36751){
return cljs.core.contains_QMARK_(G__36751,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
}),(function (G__36751){
return cljs.core.contains_QMARK_(G__36751,new cljs.core.Keyword(null,"ms","ms",-1152709733));
}),(function (G__36751){
return cljs.core.contains_QMARK_(G__36751,new cljs.core.Keyword(null,"id","id",-1388402092));
})], null),(function (G__36751){
return ((cljs.core.map_QMARK_(G__36751)) && (cljs.core.contains_QMARK_(G__36751,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009))) && (cljs.core.contains_QMARK_(G__36751,new cljs.core.Keyword(null,"ms","ms",-1152709733))) && (cljs.core.contains_QMARK_(G__36751,new cljs.core.Keyword(null,"id","id",-1388402092))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.helpers.interval-fx","dispatch","app.helpers.interval-fx/dispatch",1122827669),new cljs.core.Keyword("app.helpers.interval-fx","ms","app.helpers.interval-fx/ms",-1350792257),new cljs.core.Keyword("app.helpers.interval-fx","id","app.helpers.interval-fx/id",-1307166544)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"ms","ms",-1152709733),new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"ms","ms",-1152709733))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092)))], null),null])));
app.helpers.interval_fx.registered_keys = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
re_frame.core.reg_fx(new cljs.core.Keyword(null,"dispatch-interval","dispatch-interval",-1358911768),(function (p__36752){
var map__36753 = p__36752;
var map__36753__$1 = (((((!((map__36753 == null))))?(((((map__36753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36753):map__36753);
var config = map__36753__$1;
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36753__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36753__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36753__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("app.helpers.interval-fx","dispatch-interval-args","app.helpers.interval-fx/dispatch-interval-args",1904098248),config);
} else {
}
} else {
}

var interval_id = setInterval((function (){
return re_frame.core.dispatch(dispatch);
}),ms);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.helpers.interval_fx.registered_keys,cljs.core.assoc,id,interval_id);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"clear-interval","clear-interval",-68384603),(function (p__36755){
var map__36756 = p__36755;
var map__36756__$1 = (((((!((map__36756 == null))))?(((((map__36756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36756):map__36756);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36756__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.helpers.interval_fx.registered_keys),id);
if(cljs.core.truth_(temp__5735__auto__)){
var interval_id = temp__5735__auto__;
clearInterval(interval_id);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.helpers.interval_fx.registered_keys,cljs.core.dissoc,id);
} else {
return null;
}
}));

//# sourceMappingURL=app.helpers.interval_fx.js.map
