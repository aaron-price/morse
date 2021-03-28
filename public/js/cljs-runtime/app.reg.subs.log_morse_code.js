goog.provide('app.reg.subs.log_morse_code');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log->morse-code","log->morse-code",44377766),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__64015,_){
var map__64016 = p__64015;
var map__64016__$1 = (((((!((map__64016 == null))))?(((((map__64016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64016):map__64016);
var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64016__$1,new cljs.core.Keyword(null,"log","log",-1595516004));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64016__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
return app.helpers.parse.parse_log(unit,log);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"predict->morse-code","predict->morse-code",1333669763),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__64018,_){
var map__64019 = p__64018;
var map__64019__$1 = (((((!((map__64019 == null))))?(((((map__64019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64019):map__64019);
var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64019__$1,new cljs.core.Keyword(null,"log","log",-1595516004));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64019__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
return app.helpers.parse.parse_log(unit,app.helpers.predict.predict_log(log));
})], 0));
app.reg.subs.log_morse_code.count_code = (function app$reg$subs$log_morse_code$count_code(code){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,sym){
return (acc + (function (){try{if((sym === ".")){
return (1);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64022){if((e64022 instanceof Error)){
var e__34948__auto__ = e64022;
if((e__34948__auto__ === cljs.core.match.backtrack)){
try{if((sym === "-")){
return (3);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64023){if((e64023 instanceof Error)){
var e__34948__auto____$1 = e64023;
if((e__34948__auto____$1 === cljs.core.match.backtrack)){
try{if((sym === "charspace")){
return (1);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64024){if((e64024 instanceof Error)){
var e__34948__auto____$2 = e64024;
if((e__34948__auto____$2 === cljs.core.match.backtrack)){
try{if((sym === "wordspace")){
return (7);
} else {
throw cljs.core.match.backtrack;

}
}catch (e64025){if((e64025 instanceof Error)){
var e__34948__auto____$3 = e64025;
if((e__34948__auto____$3 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')));
} else {
throw e__34948__auto____$3;
}
} else {
throw e64025;

}
}} else {
throw e__34948__auto____$2;
}
} else {
throw e64024;

}
}} else {
throw e__34948__auto____$1;
}
} else {
throw e64023;

}
}} else {
throw e__34948__auto__;
}
} else {
throw e64022;

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
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log-size","log-size",377264531),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__64026,_){
var map__64027 = p__64026;
var map__64027__$1 = (((((!((map__64027 == null))))?(((((map__64027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64027):map__64027);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64027__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var log = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64027__$1,new cljs.core.Keyword(null,"log","log",-1595516004));
var size = app.reg.subs.log_morse_code.size_offset(app.reg.subs.log_morse_code.count_code(app.helpers.parse.parse_log(unit,app.helpers.predict.predict_log(log))));
return size;
})], 0));

//# sourceMappingURL=app.reg.subs.log_morse_code.js.map
