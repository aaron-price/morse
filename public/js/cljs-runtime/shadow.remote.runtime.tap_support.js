goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36472,p__36473){
var map__36475 = p__36472;
var map__36475__$1 = (((((!((map__36475 == null))))?(((((map__36475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36475):map__36475);
var svc = map__36475__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36475__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36475__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36475__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36476 = p__36473;
var map__36476__$1 = (((((!((map__36476 == null))))?(((((map__36476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36476):map__36476);
var msg = map__36476__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36476__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36476__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36476__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36476__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36483,p__36484){
var map__36485 = p__36483;
var map__36485__$1 = (((((!((map__36485 == null))))?(((((map__36485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36485):map__36485);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36485__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36486 = p__36484;
var map__36486__$1 = (((((!((map__36486 == null))))?(((((map__36486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36486):map__36486);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36486__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36492,p__36493){
var map__36494 = p__36492;
var map__36494__$1 = (((((!((map__36494 == null))))?(((((map__36494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36494):map__36494);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36494__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36494__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36495 = p__36493;
var map__36495__$1 = (((((!((map__36495 == null))))?(((((map__36495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36495):map__36495);
var msg = map__36495__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36495__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36500,tid){
var map__36501 = p__36500;
var map__36501__$1 = (((((!((map__36501 == null))))?(((((map__36501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36501):map__36501);
var svc = map__36501__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36501__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36524 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36525 = null;
var count__36526 = (0);
var i__36527 = (0);
while(true){
if((i__36527 < count__36526)){
var vec__36534 = chunk__36525.cljs$core$IIndexed$_nth$arity$2(null,i__36527);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36534,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36534,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36546 = seq__36524;
var G__36547 = chunk__36525;
var G__36548 = count__36526;
var G__36549 = (i__36527 + (1));
seq__36524 = G__36546;
chunk__36525 = G__36547;
count__36526 = G__36548;
i__36527 = G__36549;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36524);
if(temp__5735__auto__){
var seq__36524__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36524__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36524__$1);
var G__36550 = cljs.core.chunk_rest(seq__36524__$1);
var G__36551 = c__4556__auto__;
var G__36552 = cljs.core.count(c__4556__auto__);
var G__36553 = (0);
seq__36524 = G__36550;
chunk__36525 = G__36551;
count__36526 = G__36552;
i__36527 = G__36553;
continue;
} else {
var vec__36537 = cljs.core.first(seq__36524__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36537,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36537,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36554 = cljs.core.next(seq__36524__$1);
var G__36555 = null;
var G__36556 = (0);
var G__36557 = (0);
seq__36524 = G__36554;
chunk__36525 = G__36555;
count__36526 = G__36556;
i__36527 = G__36557;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36503_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36503_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36504_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36504_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36505_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36505_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36506_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36506_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36543){
var map__36544 = p__36543;
var map__36544__$1 = (((((!((map__36544 == null))))?(((((map__36544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36544):map__36544);
var svc = map__36544__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36544__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36544__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
