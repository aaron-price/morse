goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36911 = arguments.length;
var i__4737__auto___36912 = (0);
while(true){
if((i__4737__auto___36912 < len__4736__auto___36911)){
args__4742__auto__.push((arguments[i__4737__auto___36912]));

var G__36913 = (i__4737__auto___36912 + (1));
i__4737__auto___36912 = G__36913;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36760){
var G__36761 = cljs.core.first(seq36760);
var seq36760__$1 = cljs.core.next(seq36760);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36761,seq36760__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36763 = cljs.core.seq(sources);
var chunk__36764 = null;
var count__36765 = (0);
var i__36766 = (0);
while(true){
if((i__36766 < count__36765)){
var map__36776 = chunk__36764.cljs$core$IIndexed$_nth$arity$2(null,i__36766);
var map__36776__$1 = (((((!((map__36776 == null))))?(((((map__36776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36776):map__36776);
var src = map__36776__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36776__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36776__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36776__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36776__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36780){var e_36914 = e36780;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36914);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36914.message)].join('')));
}

var G__36915 = seq__36763;
var G__36916 = chunk__36764;
var G__36917 = count__36765;
var G__36918 = (i__36766 + (1));
seq__36763 = G__36915;
chunk__36764 = G__36916;
count__36765 = G__36917;
i__36766 = G__36918;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36763);
if(temp__5735__auto__){
var seq__36763__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36763__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36763__$1);
var G__36919 = cljs.core.chunk_rest(seq__36763__$1);
var G__36920 = c__4556__auto__;
var G__36921 = cljs.core.count(c__4556__auto__);
var G__36922 = (0);
seq__36763 = G__36919;
chunk__36764 = G__36920;
count__36765 = G__36921;
i__36766 = G__36922;
continue;
} else {
var map__36781 = cljs.core.first(seq__36763__$1);
var map__36781__$1 = (((((!((map__36781 == null))))?(((((map__36781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36781):map__36781);
var src = map__36781__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36781__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36781__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36781__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36781__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36783){var e_36923 = e36783;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36923);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36923.message)].join('')));
}

var G__36924 = cljs.core.next(seq__36763__$1);
var G__36925 = null;
var G__36926 = (0);
var G__36927 = (0);
seq__36763 = G__36924;
chunk__36764 = G__36925;
count__36765 = G__36926;
i__36766 = G__36927;
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
var seq__36784 = cljs.core.seq(js_requires);
var chunk__36785 = null;
var count__36786 = (0);
var i__36787 = (0);
while(true){
if((i__36787 < count__36786)){
var js_ns = chunk__36785.cljs$core$IIndexed$_nth$arity$2(null,i__36787);
var require_str_36928 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36928);


var G__36929 = seq__36784;
var G__36930 = chunk__36785;
var G__36931 = count__36786;
var G__36932 = (i__36787 + (1));
seq__36784 = G__36929;
chunk__36785 = G__36930;
count__36786 = G__36931;
i__36787 = G__36932;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36784);
if(temp__5735__auto__){
var seq__36784__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36784__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36784__$1);
var G__36933 = cljs.core.chunk_rest(seq__36784__$1);
var G__36934 = c__4556__auto__;
var G__36935 = cljs.core.count(c__4556__auto__);
var G__36936 = (0);
seq__36784 = G__36933;
chunk__36785 = G__36934;
count__36786 = G__36935;
i__36787 = G__36936;
continue;
} else {
var js_ns = cljs.core.first(seq__36784__$1);
var require_str_36937 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36937);


var G__36938 = cljs.core.next(seq__36784__$1);
var G__36939 = null;
var G__36940 = (0);
var G__36941 = (0);
seq__36784 = G__36938;
chunk__36785 = G__36939;
count__36786 = G__36940;
i__36787 = G__36941;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36789){
var map__36790 = p__36789;
var map__36790__$1 = (((((!((map__36790 == null))))?(((((map__36790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36790):map__36790);
var msg = map__36790__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36790__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36790__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36792(s__36793){
return (new cljs.core.LazySeq(null,(function (){
var s__36793__$1 = s__36793;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36793__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__36799 = cljs.core.first(xs__6292__auto__);
var map__36799__$1 = (((((!((map__36799 == null))))?(((((map__36799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36799):map__36799);
var src = map__36799__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36799__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36799__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__36793__$1,map__36799,map__36799__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36790,map__36790__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36792_$_iter__36794(s__36795){
return (new cljs.core.LazySeq(null,((function (s__36793__$1,map__36799,map__36799__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36790,map__36790__$1,msg,info,reload_info){
return (function (){
var s__36795__$1 = s__36795;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36795__$1);
if(temp__5735__auto____$1){
var s__36795__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36795__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36795__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36797 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36796 = (0);
while(true){
if((i__36796 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__36796);
cljs.core.chunk_append(b__36797,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36942 = (i__36796 + (1));
i__36796 = G__36942;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36797),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36792_$_iter__36794(cljs.core.chunk_rest(s__36795__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36797),null);
}
} else {
var warning = cljs.core.first(s__36795__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36792_$_iter__36794(cljs.core.rest(s__36795__$2)));
}
} else {
return null;
}
break;
}
});})(s__36793__$1,map__36799,map__36799__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36790,map__36790__$1,msg,info,reload_info))
,null,null));
});})(s__36793__$1,map__36799,map__36799__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36790,map__36790__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36792(cljs.core.rest(s__36793__$1)));
} else {
var G__36943 = cljs.core.rest(s__36793__$1);
s__36793__$1 = G__36943;
continue;
}
} else {
var G__36944 = cljs.core.rest(s__36793__$1);
s__36793__$1 = G__36944;
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
var seq__36802_36945 = cljs.core.seq(warnings);
var chunk__36803_36946 = null;
var count__36804_36947 = (0);
var i__36805_36948 = (0);
while(true){
if((i__36805_36948 < count__36804_36947)){
var map__36810_36949 = chunk__36803_36946.cljs$core$IIndexed$_nth$arity$2(null,i__36805_36948);
var map__36810_36950__$1 = (((((!((map__36810_36949 == null))))?(((((map__36810_36949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36810_36949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36810_36949):map__36810_36949);
var w_36951 = map__36810_36950__$1;
var msg_36952__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36810_36950__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36810_36950__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36810_36950__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36810_36950__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36955)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36953),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36954),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36952__$1)].join(''));


var G__36956 = seq__36802_36945;
var G__36957 = chunk__36803_36946;
var G__36958 = count__36804_36947;
var G__36959 = (i__36805_36948 + (1));
seq__36802_36945 = G__36956;
chunk__36803_36946 = G__36957;
count__36804_36947 = G__36958;
i__36805_36948 = G__36959;
continue;
} else {
var temp__5735__auto___36960 = cljs.core.seq(seq__36802_36945);
if(temp__5735__auto___36960){
var seq__36802_36961__$1 = temp__5735__auto___36960;
if(cljs.core.chunked_seq_QMARK_(seq__36802_36961__$1)){
var c__4556__auto___36962 = cljs.core.chunk_first(seq__36802_36961__$1);
var G__36963 = cljs.core.chunk_rest(seq__36802_36961__$1);
var G__36964 = c__4556__auto___36962;
var G__36965 = cljs.core.count(c__4556__auto___36962);
var G__36966 = (0);
seq__36802_36945 = G__36963;
chunk__36803_36946 = G__36964;
count__36804_36947 = G__36965;
i__36805_36948 = G__36966;
continue;
} else {
var map__36812_36967 = cljs.core.first(seq__36802_36961__$1);
var map__36812_36968__$1 = (((((!((map__36812_36967 == null))))?(((((map__36812_36967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36812_36967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36812_36967):map__36812_36967);
var w_36969 = map__36812_36968__$1;
var msg_36970__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36812_36968__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36812_36968__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36812_36968__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36812_36968__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36973)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36971),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36972),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36970__$1)].join(''));


var G__36974 = cljs.core.next(seq__36802_36961__$1);
var G__36975 = null;
var G__36976 = (0);
var G__36977 = (0);
seq__36802_36945 = G__36974;
chunk__36803_36946 = G__36975;
count__36804_36947 = G__36976;
i__36805_36948 = G__36977;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36788_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36788_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36814){
var map__36815 = p__36814;
var map__36815__$1 = (((((!((map__36815 == null))))?(((((map__36815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36815):map__36815);
var msg = map__36815__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36815__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36817 = cljs.core.seq(updates);
var chunk__36819 = null;
var count__36820 = (0);
var i__36821 = (0);
while(true){
if((i__36821 < count__36820)){
var path = chunk__36819.cljs$core$IIndexed$_nth$arity$2(null,i__36821);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36851_36978 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36855_36979 = null;
var count__36856_36980 = (0);
var i__36857_36981 = (0);
while(true){
if((i__36857_36981 < count__36856_36980)){
var node_36982 = chunk__36855_36979.cljs$core$IIndexed$_nth$arity$2(null,i__36857_36981);
if(cljs.core.not(node_36982.shadow$old)){
var path_match_36983 = shadow.cljs.devtools.client.browser.match_paths(node_36982.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36983)){
var new_link_36984 = (function (){var G__36863 = node_36982.cloneNode(true);
G__36863.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36983),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36863;
})();
(node_36982.shadow$old = true);

(new_link_36984.onload = ((function (seq__36851_36978,chunk__36855_36979,count__36856_36980,i__36857_36981,seq__36817,chunk__36819,count__36820,i__36821,new_link_36984,path_match_36983,node_36982,path,map__36815,map__36815__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36982);
});})(seq__36851_36978,chunk__36855_36979,count__36856_36980,i__36857_36981,seq__36817,chunk__36819,count__36820,i__36821,new_link_36984,path_match_36983,node_36982,path,map__36815,map__36815__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36983], 0));

goog.dom.insertSiblingAfter(new_link_36984,node_36982);


var G__36985 = seq__36851_36978;
var G__36986 = chunk__36855_36979;
var G__36987 = count__36856_36980;
var G__36988 = (i__36857_36981 + (1));
seq__36851_36978 = G__36985;
chunk__36855_36979 = G__36986;
count__36856_36980 = G__36987;
i__36857_36981 = G__36988;
continue;
} else {
var G__36989 = seq__36851_36978;
var G__36990 = chunk__36855_36979;
var G__36991 = count__36856_36980;
var G__36992 = (i__36857_36981 + (1));
seq__36851_36978 = G__36989;
chunk__36855_36979 = G__36990;
count__36856_36980 = G__36991;
i__36857_36981 = G__36992;
continue;
}
} else {
var G__36993 = seq__36851_36978;
var G__36994 = chunk__36855_36979;
var G__36995 = count__36856_36980;
var G__36996 = (i__36857_36981 + (1));
seq__36851_36978 = G__36993;
chunk__36855_36979 = G__36994;
count__36856_36980 = G__36995;
i__36857_36981 = G__36996;
continue;
}
} else {
var temp__5735__auto___36997 = cljs.core.seq(seq__36851_36978);
if(temp__5735__auto___36997){
var seq__36851_36998__$1 = temp__5735__auto___36997;
if(cljs.core.chunked_seq_QMARK_(seq__36851_36998__$1)){
var c__4556__auto___36999 = cljs.core.chunk_first(seq__36851_36998__$1);
var G__37000 = cljs.core.chunk_rest(seq__36851_36998__$1);
var G__37001 = c__4556__auto___36999;
var G__37002 = cljs.core.count(c__4556__auto___36999);
var G__37003 = (0);
seq__36851_36978 = G__37000;
chunk__36855_36979 = G__37001;
count__36856_36980 = G__37002;
i__36857_36981 = G__37003;
continue;
} else {
var node_37004 = cljs.core.first(seq__36851_36998__$1);
if(cljs.core.not(node_37004.shadow$old)){
var path_match_37005 = shadow.cljs.devtools.client.browser.match_paths(node_37004.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37005)){
var new_link_37006 = (function (){var G__36864 = node_37004.cloneNode(true);
G__36864.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37005),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36864;
})();
(node_37004.shadow$old = true);

(new_link_37006.onload = ((function (seq__36851_36978,chunk__36855_36979,count__36856_36980,i__36857_36981,seq__36817,chunk__36819,count__36820,i__36821,new_link_37006,path_match_37005,node_37004,seq__36851_36998__$1,temp__5735__auto___36997,path,map__36815,map__36815__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37004);
});})(seq__36851_36978,chunk__36855_36979,count__36856_36980,i__36857_36981,seq__36817,chunk__36819,count__36820,i__36821,new_link_37006,path_match_37005,node_37004,seq__36851_36998__$1,temp__5735__auto___36997,path,map__36815,map__36815__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37005], 0));

goog.dom.insertSiblingAfter(new_link_37006,node_37004);


var G__37007 = cljs.core.next(seq__36851_36998__$1);
var G__37008 = null;
var G__37009 = (0);
var G__37010 = (0);
seq__36851_36978 = G__37007;
chunk__36855_36979 = G__37008;
count__36856_36980 = G__37009;
i__36857_36981 = G__37010;
continue;
} else {
var G__37011 = cljs.core.next(seq__36851_36998__$1);
var G__37012 = null;
var G__37013 = (0);
var G__37014 = (0);
seq__36851_36978 = G__37011;
chunk__36855_36979 = G__37012;
count__36856_36980 = G__37013;
i__36857_36981 = G__37014;
continue;
}
} else {
var G__37015 = cljs.core.next(seq__36851_36998__$1);
var G__37016 = null;
var G__37017 = (0);
var G__37018 = (0);
seq__36851_36978 = G__37015;
chunk__36855_36979 = G__37016;
count__36856_36980 = G__37017;
i__36857_36981 = G__37018;
continue;
}
}
} else {
}
}
break;
}


var G__37019 = seq__36817;
var G__37020 = chunk__36819;
var G__37021 = count__36820;
var G__37022 = (i__36821 + (1));
seq__36817 = G__37019;
chunk__36819 = G__37020;
count__36820 = G__37021;
i__36821 = G__37022;
continue;
} else {
var G__37023 = seq__36817;
var G__37024 = chunk__36819;
var G__37025 = count__36820;
var G__37026 = (i__36821 + (1));
seq__36817 = G__37023;
chunk__36819 = G__37024;
count__36820 = G__37025;
i__36821 = G__37026;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36817);
if(temp__5735__auto__){
var seq__36817__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36817__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36817__$1);
var G__37027 = cljs.core.chunk_rest(seq__36817__$1);
var G__37028 = c__4556__auto__;
var G__37029 = cljs.core.count(c__4556__auto__);
var G__37030 = (0);
seq__36817 = G__37027;
chunk__36819 = G__37028;
count__36820 = G__37029;
i__36821 = G__37030;
continue;
} else {
var path = cljs.core.first(seq__36817__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36865_37031 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36869_37032 = null;
var count__36870_37033 = (0);
var i__36871_37034 = (0);
while(true){
if((i__36871_37034 < count__36870_37033)){
var node_37035 = chunk__36869_37032.cljs$core$IIndexed$_nth$arity$2(null,i__36871_37034);
if(cljs.core.not(node_37035.shadow$old)){
var path_match_37036 = shadow.cljs.devtools.client.browser.match_paths(node_37035.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37036)){
var new_link_37037 = (function (){var G__36877 = node_37035.cloneNode(true);
G__36877.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37036),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36877;
})();
(node_37035.shadow$old = true);

(new_link_37037.onload = ((function (seq__36865_37031,chunk__36869_37032,count__36870_37033,i__36871_37034,seq__36817,chunk__36819,count__36820,i__36821,new_link_37037,path_match_37036,node_37035,path,seq__36817__$1,temp__5735__auto__,map__36815,map__36815__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37035);
});})(seq__36865_37031,chunk__36869_37032,count__36870_37033,i__36871_37034,seq__36817,chunk__36819,count__36820,i__36821,new_link_37037,path_match_37036,node_37035,path,seq__36817__$1,temp__5735__auto__,map__36815,map__36815__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37036], 0));

goog.dom.insertSiblingAfter(new_link_37037,node_37035);


var G__37038 = seq__36865_37031;
var G__37039 = chunk__36869_37032;
var G__37040 = count__36870_37033;
var G__37041 = (i__36871_37034 + (1));
seq__36865_37031 = G__37038;
chunk__36869_37032 = G__37039;
count__36870_37033 = G__37040;
i__36871_37034 = G__37041;
continue;
} else {
var G__37042 = seq__36865_37031;
var G__37043 = chunk__36869_37032;
var G__37044 = count__36870_37033;
var G__37045 = (i__36871_37034 + (1));
seq__36865_37031 = G__37042;
chunk__36869_37032 = G__37043;
count__36870_37033 = G__37044;
i__36871_37034 = G__37045;
continue;
}
} else {
var G__37046 = seq__36865_37031;
var G__37047 = chunk__36869_37032;
var G__37048 = count__36870_37033;
var G__37049 = (i__36871_37034 + (1));
seq__36865_37031 = G__37046;
chunk__36869_37032 = G__37047;
count__36870_37033 = G__37048;
i__36871_37034 = G__37049;
continue;
}
} else {
var temp__5735__auto___37050__$1 = cljs.core.seq(seq__36865_37031);
if(temp__5735__auto___37050__$1){
var seq__36865_37051__$1 = temp__5735__auto___37050__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36865_37051__$1)){
var c__4556__auto___37052 = cljs.core.chunk_first(seq__36865_37051__$1);
var G__37053 = cljs.core.chunk_rest(seq__36865_37051__$1);
var G__37054 = c__4556__auto___37052;
var G__37055 = cljs.core.count(c__4556__auto___37052);
var G__37056 = (0);
seq__36865_37031 = G__37053;
chunk__36869_37032 = G__37054;
count__36870_37033 = G__37055;
i__36871_37034 = G__37056;
continue;
} else {
var node_37057 = cljs.core.first(seq__36865_37051__$1);
if(cljs.core.not(node_37057.shadow$old)){
var path_match_37058 = shadow.cljs.devtools.client.browser.match_paths(node_37057.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37058)){
var new_link_37059 = (function (){var G__36878 = node_37057.cloneNode(true);
G__36878.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37058),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36878;
})();
(node_37057.shadow$old = true);

(new_link_37059.onload = ((function (seq__36865_37031,chunk__36869_37032,count__36870_37033,i__36871_37034,seq__36817,chunk__36819,count__36820,i__36821,new_link_37059,path_match_37058,node_37057,seq__36865_37051__$1,temp__5735__auto___37050__$1,path,seq__36817__$1,temp__5735__auto__,map__36815,map__36815__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37057);
});})(seq__36865_37031,chunk__36869_37032,count__36870_37033,i__36871_37034,seq__36817,chunk__36819,count__36820,i__36821,new_link_37059,path_match_37058,node_37057,seq__36865_37051__$1,temp__5735__auto___37050__$1,path,seq__36817__$1,temp__5735__auto__,map__36815,map__36815__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37058], 0));

goog.dom.insertSiblingAfter(new_link_37059,node_37057);


var G__37060 = cljs.core.next(seq__36865_37051__$1);
var G__37061 = null;
var G__37062 = (0);
var G__37063 = (0);
seq__36865_37031 = G__37060;
chunk__36869_37032 = G__37061;
count__36870_37033 = G__37062;
i__36871_37034 = G__37063;
continue;
} else {
var G__37064 = cljs.core.next(seq__36865_37051__$1);
var G__37065 = null;
var G__37066 = (0);
var G__37067 = (0);
seq__36865_37031 = G__37064;
chunk__36869_37032 = G__37065;
count__36870_37033 = G__37066;
i__36871_37034 = G__37067;
continue;
}
} else {
var G__37068 = cljs.core.next(seq__36865_37051__$1);
var G__37069 = null;
var G__37070 = (0);
var G__37071 = (0);
seq__36865_37031 = G__37068;
chunk__36869_37032 = G__37069;
count__36870_37033 = G__37070;
i__36871_37034 = G__37071;
continue;
}
}
} else {
}
}
break;
}


var G__37072 = cljs.core.next(seq__36817__$1);
var G__37073 = null;
var G__37074 = (0);
var G__37075 = (0);
seq__36817 = G__37072;
chunk__36819 = G__37073;
count__36820 = G__37074;
i__36821 = G__37075;
continue;
} else {
var G__37076 = cljs.core.next(seq__36817__$1);
var G__37077 = null;
var G__37078 = (0);
var G__37079 = (0);
seq__36817 = G__37076;
chunk__36819 = G__37077;
count__36820 = G__37078;
i__36821 = G__37079;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36879){
var map__36880 = p__36879;
var map__36880__$1 = (((((!((map__36880 == null))))?(((((map__36880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36880):map__36880);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36880__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36882){
var map__36883 = p__36882;
var map__36883__$1 = (((((!((map__36883 == null))))?(((((map__36883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36883):map__36883);
var _ = map__36883__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36883__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36885,done,error){
var map__36886 = p__36885;
var map__36886__$1 = (((((!((map__36886 == null))))?(((((map__36886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36886):map__36886);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36886__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36888,done,error){
var map__36889 = p__36888;
var map__36889__$1 = (((((!((map__36889 == null))))?(((((map__36889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36889):map__36889);
var msg = map__36889__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36889__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36889__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36889__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36891){
var map__36892 = p__36891;
var map__36892__$1 = (((((!((map__36892 == null))))?(((((map__36892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36892):map__36892);
var src = map__36892__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36892__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36894 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36894) : done.call(null,G__36894));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36895){
var map__36896 = p__36895;
var map__36896__$1 = (((((!((map__36896 == null))))?(((((map__36896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36896):map__36896);
var msg__$1 = map__36896__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36896__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36898){var ex = e36898;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36899){
var map__36900 = p__36899;
var map__36900__$1 = (((((!((map__36900 == null))))?(((((map__36900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36900):map__36900);
var env = map__36900__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36900__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36902){
var map__36903 = p__36902;
var map__36903__$1 = (((((!((map__36903 == null))))?(((((map__36903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36903):map__36903);
var msg = map__36903__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36903__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36905){
var map__36906 = p__36905;
var map__36906__$1 = (((((!((map__36906 == null))))?(((((map__36906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36906):map__36906);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36906__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36906__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__36908){
var map__36909 = p__36908;
var map__36909__$1 = (((((!((map__36909 == null))))?(((((map__36909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36909):map__36909);
var svc = map__36909__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36909__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
