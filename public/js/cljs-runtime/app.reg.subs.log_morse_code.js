goog.provide('app.reg.subs.log_morse_code');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log->morse-code","log->morse-code",44377766),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__33759,_){
var map__33761 = p__33759;
var map__33761__$1 = (((((!((map__33761 == null))))?(((((map__33761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33761):map__33761);
var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33761__$1,new cljs.core.Keyword(null,"log","log",-1595516004));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33761__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
return app.helpers.parse.parse_log(unit,log);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"predict->morse-code","predict->morse-code",1333669763),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__33764,_){
var map__33765 = p__33764;
var map__33765__$1 = (((((!((map__33765 == null))))?(((((map__33765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33765):map__33765);
var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33765__$1,new cljs.core.Keyword(null,"log","log",-1595516004));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33765__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
return app.helpers.parse.parse_log(unit,app.helpers.predict.predict_log(log));
})], 0));
app.reg.subs.log_morse_code.count_code = (function app$reg$subs$log_morse_code$count_code(code){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,sym){
return (acc + (function (){try{if((sym === ".")){
return (1);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33793){if((e33793 instanceof Error)){
var e__31919__auto__ = e33793;
if((e__31919__auto__ === cljs.core.match.backtrack)){
try{if((sym === "-")){
return (3);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33795){if((e33795 instanceof Error)){
var e__31919__auto____$1 = e33795;
if((e__31919__auto____$1 === cljs.core.match.backtrack)){
try{if((sym === "charspace")){
return (1);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33797){if((e33797 instanceof Error)){
var e__31919__auto____$2 = e33797;
if((e__31919__auto____$2 === cljs.core.match.backtrack)){
try{if((sym === "wordspace")){
return (7);
} else {
throw cljs.core.match.backtrack;

}
}catch (e33800){if((e33800 instanceof Error)){
var e__31919__auto____$3 = e33800;
if((e__31919__auto____$3 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')));
} else {
throw e__31919__auto____$3;
}
} else {
throw e33800;

}
}} else {
throw e__31919__auto____$2;
}
} else {
throw e33797;

}
}} else {
throw e__31919__auto____$1;
}
} else {
throw e33795;

}
}} else {
throw e__31919__auto__;
}
} else {
throw e33793;

}
}})());
}),(0),code);
});
app.reg.subs.log_morse_code.size_offset = (function app$reg$subs$log_morse_code$size_offset(num_units){
if((num_units < (15))){
return (0);
} else {
return (num_units - (15));

}
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log-size","log-size",377264531),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__33817,_){
var map__33819 = p__33817;
var map__33819__$1 = (((((!((map__33819 == null))))?(((((map__33819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33819):map__33819);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33819__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33819__$1,new cljs.core.Keyword(null,"log","log",-1595516004));
var size = app.reg.subs.log_morse_code.size_offset(app.reg.subs.log_morse_code.count_code(app.helpers.parse.parse_log(unit,app.helpers.predict.predict_log(log))));
return size;
})], 0));

//# sourceMappingURL=app.reg.subs.log_morse_code.js.map
