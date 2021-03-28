goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__27745){
var map__27746 = p__27745;
var map__27746__$1 = (((((!((map__27746 == null))))?(((((map__27746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27746):map__27746);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27746__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27746__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27746__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27746__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__27750_27780 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__27751_27781 = null;
var count__27752_27782 = (0);
var i__27753_27783 = (0);
while(true){
if((i__27753_27783 < count__27752_27782)){
var vec__27765_27788 = chunk__27751_27781.cljs$core$IIndexed$_nth$arity$2(null,i__27753_27783);
var k_27789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27765_27788,(0),null);
var cb_27790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27765_27788,(1),null);
try{var G__27769_27796 = cljs.core.deref(re_frame.trace.traces);
(cb_27790.cljs$core$IFn$_invoke$arity$1 ? cb_27790.cljs$core$IFn$_invoke$arity$1(G__27769_27796) : cb_27790.call(null,G__27769_27796));
}catch (e27768){var e_27798 = e27768;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_27789,"while storing",cljs.core.deref(re_frame.trace.traces),e_27798], 0));
}

var G__27799 = seq__27750_27780;
var G__27800 = chunk__27751_27781;
var G__27801 = count__27752_27782;
var G__27802 = (i__27753_27783 + (1));
seq__27750_27780 = G__27799;
chunk__27751_27781 = G__27800;
count__27752_27782 = G__27801;
i__27753_27783 = G__27802;
continue;
} else {
var temp__5735__auto___27803 = cljs.core.seq(seq__27750_27780);
if(temp__5735__auto___27803){
var seq__27750_27804__$1 = temp__5735__auto___27803;
if(cljs.core.chunked_seq_QMARK_(seq__27750_27804__$1)){
var c__4556__auto___27808 = cljs.core.chunk_first(seq__27750_27804__$1);
var G__27809 = cljs.core.chunk_rest(seq__27750_27804__$1);
var G__27810 = c__4556__auto___27808;
var G__27811 = cljs.core.count(c__4556__auto___27808);
var G__27812 = (0);
seq__27750_27780 = G__27809;
chunk__27751_27781 = G__27810;
count__27752_27782 = G__27811;
i__27753_27783 = G__27812;
continue;
} else {
var vec__27770_27813 = cljs.core.first(seq__27750_27804__$1);
var k_27814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27770_27813,(0),null);
var cb_27815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27770_27813,(1),null);
try{var G__27775_27816 = cljs.core.deref(re_frame.trace.traces);
(cb_27815.cljs$core$IFn$_invoke$arity$1 ? cb_27815.cljs$core$IFn$_invoke$arity$1(G__27775_27816) : cb_27815.call(null,G__27775_27816));
}catch (e27773){var e_27820 = e27773;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_27814,"while storing",cljs.core.deref(re_frame.trace.traces),e_27820], 0));
}

var G__27821 = cljs.core.next(seq__27750_27804__$1);
var G__27822 = null;
var G__27823 = (0);
var G__27824 = (0);
seq__27750_27780 = G__27821;
chunk__27751_27781 = G__27822;
count__27752_27782 = G__27823;
i__27753_27783 = G__27824;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
