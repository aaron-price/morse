goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35054 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35054(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35056 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35056(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33380 = coll;
var G__33381 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33380,G__33381) : shadow.dom.lazy_native_coll_seq.call(null,G__33380,G__33381));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33412 = arguments.length;
switch (G__33412) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33418 = arguments.length;
switch (G__33418) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33430 = arguments.length;
switch (G__33430) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33449 = arguments.length;
switch (G__33449) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33467 = arguments.length;
switch (G__33467) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33488 = arguments.length;
switch (G__33488) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33532){if((e33532 instanceof Object)){
var e = e33532;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33532;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33542 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33543 = null;
var count__33544 = (0);
var i__33545 = (0);
while(true){
if((i__33545 < count__33544)){
var el = chunk__33543.cljs$core$IIndexed$_nth$arity$2(null,i__33545);
var handler_35081__$1 = ((function (seq__33542,chunk__33543,count__33544,i__33545,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33542,chunk__33543,count__33544,i__33545,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35081__$1);


var G__35082 = seq__33542;
var G__35083 = chunk__33543;
var G__35084 = count__33544;
var G__35085 = (i__33545 + (1));
seq__33542 = G__35082;
chunk__33543 = G__35083;
count__33544 = G__35084;
i__33545 = G__35085;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33542);
if(temp__5735__auto__){
var seq__33542__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33542__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33542__$1);
var G__35087 = cljs.core.chunk_rest(seq__33542__$1);
var G__35088 = c__4556__auto__;
var G__35089 = cljs.core.count(c__4556__auto__);
var G__35090 = (0);
seq__33542 = G__35087;
chunk__33543 = G__35088;
count__33544 = G__35089;
i__33545 = G__35090;
continue;
} else {
var el = cljs.core.first(seq__33542__$1);
var handler_35092__$1 = ((function (seq__33542,chunk__33543,count__33544,i__33545,el,seq__33542__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33542,chunk__33543,count__33544,i__33545,el,seq__33542__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35092__$1);


var G__35094 = cljs.core.next(seq__33542__$1);
var G__35095 = null;
var G__35096 = (0);
var G__35097 = (0);
seq__33542 = G__35094;
chunk__33543 = G__35095;
count__33544 = G__35096;
i__33545 = G__35097;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33588 = arguments.length;
switch (G__33588) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33606 = cljs.core.seq(events);
var chunk__33607 = null;
var count__33608 = (0);
var i__33609 = (0);
while(true){
if((i__33609 < count__33608)){
var vec__33640 = chunk__33607.cljs$core$IIndexed$_nth$arity$2(null,i__33609);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33640,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33640,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35102 = seq__33606;
var G__35103 = chunk__33607;
var G__35104 = count__33608;
var G__35105 = (i__33609 + (1));
seq__33606 = G__35102;
chunk__33607 = G__35103;
count__33608 = G__35104;
i__33609 = G__35105;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33606);
if(temp__5735__auto__){
var seq__33606__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33606__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33606__$1);
var G__35106 = cljs.core.chunk_rest(seq__33606__$1);
var G__35107 = c__4556__auto__;
var G__35108 = cljs.core.count(c__4556__auto__);
var G__35109 = (0);
seq__33606 = G__35106;
chunk__33607 = G__35107;
count__33608 = G__35108;
i__33609 = G__35109;
continue;
} else {
var vec__33655 = cljs.core.first(seq__33606__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33655,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33655,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35113 = cljs.core.next(seq__33606__$1);
var G__35114 = null;
var G__35115 = (0);
var G__35116 = (0);
seq__33606 = G__35113;
chunk__33607 = G__35114;
count__33608 = G__35115;
i__33609 = G__35116;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33663 = cljs.core.seq(styles);
var chunk__33664 = null;
var count__33665 = (0);
var i__33666 = (0);
while(true){
if((i__33666 < count__33665)){
var vec__33691 = chunk__33664.cljs$core$IIndexed$_nth$arity$2(null,i__33666);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33691,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33691,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35127 = seq__33663;
var G__35128 = chunk__33664;
var G__35129 = count__33665;
var G__35130 = (i__33666 + (1));
seq__33663 = G__35127;
chunk__33664 = G__35128;
count__33665 = G__35129;
i__33666 = G__35130;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33663);
if(temp__5735__auto__){
var seq__33663__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33663__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33663__$1);
var G__35132 = cljs.core.chunk_rest(seq__33663__$1);
var G__35133 = c__4556__auto__;
var G__35134 = cljs.core.count(c__4556__auto__);
var G__35135 = (0);
seq__33663 = G__35132;
chunk__33664 = G__35133;
count__33665 = G__35134;
i__33666 = G__35135;
continue;
} else {
var vec__33699 = cljs.core.first(seq__33663__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33699,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33699,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35137 = cljs.core.next(seq__33663__$1);
var G__35138 = null;
var G__35139 = (0);
var G__35140 = (0);
seq__33663 = G__35137;
chunk__33664 = G__35138;
count__33665 = G__35139;
i__33666 = G__35140;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33755_35145 = key;
var G__33755_35146__$1 = (((G__33755_35145 instanceof cljs.core.Keyword))?G__33755_35145.fqn:null);
switch (G__33755_35146__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35182 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_35182,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_35182,"aria-");
}
})())){
el.setAttribute(ks_35182,value);
} else {
(el[ks_35182] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33831){
var map__33833 = p__33831;
var map__33833__$1 = (((((!((map__33833 == null))))?(((((map__33833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33833):map__33833);
var props = map__33833__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33833__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33843 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33843,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33843,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33843,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33849 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33849,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33849;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33862 = arguments.length;
switch (G__33862) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33887){
var vec__33889 = p__33887;
var seq__33890 = cljs.core.seq(vec__33889);
var first__33891 = cljs.core.first(seq__33890);
var seq__33890__$1 = cljs.core.next(seq__33890);
var nn = first__33891;
var first__33891__$1 = cljs.core.first(seq__33890__$1);
var seq__33890__$2 = cljs.core.next(seq__33890__$1);
var np = first__33891__$1;
var nc = seq__33890__$2;
var node = vec__33889;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33896 = nn;
var G__33897 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33896,G__33897) : create_fn.call(null,G__33896,G__33897));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33904 = nn;
var G__33905 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33904,G__33905) : create_fn.call(null,G__33904,G__33905));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33912 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33912,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33912,(1),null);
var seq__33919_35194 = cljs.core.seq(node_children);
var chunk__33920_35195 = null;
var count__33921_35196 = (0);
var i__33922_35197 = (0);
while(true){
if((i__33922_35197 < count__33921_35196)){
var child_struct_35201 = chunk__33920_35195.cljs$core$IIndexed$_nth$arity$2(null,i__33922_35197);
var children_35202 = shadow.dom.dom_node(child_struct_35201);
if(cljs.core.seq_QMARK_(children_35202)){
var seq__34006_35203 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35202));
var chunk__34008_35204 = null;
var count__34009_35205 = (0);
var i__34010_35206 = (0);
while(true){
if((i__34010_35206 < count__34009_35205)){
var child_35207 = chunk__34008_35204.cljs$core$IIndexed$_nth$arity$2(null,i__34010_35206);
if(cljs.core.truth_(child_35207)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35207);


var G__35208 = seq__34006_35203;
var G__35209 = chunk__34008_35204;
var G__35210 = count__34009_35205;
var G__35211 = (i__34010_35206 + (1));
seq__34006_35203 = G__35208;
chunk__34008_35204 = G__35209;
count__34009_35205 = G__35210;
i__34010_35206 = G__35211;
continue;
} else {
var G__35212 = seq__34006_35203;
var G__35213 = chunk__34008_35204;
var G__35214 = count__34009_35205;
var G__35215 = (i__34010_35206 + (1));
seq__34006_35203 = G__35212;
chunk__34008_35204 = G__35213;
count__34009_35205 = G__35214;
i__34010_35206 = G__35215;
continue;
}
} else {
var temp__5735__auto___35216 = cljs.core.seq(seq__34006_35203);
if(temp__5735__auto___35216){
var seq__34006_35217__$1 = temp__5735__auto___35216;
if(cljs.core.chunked_seq_QMARK_(seq__34006_35217__$1)){
var c__4556__auto___35218 = cljs.core.chunk_first(seq__34006_35217__$1);
var G__35219 = cljs.core.chunk_rest(seq__34006_35217__$1);
var G__35220 = c__4556__auto___35218;
var G__35221 = cljs.core.count(c__4556__auto___35218);
var G__35222 = (0);
seq__34006_35203 = G__35219;
chunk__34008_35204 = G__35220;
count__34009_35205 = G__35221;
i__34010_35206 = G__35222;
continue;
} else {
var child_35223 = cljs.core.first(seq__34006_35217__$1);
if(cljs.core.truth_(child_35223)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35223);


var G__35224 = cljs.core.next(seq__34006_35217__$1);
var G__35225 = null;
var G__35226 = (0);
var G__35227 = (0);
seq__34006_35203 = G__35224;
chunk__34008_35204 = G__35225;
count__34009_35205 = G__35226;
i__34010_35206 = G__35227;
continue;
} else {
var G__35228 = cljs.core.next(seq__34006_35217__$1);
var G__35229 = null;
var G__35230 = (0);
var G__35231 = (0);
seq__34006_35203 = G__35228;
chunk__34008_35204 = G__35229;
count__34009_35205 = G__35230;
i__34010_35206 = G__35231;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35202);
}


var G__35233 = seq__33919_35194;
var G__35234 = chunk__33920_35195;
var G__35235 = count__33921_35196;
var G__35236 = (i__33922_35197 + (1));
seq__33919_35194 = G__35233;
chunk__33920_35195 = G__35234;
count__33921_35196 = G__35235;
i__33922_35197 = G__35236;
continue;
} else {
var temp__5735__auto___35237 = cljs.core.seq(seq__33919_35194);
if(temp__5735__auto___35237){
var seq__33919_35238__$1 = temp__5735__auto___35237;
if(cljs.core.chunked_seq_QMARK_(seq__33919_35238__$1)){
var c__4556__auto___35246 = cljs.core.chunk_first(seq__33919_35238__$1);
var G__35251 = cljs.core.chunk_rest(seq__33919_35238__$1);
var G__35252 = c__4556__auto___35246;
var G__35253 = cljs.core.count(c__4556__auto___35246);
var G__35254 = (0);
seq__33919_35194 = G__35251;
chunk__33920_35195 = G__35252;
count__33921_35196 = G__35253;
i__33922_35197 = G__35254;
continue;
} else {
var child_struct_35255 = cljs.core.first(seq__33919_35238__$1);
var children_35256 = shadow.dom.dom_node(child_struct_35255);
if(cljs.core.seq_QMARK_(children_35256)){
var seq__34034_35261 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35256));
var chunk__34036_35262 = null;
var count__34037_35263 = (0);
var i__34038_35264 = (0);
while(true){
if((i__34038_35264 < count__34037_35263)){
var child_35265 = chunk__34036_35262.cljs$core$IIndexed$_nth$arity$2(null,i__34038_35264);
if(cljs.core.truth_(child_35265)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35265);


var G__35266 = seq__34034_35261;
var G__35267 = chunk__34036_35262;
var G__35268 = count__34037_35263;
var G__35269 = (i__34038_35264 + (1));
seq__34034_35261 = G__35266;
chunk__34036_35262 = G__35267;
count__34037_35263 = G__35268;
i__34038_35264 = G__35269;
continue;
} else {
var G__35270 = seq__34034_35261;
var G__35271 = chunk__34036_35262;
var G__35272 = count__34037_35263;
var G__35273 = (i__34038_35264 + (1));
seq__34034_35261 = G__35270;
chunk__34036_35262 = G__35271;
count__34037_35263 = G__35272;
i__34038_35264 = G__35273;
continue;
}
} else {
var temp__5735__auto___35274__$1 = cljs.core.seq(seq__34034_35261);
if(temp__5735__auto___35274__$1){
var seq__34034_35275__$1 = temp__5735__auto___35274__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34034_35275__$1)){
var c__4556__auto___35276 = cljs.core.chunk_first(seq__34034_35275__$1);
var G__35277 = cljs.core.chunk_rest(seq__34034_35275__$1);
var G__35278 = c__4556__auto___35276;
var G__35279 = cljs.core.count(c__4556__auto___35276);
var G__35280 = (0);
seq__34034_35261 = G__35277;
chunk__34036_35262 = G__35278;
count__34037_35263 = G__35279;
i__34038_35264 = G__35280;
continue;
} else {
var child_35281 = cljs.core.first(seq__34034_35275__$1);
if(cljs.core.truth_(child_35281)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35281);


var G__35282 = cljs.core.next(seq__34034_35275__$1);
var G__35283 = null;
var G__35284 = (0);
var G__35285 = (0);
seq__34034_35261 = G__35282;
chunk__34036_35262 = G__35283;
count__34037_35263 = G__35284;
i__34038_35264 = G__35285;
continue;
} else {
var G__35287 = cljs.core.next(seq__34034_35275__$1);
var G__35288 = null;
var G__35289 = (0);
var G__35290 = (0);
seq__34034_35261 = G__35287;
chunk__34036_35262 = G__35288;
count__34037_35263 = G__35289;
i__34038_35264 = G__35290;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35256);
}


var G__35291 = cljs.core.next(seq__33919_35238__$1);
var G__35292 = null;
var G__35293 = (0);
var G__35294 = (0);
seq__33919_35194 = G__35291;
chunk__33920_35195 = G__35292;
count__33921_35196 = G__35293;
i__33922_35197 = G__35294;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34117 = cljs.core.seq(node);
var chunk__34118 = null;
var count__34119 = (0);
var i__34120 = (0);
while(true){
if((i__34120 < count__34119)){
var n = chunk__34118.cljs$core$IIndexed$_nth$arity$2(null,i__34120);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35299 = seq__34117;
var G__35300 = chunk__34118;
var G__35301 = count__34119;
var G__35302 = (i__34120 + (1));
seq__34117 = G__35299;
chunk__34118 = G__35300;
count__34119 = G__35301;
i__34120 = G__35302;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34117);
if(temp__5735__auto__){
var seq__34117__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34117__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34117__$1);
var G__35306 = cljs.core.chunk_rest(seq__34117__$1);
var G__35307 = c__4556__auto__;
var G__35308 = cljs.core.count(c__4556__auto__);
var G__35309 = (0);
seq__34117 = G__35306;
chunk__34118 = G__35307;
count__34119 = G__35308;
i__34120 = G__35309;
continue;
} else {
var n = cljs.core.first(seq__34117__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35310 = cljs.core.next(seq__34117__$1);
var G__35311 = null;
var G__35312 = (0);
var G__35313 = (0);
seq__34117 = G__35310;
chunk__34118 = G__35311;
count__34119 = G__35312;
i__34120 = G__35313;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34137 = arguments.length;
switch (G__34137) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34145 = arguments.length;
switch (G__34145) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34166 = arguments.length;
switch (G__34166) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35320 = arguments.length;
var i__4737__auto___35321 = (0);
while(true){
if((i__4737__auto___35321 < len__4736__auto___35320)){
args__4742__auto__.push((arguments[i__4737__auto___35321]));

var G__35324 = (i__4737__auto___35321 + (1));
i__4737__auto___35321 = G__35324;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34275_35325 = cljs.core.seq(nodes);
var chunk__34276_35326 = null;
var count__34277_35327 = (0);
var i__34278_35328 = (0);
while(true){
if((i__34278_35328 < count__34277_35327)){
var node_35330 = chunk__34276_35326.cljs$core$IIndexed$_nth$arity$2(null,i__34278_35328);
fragment.appendChild(shadow.dom._to_dom(node_35330));


var G__35331 = seq__34275_35325;
var G__35332 = chunk__34276_35326;
var G__35333 = count__34277_35327;
var G__35334 = (i__34278_35328 + (1));
seq__34275_35325 = G__35331;
chunk__34276_35326 = G__35332;
count__34277_35327 = G__35333;
i__34278_35328 = G__35334;
continue;
} else {
var temp__5735__auto___35336 = cljs.core.seq(seq__34275_35325);
if(temp__5735__auto___35336){
var seq__34275_35337__$1 = temp__5735__auto___35336;
if(cljs.core.chunked_seq_QMARK_(seq__34275_35337__$1)){
var c__4556__auto___35338 = cljs.core.chunk_first(seq__34275_35337__$1);
var G__35339 = cljs.core.chunk_rest(seq__34275_35337__$1);
var G__35340 = c__4556__auto___35338;
var G__35341 = cljs.core.count(c__4556__auto___35338);
var G__35342 = (0);
seq__34275_35325 = G__35339;
chunk__34276_35326 = G__35340;
count__34277_35327 = G__35341;
i__34278_35328 = G__35342;
continue;
} else {
var node_35343 = cljs.core.first(seq__34275_35337__$1);
fragment.appendChild(shadow.dom._to_dom(node_35343));


var G__35344 = cljs.core.next(seq__34275_35337__$1);
var G__35345 = null;
var G__35346 = (0);
var G__35347 = (0);
seq__34275_35325 = G__35344;
chunk__34276_35326 = G__35345;
count__34277_35327 = G__35346;
i__34278_35328 = G__35347;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34215){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34215));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34299_35348 = cljs.core.seq(scripts);
var chunk__34300_35349 = null;
var count__34302_35350 = (0);
var i__34303_35351 = (0);
while(true){
if((i__34303_35351 < count__34302_35350)){
var vec__34320_35352 = chunk__34300_35349.cljs$core$IIndexed$_nth$arity$2(null,i__34303_35351);
var script_tag_35353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34320_35352,(0),null);
var script_body_35354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34320_35352,(1),null);
eval(script_body_35354);


var G__35355 = seq__34299_35348;
var G__35356 = chunk__34300_35349;
var G__35357 = count__34302_35350;
var G__35358 = (i__34303_35351 + (1));
seq__34299_35348 = G__35355;
chunk__34300_35349 = G__35356;
count__34302_35350 = G__35357;
i__34303_35351 = G__35358;
continue;
} else {
var temp__5735__auto___35359 = cljs.core.seq(seq__34299_35348);
if(temp__5735__auto___35359){
var seq__34299_35360__$1 = temp__5735__auto___35359;
if(cljs.core.chunked_seq_QMARK_(seq__34299_35360__$1)){
var c__4556__auto___35361 = cljs.core.chunk_first(seq__34299_35360__$1);
var G__35362 = cljs.core.chunk_rest(seq__34299_35360__$1);
var G__35363 = c__4556__auto___35361;
var G__35364 = cljs.core.count(c__4556__auto___35361);
var G__35365 = (0);
seq__34299_35348 = G__35362;
chunk__34300_35349 = G__35363;
count__34302_35350 = G__35364;
i__34303_35351 = G__35365;
continue;
} else {
var vec__34325_35370 = cljs.core.first(seq__34299_35360__$1);
var script_tag_35371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34325_35370,(0),null);
var script_body_35372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34325_35370,(1),null);
eval(script_body_35372);


var G__35376 = cljs.core.next(seq__34299_35360__$1);
var G__35377 = null;
var G__35378 = (0);
var G__35379 = (0);
seq__34299_35348 = G__35376;
chunk__34300_35349 = G__35377;
count__34302_35350 = G__35378;
i__34303_35351 = G__35379;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34369){
var vec__34373 = p__34369;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34373,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34373,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34388 = arguments.length;
switch (G__34388) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34411 = cljs.core.seq(style_keys);
var chunk__34412 = null;
var count__34413 = (0);
var i__34414 = (0);
while(true){
if((i__34414 < count__34413)){
var it = chunk__34412.cljs$core$IIndexed$_nth$arity$2(null,i__34414);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35384 = seq__34411;
var G__35385 = chunk__34412;
var G__35386 = count__34413;
var G__35387 = (i__34414 + (1));
seq__34411 = G__35384;
chunk__34412 = G__35385;
count__34413 = G__35386;
i__34414 = G__35387;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34411);
if(temp__5735__auto__){
var seq__34411__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34411__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34411__$1);
var G__35388 = cljs.core.chunk_rest(seq__34411__$1);
var G__35389 = c__4556__auto__;
var G__35390 = cljs.core.count(c__4556__auto__);
var G__35391 = (0);
seq__34411 = G__35388;
chunk__34412 = G__35389;
count__34413 = G__35390;
i__34414 = G__35391;
continue;
} else {
var it = cljs.core.first(seq__34411__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35395 = cljs.core.next(seq__34411__$1);
var G__35396 = null;
var G__35397 = (0);
var G__35398 = (0);
seq__34411 = G__35395;
chunk__34412 = G__35396;
count__34413 = G__35397;
i__34414 = G__35398;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k34418,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__34427 = k34418;
var G__34427__$1 = (((G__34427 instanceof cljs.core.Keyword))?G__34427.fqn:null);
switch (G__34427__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34418,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__34430){
var vec__34431 = p__34430;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34431,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34431,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34417){
var self__ = this;
var G__34417__$1 = this;
return (new cljs.core.RecordIter((0),G__34417__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34419,other34420){
var self__ = this;
var this34419__$1 = this;
return (((!((other34420 == null)))) && ((this34419__$1.constructor === other34420.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34419__$1.x,other34420.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34419__$1.y,other34420.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34419__$1.__extmap,other34420.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__34417){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34484 = cljs.core.keyword_identical_QMARK_;
var expr__34485 = k__4388__auto__;
if(cljs.core.truth_((pred__34484.cljs$core$IFn$_invoke$arity$2 ? pred__34484.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34485) : pred__34484.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34485)))){
return (new shadow.dom.Coordinate(G__34417,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34484.cljs$core$IFn$_invoke$arity$2 ? pred__34484.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34485) : pred__34484.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34485)))){
return (new shadow.dom.Coordinate(self__.x,G__34417,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__34417),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__34417){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34417,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34422){
var extmap__4419__auto__ = (function (){var G__34563 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34422,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34422)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34563);
} else {
return G__34563;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34422),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34422),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k34583,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__34600 = k34583;
var G__34600__$1 = (((G__34600 instanceof cljs.core.Keyword))?G__34600.fqn:null);
switch (G__34600__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34583,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__34614){
var vec__34615 = p__34614;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34615,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34615,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34582){
var self__ = this;
var G__34582__$1 = this;
return (new cljs.core.RecordIter((0),G__34582__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34584,other34585){
var self__ = this;
var this34584__$1 = this;
return (((!((other34585 == null)))) && ((this34584__$1.constructor === other34585.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34584__$1.w,other34585.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34584__$1.h,other34585.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34584__$1.__extmap,other34585.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__34582){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34655 = cljs.core.keyword_identical_QMARK_;
var expr__34656 = k__4388__auto__;
if(cljs.core.truth_((pred__34655.cljs$core$IFn$_invoke$arity$2 ? pred__34655.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34656) : pred__34655.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34656)))){
return (new shadow.dom.Size(G__34582,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34655.cljs$core$IFn$_invoke$arity$2 ? pred__34655.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34656) : pred__34655.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34656)))){
return (new shadow.dom.Size(self__.w,G__34582,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__34582),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__34582){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34582,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34592){
var extmap__4419__auto__ = (function (){var G__34682 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34592,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34592)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34682);
} else {
return G__34682;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34592),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34592),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__35432 = (i + (1));
var G__35433 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35432;
ret = G__35433;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34722){
var vec__34723 = p__34722;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34723,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34723,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34729 = arguments.length;
switch (G__34729) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35447 = ps;
var G__35448 = (i + (1));
el__$1 = G__35447;
i = G__35448;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34780 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34780,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34780,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34780,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34784_35468 = cljs.core.seq(props);
var chunk__34785_35469 = null;
var count__34786_35470 = (0);
var i__34787_35471 = (0);
while(true){
if((i__34787_35471 < count__34786_35470)){
var vec__34800_35472 = chunk__34785_35469.cljs$core$IIndexed$_nth$arity$2(null,i__34787_35471);
var k_35473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34800_35472,(0),null);
var v_35474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34800_35472,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35473);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35473),v_35474);


var G__35482 = seq__34784_35468;
var G__35483 = chunk__34785_35469;
var G__35484 = count__34786_35470;
var G__35485 = (i__34787_35471 + (1));
seq__34784_35468 = G__35482;
chunk__34785_35469 = G__35483;
count__34786_35470 = G__35484;
i__34787_35471 = G__35485;
continue;
} else {
var temp__5735__auto___35487 = cljs.core.seq(seq__34784_35468);
if(temp__5735__auto___35487){
var seq__34784_35488__$1 = temp__5735__auto___35487;
if(cljs.core.chunked_seq_QMARK_(seq__34784_35488__$1)){
var c__4556__auto___35489 = cljs.core.chunk_first(seq__34784_35488__$1);
var G__35490 = cljs.core.chunk_rest(seq__34784_35488__$1);
var G__35491 = c__4556__auto___35489;
var G__35492 = cljs.core.count(c__4556__auto___35489);
var G__35493 = (0);
seq__34784_35468 = G__35490;
chunk__34785_35469 = G__35491;
count__34786_35470 = G__35492;
i__34787_35471 = G__35493;
continue;
} else {
var vec__34807_35494 = cljs.core.first(seq__34784_35488__$1);
var k_35495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34807_35494,(0),null);
var v_35496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34807_35494,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_35495);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35495),v_35496);


var G__35504 = cljs.core.next(seq__34784_35488__$1);
var G__35505 = null;
var G__35506 = (0);
var G__35507 = (0);
seq__34784_35468 = G__35504;
chunk__34785_35469 = G__35505;
count__34786_35470 = G__35506;
i__34787_35471 = G__35507;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34818 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34818,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34818,(1),null);
var seq__34821_35519 = cljs.core.seq(node_children);
var chunk__34823_35520 = null;
var count__34824_35521 = (0);
var i__34825_35522 = (0);
while(true){
if((i__34825_35522 < count__34824_35521)){
var child_struct_35523 = chunk__34823_35520.cljs$core$IIndexed$_nth$arity$2(null,i__34825_35522);
if((!((child_struct_35523 == null)))){
if(typeof child_struct_35523 === 'string'){
var text_35524 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35524),child_struct_35523].join(''));
} else {
var children_35525 = shadow.dom.svg_node(child_struct_35523);
if(cljs.core.seq_QMARK_(children_35525)){
var seq__34913_35528 = cljs.core.seq(children_35525);
var chunk__34915_35529 = null;
var count__34916_35530 = (0);
var i__34917_35531 = (0);
while(true){
if((i__34917_35531 < count__34916_35530)){
var child_35536 = chunk__34915_35529.cljs$core$IIndexed$_nth$arity$2(null,i__34917_35531);
if(cljs.core.truth_(child_35536)){
node.appendChild(child_35536);


var G__35537 = seq__34913_35528;
var G__35538 = chunk__34915_35529;
var G__35539 = count__34916_35530;
var G__35540 = (i__34917_35531 + (1));
seq__34913_35528 = G__35537;
chunk__34915_35529 = G__35538;
count__34916_35530 = G__35539;
i__34917_35531 = G__35540;
continue;
} else {
var G__35541 = seq__34913_35528;
var G__35542 = chunk__34915_35529;
var G__35543 = count__34916_35530;
var G__35544 = (i__34917_35531 + (1));
seq__34913_35528 = G__35541;
chunk__34915_35529 = G__35542;
count__34916_35530 = G__35543;
i__34917_35531 = G__35544;
continue;
}
} else {
var temp__5735__auto___35545 = cljs.core.seq(seq__34913_35528);
if(temp__5735__auto___35545){
var seq__34913_35546__$1 = temp__5735__auto___35545;
if(cljs.core.chunked_seq_QMARK_(seq__34913_35546__$1)){
var c__4556__auto___35547 = cljs.core.chunk_first(seq__34913_35546__$1);
var G__35555 = cljs.core.chunk_rest(seq__34913_35546__$1);
var G__35556 = c__4556__auto___35547;
var G__35557 = cljs.core.count(c__4556__auto___35547);
var G__35558 = (0);
seq__34913_35528 = G__35555;
chunk__34915_35529 = G__35556;
count__34916_35530 = G__35557;
i__34917_35531 = G__35558;
continue;
} else {
var child_35560 = cljs.core.first(seq__34913_35546__$1);
if(cljs.core.truth_(child_35560)){
node.appendChild(child_35560);


var G__35561 = cljs.core.next(seq__34913_35546__$1);
var G__35562 = null;
var G__35563 = (0);
var G__35564 = (0);
seq__34913_35528 = G__35561;
chunk__34915_35529 = G__35562;
count__34916_35530 = G__35563;
i__34917_35531 = G__35564;
continue;
} else {
var G__35565 = cljs.core.next(seq__34913_35546__$1);
var G__35566 = null;
var G__35567 = (0);
var G__35568 = (0);
seq__34913_35528 = G__35565;
chunk__34915_35529 = G__35566;
count__34916_35530 = G__35567;
i__34917_35531 = G__35568;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35525);
}
}


var G__35569 = seq__34821_35519;
var G__35570 = chunk__34823_35520;
var G__35571 = count__34824_35521;
var G__35572 = (i__34825_35522 + (1));
seq__34821_35519 = G__35569;
chunk__34823_35520 = G__35570;
count__34824_35521 = G__35571;
i__34825_35522 = G__35572;
continue;
} else {
var G__35573 = seq__34821_35519;
var G__35574 = chunk__34823_35520;
var G__35575 = count__34824_35521;
var G__35576 = (i__34825_35522 + (1));
seq__34821_35519 = G__35573;
chunk__34823_35520 = G__35574;
count__34824_35521 = G__35575;
i__34825_35522 = G__35576;
continue;
}
} else {
var temp__5735__auto___35577 = cljs.core.seq(seq__34821_35519);
if(temp__5735__auto___35577){
var seq__34821_35579__$1 = temp__5735__auto___35577;
if(cljs.core.chunked_seq_QMARK_(seq__34821_35579__$1)){
var c__4556__auto___35580 = cljs.core.chunk_first(seq__34821_35579__$1);
var G__35581 = cljs.core.chunk_rest(seq__34821_35579__$1);
var G__35582 = c__4556__auto___35580;
var G__35583 = cljs.core.count(c__4556__auto___35580);
var G__35584 = (0);
seq__34821_35519 = G__35581;
chunk__34823_35520 = G__35582;
count__34824_35521 = G__35583;
i__34825_35522 = G__35584;
continue;
} else {
var child_struct_35586 = cljs.core.first(seq__34821_35579__$1);
if((!((child_struct_35586 == null)))){
if(typeof child_struct_35586 === 'string'){
var text_35591 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35591),child_struct_35586].join(''));
} else {
var children_35592 = shadow.dom.svg_node(child_struct_35586);
if(cljs.core.seq_QMARK_(children_35592)){
var seq__34975_35593 = cljs.core.seq(children_35592);
var chunk__34977_35594 = null;
var count__34978_35595 = (0);
var i__34979_35596 = (0);
while(true){
if((i__34979_35596 < count__34978_35595)){
var child_35601 = chunk__34977_35594.cljs$core$IIndexed$_nth$arity$2(null,i__34979_35596);
if(cljs.core.truth_(child_35601)){
node.appendChild(child_35601);


var G__35602 = seq__34975_35593;
var G__35603 = chunk__34977_35594;
var G__35604 = count__34978_35595;
var G__35605 = (i__34979_35596 + (1));
seq__34975_35593 = G__35602;
chunk__34977_35594 = G__35603;
count__34978_35595 = G__35604;
i__34979_35596 = G__35605;
continue;
} else {
var G__35607 = seq__34975_35593;
var G__35608 = chunk__34977_35594;
var G__35609 = count__34978_35595;
var G__35610 = (i__34979_35596 + (1));
seq__34975_35593 = G__35607;
chunk__34977_35594 = G__35608;
count__34978_35595 = G__35609;
i__34979_35596 = G__35610;
continue;
}
} else {
var temp__5735__auto___35617__$1 = cljs.core.seq(seq__34975_35593);
if(temp__5735__auto___35617__$1){
var seq__34975_35623__$1 = temp__5735__auto___35617__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34975_35623__$1)){
var c__4556__auto___35624 = cljs.core.chunk_first(seq__34975_35623__$1);
var G__35625 = cljs.core.chunk_rest(seq__34975_35623__$1);
var G__35626 = c__4556__auto___35624;
var G__35627 = cljs.core.count(c__4556__auto___35624);
var G__35628 = (0);
seq__34975_35593 = G__35625;
chunk__34977_35594 = G__35626;
count__34978_35595 = G__35627;
i__34979_35596 = G__35628;
continue;
} else {
var child_35629 = cljs.core.first(seq__34975_35623__$1);
if(cljs.core.truth_(child_35629)){
node.appendChild(child_35629);


var G__35630 = cljs.core.next(seq__34975_35623__$1);
var G__35631 = null;
var G__35632 = (0);
var G__35633 = (0);
seq__34975_35593 = G__35630;
chunk__34977_35594 = G__35631;
count__34978_35595 = G__35632;
i__34979_35596 = G__35633;
continue;
} else {
var G__35634 = cljs.core.next(seq__34975_35623__$1);
var G__35635 = null;
var G__35636 = (0);
var G__35637 = (0);
seq__34975_35593 = G__35634;
chunk__34977_35594 = G__35635;
count__34978_35595 = G__35636;
i__34979_35596 = G__35637;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35592);
}
}


var G__35638 = cljs.core.next(seq__34821_35579__$1);
var G__35639 = null;
var G__35640 = (0);
var G__35641 = (0);
seq__34821_35519 = G__35638;
chunk__34823_35520 = G__35639;
count__34824_35521 = G__35640;
i__34825_35522 = G__35641;
continue;
} else {
var G__35642 = cljs.core.next(seq__34821_35579__$1);
var G__35643 = null;
var G__35644 = (0);
var G__35645 = (0);
seq__34821_35519 = G__35642;
chunk__34823_35520 = G__35643;
count__34824_35521 = G__35644;
i__34825_35522 = G__35645;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35655 = arguments.length;
var i__4737__auto___35656 = (0);
while(true){
if((i__4737__auto___35656 < len__4736__auto___35655)){
args__4742__auto__.push((arguments[i__4737__auto___35656]));

var G__35659 = (i__4737__auto___35656 + (1));
i__4737__auto___35656 = G__35659;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35011){
var G__35012 = cljs.core.first(seq35011);
var seq35011__$1 = cljs.core.next(seq35011);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35012,seq35011__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35024 = arguments.length;
switch (G__35024) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__30066__auto___35670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30067__auto__ = (function (){var switch__29954__auto__ = (function (state_35033){
var state_val_35034 = (state_35033[(1)]);
if((state_val_35034 === (1))){
var state_35033__$1 = state_35033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35033__$1,(2),once_or_cleanup);
} else {
if((state_val_35034 === (2))){
var inst_35030 = (state_35033[(2)]);
var inst_35031 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35033__$1 = (function (){var statearr_35043 = state_35033;
(statearr_35043[(7)] = inst_35030);

return statearr_35043;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35033__$1,inst_35031);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29955__auto__ = null;
var shadow$dom$state_machine__29955__auto____0 = (function (){
var statearr_35047 = [null,null,null,null,null,null,null,null];
(statearr_35047[(0)] = shadow$dom$state_machine__29955__auto__);

(statearr_35047[(1)] = (1));

return statearr_35047;
});
var shadow$dom$state_machine__29955__auto____1 = (function (state_35033){
while(true){
var ret_value__29956__auto__ = (function (){try{while(true){
var result__29957__auto__ = switch__29954__auto__(state_35033);
if(cljs.core.keyword_identical_QMARK_(result__29957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29957__auto__;
}
break;
}
}catch (e35048){var ex__29958__auto__ = e35048;
var statearr_35049_35682 = state_35033;
(statearr_35049_35682[(2)] = ex__29958__auto__);


if(cljs.core.seq((state_35033[(4)]))){
var statearr_35050_35683 = state_35033;
(statearr_35050_35683[(1)] = cljs.core.first((state_35033[(4)])));

} else {
throw ex__29958__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35684 = state_35033;
state_35033 = G__35684;
continue;
} else {
return ret_value__29956__auto__;
}
break;
}
});
shadow$dom$state_machine__29955__auto__ = function(state_35033){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29955__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29955__auto____1.call(this,state_35033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29955__auto____0;
shadow$dom$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29955__auto____1;
return shadow$dom$state_machine__29955__auto__;
})()
})();
var state__30068__auto__ = (function (){var statearr_35052 = f__30067__auto__();
(statearr_35052[(6)] = c__30066__auto___35670);

return statearr_35052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30068__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
