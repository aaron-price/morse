goog.provide('day8.re_frame_10x.utils.localstorage');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__33459 = arguments.length;
switch (G__33459) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__33460 = cljs.core.seq(Object.keys(localStorage));
var chunk__33461 = null;
var count__33462 = (0);
var i__33463 = (0);
while(true){
if((i__33463 < count__33462)){
var k = chunk__33461.cljs$core$IIndexed$_nth$arity$2(null,i__33463);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33486 = seq__33460;
var G__33487 = chunk__33461;
var G__33488 = count__33462;
var G__33489 = (i__33463 + (1));
seq__33460 = G__33486;
chunk__33461 = G__33487;
count__33462 = G__33488;
i__33463 = G__33489;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33460);
if(temp__5735__auto__){
var seq__33460__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33460__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33460__$1);
var G__33490 = cljs.core.chunk_rest(seq__33460__$1);
var G__33491 = c__4556__auto__;
var G__33492 = cljs.core.count(c__4556__auto__);
var G__33493 = (0);
seq__33460 = G__33490;
chunk__33461 = G__33491;
count__33462 = G__33492;
i__33463 = G__33493;
continue;
} else {
var k = cljs.core.first(seq__33460__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33494 = cljs.core.next(seq__33460__$1);
var G__33495 = null;
var G__33496 = (0);
var G__33497 = (0);
seq__33460 = G__33494;
chunk__33461 = G__33495;
count__33462 = G__33496;
i__33463 = G__33497;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
