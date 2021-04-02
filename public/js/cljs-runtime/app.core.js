goog.provide('app.core');
app.core.routes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("app.core","index","app.core/index",-543884975),new cljs.core.Keyword(null,"view","view",1247994814),app.component.root.root], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/learn/lesson1",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("app.core","lesson1","app.core/lesson1",1041277185),new cljs.core.Keyword(null,"view","view",1247994814),app.component.page.learn.lesson1.page], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/device",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("app.core","device","app.core/device",692513956),new cljs.core.Keyword(null,"view","view",1247994814),app.component.page.device.page], null)], null)], null);
app.core.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(app.core.routes);
app.core.init = (function app$core$init(){
var path = window.location.pathname;
var path__$1 = (cljs.core.truth_(window.is_mobile())?"/device":path
);
var route = reitit.frontend.match_by_path(app.core.router,path__$1);
var view = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"view","view",1247994814)], null));
var node = app.helpers.interop.get_node("root");
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913),route], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913),route], null));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(view,node);
});

//# sourceMappingURL=app.core.js.map
