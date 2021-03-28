goog.provide('app.component.challenge');
app.component.challenge.render_challenge = (function app$component$challenge$render_challenge(spec,chal_code,log_code){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(spec)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.component.bar.morse_code_bar,chal_code,spec], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.component.button.default_btn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.component.bar.morse_code_bar,log_code,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"id","id",-1388402092),"log-bar")], null)], null);
});
app.component.challenge.render_victory = (function app$component$challenge$render_victory(spec,chal_code,log_code){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Good job, you did it!"], null);
});
app.component.challenge.render_fail = (function app$component$challenge$render_fail(spec,chal_code,log_code){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Hmm that's not quite right.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.component.bar.morse_code_bar,chal_code,spec], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-challenge","reset-challenge",-2092688734)], null));
})], null),"Try Again"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.component.bar.morse_code_bar,log_code,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"failed","failed",-1397425762),true], null)], null)], null);
});
app.component.challenge.safe_nth = (function app$component$challenge$safe_nth(coll,idx){
if((cljs.core.count(coll) <= idx)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,(idx - (1)));
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,idx);
}
});
app.component.challenge.challenge_master = (function app$component$challenge$challenge_master(abnormal_specs){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-challenges","init-challenges",1095613635),abnormal_specs], null));

return (function (){
var log_code = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"predict->morse-code","predict->morse-code",1333669763)], null)));
var db_challenge = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"challenge","challenge",1302148691)], null)));
var map__65484 = db_challenge;
var map__65484__$1 = (((((!((map__65484 == null))))?(((((map__65484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65484):map__65484);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65484__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65484__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var challenge_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65484__$1,new cljs.core.Keyword(null,"challenge-specs","challenge-specs",1094085111));
var curr_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65484__$1,new cljs.core.Keyword(null,"curr-code","curr-code",905590378));
var spec = app.component.challenge.safe_nth(challenge_specs,index);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"completed","completed",-486056503))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.component.challenge.render_victory,spec,curr_code,log_code], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"failed","failed",-1397425762))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.component.challenge.render_fail,spec,curr_code,log_code], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.component.challenge.render_challenge,spec,curr_code,log_code], null);

}
}
});
});

//# sourceMappingURL=app.component.challenge.js.map
