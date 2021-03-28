goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37522 = arguments.length;
var i__4737__auto___37523 = (0);
while(true){
if((i__4737__auto___37523 < len__4736__auto___37522)){
args__4742__auto__.push((arguments[i__4737__auto___37523]));

var G__37524 = (i__4737__auto___37523 + (1));
i__4737__auto___37523 = G__37524;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37250){
var G__37251 = cljs.core.first(seq37250);
var seq37250__$1 = cljs.core.next(seq37250);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37251,seq37250__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37273 = cljs.core.seq(sources);
var chunk__37274 = null;
var count__37275 = (0);
var i__37276 = (0);
while(true){
if((i__37276 < count__37275)){
var map__37319 = chunk__37274.cljs$core$IIndexed$_nth$arity$2(null,i__37276);
var map__37319__$1 = (((((!((map__37319 == null))))?(((((map__37319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37319):map__37319);
var src = map__37319__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37319__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37319__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37319__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37319__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37324){var e_37525 = e37324;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37525);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37525.message)].join('')));
}

var G__37526 = seq__37273;
var G__37527 = chunk__37274;
var G__37528 = count__37275;
var G__37529 = (i__37276 + (1));
seq__37273 = G__37526;
chunk__37274 = G__37527;
count__37275 = G__37528;
i__37276 = G__37529;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37273);
if(temp__5735__auto__){
var seq__37273__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37273__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37273__$1);
var G__37530 = cljs.core.chunk_rest(seq__37273__$1);
var G__37531 = c__4556__auto__;
var G__37532 = cljs.core.count(c__4556__auto__);
var G__37533 = (0);
seq__37273 = G__37530;
chunk__37274 = G__37531;
count__37275 = G__37532;
i__37276 = G__37533;
continue;
} else {
var map__37337 = cljs.core.first(seq__37273__$1);
var map__37337__$1 = (((((!((map__37337 == null))))?(((((map__37337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37337):map__37337);
var src = map__37337__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37337__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37337__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37337__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37337__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37339){var e_37534 = e37339;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37534);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37534.message)].join('')));
}

var G__37535 = cljs.core.next(seq__37273__$1);
var G__37536 = null;
var G__37537 = (0);
var G__37538 = (0);
seq__37273 = G__37535;
chunk__37274 = G__37536;
count__37275 = G__37537;
i__37276 = G__37538;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37348 = cljs.core.seq(js_requires);
var chunk__37349 = null;
var count__37350 = (0);
var i__37351 = (0);
while(true){
if((i__37351 < count__37350)){
var js_ns = chunk__37349.cljs$core$IIndexed$_nth$arity$2(null,i__37351);
var require_str_37543 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37543);


var G__37544 = seq__37348;
var G__37545 = chunk__37349;
var G__37546 = count__37350;
var G__37547 = (i__37351 + (1));
seq__37348 = G__37544;
chunk__37349 = G__37545;
count__37350 = G__37546;
i__37351 = G__37547;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37348);
if(temp__5735__auto__){
var seq__37348__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37348__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37348__$1);
var G__37548 = cljs.core.chunk_rest(seq__37348__$1);
var G__37549 = c__4556__auto__;
var G__37550 = cljs.core.count(c__4556__auto__);
var G__37551 = (0);
seq__37348 = G__37548;
chunk__37349 = G__37549;
count__37350 = G__37550;
i__37351 = G__37551;
continue;
} else {
var js_ns = cljs.core.first(seq__37348__$1);
var require_str_37552 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37552);


var G__37553 = cljs.core.next(seq__37348__$1);
var G__37554 = null;
var G__37555 = (0);
var G__37556 = (0);
seq__37348 = G__37553;
chunk__37349 = G__37554;
count__37350 = G__37555;
i__37351 = G__37556;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37355){
var map__37356 = p__37355;
var map__37356__$1 = (((((!((map__37356 == null))))?(((((map__37356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37356):map__37356);
var msg = map__37356__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37356__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37356__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37359(s__37360){
return (new cljs.core.LazySeq(null,(function (){
var s__37360__$1 = s__37360;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37360__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__37365 = cljs.core.first(xs__6292__auto__);
var map__37365__$1 = (((((!((map__37365 == null))))?(((((map__37365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37365):map__37365);
var src = map__37365__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37365__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37365__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__37360__$1,map__37365,map__37365__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37356,map__37356__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37359_$_iter__37361(s__37362){
return (new cljs.core.LazySeq(null,((function (s__37360__$1,map__37365,map__37365__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37356,map__37356__$1,msg,info,reload_info){
return (function (){
var s__37362__$1 = s__37362;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37362__$1);
if(temp__5735__auto____$1){
var s__37362__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37362__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__37362__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__37364 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__37363 = (0);
while(true){
if((i__37363 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__37363);
cljs.core.chunk_append(b__37364,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37558 = (i__37363 + (1));
i__37363 = G__37558;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37364),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37359_$_iter__37361(cljs.core.chunk_rest(s__37362__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37364),null);
}
} else {
var warning = cljs.core.first(s__37362__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37359_$_iter__37361(cljs.core.rest(s__37362__$2)));
}
} else {
return null;
}
break;
}
});})(s__37360__$1,map__37365,map__37365__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37356,map__37356__$1,msg,info,reload_info))
,null,null));
});})(s__37360__$1,map__37365,map__37365__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37356,map__37356__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37359(cljs.core.rest(s__37360__$1)));
} else {
var G__37559 = cljs.core.rest(s__37360__$1);
s__37360__$1 = G__37559;
continue;
}
} else {
var G__37560 = cljs.core.rest(s__37360__$1);
s__37360__$1 = G__37560;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37368_37561 = cljs.core.seq(warnings);
var chunk__37369_37562 = null;
var count__37370_37563 = (0);
var i__37371_37564 = (0);
while(true){
if((i__37371_37564 < count__37370_37563)){
var map__37377_37565 = chunk__37369_37562.cljs$core$IIndexed$_nth$arity$2(null,i__37371_37564);
var map__37377_37566__$1 = (((((!((map__37377_37565 == null))))?(((((map__37377_37565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37377_37565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37377_37565):map__37377_37565);
var w_37567 = map__37377_37566__$1;
var msg_37568__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37377_37566__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37377_37566__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37377_37566__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37377_37566__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37571)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37569),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37570),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37568__$1)].join(''));


var G__37572 = seq__37368_37561;
var G__37573 = chunk__37369_37562;
var G__37574 = count__37370_37563;
var G__37575 = (i__37371_37564 + (1));
seq__37368_37561 = G__37572;
chunk__37369_37562 = G__37573;
count__37370_37563 = G__37574;
i__37371_37564 = G__37575;
continue;
} else {
var temp__5735__auto___37576 = cljs.core.seq(seq__37368_37561);
if(temp__5735__auto___37576){
var seq__37368_37577__$1 = temp__5735__auto___37576;
if(cljs.core.chunked_seq_QMARK_(seq__37368_37577__$1)){
var c__4556__auto___37578 = cljs.core.chunk_first(seq__37368_37577__$1);
var G__37579 = cljs.core.chunk_rest(seq__37368_37577__$1);
var G__37580 = c__4556__auto___37578;
var G__37581 = cljs.core.count(c__4556__auto___37578);
var G__37582 = (0);
seq__37368_37561 = G__37579;
chunk__37369_37562 = G__37580;
count__37370_37563 = G__37581;
i__37371_37564 = G__37582;
continue;
} else {
var map__37380_37583 = cljs.core.first(seq__37368_37577__$1);
var map__37380_37584__$1 = (((((!((map__37380_37583 == null))))?(((((map__37380_37583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37380_37583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37380_37583):map__37380_37583);
var w_37585 = map__37380_37584__$1;
var msg_37586__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37380_37584__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37380_37584__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37380_37584__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37380_37584__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37589)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37587),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37588),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37586__$1)].join(''));


var G__37590 = cljs.core.next(seq__37368_37577__$1);
var G__37591 = null;
var G__37592 = (0);
var G__37593 = (0);
seq__37368_37561 = G__37590;
chunk__37369_37562 = G__37591;
count__37370_37563 = G__37592;
i__37371_37564 = G__37593;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37354_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37354_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37388){
var map__37389 = p__37388;
var map__37389__$1 = (((((!((map__37389 == null))))?(((((map__37389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37389):map__37389);
var msg = map__37389__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37389__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37391 = cljs.core.seq(updates);
var chunk__37397 = null;
var count__37398 = (0);
var i__37399 = (0);
while(true){
if((i__37399 < count__37398)){
var path = chunk__37397.cljs$core$IIndexed$_nth$arity$2(null,i__37399);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37445_37594 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37449_37595 = null;
var count__37450_37596 = (0);
var i__37451_37597 = (0);
while(true){
if((i__37451_37597 < count__37450_37596)){
var node_37598 = chunk__37449_37595.cljs$core$IIndexed$_nth$arity$2(null,i__37451_37597);
if(cljs.core.not(node_37598.shadow$old)){
var path_match_37599 = shadow.cljs.devtools.client.browser.match_paths(node_37598.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37599)){
var new_link_37600 = (function (){var G__37462 = node_37598.cloneNode(true);
G__37462.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37599),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37462;
})();
(node_37598.shadow$old = true);

(new_link_37600.onload = ((function (seq__37445_37594,chunk__37449_37595,count__37450_37596,i__37451_37597,seq__37391,chunk__37397,count__37398,i__37399,new_link_37600,path_match_37599,node_37598,path,map__37389,map__37389__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37598);
});})(seq__37445_37594,chunk__37449_37595,count__37450_37596,i__37451_37597,seq__37391,chunk__37397,count__37398,i__37399,new_link_37600,path_match_37599,node_37598,path,map__37389,map__37389__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37599], 0));

goog.dom.insertSiblingAfter(new_link_37600,node_37598);


var G__37601 = seq__37445_37594;
var G__37602 = chunk__37449_37595;
var G__37603 = count__37450_37596;
var G__37604 = (i__37451_37597 + (1));
seq__37445_37594 = G__37601;
chunk__37449_37595 = G__37602;
count__37450_37596 = G__37603;
i__37451_37597 = G__37604;
continue;
} else {
var G__37605 = seq__37445_37594;
var G__37606 = chunk__37449_37595;
var G__37607 = count__37450_37596;
var G__37608 = (i__37451_37597 + (1));
seq__37445_37594 = G__37605;
chunk__37449_37595 = G__37606;
count__37450_37596 = G__37607;
i__37451_37597 = G__37608;
continue;
}
} else {
var G__37609 = seq__37445_37594;
var G__37610 = chunk__37449_37595;
var G__37611 = count__37450_37596;
var G__37612 = (i__37451_37597 + (1));
seq__37445_37594 = G__37609;
chunk__37449_37595 = G__37610;
count__37450_37596 = G__37611;
i__37451_37597 = G__37612;
continue;
}
} else {
var temp__5735__auto___37613 = cljs.core.seq(seq__37445_37594);
if(temp__5735__auto___37613){
var seq__37445_37614__$1 = temp__5735__auto___37613;
if(cljs.core.chunked_seq_QMARK_(seq__37445_37614__$1)){
var c__4556__auto___37615 = cljs.core.chunk_first(seq__37445_37614__$1);
var G__37616 = cljs.core.chunk_rest(seq__37445_37614__$1);
var G__37617 = c__4556__auto___37615;
var G__37618 = cljs.core.count(c__4556__auto___37615);
var G__37619 = (0);
seq__37445_37594 = G__37616;
chunk__37449_37595 = G__37617;
count__37450_37596 = G__37618;
i__37451_37597 = G__37619;
continue;
} else {
var node_37620 = cljs.core.first(seq__37445_37614__$1);
if(cljs.core.not(node_37620.shadow$old)){
var path_match_37621 = shadow.cljs.devtools.client.browser.match_paths(node_37620.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37621)){
var new_link_37622 = (function (){var G__37465 = node_37620.cloneNode(true);
G__37465.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37621),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37465;
})();
(node_37620.shadow$old = true);

(new_link_37622.onload = ((function (seq__37445_37594,chunk__37449_37595,count__37450_37596,i__37451_37597,seq__37391,chunk__37397,count__37398,i__37399,new_link_37622,path_match_37621,node_37620,seq__37445_37614__$1,temp__5735__auto___37613,path,map__37389,map__37389__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37620);
});})(seq__37445_37594,chunk__37449_37595,count__37450_37596,i__37451_37597,seq__37391,chunk__37397,count__37398,i__37399,new_link_37622,path_match_37621,node_37620,seq__37445_37614__$1,temp__5735__auto___37613,path,map__37389,map__37389__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37621], 0));

goog.dom.insertSiblingAfter(new_link_37622,node_37620);


var G__37623 = cljs.core.next(seq__37445_37614__$1);
var G__37624 = null;
var G__37625 = (0);
var G__37626 = (0);
seq__37445_37594 = G__37623;
chunk__37449_37595 = G__37624;
count__37450_37596 = G__37625;
i__37451_37597 = G__37626;
continue;
} else {
var G__37627 = cljs.core.next(seq__37445_37614__$1);
var G__37628 = null;
var G__37629 = (0);
var G__37630 = (0);
seq__37445_37594 = G__37627;
chunk__37449_37595 = G__37628;
count__37450_37596 = G__37629;
i__37451_37597 = G__37630;
continue;
}
} else {
var G__37631 = cljs.core.next(seq__37445_37614__$1);
var G__37632 = null;
var G__37633 = (0);
var G__37634 = (0);
seq__37445_37594 = G__37631;
chunk__37449_37595 = G__37632;
count__37450_37596 = G__37633;
i__37451_37597 = G__37634;
continue;
}
}
} else {
}
}
break;
}


var G__37635 = seq__37391;
var G__37636 = chunk__37397;
var G__37637 = count__37398;
var G__37638 = (i__37399 + (1));
seq__37391 = G__37635;
chunk__37397 = G__37636;
count__37398 = G__37637;
i__37399 = G__37638;
continue;
} else {
var G__37639 = seq__37391;
var G__37640 = chunk__37397;
var G__37641 = count__37398;
var G__37642 = (i__37399 + (1));
seq__37391 = G__37639;
chunk__37397 = G__37640;
count__37398 = G__37641;
i__37399 = G__37642;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37391);
if(temp__5735__auto__){
var seq__37391__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37391__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37391__$1);
var G__37643 = cljs.core.chunk_rest(seq__37391__$1);
var G__37644 = c__4556__auto__;
var G__37645 = cljs.core.count(c__4556__auto__);
var G__37646 = (0);
seq__37391 = G__37643;
chunk__37397 = G__37644;
count__37398 = G__37645;
i__37399 = G__37646;
continue;
} else {
var path = cljs.core.first(seq__37391__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37466_37647 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37470_37648 = null;
var count__37471_37649 = (0);
var i__37472_37650 = (0);
while(true){
if((i__37472_37650 < count__37471_37649)){
var node_37651 = chunk__37470_37648.cljs$core$IIndexed$_nth$arity$2(null,i__37472_37650);
if(cljs.core.not(node_37651.shadow$old)){
var path_match_37652 = shadow.cljs.devtools.client.browser.match_paths(node_37651.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37652)){
var new_link_37653 = (function (){var G__37479 = node_37651.cloneNode(true);
G__37479.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37652),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37479;
})();
(node_37651.shadow$old = true);

(new_link_37653.onload = ((function (seq__37466_37647,chunk__37470_37648,count__37471_37649,i__37472_37650,seq__37391,chunk__37397,count__37398,i__37399,new_link_37653,path_match_37652,node_37651,path,seq__37391__$1,temp__5735__auto__,map__37389,map__37389__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37651);
});})(seq__37466_37647,chunk__37470_37648,count__37471_37649,i__37472_37650,seq__37391,chunk__37397,count__37398,i__37399,new_link_37653,path_match_37652,node_37651,path,seq__37391__$1,temp__5735__auto__,map__37389,map__37389__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37652], 0));

goog.dom.insertSiblingAfter(new_link_37653,node_37651);


var G__37654 = seq__37466_37647;
var G__37655 = chunk__37470_37648;
var G__37656 = count__37471_37649;
var G__37657 = (i__37472_37650 + (1));
seq__37466_37647 = G__37654;
chunk__37470_37648 = G__37655;
count__37471_37649 = G__37656;
i__37472_37650 = G__37657;
continue;
} else {
var G__37658 = seq__37466_37647;
var G__37659 = chunk__37470_37648;
var G__37660 = count__37471_37649;
var G__37661 = (i__37472_37650 + (1));
seq__37466_37647 = G__37658;
chunk__37470_37648 = G__37659;
count__37471_37649 = G__37660;
i__37472_37650 = G__37661;
continue;
}
} else {
var G__37662 = seq__37466_37647;
var G__37663 = chunk__37470_37648;
var G__37664 = count__37471_37649;
var G__37665 = (i__37472_37650 + (1));
seq__37466_37647 = G__37662;
chunk__37470_37648 = G__37663;
count__37471_37649 = G__37664;
i__37472_37650 = G__37665;
continue;
}
} else {
var temp__5735__auto___37666__$1 = cljs.core.seq(seq__37466_37647);
if(temp__5735__auto___37666__$1){
var seq__37466_37667__$1 = temp__5735__auto___37666__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37466_37667__$1)){
var c__4556__auto___37668 = cljs.core.chunk_first(seq__37466_37667__$1);
var G__37669 = cljs.core.chunk_rest(seq__37466_37667__$1);
var G__37670 = c__4556__auto___37668;
var G__37671 = cljs.core.count(c__4556__auto___37668);
var G__37672 = (0);
seq__37466_37647 = G__37669;
chunk__37470_37648 = G__37670;
count__37471_37649 = G__37671;
i__37472_37650 = G__37672;
continue;
} else {
var node_37673 = cljs.core.first(seq__37466_37667__$1);
if(cljs.core.not(node_37673.shadow$old)){
var path_match_37674 = shadow.cljs.devtools.client.browser.match_paths(node_37673.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37674)){
var new_link_37675 = (function (){var G__37481 = node_37673.cloneNode(true);
G__37481.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37674),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37481;
})();
(node_37673.shadow$old = true);

(new_link_37675.onload = ((function (seq__37466_37647,chunk__37470_37648,count__37471_37649,i__37472_37650,seq__37391,chunk__37397,count__37398,i__37399,new_link_37675,path_match_37674,node_37673,seq__37466_37667__$1,temp__5735__auto___37666__$1,path,seq__37391__$1,temp__5735__auto__,map__37389,map__37389__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37673);
});})(seq__37466_37647,chunk__37470_37648,count__37471_37649,i__37472_37650,seq__37391,chunk__37397,count__37398,i__37399,new_link_37675,path_match_37674,node_37673,seq__37466_37667__$1,temp__5735__auto___37666__$1,path,seq__37391__$1,temp__5735__auto__,map__37389,map__37389__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37674], 0));

goog.dom.insertSiblingAfter(new_link_37675,node_37673);


var G__37676 = cljs.core.next(seq__37466_37667__$1);
var G__37677 = null;
var G__37678 = (0);
var G__37679 = (0);
seq__37466_37647 = G__37676;
chunk__37470_37648 = G__37677;
count__37471_37649 = G__37678;
i__37472_37650 = G__37679;
continue;
} else {
var G__37680 = cljs.core.next(seq__37466_37667__$1);
var G__37681 = null;
var G__37682 = (0);
var G__37683 = (0);
seq__37466_37647 = G__37680;
chunk__37470_37648 = G__37681;
count__37471_37649 = G__37682;
i__37472_37650 = G__37683;
continue;
}
} else {
var G__37684 = cljs.core.next(seq__37466_37667__$1);
var G__37685 = null;
var G__37686 = (0);
var G__37687 = (0);
seq__37466_37647 = G__37684;
chunk__37470_37648 = G__37685;
count__37471_37649 = G__37686;
i__37472_37650 = G__37687;
continue;
}
}
} else {
}
}
break;
}


var G__37688 = cljs.core.next(seq__37391__$1);
var G__37689 = null;
var G__37690 = (0);
var G__37691 = (0);
seq__37391 = G__37688;
chunk__37397 = G__37689;
count__37398 = G__37690;
i__37399 = G__37691;
continue;
} else {
var G__37692 = cljs.core.next(seq__37391__$1);
var G__37693 = null;
var G__37694 = (0);
var G__37695 = (0);
seq__37391 = G__37692;
chunk__37397 = G__37693;
count__37398 = G__37694;
i__37399 = G__37695;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37482){
var map__37483 = p__37482;
var map__37483__$1 = (((((!((map__37483 == null))))?(((((map__37483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37483):map__37483);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37483__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37486){
var map__37487 = p__37486;
var map__37487__$1 = (((((!((map__37487 == null))))?(((((map__37487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37487):map__37487);
var _ = map__37487__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37487__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37489,done,error){
var map__37490 = p__37489;
var map__37490__$1 = (((((!((map__37490 == null))))?(((((map__37490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37490):map__37490);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37490__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37492,done,error){
var map__37493 = p__37492;
var map__37493__$1 = (((((!((map__37493 == null))))?(((((map__37493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37493):map__37493);
var msg = map__37493__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37493__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37493__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37493__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37495){
var map__37496 = p__37495;
var map__37496__$1 = (((((!((map__37496 == null))))?(((((map__37496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37496):map__37496);
var src = map__37496__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37496__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37501 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37501) : done.call(null,G__37501));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37502){
var map__37503 = p__37502;
var map__37503__$1 = (((((!((map__37503 == null))))?(((((map__37503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37503):map__37503);
var msg__$1 = map__37503__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37503__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37505){var ex = e37505;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37506){
var map__37507 = p__37506;
var map__37507__$1 = (((((!((map__37507 == null))))?(((((map__37507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37507):map__37507);
var env = map__37507__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37507__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37513){
var map__37514 = p__37513;
var map__37514__$1 = (((((!((map__37514 == null))))?(((((map__37514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37514):map__37514);
var msg = map__37514__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37514__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37516){
var map__37517 = p__37516;
var map__37517__$1 = (((((!((map__37517 == null))))?(((((map__37517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37517):map__37517);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37517__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37517__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37519){
var map__37520 = p__37519;
var map__37520__$1 = (((((!((map__37520 == null))))?(((((map__37520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37520):map__37520);
var svc = map__37520__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37520__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
