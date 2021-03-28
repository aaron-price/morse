goog.provide('app.component.sandbox');
app.component.sandbox.morse_code = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","charspace",".","-","charspace","-","wordspace",".","-","charspace","-","wordspace",".","-","charspace","-","wordspace",".","-","charspace","-","wordspace"], null);
app.component.sandbox.page = (function app$component$sandbox$page(){
var mc = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"predict->morse-code","predict->morse-code",1333669763)], null)));
var t = app.helpers.parse.count_code(mc);
var slice = (((t < (15)))?(0):(t - (15)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.component.wpm_controller.wpm_controller], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.component.bar.morse_code_bar,app.component.sandbox.morse_code,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slice","slice",-1993607756),slice], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.component.button.default_btn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.component.bar.morse_code_bar,mc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slice","slice",-1993607756),slice], null)], null)], null);
});

//# sourceMappingURL=app.component.sandbox.js.map
