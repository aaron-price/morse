goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__37058){
var vec__37059 = p__37058;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37059,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37059,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__37065 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__37065__$1 = (((G__37065 instanceof cljs.core.Keyword))?G__37065.fqn:null);
switch (G__37065__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__37072 = (function (){
var seq__37073 = cljs.core.seq(vars__$1);
var chunk__37074 = null;
var count__37075 = (0);
var i__37076 = (0);
while(true){
if((i__37076 < count__37075)){
var v = chunk__37074.cljs$core$IIndexed$_nth$arity$2(null,i__37076);
var temp__5735__auto___37253 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5735__auto___37253)){
var t_37254 = temp__5735__auto___37253;
var G__37090_37255 = ((function (seq__37073,chunk__37074,count__37075,i__37076,t_37254,temp__5735__auto___37253,v,each_fixture_fn,G__37065,G__37065__$1,env,once_fixtures,each_fixtures,vec__37059,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_37254)));
});})(seq__37073,chunk__37074,count__37075,i__37076,t_37254,temp__5735__auto___37253,v,each_fixture_fn,G__37065,G__37065__$1,env,once_fixtures,each_fixtures,vec__37059,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__37090_37255) : each_fixture_fn.call(null,G__37090_37255));
} else {
}


var G__37256 = seq__37073;
var G__37257 = chunk__37074;
var G__37258 = count__37075;
var G__37259 = (i__37076 + (1));
seq__37073 = G__37256;
chunk__37074 = G__37257;
count__37075 = G__37258;
i__37076 = G__37259;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37073);
if(temp__5735__auto__){
var seq__37073__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37073__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37073__$1);
var G__37260 = cljs.core.chunk_rest(seq__37073__$1);
var G__37261 = c__4556__auto__;
var G__37262 = cljs.core.count(c__4556__auto__);
var G__37263 = (0);
seq__37073 = G__37260;
chunk__37074 = G__37261;
count__37075 = G__37262;
i__37076 = G__37263;
continue;
} else {
var v = cljs.core.first(seq__37073__$1);
var temp__5735__auto___37264__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5735__auto___37264__$1)){
var t_37266 = temp__5735__auto___37264__$1;
var G__37093_37267 = ((function (seq__37073,chunk__37074,count__37075,i__37076,t_37266,temp__5735__auto___37264__$1,v,seq__37073__$1,temp__5735__auto__,each_fixture_fn,G__37065,G__37065__$1,env,once_fixtures,each_fixtures,vec__37059,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_37266)));
});})(seq__37073,chunk__37074,count__37075,i__37076,t_37266,temp__5735__auto___37264__$1,v,seq__37073__$1,temp__5735__auto__,each_fixture_fn,G__37065,G__37065__$1,env,once_fixtures,each_fixtures,vec__37059,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__37093_37267) : each_fixture_fn.call(null,G__37093_37267));
} else {
}


var G__37269 = cljs.core.next(seq__37073__$1);
var G__37270 = null;
var G__37271 = (0);
var G__37272 = (0);
seq__37073 = G__37269;
chunk__37074 = G__37270;
count__37075 = G__37271;
i__37076 = G__37272;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__37071 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__37071.cljs$core$IFn$_invoke$arity$1 ? fexpr__37071.cljs$core$IFn$_invoke$arity$1(G__37072) : fexpr__37071.call(null,G__37072));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37065__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__37054_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__37054_SHARP_));
}),vars))], 0));
});
/**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
shadow.test.test_ns_block = (function shadow$test$test_ns_block(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

var map__37095 = shadow.test.env.get_test_ns_info(ns);
var map__37095__$1 = (((((!((map__37095 == null))))?(((((map__37095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37095):map__37095);
var test_ns = map__37095__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37095__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__37099,vars){
var map__37100 = p__37099;
var map__37100__$1 = (((((!((map__37100 == null))))?(((((map__37100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37100):map__37100);
var env = map__37100__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37100__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__37103_37285 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__37105_37286 = null;
var count__37106_37287 = (0);
var i__37107_37288 = (0);
while(true){
if((i__37107_37288 < count__37106_37287)){
var vec__37124_37289 = chunk__37105_37286.cljs$core$IIndexed$_nth$arity$2(null,i__37107_37288);
var test_ns_37290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37124_37289,(0),null);
var ns_info_37291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37124_37289,(1),null);
var map__37127_37293 = ns_info_37291;
var map__37127_37295__$1 = (((((!((map__37127_37293 == null))))?(((((map__37127_37293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37127_37293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37127_37293):map__37127_37293);
var fixtures_37296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37127_37295__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5735__auto___37300 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_37296);
if(cljs.core.truth_(temp__5735__auto___37300)){
var fix_37301 = temp__5735__auto___37300;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_37290,fix_37301], 0));
} else {
}

var temp__5735__auto___37303 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_37296);
if(cljs.core.truth_(temp__5735__auto___37303)){
var fix_37305 = temp__5735__auto___37303;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_37290,fix_37305], 0));
} else {
}


var G__37306 = seq__37103_37285;
var G__37307 = chunk__37105_37286;
var G__37308 = count__37106_37287;
var G__37309 = (i__37107_37288 + (1));
seq__37103_37285 = G__37306;
chunk__37105_37286 = G__37307;
count__37106_37287 = G__37308;
i__37107_37288 = G__37309;
continue;
} else {
var temp__5735__auto___37310 = cljs.core.seq(seq__37103_37285);
if(temp__5735__auto___37310){
var seq__37103_37312__$1 = temp__5735__auto___37310;
if(cljs.core.chunked_seq_QMARK_(seq__37103_37312__$1)){
var c__4556__auto___37313 = cljs.core.chunk_first(seq__37103_37312__$1);
var G__37327 = cljs.core.chunk_rest(seq__37103_37312__$1);
var G__37328 = c__4556__auto___37313;
var G__37329 = cljs.core.count(c__4556__auto___37313);
var G__37330 = (0);
seq__37103_37285 = G__37327;
chunk__37105_37286 = G__37328;
count__37106_37287 = G__37329;
i__37107_37288 = G__37330;
continue;
} else {
var vec__37135_37331 = cljs.core.first(seq__37103_37312__$1);
var test_ns_37332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37135_37331,(0),null);
var ns_info_37333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37135_37331,(1),null);
var map__37143_37334 = ns_info_37333;
var map__37143_37335__$1 = (((((!((map__37143_37334 == null))))?(((((map__37143_37334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37143_37334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37143_37334):map__37143_37334);
var fixtures_37336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37143_37335__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5735__auto___37340__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_37336);
if(cljs.core.truth_(temp__5735__auto___37340__$1)){
var fix_37341 = temp__5735__auto___37340__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_37332,fix_37341], 0));
} else {
}

var temp__5735__auto___37342__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_37336);
if(cljs.core.truth_(temp__5735__auto___37342__$1)){
var fix_37343 = temp__5735__auto___37342__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_37332,fix_37343], 0));
} else {
}


var G__37344 = cljs.core.next(seq__37103_37312__$1);
var G__37345 = null;
var G__37346 = (0);
var G__37347 = (0);
seq__37103_37285 = G__37344;
chunk__37105_37286 = G__37345;
count__37106_37287 = G__37346;
i__37107_37288 = G__37347;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37098_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__37098_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__37157 = cljs.test.get_current_env();
var map__37157__$1 = (((((!((map__37157 == null))))?(((((map__37157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37157):map__37157);
var env = map__37157__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37157__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37157__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__37173 = arguments.length;
switch (G__37173) {
case 1:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1 = (function (test_vars){
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),test_vars);
}));

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2 = (function (env,vars){
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_test_vars.cljs$lang$maxFixedArity = 2);

/**
 * test all vars for given namespace symbol
 */
shadow.test.test_ns = (function shadow$test$test_ns(var_args){
var G__37202 = arguments.length;
switch (G__37202) {
case 1:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),ns);
}));

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2 = (function (env,ns){
var map__37218 = shadow.test.env.get_test_ns_info(ns);
var map__37218__$1 = (((((!((map__37218 == null))))?(((((map__37218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37218):map__37218);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37218__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__37226 = arguments.length;
switch (G__37226) {
case 0:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,shadow.test.env.get_test_namespaces());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,namespaces){
if(cljs.core.set_QMARK_(namespaces)){
} else {
throw (new Error("Assert failed: (set? namespaces)"));
}

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37221_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__37221_SHARP_)));
}),shadow.test.env.get_test_vars());
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_tests.cljs$lang$maxFixedArity = 2);

/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
shadow.test.run_all_tests = (function shadow$test$run_all_tests(var_args){
var G__37240 = arguments.length;
switch (G__37240) {
case 0:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(env,null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,re){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37238_SHARP_){
var or__4126__auto__ = (re == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37238_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
