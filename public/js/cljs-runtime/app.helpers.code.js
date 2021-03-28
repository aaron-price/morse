goog.provide('app.helpers.code');
app.helpers.code.handle_char_end = (function app$helpers$code$handle_char_end(p__37101){
var map__37103 = p__37101;
var map__37103__$1 = (((((!((map__37103 == null))))?(((((map__37103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37103):map__37103);
var acc = map__37103__$1;
var chars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37103__$1,new cljs.core.Keyword(null,"chars","chars",-1094630317));
var syms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37103__$1,new cljs.core.Keyword(null,"syms","syms",-1575891762));

var new_chars = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(chars,syms);
var new_syms = cljs.core.PersistentVector.EMPTY;
if((!(cljs.core.empty_QMARK_(syms)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"chars","chars",-1094630317),new_chars),new cljs.core.Keyword(null,"syms","syms",-1575891762),new_syms);
} else {
return acc;
}
});
app.helpers.code.handle_word_end = (function app$helpers$code$handle_word_end(p__37109){
var map__37121 = p__37109;
var map__37121__$1 = (((((!((map__37121 == null))))?(((((map__37121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37121):map__37121);
var acc = map__37121__$1;
var chars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37121__$1,new cljs.core.Keyword(null,"chars","chars",-1094630317));
var words = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37121__$1,new cljs.core.Keyword(null,"words","words",1924933001));

var new_words = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(words,chars);
var new_chars = cljs.core.PersistentVector.EMPTY;
if((!(cljs.core.empty_QMARK_(chars)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"words","words",1924933001),new_words),new cljs.core.Keyword(null,"chars","chars",-1094630317),new_chars);
} else {
return acc;
}
});
app.helpers.code.handle_sym_enter = (function app$helpers$code$handle_sym_enter(p__37126,curr){
var map__37128 = p__37126;
var map__37128__$1 = (((((!((map__37128 == null))))?(((((map__37128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37128):map__37128);
var acc = map__37128__$1;
var syms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37128__$1,new cljs.core.Keyword(null,"syms","syms",-1575891762));

var new_syms = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(syms,curr);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"syms","syms",-1575891762),new_syms);
});
app.helpers.code.finalize_split = (function app$helpers$code$finalize_split(acc){

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["acc",acc], 0));

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.helpers.code.handle_word_end(app.helpers.code.handle_char_end(acc)),new cljs.core.Keyword(null,"words","words",1924933001));
});
app.helpers.code.split_code = (function app$helpers$code$split_code(code){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__37133,curr){
var map__37134 = p__37133;
var map__37134__$1 = (((((!((map__37134 == null))))?(((((map__37134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37134):map__37134);
var acc = map__37134__$1;
var syms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37134__$1,new cljs.core.Keyword(null,"syms","syms",-1575891762));
var chars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37134__$1,new cljs.core.Keyword(null,"chars","chars",-1094630317));
var words = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37134__$1,new cljs.core.Keyword(null,"words","words",1924933001));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["CUR",curr,", ACHOO",acc], 0));

var G__37139 = curr;
switch (G__37139) {
case "/":
return app.helpers.code.handle_char_end(acc);

break;
case "///":
return app.helpers.code.handle_word_end(acc);

break;
default:
return app.helpers.code.handle_sym_enter(acc,curr);

}
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"words","words",1924933001),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"chars","chars",-1094630317),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.PersistentVector.EMPTY], null),code);
});
app.helpers.code.syms__GT_text = (function app$helpers$code$syms__GT_text(code){

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(app.db.chart),code);
});
app.helpers.code.chars__GT_text = (function app$helpers$code$chars__GT_text(sym_groups){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.helpers.code.syms__GT_text,sym_groups));
});
app.helpers.code.code__GT_text = (function app$helpers$code$code__GT_text(code){
var ast = app.helpers.code.split_code(code);
var _ = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["AST",ast], 0));
var syms_text = app.helpers.code.syms__GT_text(new cljs.core.Keyword(null,"syms","syms",-1575891762).cljs$core$IFn$_invoke$arity$1(ast));
var chars_text = app.helpers.code.chars__GT_text(new cljs.core.Keyword(null,"chars","chars",-1094630317).cljs$core$IFn$_invoke$arity$1(ast));
var ___$1 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["stext",syms_text], 0));
var ___$2 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ctext",chars_text], 0));
return [chars_text,cljs.core.str.cljs$core$IFn$_invoke$arity$1(syms_text)].join('');
});

//# sourceMappingURL=app.helpers.code.js.map
