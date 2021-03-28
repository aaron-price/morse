goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35625){
var map__35630 = p__35625;
var map__35630__$1 = (((((!((map__35630 == null))))?(((((map__35630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35630):map__35630);
var m = map__35630__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35630__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35630__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35649_36002 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35650_36003 = null;
var count__35651_36004 = (0);
var i__35652_36005 = (0);
while(true){
if((i__35652_36005 < count__35651_36004)){
var f_36006 = chunk__35650_36003.cljs$core$IIndexed$_nth$arity$2(null,i__35652_36005);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36006], 0));


var G__36011 = seq__35649_36002;
var G__36012 = chunk__35650_36003;
var G__36013 = count__35651_36004;
var G__36014 = (i__35652_36005 + (1));
seq__35649_36002 = G__36011;
chunk__35650_36003 = G__36012;
count__35651_36004 = G__36013;
i__35652_36005 = G__36014;
continue;
} else {
var temp__5735__auto___36017 = cljs.core.seq(seq__35649_36002);
if(temp__5735__auto___36017){
var seq__35649_36019__$1 = temp__5735__auto___36017;
if(cljs.core.chunked_seq_QMARK_(seq__35649_36019__$1)){
var c__4556__auto___36024 = cljs.core.chunk_first(seq__35649_36019__$1);
var G__36025 = cljs.core.chunk_rest(seq__35649_36019__$1);
var G__36026 = c__4556__auto___36024;
var G__36027 = cljs.core.count(c__4556__auto___36024);
var G__36028 = (0);
seq__35649_36002 = G__36025;
chunk__35650_36003 = G__36026;
count__35651_36004 = G__36027;
i__35652_36005 = G__36028;
continue;
} else {
var f_36032 = cljs.core.first(seq__35649_36019__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36032], 0));


var G__36033 = cljs.core.next(seq__35649_36019__$1);
var G__36034 = null;
var G__36035 = (0);
var G__36036 = (0);
seq__35649_36002 = G__36033;
chunk__35650_36003 = G__36034;
count__35651_36004 = G__36035;
i__35652_36005 = G__36036;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36050 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36050], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36050)))?cljs.core.second(arglists_36050):arglists_36050)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35670_36056 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35671_36057 = null;
var count__35672_36058 = (0);
var i__35673_36059 = (0);
while(true){
if((i__35673_36059 < count__35672_36058)){
var vec__35693_36060 = chunk__35671_36057.cljs$core$IIndexed$_nth$arity$2(null,i__35673_36059);
var name_36061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35693_36060,(0),null);
var map__35696_36062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35693_36060,(1),null);
var map__35696_36063__$1 = (((((!((map__35696_36062 == null))))?(((((map__35696_36062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35696_36062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35696_36062):map__35696_36062);
var doc_36064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35696_36063__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35696_36063__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36061], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36065], 0));

if(cljs.core.truth_(doc_36064)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36064], 0));
} else {
}


var G__36070 = seq__35670_36056;
var G__36071 = chunk__35671_36057;
var G__36072 = count__35672_36058;
var G__36073 = (i__35673_36059 + (1));
seq__35670_36056 = G__36070;
chunk__35671_36057 = G__36071;
count__35672_36058 = G__36072;
i__35673_36059 = G__36073;
continue;
} else {
var temp__5735__auto___36076 = cljs.core.seq(seq__35670_36056);
if(temp__5735__auto___36076){
var seq__35670_36081__$1 = temp__5735__auto___36076;
if(cljs.core.chunked_seq_QMARK_(seq__35670_36081__$1)){
var c__4556__auto___36083 = cljs.core.chunk_first(seq__35670_36081__$1);
var G__36084 = cljs.core.chunk_rest(seq__35670_36081__$1);
var G__36085 = c__4556__auto___36083;
var G__36086 = cljs.core.count(c__4556__auto___36083);
var G__36087 = (0);
seq__35670_36056 = G__36084;
chunk__35671_36057 = G__36085;
count__35672_36058 = G__36086;
i__35673_36059 = G__36087;
continue;
} else {
var vec__35709_36095 = cljs.core.first(seq__35670_36081__$1);
var name_36096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35709_36095,(0),null);
var map__35712_36097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35709_36095,(1),null);
var map__35712_36098__$1 = (((((!((map__35712_36097 == null))))?(((((map__35712_36097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35712_36097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35712_36097):map__35712_36097);
var doc_36099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35712_36098__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35712_36098__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36096], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36100], 0));

if(cljs.core.truth_(doc_36099)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36099], 0));
} else {
}


var G__36109 = cljs.core.next(seq__35670_36081__$1);
var G__36110 = null;
var G__36111 = (0);
var G__36112 = (0);
seq__35670_36056 = G__36109;
chunk__35671_36057 = G__36110;
count__35672_36058 = G__36111;
i__35673_36059 = G__36112;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35724 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35725 = null;
var count__35726 = (0);
var i__35727 = (0);
while(true){
if((i__35727 < count__35726)){
var role = chunk__35725.cljs$core$IIndexed$_nth$arity$2(null,i__35727);
var temp__5735__auto___36116__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36116__$1)){
var spec_36117 = temp__5735__auto___36116__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36117)], 0));
} else {
}


var G__36118 = seq__35724;
var G__36119 = chunk__35725;
var G__36120 = count__35726;
var G__36121 = (i__35727 + (1));
seq__35724 = G__36118;
chunk__35725 = G__36119;
count__35726 = G__36120;
i__35727 = G__36121;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__35724);
if(temp__5735__auto____$1){
var seq__35724__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35724__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35724__$1);
var G__36122 = cljs.core.chunk_rest(seq__35724__$1);
var G__36123 = c__4556__auto__;
var G__36124 = cljs.core.count(c__4556__auto__);
var G__36125 = (0);
seq__35724 = G__36122;
chunk__35725 = G__36123;
count__35726 = G__36124;
i__35727 = G__36125;
continue;
} else {
var role = cljs.core.first(seq__35724__$1);
var temp__5735__auto___36126__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36126__$2)){
var spec_36127 = temp__5735__auto___36126__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36127)], 0));
} else {
}


var G__36128 = cljs.core.next(seq__35724__$1);
var G__36129 = null;
var G__36130 = (0);
var G__36131 = (0);
seq__35724 = G__36128;
chunk__35725 = G__36129;
count__35726 = G__36130;
i__35727 = G__36131;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36143 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36144 = cljs.core.ex_cause(t);
via = G__36143;
t = G__36144;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35765 = datafied_throwable;
var map__35765__$1 = (((((!((map__35765 == null))))?(((((map__35765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35765):map__35765);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35765__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35765__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35765__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35766 = cljs.core.last(via);
var map__35766__$1 = (((((!((map__35766 == null))))?(((((map__35766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35766):map__35766);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35766__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35766__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35766__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35767 = data;
var map__35767__$1 = (((((!((map__35767 == null))))?(((((map__35767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35767):map__35767);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35767__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35767__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35767__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35768 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35768__$1 = (((((!((map__35768 == null))))?(((((map__35768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35768):map__35768);
var top_data = map__35768__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35768__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35795 = phase;
var G__35795__$1 = (((G__35795 instanceof cljs.core.Keyword))?G__35795.fqn:null);
switch (G__35795__$1) {
case "read-source":
var map__35796 = data;
var map__35796__$1 = (((((!((map__35796 == null))))?(((((map__35796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35796):map__35796);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35796__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35796__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35807 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35807__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35807,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35807);
var G__35807__$2 = (cljs.core.truth_((function (){var fexpr__35823 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35823.cljs$core$IFn$_invoke$arity$1 ? fexpr__35823.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35823.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35807__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35807__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35807__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35807__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35828 = top_data;
var G__35828__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35828,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35828);
var G__35828__$2 = (cljs.core.truth_((function (){var fexpr__35829 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35829.cljs$core$IFn$_invoke$arity$1 ? fexpr__35829.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35829.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35828__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35828__$1);
var G__35828__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35828__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35828__$2);
var G__35828__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35828__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35828__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35828__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35828__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35837 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35837,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35837,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35837,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35837,(3),null);
var G__35844 = top_data;
var G__35844__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35844,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35844);
var G__35844__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35844__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35844__$1);
var G__35844__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35844__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35844__$2);
var G__35844__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35844__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35844__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35844__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35844__$4;
}

break;
case "execution":
var vec__35852 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35852,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35852,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35852,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35852,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35751_SHARP_){
var or__4126__auto__ = (p1__35751_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__35867 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35867.cljs$core$IFn$_invoke$arity$1 ? fexpr__35867.cljs$core$IFn$_invoke$arity$1(p1__35751_SHARP_) : fexpr__35867.call(null,p1__35751_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__35876 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35876__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35876,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35876);
var G__35876__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35876__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35876__$1);
var G__35876__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35876__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35876__$2);
var G__35876__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35876__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35876__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35876__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35876__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35795__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35916){
var map__35923 = p__35916;
var map__35923__$1 = (((((!((map__35923 == null))))?(((((map__35923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35923):map__35923);
var triage_data = map__35923__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35923__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35923__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35923__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35923__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35923__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35923__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35923__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35923__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35937 = phase;
var G__35937__$1 = (((G__35937 instanceof cljs.core.Keyword))?G__35937.fqn:null);
switch (G__35937__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35938 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35939 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35940 = loc;
var G__35941 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35943_36243 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35944_36244 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35945_36245 = true;
var _STAR_print_fn_STAR__temp_val__35946_36246 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35945_36245);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35946_36246);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35905_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35905_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35944_36244);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35943_36243);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35938,G__35939,G__35940,G__35941) : format.call(null,G__35938,G__35939,G__35940,G__35941));

break;
case "macroexpansion":
var G__35950 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35951 = cause_type;
var G__35952 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35953 = loc;
var G__35954 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35950,G__35951,G__35952,G__35953,G__35954) : format.call(null,G__35950,G__35951,G__35952,G__35953,G__35954));

break;
case "compile-syntax-check":
var G__35955 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35956 = cause_type;
var G__35957 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35958 = loc;
var G__35959 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35955,G__35956,G__35957,G__35958,G__35959) : format.call(null,G__35955,G__35956,G__35957,G__35958,G__35959));

break;
case "compilation":
var G__35961 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35962 = cause_type;
var G__35963 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35964 = loc;
var G__35965 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35961,G__35962,G__35963,G__35964,G__35965) : format.call(null,G__35961,G__35962,G__35963,G__35964,G__35965));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35966 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35967 = symbol;
var G__35968 = loc;
var G__35969 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35973_36247 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35974_36248 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35975_36249 = true;
var _STAR_print_fn_STAR__temp_val__35976_36250 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35975_36249);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35976_36250);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35907_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35907_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35974_36248);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35973_36247);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35966,G__35967,G__35968,G__35969) : format.call(null,G__35966,G__35967,G__35968,G__35969));
} else {
var G__35981 = "Execution error%s at %s(%s).\n%s\n";
var G__35982 = cause_type;
var G__35983 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35984 = loc;
var G__35985 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35981,G__35982,G__35983,G__35984,G__35985) : format.call(null,G__35981,G__35982,G__35983,G__35984,G__35985));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35937__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
