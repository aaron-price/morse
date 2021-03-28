goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__28036 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__28037 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__28037);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___28139 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___28139)){
var new_db_28140 = temp__5735__auto___28139;
var fexpr__28040_28141 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__28040_28141.cljs$core$IFn$_invoke$arity$1 ? fexpr__28040_28141.cljs$core$IFn$_invoke$arity$1(new_db_28140) : fexpr__28040_28141.call(null,new_db_28140));
} else {
}

var seq__28041 = cljs.core.seq(effects_without_db);
var chunk__28042 = null;
var count__28043 = (0);
var i__28044 = (0);
while(true){
if((i__28044 < count__28043)){
var vec__28057 = chunk__28042.cljs$core$IIndexed$_nth$arity$2(null,i__28044);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28057,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28057,(1),null);
var temp__5733__auto___28144 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28144)){
var effect_fn_28145 = temp__5733__auto___28144;
(effect_fn_28145.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28145.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28145.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28146 = seq__28041;
var G__28147 = chunk__28042;
var G__28148 = count__28043;
var G__28149 = (i__28044 + (1));
seq__28041 = G__28146;
chunk__28042 = G__28147;
count__28043 = G__28148;
i__28044 = G__28149;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28041);
if(temp__5735__auto__){
var seq__28041__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28041__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28041__$1);
var G__28152 = cljs.core.chunk_rest(seq__28041__$1);
var G__28153 = c__4556__auto__;
var G__28154 = cljs.core.count(c__4556__auto__);
var G__28155 = (0);
seq__28041 = G__28152;
chunk__28042 = G__28153;
count__28043 = G__28154;
i__28044 = G__28155;
continue;
} else {
var vec__28063 = cljs.core.first(seq__28041__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28063,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28063,(1),null);
var temp__5733__auto___28156 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28156)){
var effect_fn_28157 = temp__5733__auto___28156;
(effect_fn_28157.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28157.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28157.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28158 = cljs.core.next(seq__28041__$1);
var G__28159 = null;
var G__28160 = (0);
var G__28161 = (0);
seq__28041 = G__28158;
chunk__28042 = G__28159;
count__28043 = G__28160;
i__28044 = G__28161;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__27723__auto___28162 = re_frame.interop.now();
var duration__27724__auto___28163 = (end__27723__auto___28162 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27724__auto___28163,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__27723__auto___28162);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__28036);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___28166 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___28166)){
var new_db_28167 = temp__5735__auto___28166;
var fexpr__28068_28168 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__28068_28168.cljs$core$IFn$_invoke$arity$1 ? fexpr__28068_28168.cljs$core$IFn$_invoke$arity$1(new_db_28167) : fexpr__28068_28168.call(null,new_db_28167));
} else {
}

var seq__28069 = cljs.core.seq(effects_without_db);
var chunk__28070 = null;
var count__28071 = (0);
var i__28072 = (0);
while(true){
if((i__28072 < count__28071)){
var vec__28081 = chunk__28070.cljs$core$IIndexed$_nth$arity$2(null,i__28072);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28081,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28081,(1),null);
var temp__5733__auto___28170 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28170)){
var effect_fn_28172 = temp__5733__auto___28170;
(effect_fn_28172.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28172.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28172.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28173 = seq__28069;
var G__28174 = chunk__28070;
var G__28175 = count__28071;
var G__28176 = (i__28072 + (1));
seq__28069 = G__28173;
chunk__28070 = G__28174;
count__28071 = G__28175;
i__28072 = G__28176;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28069);
if(temp__5735__auto__){
var seq__28069__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28069__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28069__$1);
var G__28177 = cljs.core.chunk_rest(seq__28069__$1);
var G__28178 = c__4556__auto__;
var G__28179 = cljs.core.count(c__4556__auto__);
var G__28180 = (0);
seq__28069 = G__28177;
chunk__28070 = G__28178;
count__28071 = G__28179;
i__28072 = G__28180;
continue;
} else {
var vec__28085 = cljs.core.first(seq__28069__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28085,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28085,(1),null);
var temp__5733__auto___28181 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28181)){
var effect_fn_28182 = temp__5733__auto___28181;
(effect_fn_28182.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28182.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28182.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28185 = cljs.core.next(seq__28069__$1);
var G__28186 = null;
var G__28187 = (0);
var G__28188 = (0);
seq__28069 = G__28185;
chunk__28070 = G__28186;
count__28071 = G__28187;
i__28072 = G__28188;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__28089){
var map__28090 = p__28089;
var map__28090__$1 = (((((!((map__28090 == null))))?(((((map__28090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28090):map__28090);
var effect = map__28090__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28090__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28090__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__28094 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__28095 = null;
var count__28096 = (0);
var i__28097 = (0);
while(true){
if((i__28097 < count__28096)){
var effect = chunk__28095.cljs$core$IIndexed$_nth$arity$2(null,i__28097);
re_frame.fx.dispatch_later(effect);


var G__28191 = seq__28094;
var G__28192 = chunk__28095;
var G__28193 = count__28096;
var G__28194 = (i__28097 + (1));
seq__28094 = G__28191;
chunk__28095 = G__28192;
count__28096 = G__28193;
i__28097 = G__28194;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28094);
if(temp__5735__auto__){
var seq__28094__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28094__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28094__$1);
var G__28195 = cljs.core.chunk_rest(seq__28094__$1);
var G__28196 = c__4556__auto__;
var G__28197 = cljs.core.count(c__4556__auto__);
var G__28198 = (0);
seq__28094 = G__28195;
chunk__28095 = G__28196;
count__28096 = G__28197;
i__28097 = G__28198;
continue;
} else {
var effect = cljs.core.first(seq__28094__$1);
re_frame.fx.dispatch_later(effect);


var G__28199 = cljs.core.next(seq__28094__$1);
var G__28200 = null;
var G__28201 = (0);
var G__28202 = (0);
seq__28094 = G__28199;
chunk__28095 = G__28200;
count__28096 = G__28201;
i__28097 = G__28202;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__28099 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__28100 = null;
var count__28101 = (0);
var i__28102 = (0);
while(true){
if((i__28102 < count__28101)){
var vec__28109 = chunk__28100.cljs$core$IIndexed$_nth$arity$2(null,i__28102);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28109,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28109,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___28205 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28205)){
var effect_fn_28206 = temp__5733__auto___28205;
(effect_fn_28206.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28206.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28206.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__28207 = seq__28099;
var G__28208 = chunk__28100;
var G__28209 = count__28101;
var G__28210 = (i__28102 + (1));
seq__28099 = G__28207;
chunk__28100 = G__28208;
count__28101 = G__28209;
i__28102 = G__28210;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28099);
if(temp__5735__auto__){
var seq__28099__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28099__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28099__$1);
var G__28211 = cljs.core.chunk_rest(seq__28099__$1);
var G__28212 = c__4556__auto__;
var G__28213 = cljs.core.count(c__4556__auto__);
var G__28214 = (0);
seq__28099 = G__28211;
chunk__28100 = G__28212;
count__28101 = G__28213;
i__28102 = G__28214;
continue;
} else {
var vec__28113 = cljs.core.first(seq__28099__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28113,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28113,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___28217 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28217)){
var effect_fn_28218 = temp__5733__auto___28217;
(effect_fn_28218.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28218.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28218.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__28219 = cljs.core.next(seq__28099__$1);
var G__28220 = null;
var G__28221 = (0);
var G__28222 = (0);
seq__28099 = G__28219;
chunk__28100 = G__28220;
count__28101 = G__28221;
i__28102 = G__28222;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__28118 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__28119 = null;
var count__28120 = (0);
var i__28121 = (0);
while(true){
if((i__28121 < count__28120)){
var event = chunk__28119.cljs$core$IIndexed$_nth$arity$2(null,i__28121);
re_frame.router.dispatch(event);


var G__28224 = seq__28118;
var G__28225 = chunk__28119;
var G__28226 = count__28120;
var G__28227 = (i__28121 + (1));
seq__28118 = G__28224;
chunk__28119 = G__28225;
count__28120 = G__28226;
i__28121 = G__28227;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28118);
if(temp__5735__auto__){
var seq__28118__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28118__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28118__$1);
var G__28229 = cljs.core.chunk_rest(seq__28118__$1);
var G__28230 = c__4556__auto__;
var G__28231 = cljs.core.count(c__4556__auto__);
var G__28232 = (0);
seq__28118 = G__28229;
chunk__28119 = G__28230;
count__28120 = G__28231;
i__28121 = G__28232;
continue;
} else {
var event = cljs.core.first(seq__28118__$1);
re_frame.router.dispatch(event);


var G__28234 = cljs.core.next(seq__28118__$1);
var G__28235 = null;
var G__28236 = (0);
var G__28237 = (0);
seq__28118 = G__28234;
chunk__28119 = G__28235;
count__28120 = G__28236;
i__28121 = G__28237;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__28122 = cljs.core.seq(value);
var chunk__28123 = null;
var count__28124 = (0);
var i__28125 = (0);
while(true){
if((i__28125 < count__28124)){
var event = chunk__28123.cljs$core$IIndexed$_nth$arity$2(null,i__28125);
clear_event(event);


var G__28239 = seq__28122;
var G__28240 = chunk__28123;
var G__28241 = count__28124;
var G__28242 = (i__28125 + (1));
seq__28122 = G__28239;
chunk__28123 = G__28240;
count__28124 = G__28241;
i__28125 = G__28242;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28122);
if(temp__5735__auto__){
var seq__28122__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28122__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28122__$1);
var G__28244 = cljs.core.chunk_rest(seq__28122__$1);
var G__28245 = c__4556__auto__;
var G__28246 = cljs.core.count(c__4556__auto__);
var G__28247 = (0);
seq__28122 = G__28244;
chunk__28123 = G__28245;
count__28124 = G__28246;
i__28125 = G__28247;
continue;
} else {
var event = cljs.core.first(seq__28122__$1);
clear_event(event);


var G__28248 = cljs.core.next(seq__28122__$1);
var G__28249 = null;
var G__28250 = (0);
var G__28251 = (0);
seq__28122 = G__28248;
chunk__28123 = G__28249;
count__28124 = G__28250;
i__28125 = G__28251;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
