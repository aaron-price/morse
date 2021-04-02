goog.provide('app.component.button');
app.component.button.handle_slide = (function app$component$button$handle_slide(v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(0))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tap-down","tap-down",-2100577571)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(1))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tap-up","tap-up",-367468318)], null));
} else {
return null;
}
}
});
app.component.button.slider_btn = (function app$component$button$slider_btn(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rangeslider-wrap","div.rangeslider-wrap",236015725),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),"0",new cljs.core.Keyword(null,"max","max",61366548),"1",new cljs.core.Keyword(null,"step","step",1288888124),"1",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__34847_SHARP_){
return app.component.button.handle_slide((p1__34847_SHARP_.target.value | (0)));
})], null)], null)], null);
});
app.component.button.default_btn = (function app$component$button$default_btn(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button-parent","div.button-parent",-1870329860),"Tap Below",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#btn.basic","div#btn.basic",1811546967),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tap-down","tap-down",-2100577571)], null));
}),new cljs.core.Keyword(null,"on-pointer-up","on-pointer-up",385194000),(function (e){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tap-up","tap-up",-367468318)], null));
})], null)], null)], null);
});
app.component.button.reset_log = (function app$component$button$reset_log(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-pointer-up","on-pointer-up",385194000),(function (e){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-log","reset-log",209055708)], null));
})], null),"Reset"], null);
});
app.component.button.render_btn = (function app$component$button$render_btn(){
var ocr_34848 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"btn-type","btn-type",1955528955)], null)));
try{if(cljs.core.keyword_identical_QMARK_(ocr_34848,new cljs.core.Keyword(null,"slider","slider",-472668865))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.component.button.slider_btn], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34850){if((e34850 instanceof Error)){
var e__31919__auto__ = e34850;
if((e__31919__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(ocr_34848,new cljs.core.Keyword(null,"click","click",1912301393))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.component.button.default_btn], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e34851){if((e34851 instanceof Error)){
var e__31919__auto____$1 = e34851;
if((e__31919__auto____$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_34848)].join('')));
} else {
throw e__31919__auto____$1;
}
} else {
throw e34851;

}
}} else {
throw e__31919__auto__;
}
} else {
throw e34850;

}
}});

//# sourceMappingURL=app.component.button.js.map
