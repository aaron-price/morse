goog.provide('app.views.code');
/**
 * @param {...*} var_args
 */
app.views.code.block_size = (function() { 
var app$views$code$block_size__delegate = function (args__31711__auto__){
var ocr_37932 = cljs.core.vec(args__31711__auto__);
try{if(((cljs.core.vector_QMARK_(ocr_37932)) && ((cljs.core.count(ocr_37932) === 2)))){
try{var ocr_37932_1__37935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37932,(1));
if((ocr_37932_1__37935 === ".")){
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37932,(0));
return (acc + (1));
} else {
throw cljs.core.match.backtrack;

}
}catch (e37939){if((e37939 instanceof Error)){
var e__30676__auto__ = e37939;
if((e__30676__auto__ === cljs.core.match.backtrack)){
try{var ocr_37932_1__37935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37932,(1));
if((ocr_37932_1__37935 === "-")){
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37932,(0));
return (acc + (3));
} else {
throw cljs.core.match.backtrack;

}
}catch (e37940){if((e37940 instanceof Error)){
var e__30676__auto____$1 = e37940;
if((e__30676__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_37932_1__37935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37932,(1));
if((ocr_37932_1__37935 === " ")){
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37932,(0));
return (acc + (3));
} else {
throw cljs.core.match.backtrack;

}
}catch (e37941){if((e37941 instanceof Error)){
var e__30676__auto____$2 = e37941;
if((e__30676__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__30676__auto____$2;
}
} else {
throw e37941;

}
}} else {
throw e__30676__auto____$1;
}
} else {
throw e37940;

}
}} else {
throw e__30676__auto__;
}
} else {
throw e37939;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e37937){if((e37937 instanceof Error)){
var e__30676__auto__ = e37937;
if((e__30676__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_37932)) && ((cljs.core.count(ocr_37932) === 1)))){
var morse_syms = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_37932,(0));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.views.code.block_size,(0),morse_syms);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37938){if((e37938 instanceof Error)){
var e__30676__auto____$1 = e37938;
if((e__30676__auto____$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_37932)].join('')));
} else {
throw e__30676__auto____$1;
}
} else {
throw e37938;

}
}} else {
throw e__30676__auto__;
}
} else {
throw e37937;

}
}};
var app$views$code$block_size = function (var_args){
var args__31711__auto__ = null;
if (arguments.length > 0) {
var G__37943__i = 0, G__37943__a = new Array(arguments.length -  0);
while (G__37943__i < G__37943__a.length) {G__37943__a[G__37943__i] = arguments[G__37943__i + 0]; ++G__37943__i;}
  args__31711__auto__ = new cljs.core.IndexedSeq(G__37943__a,0,null);
} 
return app$views$code$block_size__delegate.call(this,args__31711__auto__);};
app$views$code$block_size.cljs$lang$maxFixedArity = 0;
app$views$code$block_size.cljs$lang$applyTo = (function (arglist__37944){
var args__31711__auto__ = cljs.core.seq(arglist__37944);
return app$views$code$block_size__delegate(args__31711__auto__);
});
app$views$code$block_size.cljs$core$IFn$_invoke$arity$variadic = app$views$code$block_size__delegate;
return app$views$code$block_size;
})()
;
app.views.code.code_card__char = (function app$views$code$code_card__char(morse,plain){
var block_width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.views.code.block_size.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([morse], 0))),"rem"].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-card__char","div.code-card__char",-1068709439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),block_width,new cljs.core.Keyword(null,"min-width","min-width",1926193728),"2rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-card__plain","div.code-card__plain",2141454044),plain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-card__morse","div.code-card__morse",-358855685),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,c){
var sym_width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.views.code.block_size.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c], 0))),"rem"].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-card__morse-sym-out","div.code-card__morse-sym-out",-574218991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),sym_width], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.code-card__morse-sym-in","p.code-card__morse-sym-in",556639195),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c," "))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null)], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c," "))?"space":c)], null)], null);
}),morse)], null)], null);
});
app.views.code.code_card__outer = (function app$views$code$code_card__outer(morse_text,plain_text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-card__outer","div.code-card__outer",-256744738),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,ch){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.code.code_card__char,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(morse_text,idx),ch], null)], null);
}),plain_text)], null);
});
app.views.code.code_card = (function app$views$code$code_card(morse_text){
var plain_text = app.helpers.parser.morse_text__GT_plain_text_vec(morse_text);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.code.code_card__outer,morse_text,plain_text], null);
});

//# sourceMappingURL=app.views.code.js.map
