goog.provide('app.component.bar');
app.component.bar.unit_width = (1);
app.component.bar.add_slice = (function app$component$bar$add_slice(){
return ["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((-1) * cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log-size","log-size",377264531)], null))))),"rem)"].join('');
});
/**
 * @param {...*} var_args
 */
app.component.bar.get_unit = (function() { 
var app$component$bar$get_unit__delegate = function (args__33694__auto__){
var ocr_34888 = cljs.core.vec(args__33694__auto__);
try{if(((cljs.core.vector_QMARK_(ocr_34888)) && ((cljs.core.count(ocr_34888) === 2)))){
try{var ocr_34888_1__34891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34888,(1));
if((ocr_34888_1__34891 === ".")){
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34888,(0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.morse-code-bar.-unit.-dot","div.morse-code-bar.-unit.-dot",-1193861432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.-content","div.-content",-485009847)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34893){if((e34893 instanceof Error)){
var e__31919__auto__ = e34893;
if((e__31919__auto__ === cljs.core.match.backtrack)){
try{var ocr_34888_1__34891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34888,(1));
if((ocr_34888_1__34891 === "-")){
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34888,(0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.morse-code-bar.-unit.-dash","div.morse-code-bar.-unit.-dash",-255565830),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.-content","div.-content",-485009847)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34894){if((e34894 instanceof Error)){
var e__31919__auto____$1 = e34894;
if((e__31919__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_34888_1__34891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34888,(1));
if((ocr_34888_1__34891 === "charspace")){
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34888,(0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.morse-code-bar.-unit.-charspace","div.morse-code-bar.-unit.-charspace",-215693333),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.-content","div.-content",-485009847)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34895){if((e34895 instanceof Error)){
var e__31919__auto____$2 = e34895;
if((e__31919__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_34888_1__34891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34888,(1));
if((ocr_34888_1__34891 === "wordspace")){
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_34888,(0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.morse-code-bar.-unit.-wordspace","div.morse-code-bar.-unit.-wordspace",1381610442),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.-content","div.-content",-485009847)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34896){if((e34896 instanceof Error)){
var e__31919__auto____$3 = e34896;
if((e__31919__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__31919__auto____$3;
}
} else {
throw e34896;

}
}} else {
throw e__31919__auto____$2;
}
} else {
throw e34895;

}
}} else {
throw e__31919__auto____$1;
}
} else {
throw e34894;

}
}} else {
throw e__31919__auto__;
}
} else {
throw e34893;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e34892){if((e34892 instanceof Error)){
var e__31919__auto__ = e34892;
if((e__31919__auto__ === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_34888)].join('')));
} else {
throw e__31919__auto__;
}
} else {
throw e34892;

}
}};
var app$component$bar$get_unit = function (var_args){
var args__33694__auto__ = null;
if (arguments.length > 0) {
var G__34911__i = 0, G__34911__a = new Array(arguments.length -  0);
while (G__34911__i < G__34911__a.length) {G__34911__a[G__34911__i] = arguments[G__34911__i + 0]; ++G__34911__i;}
  args__33694__auto__ = new cljs.core.IndexedSeq(G__34911__a,0,null);
} 
return app$component$bar$get_unit__delegate.call(this,args__33694__auto__);};
app$component$bar$get_unit.cljs$lang$maxFixedArity = 0;
app$component$bar$get_unit.cljs$lang$applyTo = (function (arglist__34912){
var args__33694__auto__ = cljs.core.seq(arglist__34912);
return app$component$bar$get_unit__delegate(args__33694__auto__);
});
app$component$bar$get_unit.cljs$core$IFn$_invoke$arity$variadic = app$component$bar$get_unit__delegate;
return app$component$bar$get_unit;
})()
;
app.component.bar.get_plain = (function app$component$bar$get_plain(i,p__34897){
var map__34898 = p__34897;
var map__34898__$1 = (((((!((map__34898 == null))))?(((((map__34898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34898):map__34898);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34898__$1,new cljs.core.Keyword(null,"char","char",-641587586));
var unit_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34898__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34898__$1,new cljs.core.Keyword(null,"num-syms","num-syms",-1195226432));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.morse-code-bar.-plain","div.morse-code-bar.-plain",-1560176934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",ch))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.-wordspace","div.-wordspace",-1206413973),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.-content","div.-content",-485009847)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.-letter","div.-letter",472283221),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),margin,new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit_width),"rem"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.-content","div.-content",-485009847),ch], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.-charspace","div.-charspace",-635605721),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.-content","div.-content",-485009847)], null)], null)], null)
)], null);
});
app.component.bar.code_bar = (function app$component$bar$code_bar(code,p__34900){
var map__34901 = p__34900;
var map__34901__$1 = (((((!((map__34901 == null))))?(((((map__34901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34901):map__34901);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34901__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var attr = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),app.component.bar.add_slice(),new cljs.core.Keyword(null,"transition-duration","transition-duration",85784092),"200ms"], null)], null);
var attr__$1 = (cljs.core.truth_(id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr,new cljs.core.Keyword(null,"id","id",-1388402092),id):attr);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.morse-code-bar.-inner","div.morse-code-bar.-inner",716623066),attr__$1,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(app.component.bar.get_unit,code)], null);
});
app.component.bar.plain_bar = (function app$component$bar$plain_bar(code,p__34903){
var map__34904 = p__34903;
var map__34904__$1 = (((((!((map__34904 == null))))?(((((map__34904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34904):map__34904);
var counted_plain = app.helpers.parse.code__GT_counted_plain(code);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.morse-code-bar.-inner","div.morse-code-bar.-inner",716623066),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),app.component.bar.add_slice(),new cljs.core.Keyword(null,"transition-duration","transition-duration",85784092),"200ms"], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(app.component.bar.get_plain,counted_plain)], null);
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.component.bar","bar-opts","app.component.bar/bar-opts",492770497),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.component.bar","hide-plain?","app.component.bar/hide-plain?",-1908616179),new cljs.core.Keyword("app.component.bar","hide-code?","app.component.bar/hide-code?",-862785684)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.component.bar","hide-plain?","app.component.bar/hide-plain?",-1908616179),new cljs.core.Keyword("app.component.bar","hide-code?","app.component.bar/hide-code?",-862785684)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__34906){
return cljs.core.map_QMARK_(G__34906);
})], null),(function (G__34906){
return cljs.core.map_QMARK_(G__34906);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hide-plain?","hide-plain?",456225404),new cljs.core.Keyword(null,"hide-code?","hide-code?",1496273121)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.component.bar","hide-plain?","app.component.bar/hide-plain?",-1908616179),new cljs.core.Keyword("app.component.bar","hide-code?","app.component.bar/hide-code?",-862785684)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
app.component.bar.morse_code_bar = (function app$component$bar$morse_code_bar(code,opts){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","morse-code","app.helpers.parse/morse-code",1471782479),code)){
} else {
throw (new Error("Assert failed: (s/valid? :app.helpers.parse/morse-code code)"));
}

if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.component.bar","bar-opts","app.component.bar/bar-opts",492770497),opts)){
} else {
throw (new Error("Assert failed: (s/valid? :app.component.bar/bar-opts opts)"));
}

var map__34909 = opts;
var map__34909__$1 = (((((!((map__34909 == null))))?(((((map__34909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34909):map__34909);
var hide_plain_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34909__$1,new cljs.core.Keyword(null,"hide-plain?","hide-plain?",456225404));
var hide_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34909__$1,new cljs.core.Keyword(null,"hide-code?","hide-code?",1496273121));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34909__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var hide_log_plain_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34909__$1,new cljs.core.Keyword(null,"hide-log-plain?","hide-log-plain?",1547059206));
var hide_log_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34909__$1,new cljs.core.Keyword(null,"hide-log-code?","hide-log-code?",1390534115));
var code_hidden_QMARK_ = (cljs.core.truth_(id)?hide_log_code_QMARK_:hide_code_QMARK_);
var plain_hidden_QMARK_ = (cljs.core.truth_(id)?hide_log_plain_QMARK_:hide_plain_QMARK_);
var num_bars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__34908_SHARP_,p2__34907_SHARP_){
if(cljs.core.not(p2__34907_SHARP_)){
return (p1__34908_SHARP_ + (1));
} else {
return p1__34908_SHARP_;
}
}),(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hide_code_QMARK_,hide_plain_QMARK_], null));
var bar_height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((3) * num_bars)),"rem"].join('');
var outer_attrs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),bar_height], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.morse-code-bar.-outer","div.morse-code-bar.-outer",-1370524023),outer_attrs,((cljs.core.not(plain_hidden_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.component.bar.plain_bar,code,opts], null):null),((cljs.core.not(code_hidden_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.component.bar.code_bar,code,opts], null):null)], null);
});

//# sourceMappingURL=app.component.bar.js.map
