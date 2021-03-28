goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__30589 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__30590 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__30590);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___30703 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___30703)){
var new_db_30704 = temp__5735__auto___30703;
var fexpr__30592_30705 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__30592_30705.cljs$core$IFn$_invoke$arity$1 ? fexpr__30592_30705.cljs$core$IFn$_invoke$arity$1(new_db_30704) : fexpr__30592_30705.call(null,new_db_30704));
} else {
}

var seq__30593 = cljs.core.seq(effects_without_db);
var chunk__30594 = null;
var count__30595 = (0);
var i__30596 = (0);
while(true){
if((i__30596 < count__30595)){
var vec__30606 = chunk__30594.cljs$core$IIndexed$_nth$arity$2(null,i__30596);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30606,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30606,(1),null);
var temp__5733__auto___30709 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___30709)){
var effect_fn_30710 = temp__5733__auto___30709;
(effect_fn_30710.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30710.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30710.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__30711 = seq__30593;
var G__30712 = chunk__30594;
var G__30713 = count__30595;
var G__30714 = (i__30596 + (1));
seq__30593 = G__30711;
chunk__30594 = G__30712;
count__30595 = G__30713;
i__30596 = G__30714;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30593);
if(temp__5735__auto__){
var seq__30593__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30593__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__30593__$1);
var G__30718 = cljs.core.chunk_rest(seq__30593__$1);
var G__30719 = c__4556__auto__;
var G__30720 = cljs.core.count(c__4556__auto__);
var G__30721 = (0);
seq__30593 = G__30718;
chunk__30594 = G__30719;
count__30595 = G__30720;
i__30596 = G__30721;
continue;
} else {
var vec__30611 = cljs.core.first(seq__30593__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30611,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30611,(1),null);
var temp__5733__auto___30722 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___30722)){
var effect_fn_30723 = temp__5733__auto___30722;
(effect_fn_30723.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30723.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30723.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__30724 = cljs.core.next(seq__30593__$1);
var G__30725 = null;
var G__30726 = (0);
var G__30727 = (0);
seq__30593 = G__30724;
chunk__30594 = G__30725;
count__30595 = G__30726;
i__30596 = G__30727;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__30261__auto___30728 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__30262__auto___30729 = (end__30261__auto___30728 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30262__auto___30729,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__30261__auto___30728);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__30589);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___30730 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___30730)){
var new_db_30731 = temp__5735__auto___30730;
var fexpr__30615_30732 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__30615_30732.cljs$core$IFn$_invoke$arity$1 ? fexpr__30615_30732.cljs$core$IFn$_invoke$arity$1(new_db_30731) : fexpr__30615_30732.call(null,new_db_30731));
} else {
}

var seq__30616 = cljs.core.seq(effects_without_db);
var chunk__30617 = null;
var count__30618 = (0);
var i__30619 = (0);
while(true){
if((i__30619 < count__30618)){
var vec__30630 = chunk__30617.cljs$core$IIndexed$_nth$arity$2(null,i__30619);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30630,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30630,(1),null);
var temp__5733__auto___30734 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___30734)){
var effect_fn_30736 = temp__5733__auto___30734;
(effect_fn_30736.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30736.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30736.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__30737 = seq__30616;
var G__30738 = chunk__30617;
var G__30739 = count__30618;
var G__30740 = (i__30619 + (1));
seq__30616 = G__30737;
chunk__30617 = G__30738;
count__30618 = G__30739;
i__30619 = G__30740;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30616);
if(temp__5735__auto__){
var seq__30616__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30616__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__30616__$1);
var G__30741 = cljs.core.chunk_rest(seq__30616__$1);
var G__30742 = c__4556__auto__;
var G__30743 = cljs.core.count(c__4556__auto__);
var G__30744 = (0);
seq__30616 = G__30741;
chunk__30617 = G__30742;
count__30618 = G__30743;
i__30619 = G__30744;
continue;
} else {
var vec__30633 = cljs.core.first(seq__30616__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30633,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30633,(1),null);
var temp__5733__auto___30746 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___30746)){
var effect_fn_30747 = temp__5733__auto___30746;
(effect_fn_30747.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30747.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30747.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__30748 = cljs.core.next(seq__30616__$1);
var G__30749 = null;
var G__30750 = (0);
var G__30751 = (0);
seq__30616 = G__30748;
chunk__30617 = G__30749;
count__30618 = G__30750;
i__30619 = G__30751;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__30637){
var map__30638 = p__30637;
var map__30638__$1 = (((((!((map__30638 == null))))?(((((map__30638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30638):map__30638);
var effect = map__30638__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30638__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30638__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__30640 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__30641 = null;
var count__30642 = (0);
var i__30643 = (0);
while(true){
if((i__30643 < count__30642)){
var effect = chunk__30641.cljs$core$IIndexed$_nth$arity$2(null,i__30643);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__30761 = seq__30640;
var G__30762 = chunk__30641;
var G__30763 = count__30642;
var G__30764 = (i__30643 + (1));
seq__30640 = G__30761;
chunk__30641 = G__30762;
count__30642 = G__30763;
i__30643 = G__30764;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30640);
if(temp__5735__auto__){
var seq__30640__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30640__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__30640__$1);
var G__30769 = cljs.core.chunk_rest(seq__30640__$1);
var G__30770 = c__4556__auto__;
var G__30771 = cljs.core.count(c__4556__auto__);
var G__30772 = (0);
seq__30640 = G__30769;
chunk__30641 = G__30770;
count__30642 = G__30771;
i__30643 = G__30772;
continue;
} else {
var effect = cljs.core.first(seq__30640__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__30776 = cljs.core.next(seq__30640__$1);
var G__30777 = null;
var G__30778 = (0);
var G__30779 = (0);
seq__30640 = G__30776;
chunk__30641 = G__30777;
count__30642 = G__30778;
i__30643 = G__30779;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__30645 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__30646 = null;
var count__30647 = (0);
var i__30648 = (0);
while(true){
if((i__30648 < count__30647)){
var vec__30657 = chunk__30646.cljs$core$IIndexed$_nth$arity$2(null,i__30648);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30657,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30657,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___30791 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___30791)){
var effect_fn_30792 = temp__5733__auto___30791;
(effect_fn_30792.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30792.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30792.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__30793 = seq__30645;
var G__30794 = chunk__30646;
var G__30795 = count__30647;
var G__30796 = (i__30648 + (1));
seq__30645 = G__30793;
chunk__30646 = G__30794;
count__30647 = G__30795;
i__30648 = G__30796;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30645);
if(temp__5735__auto__){
var seq__30645__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30645__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__30645__$1);
var G__30799 = cljs.core.chunk_rest(seq__30645__$1);
var G__30800 = c__4556__auto__;
var G__30801 = cljs.core.count(c__4556__auto__);
var G__30802 = (0);
seq__30645 = G__30799;
chunk__30646 = G__30800;
count__30647 = G__30801;
i__30648 = G__30802;
continue;
} else {
var vec__30660 = cljs.core.first(seq__30645__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30660,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30660,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___30803 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___30803)){
var effect_fn_30804 = temp__5733__auto___30803;
(effect_fn_30804.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30804.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30804.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__30805 = cljs.core.next(seq__30645__$1);
var G__30806 = null;
var G__30807 = (0);
var G__30808 = (0);
seq__30645 = G__30805;
chunk__30646 = G__30806;
count__30647 = G__30807;
i__30648 = G__30808;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__30668 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__30669 = null;
var count__30670 = (0);
var i__30671 = (0);
while(true){
if((i__30671 < count__30670)){
var event = chunk__30669.cljs$core$IIndexed$_nth$arity$2(null,i__30671);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__30809 = seq__30668;
var G__30810 = chunk__30669;
var G__30811 = count__30670;
var G__30812 = (i__30671 + (1));
seq__30668 = G__30809;
chunk__30669 = G__30810;
count__30670 = G__30811;
i__30671 = G__30812;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30668);
if(temp__5735__auto__){
var seq__30668__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30668__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__30668__$1);
var G__30814 = cljs.core.chunk_rest(seq__30668__$1);
var G__30815 = c__4556__auto__;
var G__30816 = cljs.core.count(c__4556__auto__);
var G__30817 = (0);
seq__30668 = G__30814;
chunk__30669 = G__30815;
count__30670 = G__30816;
i__30671 = G__30817;
continue;
} else {
var event = cljs.core.first(seq__30668__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__30819 = cljs.core.next(seq__30668__$1);
var G__30820 = null;
var G__30821 = (0);
var G__30822 = (0);
seq__30668 = G__30819;
chunk__30669 = G__30820;
count__30670 = G__30821;
i__30671 = G__30822;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__30674 = cljs.core.seq(value);
var chunk__30677 = null;
var count__30680 = (0);
var i__30681 = (0);
while(true){
if((i__30681 < count__30680)){
var event = chunk__30677.cljs$core$IIndexed$_nth$arity$2(null,i__30681);
clear_event(event);


var G__30823 = seq__30674;
var G__30824 = chunk__30677;
var G__30825 = count__30680;
var G__30826 = (i__30681 + (1));
seq__30674 = G__30823;
chunk__30677 = G__30824;
count__30680 = G__30825;
i__30681 = G__30826;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30674);
if(temp__5735__auto__){
var seq__30674__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30674__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__30674__$1);
var G__30827 = cljs.core.chunk_rest(seq__30674__$1);
var G__30828 = c__4556__auto__;
var G__30829 = cljs.core.count(c__4556__auto__);
var G__30830 = (0);
seq__30674 = G__30827;
chunk__30677 = G__30828;
count__30680 = G__30829;
i__30681 = G__30830;
continue;
} else {
var event = cljs.core.first(seq__30674__$1);
clear_event(event);


var G__30831 = cljs.core.next(seq__30674__$1);
var G__30832 = null;
var G__30833 = (0);
var G__30834 = (0);
seq__30674 = G__30831;
chunk__30677 = G__30832;
count__30680 = G__30833;
i__30681 = G__30834;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
