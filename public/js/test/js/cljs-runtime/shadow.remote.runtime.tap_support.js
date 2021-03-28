goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36763,p__36764){
var map__36765 = p__36763;
var map__36765__$1 = (((((!((map__36765 == null))))?(((((map__36765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36765):map__36765);
var svc = map__36765__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36765__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36765__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36765__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36766 = p__36764;
var map__36766__$1 = (((((!((map__36766 == null))))?(((((map__36766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36766):map__36766);
var msg = map__36766__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36766__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36766__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36766__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36766__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36780,p__36781){
var map__36782 = p__36780;
var map__36782__$1 = (((((!((map__36782 == null))))?(((((map__36782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36782):map__36782);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36782__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36783 = p__36781;
var map__36783__$1 = (((((!((map__36783 == null))))?(((((map__36783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36783):map__36783);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36783__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36804,p__36805){
var map__36806 = p__36804;
var map__36806__$1 = (((((!((map__36806 == null))))?(((((map__36806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36806):map__36806);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36806__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36806__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36807 = p__36805;
var map__36807__$1 = (((((!((map__36807 == null))))?(((((map__36807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36807):map__36807);
var msg = map__36807__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36807__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36814,tid){
var map__36815 = p__36814;
var map__36815__$1 = (((((!((map__36815 == null))))?(((((map__36815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36815):map__36815);
var svc = map__36815__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36815__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36829 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36830 = null;
var count__36831 = (0);
var i__36832 = (0);
while(true){
if((i__36832 < count__36831)){
var vec__36845 = chunk__36830.cljs$core$IIndexed$_nth$arity$2(null,i__36832);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36845,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36845,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36858 = seq__36829;
var G__36859 = chunk__36830;
var G__36860 = count__36831;
var G__36861 = (i__36832 + (1));
seq__36829 = G__36858;
chunk__36830 = G__36859;
count__36831 = G__36860;
i__36832 = G__36861;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36829);
if(temp__5735__auto__){
var seq__36829__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36829__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36829__$1);
var G__36862 = cljs.core.chunk_rest(seq__36829__$1);
var G__36863 = c__4556__auto__;
var G__36864 = cljs.core.count(c__4556__auto__);
var G__36865 = (0);
seq__36829 = G__36862;
chunk__36830 = G__36863;
count__36831 = G__36864;
i__36832 = G__36865;
continue;
} else {
var vec__36851 = cljs.core.first(seq__36829__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36851,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36851,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36866 = cljs.core.next(seq__36829__$1);
var G__36867 = null;
var G__36868 = (0);
var G__36869 = (0);
seq__36829 = G__36866;
chunk__36830 = G__36867;
count__36831 = G__36868;
i__36832 = G__36869;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36817_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36817_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36818_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36818_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36819_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36819_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36820_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36820_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36854){
var map__36855 = p__36854;
var map__36855__$1 = (((((!((map__36855 == null))))?(((((map__36855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36855):map__36855);
var svc = map__36855__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36855__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36855__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
