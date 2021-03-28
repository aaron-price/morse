goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34645 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_34645(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34648 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_34648(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33295 = coll;
var G__33296 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33295,G__33296) : shadow.dom.lazy_native_coll_seq.call(null,G__33295,G__33296));
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
var G__33377 = arguments.length;
switch (G__33377) {
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
var G__33391 = arguments.length;
switch (G__33391) {
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
var G__33404 = arguments.length;
switch (G__33404) {
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
var G__33459 = arguments.length;
switch (G__33459) {
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
var G__33498 = arguments.length;
switch (G__33498) {
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
var G__33562 = arguments.length;
switch (G__33562) {
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
}catch (e33582){if((e33582 instanceof Object)){
var e = e33582;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33582;

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
var seq__33604 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33605 = null;
var count__33606 = (0);
var i__33607 = (0);
while(true){
if((i__33607 < count__33606)){
var el = chunk__33605.cljs$core$IIndexed$_nth$arity$2(null,i__33607);
var handler_34669__$1 = ((function (seq__33604,chunk__33605,count__33606,i__33607,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33604,chunk__33605,count__33606,i__33607,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34669__$1);


var G__34670 = seq__33604;
var G__34671 = chunk__33605;
var G__34672 = count__33606;
var G__34673 = (i__33607 + (1));
seq__33604 = G__34670;
chunk__33605 = G__34671;
count__33606 = G__34672;
i__33607 = G__34673;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33604);
if(temp__5735__auto__){
var seq__33604__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33604__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33604__$1);
var G__34674 = cljs.core.chunk_rest(seq__33604__$1);
var G__34675 = c__4556__auto__;
var G__34676 = cljs.core.count(c__4556__auto__);
var G__34677 = (0);
seq__33604 = G__34674;
chunk__33605 = G__34675;
count__33606 = G__34676;
i__33607 = G__34677;
continue;
} else {
var el = cljs.core.first(seq__33604__$1);
var handler_34678__$1 = ((function (seq__33604,chunk__33605,count__33606,i__33607,el,seq__33604__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33604,chunk__33605,count__33606,i__33607,el,seq__33604__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34678__$1);


var G__34679 = cljs.core.next(seq__33604__$1);
var G__34680 = null;
var G__34681 = (0);
var G__34682 = (0);
seq__33604 = G__34679;
chunk__33605 = G__34680;
count__33606 = G__34681;
i__33607 = G__34682;
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
var G__33641 = arguments.length;
switch (G__33641) {
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
var seq__33670 = cljs.core.seq(events);
var chunk__33671 = null;
var count__33672 = (0);
var i__33673 = (0);
while(true){
if((i__33673 < count__33672)){
var vec__33700 = chunk__33671.cljs$core$IIndexed$_nth$arity$2(null,i__33673);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33700,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33700,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34684 = seq__33670;
var G__34685 = chunk__33671;
var G__34686 = count__33672;
var G__34687 = (i__33673 + (1));
seq__33670 = G__34684;
chunk__33671 = G__34685;
count__33672 = G__34686;
i__33673 = G__34687;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33670);
if(temp__5735__auto__){
var seq__33670__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33670__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33670__$1);
var G__34688 = cljs.core.chunk_rest(seq__33670__$1);
var G__34689 = c__4556__auto__;
var G__34690 = cljs.core.count(c__4556__auto__);
var G__34691 = (0);
seq__33670 = G__34688;
chunk__33671 = G__34689;
count__33672 = G__34690;
i__33673 = G__34691;
continue;
} else {
var vec__33710 = cljs.core.first(seq__33670__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33710,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33710,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34692 = cljs.core.next(seq__33670__$1);
var G__34693 = null;
var G__34694 = (0);
var G__34695 = (0);
seq__33670 = G__34692;
chunk__33671 = G__34693;
count__33672 = G__34694;
i__33673 = G__34695;
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
var seq__33720 = cljs.core.seq(styles);
var chunk__33721 = null;
var count__33722 = (0);
var i__33723 = (0);
while(true){
if((i__33723 < count__33722)){
var vec__33743 = chunk__33721.cljs$core$IIndexed$_nth$arity$2(null,i__33723);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33743,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33743,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34699 = seq__33720;
var G__34700 = chunk__33721;
var G__34701 = count__33722;
var G__34702 = (i__33723 + (1));
seq__33720 = G__34699;
chunk__33721 = G__34700;
count__33722 = G__34701;
i__33723 = G__34702;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33720);
if(temp__5735__auto__){
var seq__33720__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33720__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33720__$1);
var G__34704 = cljs.core.chunk_rest(seq__33720__$1);
var G__34705 = c__4556__auto__;
var G__34706 = cljs.core.count(c__4556__auto__);
var G__34707 = (0);
seq__33720 = G__34704;
chunk__33721 = G__34705;
count__33722 = G__34706;
i__33723 = G__34707;
continue;
} else {
var vec__33748 = cljs.core.first(seq__33720__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33748,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33748,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34710 = cljs.core.next(seq__33720__$1);
var G__34711 = null;
var G__34712 = (0);
var G__34713 = (0);
seq__33720 = G__34710;
chunk__33721 = G__34711;
count__33722 = G__34712;
i__33723 = G__34713;
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
var G__33758_34714 = key;
var G__33758_34715__$1 = (((G__33758_34714 instanceof cljs.core.Keyword))?G__33758_34714.fqn:null);
switch (G__33758_34715__$1) {
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
var ks_34721 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_34721,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_34721,"aria-");
}
})())){
el.setAttribute(ks_34721,value);
} else {
(el[ks_34721] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33791){
var map__33792 = p__33791;
var map__33792__$1 = (((((!((map__33792 == null))))?(((((map__33792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33792):map__33792);
var props = map__33792__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33792__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33801 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33801,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33801,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33801,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33813 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33813,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33813;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33824 = arguments.length;
switch (G__33824) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33840){
var vec__33843 = p__33840;
var seq__33844 = cljs.core.seq(vec__33843);
var first__33845 = cljs.core.first(seq__33844);
var seq__33844__$1 = cljs.core.next(seq__33844);
var nn = first__33845;
var first__33845__$1 = cljs.core.first(seq__33844__$1);
var seq__33844__$2 = cljs.core.next(seq__33844__$1);
var np = first__33845__$1;
var nc = seq__33844__$2;
var node = vec__33843;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33850 = nn;
var G__33851 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33850,G__33851) : create_fn.call(null,G__33850,G__33851));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33853 = nn;
var G__33854 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33853,G__33854) : create_fn.call(null,G__33853,G__33854));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33861 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33861,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33861,(1),null);
var seq__33866_34748 = cljs.core.seq(node_children);
var chunk__33867_34749 = null;
var count__33868_34750 = (0);
var i__33869_34751 = (0);
while(true){
if((i__33869_34751 < count__33868_34750)){
var child_struct_34752 = chunk__33867_34749.cljs$core$IIndexed$_nth$arity$2(null,i__33869_34751);
var children_34754 = shadow.dom.dom_node(child_struct_34752);
if(cljs.core.seq_QMARK_(children_34754)){
var seq__33929_34755 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34754));
var chunk__33931_34756 = null;
var count__33932_34757 = (0);
var i__33933_34758 = (0);
while(true){
if((i__33933_34758 < count__33932_34757)){
var child_34759 = chunk__33931_34756.cljs$core$IIndexed$_nth$arity$2(null,i__33933_34758);
if(cljs.core.truth_(child_34759)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34759);


var G__34760 = seq__33929_34755;
var G__34761 = chunk__33931_34756;
var G__34762 = count__33932_34757;
var G__34763 = (i__33933_34758 + (1));
seq__33929_34755 = G__34760;
chunk__33931_34756 = G__34761;
count__33932_34757 = G__34762;
i__33933_34758 = G__34763;
continue;
} else {
var G__34764 = seq__33929_34755;
var G__34765 = chunk__33931_34756;
var G__34766 = count__33932_34757;
var G__34767 = (i__33933_34758 + (1));
seq__33929_34755 = G__34764;
chunk__33931_34756 = G__34765;
count__33932_34757 = G__34766;
i__33933_34758 = G__34767;
continue;
}
} else {
var temp__5735__auto___34768 = cljs.core.seq(seq__33929_34755);
if(temp__5735__auto___34768){
var seq__33929_34769__$1 = temp__5735__auto___34768;
if(cljs.core.chunked_seq_QMARK_(seq__33929_34769__$1)){
var c__4556__auto___34771 = cljs.core.chunk_first(seq__33929_34769__$1);
var G__34772 = cljs.core.chunk_rest(seq__33929_34769__$1);
var G__34773 = c__4556__auto___34771;
var G__34774 = cljs.core.count(c__4556__auto___34771);
var G__34775 = (0);
seq__33929_34755 = G__34772;
chunk__33931_34756 = G__34773;
count__33932_34757 = G__34774;
i__33933_34758 = G__34775;
continue;
} else {
var child_34776 = cljs.core.first(seq__33929_34769__$1);
if(cljs.core.truth_(child_34776)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34776);


var G__34777 = cljs.core.next(seq__33929_34769__$1);
var G__34778 = null;
var G__34779 = (0);
var G__34780 = (0);
seq__33929_34755 = G__34777;
chunk__33931_34756 = G__34778;
count__33932_34757 = G__34779;
i__33933_34758 = G__34780;
continue;
} else {
var G__34781 = cljs.core.next(seq__33929_34769__$1);
var G__34782 = null;
var G__34783 = (0);
var G__34784 = (0);
seq__33929_34755 = G__34781;
chunk__33931_34756 = G__34782;
count__33932_34757 = G__34783;
i__33933_34758 = G__34784;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34754);
}


var G__34787 = seq__33866_34748;
var G__34788 = chunk__33867_34749;
var G__34789 = count__33868_34750;
var G__34790 = (i__33869_34751 + (1));
seq__33866_34748 = G__34787;
chunk__33867_34749 = G__34788;
count__33868_34750 = G__34789;
i__33869_34751 = G__34790;
continue;
} else {
var temp__5735__auto___34791 = cljs.core.seq(seq__33866_34748);
if(temp__5735__auto___34791){
var seq__33866_34793__$1 = temp__5735__auto___34791;
if(cljs.core.chunked_seq_QMARK_(seq__33866_34793__$1)){
var c__4556__auto___34794 = cljs.core.chunk_first(seq__33866_34793__$1);
var G__34795 = cljs.core.chunk_rest(seq__33866_34793__$1);
var G__34796 = c__4556__auto___34794;
var G__34797 = cljs.core.count(c__4556__auto___34794);
var G__34798 = (0);
seq__33866_34748 = G__34795;
chunk__33867_34749 = G__34796;
count__33868_34750 = G__34797;
i__33869_34751 = G__34798;
continue;
} else {
var child_struct_34799 = cljs.core.first(seq__33866_34793__$1);
var children_34800 = shadow.dom.dom_node(child_struct_34799);
if(cljs.core.seq_QMARK_(children_34800)){
var seq__33958_34801 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34800));
var chunk__33960_34802 = null;
var count__33961_34803 = (0);
var i__33962_34804 = (0);
while(true){
if((i__33962_34804 < count__33961_34803)){
var child_34805 = chunk__33960_34802.cljs$core$IIndexed$_nth$arity$2(null,i__33962_34804);
if(cljs.core.truth_(child_34805)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34805);


var G__34806 = seq__33958_34801;
var G__34807 = chunk__33960_34802;
var G__34808 = count__33961_34803;
var G__34809 = (i__33962_34804 + (1));
seq__33958_34801 = G__34806;
chunk__33960_34802 = G__34807;
count__33961_34803 = G__34808;
i__33962_34804 = G__34809;
continue;
} else {
var G__34812 = seq__33958_34801;
var G__34813 = chunk__33960_34802;
var G__34814 = count__33961_34803;
var G__34815 = (i__33962_34804 + (1));
seq__33958_34801 = G__34812;
chunk__33960_34802 = G__34813;
count__33961_34803 = G__34814;
i__33962_34804 = G__34815;
continue;
}
} else {
var temp__5735__auto___34816__$1 = cljs.core.seq(seq__33958_34801);
if(temp__5735__auto___34816__$1){
var seq__33958_34817__$1 = temp__5735__auto___34816__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33958_34817__$1)){
var c__4556__auto___34818 = cljs.core.chunk_first(seq__33958_34817__$1);
var G__34819 = cljs.core.chunk_rest(seq__33958_34817__$1);
var G__34820 = c__4556__auto___34818;
var G__34821 = cljs.core.count(c__4556__auto___34818);
var G__34822 = (0);
seq__33958_34801 = G__34819;
chunk__33960_34802 = G__34820;
count__33961_34803 = G__34821;
i__33962_34804 = G__34822;
continue;
} else {
var child_34824 = cljs.core.first(seq__33958_34817__$1);
if(cljs.core.truth_(child_34824)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34824);


var G__34825 = cljs.core.next(seq__33958_34817__$1);
var G__34826 = null;
var G__34827 = (0);
var G__34828 = (0);
seq__33958_34801 = G__34825;
chunk__33960_34802 = G__34826;
count__33961_34803 = G__34827;
i__33962_34804 = G__34828;
continue;
} else {
var G__34830 = cljs.core.next(seq__33958_34817__$1);
var G__34831 = null;
var G__34832 = (0);
var G__34833 = (0);
seq__33958_34801 = G__34830;
chunk__33960_34802 = G__34831;
count__33961_34803 = G__34832;
i__33962_34804 = G__34833;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34800);
}


var G__34834 = cljs.core.next(seq__33866_34793__$1);
var G__34835 = null;
var G__34836 = (0);
var G__34837 = (0);
seq__33866_34748 = G__34834;
chunk__33867_34749 = G__34835;
count__33868_34750 = G__34836;
i__33869_34751 = G__34837;
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
var seq__34009 = cljs.core.seq(node);
var chunk__34010 = null;
var count__34011 = (0);
var i__34012 = (0);
while(true){
if((i__34012 < count__34011)){
var n = chunk__34010.cljs$core$IIndexed$_nth$arity$2(null,i__34012);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34841 = seq__34009;
var G__34842 = chunk__34010;
var G__34843 = count__34011;
var G__34844 = (i__34012 + (1));
seq__34009 = G__34841;
chunk__34010 = G__34842;
count__34011 = G__34843;
i__34012 = G__34844;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34009);
if(temp__5735__auto__){
var seq__34009__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34009__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34009__$1);
var G__34846 = cljs.core.chunk_rest(seq__34009__$1);
var G__34847 = c__4556__auto__;
var G__34848 = cljs.core.count(c__4556__auto__);
var G__34849 = (0);
seq__34009 = G__34846;
chunk__34010 = G__34847;
count__34011 = G__34848;
i__34012 = G__34849;
continue;
} else {
var n = cljs.core.first(seq__34009__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34851 = cljs.core.next(seq__34009__$1);
var G__34852 = null;
var G__34853 = (0);
var G__34854 = (0);
seq__34009 = G__34851;
chunk__34010 = G__34852;
count__34011 = G__34853;
i__34012 = G__34854;
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
var G__34029 = arguments.length;
switch (G__34029) {
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
var G__34037 = arguments.length;
switch (G__34037) {
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
var G__34054 = arguments.length;
switch (G__34054) {
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
var len__4736__auto___34881 = arguments.length;
var i__4737__auto___34882 = (0);
while(true){
if((i__4737__auto___34882 < len__4736__auto___34881)){
args__4742__auto__.push((arguments[i__4737__auto___34882]));

var G__34883 = (i__4737__auto___34882 + (1));
i__4737__auto___34882 = G__34883;
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
var seq__34064_34886 = cljs.core.seq(nodes);
var chunk__34065_34887 = null;
var count__34066_34888 = (0);
var i__34067_34889 = (0);
while(true){
if((i__34067_34889 < count__34066_34888)){
var node_34892 = chunk__34065_34887.cljs$core$IIndexed$_nth$arity$2(null,i__34067_34889);
fragment.appendChild(shadow.dom._to_dom(node_34892));


var G__34893 = seq__34064_34886;
var G__34894 = chunk__34065_34887;
var G__34895 = count__34066_34888;
var G__34896 = (i__34067_34889 + (1));
seq__34064_34886 = G__34893;
chunk__34065_34887 = G__34894;
count__34066_34888 = G__34895;
i__34067_34889 = G__34896;
continue;
} else {
var temp__5735__auto___34898 = cljs.core.seq(seq__34064_34886);
if(temp__5735__auto___34898){
var seq__34064_34900__$1 = temp__5735__auto___34898;
if(cljs.core.chunked_seq_QMARK_(seq__34064_34900__$1)){
var c__4556__auto___34902 = cljs.core.chunk_first(seq__34064_34900__$1);
var G__34903 = cljs.core.chunk_rest(seq__34064_34900__$1);
var G__34904 = c__4556__auto___34902;
var G__34905 = cljs.core.count(c__4556__auto___34902);
var G__34906 = (0);
seq__34064_34886 = G__34903;
chunk__34065_34887 = G__34904;
count__34066_34888 = G__34905;
i__34067_34889 = G__34906;
continue;
} else {
var node_34907 = cljs.core.first(seq__34064_34900__$1);
fragment.appendChild(shadow.dom._to_dom(node_34907));


var G__34908 = cljs.core.next(seq__34064_34900__$1);
var G__34909 = null;
var G__34910 = (0);
var G__34911 = (0);
seq__34064_34886 = G__34908;
chunk__34065_34887 = G__34909;
count__34066_34888 = G__34910;
i__34067_34889 = G__34911;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34060){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34060));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34079_34918 = cljs.core.seq(scripts);
var chunk__34080_34919 = null;
var count__34081_34920 = (0);
var i__34082_34921 = (0);
while(true){
if((i__34082_34921 < count__34081_34920)){
var vec__34094_34922 = chunk__34080_34919.cljs$core$IIndexed$_nth$arity$2(null,i__34082_34921);
var script_tag_34923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34094_34922,(0),null);
var script_body_34924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34094_34922,(1),null);
eval(script_body_34924);


var G__34926 = seq__34079_34918;
var G__34927 = chunk__34080_34919;
var G__34928 = count__34081_34920;
var G__34929 = (i__34082_34921 + (1));
seq__34079_34918 = G__34926;
chunk__34080_34919 = G__34927;
count__34081_34920 = G__34928;
i__34082_34921 = G__34929;
continue;
} else {
var temp__5735__auto___34930 = cljs.core.seq(seq__34079_34918);
if(temp__5735__auto___34930){
var seq__34079_34931__$1 = temp__5735__auto___34930;
if(cljs.core.chunked_seq_QMARK_(seq__34079_34931__$1)){
var c__4556__auto___34933 = cljs.core.chunk_first(seq__34079_34931__$1);
var G__34934 = cljs.core.chunk_rest(seq__34079_34931__$1);
var G__34935 = c__4556__auto___34933;
var G__34936 = cljs.core.count(c__4556__auto___34933);
var G__34937 = (0);
seq__34079_34918 = G__34934;
chunk__34080_34919 = G__34935;
count__34081_34920 = G__34936;
i__34082_34921 = G__34937;
continue;
} else {
var vec__34098_34939 = cljs.core.first(seq__34079_34931__$1);
var script_tag_34940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34098_34939,(0),null);
var script_body_34941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34098_34939,(1),null);
eval(script_body_34941);


var G__34943 = cljs.core.next(seq__34079_34931__$1);
var G__34944 = null;
var G__34945 = (0);
var G__34946 = (0);
seq__34079_34918 = G__34943;
chunk__34080_34919 = G__34944;
count__34081_34920 = G__34945;
i__34082_34921 = G__34946;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34102){
var vec__34103 = p__34102;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34103,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34103,(1),null);
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
var G__34120 = arguments.length;
switch (G__34120) {
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
var seq__34147 = cljs.core.seq(style_keys);
var chunk__34148 = null;
var count__34149 = (0);
var i__34150 = (0);
while(true){
if((i__34150 < count__34149)){
var it = chunk__34148.cljs$core$IIndexed$_nth$arity$2(null,i__34150);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34959 = seq__34147;
var G__34960 = chunk__34148;
var G__34961 = count__34149;
var G__34962 = (i__34150 + (1));
seq__34147 = G__34959;
chunk__34148 = G__34960;
count__34149 = G__34961;
i__34150 = G__34962;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34147);
if(temp__5735__auto__){
var seq__34147__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34147__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34147__$1);
var G__34968 = cljs.core.chunk_rest(seq__34147__$1);
var G__34969 = c__4556__auto__;
var G__34970 = cljs.core.count(c__4556__auto__);
var G__34971 = (0);
seq__34147 = G__34968;
chunk__34148 = G__34969;
count__34149 = G__34970;
i__34150 = G__34971;
continue;
} else {
var it = cljs.core.first(seq__34147__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34976 = cljs.core.next(seq__34147__$1);
var G__34977 = null;
var G__34978 = (0);
var G__34979 = (0);
seq__34147 = G__34976;
chunk__34148 = G__34977;
count__34149 = G__34978;
i__34150 = G__34979;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k34181,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__34196 = k34181;
var G__34196__$1 = (((G__34196 instanceof cljs.core.Keyword))?G__34196.fqn:null);
switch (G__34196__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34181,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__34208){
var vec__34209 = p__34208;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34209,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34209,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34180){
var self__ = this;
var G__34180__$1 = this;
return (new cljs.core.RecordIter((0),G__34180__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34182,other34183){
var self__ = this;
var this34182__$1 = this;
return (((!((other34183 == null)))) && ((this34182__$1.constructor === other34183.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34182__$1.x,other34183.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34182__$1.y,other34183.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34182__$1.__extmap,other34183.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__34180){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34228 = cljs.core.keyword_identical_QMARK_;
var expr__34229 = k__4388__auto__;
if(cljs.core.truth_((pred__34228.cljs$core$IFn$_invoke$arity$2 ? pred__34228.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34229) : pred__34228.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34229)))){
return (new shadow.dom.Coordinate(G__34180,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34228.cljs$core$IFn$_invoke$arity$2 ? pred__34228.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34229) : pred__34228.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34229)))){
return (new shadow.dom.Coordinate(self__.x,G__34180,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__34180),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__34180){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34180,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34184){
var extmap__4419__auto__ = (function (){var G__34249 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34184,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34184)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34249);
} else {
return G__34249;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34184),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34184),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k34253,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__34261 = k34253;
var G__34261__$1 = (((G__34261 instanceof cljs.core.Keyword))?G__34261.fqn:null);
switch (G__34261__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34253,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__34275){
var vec__34277 = p__34275;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34277,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34277,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34252){
var self__ = this;
var G__34252__$1 = this;
return (new cljs.core.RecordIter((0),G__34252__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34254,other34255){
var self__ = this;
var this34254__$1 = this;
return (((!((other34255 == null)))) && ((this34254__$1.constructor === other34255.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34254__$1.w,other34255.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34254__$1.h,other34255.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34254__$1.__extmap,other34255.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__34252){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34340 = cljs.core.keyword_identical_QMARK_;
var expr__34341 = k__4388__auto__;
if(cljs.core.truth_((pred__34340.cljs$core$IFn$_invoke$arity$2 ? pred__34340.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34341) : pred__34340.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34341)))){
return (new shadow.dom.Size(G__34252,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34340.cljs$core$IFn$_invoke$arity$2 ? pred__34340.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34341) : pred__34340.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34341)))){
return (new shadow.dom.Size(self__.w,G__34252,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__34252),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__34252){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34252,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34256){
var extmap__4419__auto__ = (function (){var G__34360 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34256,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34256)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34360);
} else {
return G__34360;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34256),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34256),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__35140 = (i + (1));
var G__35141 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35140;
ret = G__35141;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34403){
var vec__34404 = p__34403;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34404,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34404,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34413 = arguments.length;
switch (G__34413) {
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
var G__35157 = ps;
var G__35158 = (i + (1));
el__$1 = G__35157;
i = G__35158;
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
var vec__34436 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34436,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34436,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34436,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34441_35159 = cljs.core.seq(props);
var chunk__34442_35160 = null;
var count__34443_35161 = (0);
var i__34444_35162 = (0);
while(true){
if((i__34444_35162 < count__34443_35161)){
var vec__34458_35163 = chunk__34442_35160.cljs$core$IIndexed$_nth$arity$2(null,i__34444_35162);
var k_35164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34458_35163,(0),null);
var v_35165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34458_35163,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35164);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35164),v_35165);


var G__35168 = seq__34441_35159;
var G__35169 = chunk__34442_35160;
var G__35170 = count__34443_35161;
var G__35171 = (i__34444_35162 + (1));
seq__34441_35159 = G__35168;
chunk__34442_35160 = G__35169;
count__34443_35161 = G__35170;
i__34444_35162 = G__35171;
continue;
} else {
var temp__5735__auto___35172 = cljs.core.seq(seq__34441_35159);
if(temp__5735__auto___35172){
var seq__34441_35173__$1 = temp__5735__auto___35172;
if(cljs.core.chunked_seq_QMARK_(seq__34441_35173__$1)){
var c__4556__auto___35174 = cljs.core.chunk_first(seq__34441_35173__$1);
var G__35175 = cljs.core.chunk_rest(seq__34441_35173__$1);
var G__35176 = c__4556__auto___35174;
var G__35177 = cljs.core.count(c__4556__auto___35174);
var G__35178 = (0);
seq__34441_35159 = G__35175;
chunk__34442_35160 = G__35176;
count__34443_35161 = G__35177;
i__34444_35162 = G__35178;
continue;
} else {
var vec__34466_35179 = cljs.core.first(seq__34441_35173__$1);
var k_35180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34466_35179,(0),null);
var v_35181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34466_35179,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_35180);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35180),v_35181);


var G__35207 = cljs.core.next(seq__34441_35173__$1);
var G__35208 = null;
var G__35209 = (0);
var G__35210 = (0);
seq__34441_35159 = G__35207;
chunk__34442_35160 = G__35208;
count__34443_35161 = G__35209;
i__34444_35162 = G__35210;
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
var vec__34478 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34478,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34478,(1),null);
var seq__34481_35215 = cljs.core.seq(node_children);
var chunk__34483_35216 = null;
var count__34484_35217 = (0);
var i__34485_35218 = (0);
while(true){
if((i__34485_35218 < count__34484_35217)){
var child_struct_35221 = chunk__34483_35216.cljs$core$IIndexed$_nth$arity$2(null,i__34485_35218);
if((!((child_struct_35221 == null)))){
if(typeof child_struct_35221 === 'string'){
var text_35229 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35229),child_struct_35221].join(''));
} else {
var children_35230 = shadow.dom.svg_node(child_struct_35221);
if(cljs.core.seq_QMARK_(children_35230)){
var seq__34522_35231 = cljs.core.seq(children_35230);
var chunk__34524_35232 = null;
var count__34525_35233 = (0);
var i__34526_35234 = (0);
while(true){
if((i__34526_35234 < count__34525_35233)){
var child_35235 = chunk__34524_35232.cljs$core$IIndexed$_nth$arity$2(null,i__34526_35234);
if(cljs.core.truth_(child_35235)){
node.appendChild(child_35235);


var G__35236 = seq__34522_35231;
var G__35237 = chunk__34524_35232;
var G__35238 = count__34525_35233;
var G__35239 = (i__34526_35234 + (1));
seq__34522_35231 = G__35236;
chunk__34524_35232 = G__35237;
count__34525_35233 = G__35238;
i__34526_35234 = G__35239;
continue;
} else {
var G__35241 = seq__34522_35231;
var G__35242 = chunk__34524_35232;
var G__35243 = count__34525_35233;
var G__35244 = (i__34526_35234 + (1));
seq__34522_35231 = G__35241;
chunk__34524_35232 = G__35242;
count__34525_35233 = G__35243;
i__34526_35234 = G__35244;
continue;
}
} else {
var temp__5735__auto___35245 = cljs.core.seq(seq__34522_35231);
if(temp__5735__auto___35245){
var seq__34522_35246__$1 = temp__5735__auto___35245;
if(cljs.core.chunked_seq_QMARK_(seq__34522_35246__$1)){
var c__4556__auto___35248 = cljs.core.chunk_first(seq__34522_35246__$1);
var G__35249 = cljs.core.chunk_rest(seq__34522_35246__$1);
var G__35250 = c__4556__auto___35248;
var G__35251 = cljs.core.count(c__4556__auto___35248);
var G__35252 = (0);
seq__34522_35231 = G__35249;
chunk__34524_35232 = G__35250;
count__34525_35233 = G__35251;
i__34526_35234 = G__35252;
continue;
} else {
var child_35253 = cljs.core.first(seq__34522_35246__$1);
if(cljs.core.truth_(child_35253)){
node.appendChild(child_35253);


var G__35254 = cljs.core.next(seq__34522_35246__$1);
var G__35255 = null;
var G__35256 = (0);
var G__35257 = (0);
seq__34522_35231 = G__35254;
chunk__34524_35232 = G__35255;
count__34525_35233 = G__35256;
i__34526_35234 = G__35257;
continue;
} else {
var G__35267 = cljs.core.next(seq__34522_35246__$1);
var G__35268 = null;
var G__35269 = (0);
var G__35270 = (0);
seq__34522_35231 = G__35267;
chunk__34524_35232 = G__35268;
count__34525_35233 = G__35269;
i__34526_35234 = G__35270;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35230);
}
}


var G__35287 = seq__34481_35215;
var G__35288 = chunk__34483_35216;
var G__35289 = count__34484_35217;
var G__35290 = (i__34485_35218 + (1));
seq__34481_35215 = G__35287;
chunk__34483_35216 = G__35288;
count__34484_35217 = G__35289;
i__34485_35218 = G__35290;
continue;
} else {
var G__35291 = seq__34481_35215;
var G__35292 = chunk__34483_35216;
var G__35293 = count__34484_35217;
var G__35294 = (i__34485_35218 + (1));
seq__34481_35215 = G__35291;
chunk__34483_35216 = G__35292;
count__34484_35217 = G__35293;
i__34485_35218 = G__35294;
continue;
}
} else {
var temp__5735__auto___35295 = cljs.core.seq(seq__34481_35215);
if(temp__5735__auto___35295){
var seq__34481_35296__$1 = temp__5735__auto___35295;
if(cljs.core.chunked_seq_QMARK_(seq__34481_35296__$1)){
var c__4556__auto___35297 = cljs.core.chunk_first(seq__34481_35296__$1);
var G__35298 = cljs.core.chunk_rest(seq__34481_35296__$1);
var G__35299 = c__4556__auto___35297;
var G__35300 = cljs.core.count(c__4556__auto___35297);
var G__35301 = (0);
seq__34481_35215 = G__35298;
chunk__34483_35216 = G__35299;
count__34484_35217 = G__35300;
i__34485_35218 = G__35301;
continue;
} else {
var child_struct_35302 = cljs.core.first(seq__34481_35296__$1);
if((!((child_struct_35302 == null)))){
if(typeof child_struct_35302 === 'string'){
var text_35304 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35304),child_struct_35302].join(''));
} else {
var children_35305 = shadow.dom.svg_node(child_struct_35302);
if(cljs.core.seq_QMARK_(children_35305)){
var seq__34534_35306 = cljs.core.seq(children_35305);
var chunk__34536_35307 = null;
var count__34537_35308 = (0);
var i__34538_35309 = (0);
while(true){
if((i__34538_35309 < count__34537_35308)){
var child_35310 = chunk__34536_35307.cljs$core$IIndexed$_nth$arity$2(null,i__34538_35309);
if(cljs.core.truth_(child_35310)){
node.appendChild(child_35310);


var G__35311 = seq__34534_35306;
var G__35312 = chunk__34536_35307;
var G__35313 = count__34537_35308;
var G__35314 = (i__34538_35309 + (1));
seq__34534_35306 = G__35311;
chunk__34536_35307 = G__35312;
count__34537_35308 = G__35313;
i__34538_35309 = G__35314;
continue;
} else {
var G__35315 = seq__34534_35306;
var G__35316 = chunk__34536_35307;
var G__35317 = count__34537_35308;
var G__35318 = (i__34538_35309 + (1));
seq__34534_35306 = G__35315;
chunk__34536_35307 = G__35316;
count__34537_35308 = G__35317;
i__34538_35309 = G__35318;
continue;
}
} else {
var temp__5735__auto___35319__$1 = cljs.core.seq(seq__34534_35306);
if(temp__5735__auto___35319__$1){
var seq__34534_35320__$1 = temp__5735__auto___35319__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34534_35320__$1)){
var c__4556__auto___35321 = cljs.core.chunk_first(seq__34534_35320__$1);
var G__35322 = cljs.core.chunk_rest(seq__34534_35320__$1);
var G__35323 = c__4556__auto___35321;
var G__35324 = cljs.core.count(c__4556__auto___35321);
var G__35325 = (0);
seq__34534_35306 = G__35322;
chunk__34536_35307 = G__35323;
count__34537_35308 = G__35324;
i__34538_35309 = G__35325;
continue;
} else {
var child_35328 = cljs.core.first(seq__34534_35320__$1);
if(cljs.core.truth_(child_35328)){
node.appendChild(child_35328);


var G__35329 = cljs.core.next(seq__34534_35320__$1);
var G__35330 = null;
var G__35331 = (0);
var G__35332 = (0);
seq__34534_35306 = G__35329;
chunk__34536_35307 = G__35330;
count__34537_35308 = G__35331;
i__34538_35309 = G__35332;
continue;
} else {
var G__35333 = cljs.core.next(seq__34534_35320__$1);
var G__35334 = null;
var G__35335 = (0);
var G__35336 = (0);
seq__34534_35306 = G__35333;
chunk__34536_35307 = G__35334;
count__34537_35308 = G__35335;
i__34538_35309 = G__35336;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35305);
}
}


var G__35337 = cljs.core.next(seq__34481_35296__$1);
var G__35338 = null;
var G__35339 = (0);
var G__35340 = (0);
seq__34481_35215 = G__35337;
chunk__34483_35216 = G__35338;
count__34484_35217 = G__35339;
i__34485_35218 = G__35340;
continue;
} else {
var G__35344 = cljs.core.next(seq__34481_35296__$1);
var G__35345 = null;
var G__35346 = (0);
var G__35347 = (0);
seq__34481_35215 = G__35344;
chunk__34483_35216 = G__35345;
count__34484_35217 = G__35346;
i__34485_35218 = G__35347;
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
var len__4736__auto___35355 = arguments.length;
var i__4737__auto___35356 = (0);
while(true){
if((i__4737__auto___35356 < len__4736__auto___35355)){
args__4742__auto__.push((arguments[i__4737__auto___35356]));

var G__35357 = (i__4737__auto___35356 + (1));
i__4737__auto___35356 = G__35357;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34559){
var G__34560 = cljs.core.first(seq34559);
var seq34559__$1 = cljs.core.next(seq34559);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34560,seq34559__$1);
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
var G__34567 = arguments.length;
switch (G__34567) {
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
var c__30102__auto___35388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30103__auto__ = (function (){var switch__29819__auto__ = (function (state_34598){
var state_val_34599 = (state_34598[(1)]);
if((state_val_34599 === (1))){
var state_34598__$1 = state_34598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34598__$1,(2),once_or_cleanup);
} else {
if((state_val_34599 === (2))){
var inst_34595 = (state_34598[(2)]);
var inst_34596 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34598__$1 = (function (){var statearr_34622 = state_34598;
(statearr_34622[(7)] = inst_34595);

return statearr_34622;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34598__$1,inst_34596);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29820__auto__ = null;
var shadow$dom$state_machine__29820__auto____0 = (function (){
var statearr_34625 = [null,null,null,null,null,null,null,null];
(statearr_34625[(0)] = shadow$dom$state_machine__29820__auto__);

(statearr_34625[(1)] = (1));

return statearr_34625;
});
var shadow$dom$state_machine__29820__auto____1 = (function (state_34598){
while(true){
var ret_value__29821__auto__ = (function (){try{while(true){
var result__29822__auto__ = switch__29819__auto__(state_34598);
if(cljs.core.keyword_identical_QMARK_(result__29822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29822__auto__;
}
break;
}
}catch (e34626){var ex__29823__auto__ = e34626;
var statearr_34627_35424 = state_34598;
(statearr_34627_35424[(2)] = ex__29823__auto__);


if(cljs.core.seq((state_34598[(4)]))){
var statearr_34629_35431 = state_34598;
(statearr_34629_35431[(1)] = cljs.core.first((state_34598[(4)])));

} else {
throw ex__29823__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35432 = state_34598;
state_34598 = G__35432;
continue;
} else {
return ret_value__29821__auto__;
}
break;
}
});
shadow$dom$state_machine__29820__auto__ = function(state_34598){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29820__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29820__auto____1.call(this,state_34598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29820__auto____0;
shadow$dom$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29820__auto____1;
return shadow$dom$state_machine__29820__auto__;
})()
})();
var state__30104__auto__ = (function (){var statearr_34633 = f__30103__auto__();
(statearr_34633[(6)] = c__30102__auto___35388);

return statearr_34633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30104__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
