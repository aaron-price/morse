goog.provide('shadow.test.env');
/**
 * @define {boolean}
 */
shadow.test.env.UI_DRIVEN = goog.define("shadow.test.env.UI_DRIVEN",false);
if((typeof shadow !== 'undefined') && (typeof shadow.test !== 'undefined') && (typeof shadow.test.env !== 'undefined') && (typeof shadow.test.env.tests_ref !== 'undefined')){
} else {
shadow.test.env.tests_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.PersistentArrayMap.EMPTY], null));
}
shadow.test.env.reset_test_data_BANG_ = (function shadow$test$env$reset_test_data_BANG_(test_data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.test.env.tests_ref,cljs.core.assoc,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),test_data);
});
shadow.test.env.get_tests = (function shadow$test$env$get_tests(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
});
shadow.test.env.get_test_vars = (function shadow$test$env$get_test_vars(){
var iter__4529__auto__ = (function shadow$test$env$get_test_vars_$_iter__36912(s__36913){
return (new cljs.core.LazySeq(null,(function (){
var s__36913__$1 = s__36913;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36913__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__36919 = cljs.core.first(xs__6292__auto__);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36919,(0),null);
var ns_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36919,(1),null);
var iterys__4525__auto__ = ((function (s__36913__$1,vec__36919,ns,ns_info,xs__6292__auto__,temp__5735__auto__){
return (function shadow$test$env$get_test_vars_$_iter__36912_$_iter__36914(s__36915){
return (new cljs.core.LazySeq(null,((function (s__36913__$1,vec__36919,ns,ns_info,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__36915__$1 = s__36915;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36915__$1);
if(temp__5735__auto____$1){
var s__36915__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36915__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36915__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36917 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36916 = (0);
while(true){
if((i__36916 < size__4528__auto__)){
var var$ = cljs.core._nth(c__4527__auto__,i__36916);
cljs.core.chunk_append(b__36917,var$);

var G__36954 = (i__36916 + (1));
i__36916 = G__36954;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36917),shadow$test$env$get_test_vars_$_iter__36912_$_iter__36914(cljs.core.chunk_rest(s__36915__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36917),null);
}
} else {
var var$ = cljs.core.first(s__36915__$2);
return cljs.core.cons(var$,shadow$test$env$get_test_vars_$_iter__36912_$_iter__36914(cljs.core.rest(s__36915__$2)));
}
} else {
return null;
}
break;
}
});})(s__36913__$1,vec__36919,ns,ns_info,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__36913__$1,vec__36919,ns,ns_info,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns_info)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$test$env$get_test_vars_$_iter__36912(cljs.core.rest(s__36913__$1)));
} else {
var G__36957 = cljs.core.rest(s__36913__$1);
s__36913__$1 = G__36957;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(shadow.test.env.get_tests());
});
shadow.test.env.get_test_ns_info = (function shadow$test$env$get_test_ns_info(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns], null));
});
/**
 * returns all the registered test namespaces and symbols
 * use (get-test-ns-info the-sym) to get the details
 */
shadow.test.env.get_test_namespaces = (function shadow$test$env$get_test_namespaces(){
return cljs.core.keys(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref)));
});
shadow.test.env.get_test_count = (function shadow$test$env$get_test_count(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),(function (){var iter__4529__auto__ = (function shadow$test$env$get_test_count_$_iter__36930(s__36931){
return (new cljs.core.LazySeq(null,(function (){
var s__36931__$1 = s__36931;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36931__$1);
if(temp__5735__auto__){
var s__36931__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36931__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36931__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36933 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36932 = (0);
while(true){
if((i__36932 < size__4528__auto__)){
var map__36940 = cljs.core._nth(c__4527__auto__,i__36932);
var map__36940__$1 = (((((!((map__36940 == null))))?(((((map__36940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36940):map__36940);
var test_ns = map__36940__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36940__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
cljs.core.chunk_append(b__36933,cljs.core.count(vars));

var G__36965 = (i__36932 + (1));
i__36932 = G__36965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36933),shadow$test$env$get_test_count_$_iter__36930(cljs.core.chunk_rest(s__36931__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36933),null);
}
} else {
var map__36945 = cljs.core.first(s__36931__$2);
var map__36945__$1 = (((((!((map__36945 == null))))?(((((map__36945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36945):map__36945);
var test_ns = map__36945__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36945__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.core.cons(cljs.core.count(vars),shadow$test$env$get_test_count_$_iter__36930(cljs.core.rest(s__36931__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.vals(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref))));
})());
});

//# sourceMappingURL=shadow.test.env.js.map
