goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__27152__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__27152 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27153__i = 0, G__27153__a = new Array(arguments.length -  0);
while (G__27153__i < G__27153__a.length) {G__27153__a[G__27153__i] = arguments[G__27153__i + 0]; ++G__27153__i;}
  args = new cljs.core.IndexedSeq(G__27153__a,0,null);
} 
return G__27152__delegate.call(this,args);};
G__27152.cljs$lang$maxFixedArity = 0;
G__27152.cljs$lang$applyTo = (function (arglist__27154){
var args = cljs.core.seq(arglist__27154);
return G__27152__delegate(args);
});
G__27152.cljs$core$IFn$_invoke$arity$variadic = G__27152__delegate;
return G__27152;
})()
);

(o.error = (function() { 
var G__27155__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__27155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27157__i = 0, G__27157__a = new Array(arguments.length -  0);
while (G__27157__i < G__27157__a.length) {G__27157__a[G__27157__i] = arguments[G__27157__i + 0]; ++G__27157__i;}
  args = new cljs.core.IndexedSeq(G__27157__a,0,null);
} 
return G__27155__delegate.call(this,args);};
G__27155.cljs$lang$maxFixedArity = 0;
G__27155.cljs$lang$applyTo = (function (arglist__27158){
var args = cljs.core.seq(arglist__27158);
return G__27155__delegate(args);
});
G__27155.cljs$core$IFn$_invoke$arity$variadic = G__27155__delegate;
return G__27155;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
