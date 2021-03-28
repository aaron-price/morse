goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30178 = arguments.length;
switch (G__30178) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30185 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30185 = (function (f,blockable,meta30186){
this.f = f;
this.blockable = blockable;
this.meta30186 = meta30186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30187,meta30186__$1){
var self__ = this;
var _30187__$1 = this;
return (new cljs.core.async.t_cljs$core$async30185(self__.f,self__.blockable,meta30186__$1));
}));

(cljs.core.async.t_cljs$core$async30185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30187){
var self__ = this;
var _30187__$1 = this;
return self__.meta30186;
}));

(cljs.core.async.t_cljs$core$async30185.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30185.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30185.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30185.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30185.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30186","meta30186",213792163,null)], null);
}));

(cljs.core.async.t_cljs$core$async30185.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30185.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30185");

(cljs.core.async.t_cljs$core$async30185.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30185");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30185.
 */
cljs.core.async.__GT_t_cljs$core$async30185 = (function cljs$core$async$__GT_t_cljs$core$async30185(f__$1,blockable__$1,meta30186){
return (new cljs.core.async.t_cljs$core$async30185(f__$1,blockable__$1,meta30186));
});

}

return (new cljs.core.async.t_cljs$core$async30185(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30247 = arguments.length;
switch (G__30247) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30289 = arguments.length;
switch (G__30289) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30331 = arguments.length;
switch (G__30331) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33360 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33360) : fn1.call(null,val_33360));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33360) : fn1.call(null,val_33360));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30346 = arguments.length;
switch (G__30346) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___33369 = n;
var x_33370 = (0);
while(true){
if((x_33370 < n__4613__auto___33369)){
(a[x_33370] = x_33370);

var G__33371 = (x_33370 + (1));
x_33370 = G__33371;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30363 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30363 = (function (flag,meta30364){
this.flag = flag;
this.meta30364 = meta30364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30365,meta30364__$1){
var self__ = this;
var _30365__$1 = this;
return (new cljs.core.async.t_cljs$core$async30363(self__.flag,meta30364__$1));
}));

(cljs.core.async.t_cljs$core$async30363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30365){
var self__ = this;
var _30365__$1 = this;
return self__.meta30364;
}));

(cljs.core.async.t_cljs$core$async30363.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30363.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30363.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30363.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30364","meta30364",753857584,null)], null);
}));

(cljs.core.async.t_cljs$core$async30363.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30363");

(cljs.core.async.t_cljs$core$async30363.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30363");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30363.
 */
cljs.core.async.__GT_t_cljs$core$async30363 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30363(flag__$1,meta30364){
return (new cljs.core.async.t_cljs$core$async30363(flag__$1,meta30364));
});

}

return (new cljs.core.async.t_cljs$core$async30363(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30374 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30374 = (function (flag,cb,meta30375){
this.flag = flag;
this.cb = cb;
this.meta30375 = meta30375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30376,meta30375__$1){
var self__ = this;
var _30376__$1 = this;
return (new cljs.core.async.t_cljs$core$async30374(self__.flag,self__.cb,meta30375__$1));
}));

(cljs.core.async.t_cljs$core$async30374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30376){
var self__ = this;
var _30376__$1 = this;
return self__.meta30375;
}));

(cljs.core.async.t_cljs$core$async30374.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30374.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30375","meta30375",2063966229,null)], null);
}));

(cljs.core.async.t_cljs$core$async30374.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30374");

(cljs.core.async.t_cljs$core$async30374.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30374");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30374.
 */
cljs.core.async.__GT_t_cljs$core$async30374 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30374(flag__$1,cb__$1,meta30375){
return (new cljs.core.async.t_cljs$core$async30374(flag__$1,cb__$1,meta30375));
});

}

return (new cljs.core.async.t_cljs$core$async30374(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30389_SHARP_){
var G__30401 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30389_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30401) : fret.call(null,G__30401));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30390_SHARP_){
var G__30402 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30390_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30402) : fret.call(null,G__30402));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33375 = (i + (1));
i = G__33375;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33377 = arguments.length;
var i__4737__auto___33378 = (0);
while(true){
if((i__4737__auto___33378 < len__4736__auto___33377)){
args__4742__auto__.push((arguments[i__4737__auto___33378]));

var G__33379 = (i__4737__auto___33378 + (1));
i__4737__auto___33378 = G__33379;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30421){
var map__30422 = p__30421;
var map__30422__$1 = (((((!((map__30422 == null))))?(((((map__30422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30422):map__30422);
var opts = map__30422__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30419){
var G__30420 = cljs.core.first(seq30419);
var seq30419__$1 = cljs.core.next(seq30419);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30420,seq30419__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30429 = arguments.length;
switch (G__30429) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30066__auto___33383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30067__auto__ = (function (){var switch__29954__auto__ = (function (state_30465){
var state_val_30466 = (state_30465[(1)]);
if((state_val_30466 === (7))){
var inst_30461 = (state_30465[(2)]);
var state_30465__$1 = state_30465;
var statearr_30475_33385 = state_30465__$1;
(statearr_30475_33385[(2)] = inst_30461);

(statearr_30475_33385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (1))){
var state_30465__$1 = state_30465;
var statearr_30479_33386 = state_30465__$1;
(statearr_30479_33386[(2)] = null);

(statearr_30479_33386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (4))){
var inst_30444 = (state_30465[(7)]);
var inst_30444__$1 = (state_30465[(2)]);
var inst_30445 = (inst_30444__$1 == null);
var state_30465__$1 = (function (){var statearr_30484 = state_30465;
(statearr_30484[(7)] = inst_30444__$1);

return statearr_30484;
})();
if(cljs.core.truth_(inst_30445)){
var statearr_30485_33387 = state_30465__$1;
(statearr_30485_33387[(1)] = (5));

} else {
var statearr_30486_33388 = state_30465__$1;
(statearr_30486_33388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (13))){
var state_30465__$1 = state_30465;
var statearr_30487_33390 = state_30465__$1;
(statearr_30487_33390[(2)] = null);

(statearr_30487_33390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (6))){
var inst_30444 = (state_30465[(7)]);
var state_30465__$1 = state_30465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30465__$1,(11),to,inst_30444);
} else {
if((state_val_30466 === (3))){
var inst_30463 = (state_30465[(2)]);
var state_30465__$1 = state_30465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30465__$1,inst_30463);
} else {
if((state_val_30466 === (12))){
var state_30465__$1 = state_30465;
var statearr_30499_33392 = state_30465__$1;
(statearr_30499_33392[(2)] = null);

(statearr_30499_33392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (2))){
var state_30465__$1 = state_30465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30465__$1,(4),from);
} else {
if((state_val_30466 === (11))){
var inst_30454 = (state_30465[(2)]);
var state_30465__$1 = state_30465;
if(cljs.core.truth_(inst_30454)){
var statearr_30500_33394 = state_30465__$1;
(statearr_30500_33394[(1)] = (12));

} else {
var statearr_30501_33395 = state_30465__$1;
(statearr_30501_33395[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (9))){
var state_30465__$1 = state_30465;
var statearr_30502_33396 = state_30465__$1;
(statearr_30502_33396[(2)] = null);

(statearr_30502_33396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (5))){
var state_30465__$1 = state_30465;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30503_33397 = state_30465__$1;
(statearr_30503_33397[(1)] = (8));

} else {
var statearr_30504_33398 = state_30465__$1;
(statearr_30504_33398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (14))){
var inst_30459 = (state_30465[(2)]);
var state_30465__$1 = state_30465;
var statearr_30505_33400 = state_30465__$1;
(statearr_30505_33400[(2)] = inst_30459);

(statearr_30505_33400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (10))){
var inst_30451 = (state_30465[(2)]);
var state_30465__$1 = state_30465;
var statearr_30508_33401 = state_30465__$1;
(statearr_30508_33401[(2)] = inst_30451);

(statearr_30508_33401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30466 === (8))){
var inst_30448 = cljs.core.async.close_BANG_(to);
var state_30465__$1 = state_30465;
var statearr_30509_33402 = state_30465__$1;
(statearr_30509_33402[(2)] = inst_30448);

(statearr_30509_33402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29955__auto__ = null;
var cljs$core$async$state_machine__29955__auto____0 = (function (){
var statearr_30512 = [null,null,null,null,null,null,null,null];
(statearr_30512[(0)] = cljs$core$async$state_machine__29955__auto__);

(statearr_30512[(1)] = (1));

return statearr_30512;
});
var cljs$core$async$state_machine__29955__auto____1 = (function (state_30465){
while(true){
var ret_value__29956__auto__ = (function (){try{while(true){
var result__29957__auto__ = switch__29954__auto__(state_30465);
if(cljs.core.keyword_identical_QMARK_(result__29957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29957__auto__;
}
break;
}
}catch (e30513){var ex__29958__auto__ = e30513;
var statearr_30516_33404 = state_30465;
(statearr_30516_33404[(2)] = ex__29958__auto__);


if(cljs.core.seq((state_30465[(4)]))){
var statearr_30519_33405 = state_30465;
(statearr_30519_33405[(1)] = cljs.core.first((state_30465[(4)])));

} else {
throw ex__29958__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33406 = state_30465;
state_30465 = G__33406;
continue;
} else {
return ret_value__29956__auto__;
}
break;
}
});
cljs$core$async$state_machine__29955__auto__ = function(state_30465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29955__auto____1.call(this,state_30465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29955__auto____0;
cljs$core$async$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29955__auto____1;
return cljs$core$async$state_machine__29955__auto__;
})()
})();
var state__30068__auto__ = (function (){var statearr_30522 = f__30067__auto__();
(statearr_30522[(6)] = c__30066__auto___33383);

return statearr_30522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30068__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30545){
var vec__30546 = p__30545;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30546,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30546,(1),null);
var job = vec__30546;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30066__auto___33409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30067__auto__ = (function (){var switch__29954__auto__ = (function (state_30557){
var state_val_30558 = (state_30557[(1)]);
if((state_val_30558 === (1))){
var state_30557__$1 = state_30557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30557__$1,(2),res,v);
} else {
if((state_val_30558 === (2))){
var inst_30554 = (state_30557[(2)]);
var inst_30555 = cljs.core.async.close_BANG_(res);
var state_30557__$1 = (function (){var statearr_30560 = state_30557;
(statearr_30560[(7)] = inst_30554);

return statearr_30560;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30557__$1,inst_30555);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____0 = (function (){
var statearr_30569 = [null,null,null,null,null,null,null,null];
(statearr_30569[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__);

(statearr_30569[(1)] = (1));

return statearr_30569;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____1 = (function (state_30557){
while(true){
var ret_value__29956__auto__ = (function (){try{while(true){
var result__29957__auto__ = switch__29954__auto__(state_30557);
if(cljs.core.keyword_identical_QMARK_(result__29957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29957__auto__;
}
break;
}
}catch (e30585){var ex__29958__auto__ = e30585;
var statearr_30598_33413 = state_30557;
(statearr_30598_33413[(2)] = ex__29958__auto__);


if(cljs.core.seq((state_30557[(4)]))){
var statearr_30606_33414 = state_30557;
(statearr_30606_33414[(1)] = cljs.core.first((state_30557[(4)])));

} else {
throw ex__29958__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33415 = state_30557;
state_30557 = G__33415;
continue;
} else {
return ret_value__29956__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__ = function(state_30557){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____1.call(this,state_30557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__;
})()
})();
var state__30068__auto__ = (function (){var statearr_30621 = f__30067__auto__();
(statearr_30621[(6)] = c__30066__auto___33409);

return statearr_30621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30068__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30625){
var vec__30626 = p__30625;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30626,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30626,(1),null);
var job = vec__30626;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___33421 = n;
var __33422 = (0);
while(true){
if((__33422 < n__4613__auto___33421)){
var G__30630_33423 = type;
var G__30630_33424__$1 = (((G__30630_33423 instanceof cljs.core.Keyword))?G__30630_33423.fqn:null);
switch (G__30630_33424__$1) {
case "compute":
var c__30066__auto___33427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33422,c__30066__auto___33427,G__30630_33423,G__30630_33424__$1,n__4613__auto___33421,jobs,results,process,async){
return (function (){
var f__30067__auto__ = (function (){var switch__29954__auto__ = ((function (__33422,c__30066__auto___33427,G__30630_33423,G__30630_33424__$1,n__4613__auto___33421,jobs,results,process,async){
return (function (state_30645){
var state_val_30646 = (state_30645[(1)]);
if((state_val_30646 === (1))){
var state_30645__$1 = state_30645;
var statearr_30650_33428 = state_30645__$1;
(statearr_30650_33428[(2)] = null);

(statearr_30650_33428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30646 === (2))){
var state_30645__$1 = state_30645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30645__$1,(4),jobs);
} else {
if((state_val_30646 === (3))){
var inst_30642 = (state_30645[(2)]);
var state_30645__$1 = state_30645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30645__$1,inst_30642);
} else {
if((state_val_30646 === (4))){
var inst_30634 = (state_30645[(2)]);
var inst_30635 = process(inst_30634);
var state_30645__$1 = state_30645;
if(cljs.core.truth_(inst_30635)){
var statearr_30653_33439 = state_30645__$1;
(statearr_30653_33439[(1)] = (5));

} else {
var statearr_30654_33441 = state_30645__$1;
(statearr_30654_33441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30646 === (5))){
var state_30645__$1 = state_30645;
var statearr_30657_33442 = state_30645__$1;
(statearr_30657_33442[(2)] = null);

(statearr_30657_33442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30646 === (6))){
var state_30645__$1 = state_30645;
var statearr_30662_33444 = state_30645__$1;
(statearr_30662_33444[(2)] = null);

(statearr_30662_33444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30646 === (7))){
var inst_30640 = (state_30645[(2)]);
var state_30645__$1 = state_30645;
var statearr_30668_33445 = state_30645__$1;
(statearr_30668_33445[(2)] = inst_30640);

(statearr_30668_33445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33422,c__30066__auto___33427,G__30630_33423,G__30630_33424__$1,n__4613__auto___33421,jobs,results,process,async))
;
return ((function (__33422,switch__29954__auto__,c__30066__auto___33427,G__30630_33423,G__30630_33424__$1,n__4613__auto___33421,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____0 = (function (){
var statearr_30670 = [null,null,null,null,null,null,null];
(statearr_30670[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__);

(statearr_30670[(1)] = (1));

return statearr_30670;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____1 = (function (state_30645){
while(true){
var ret_value__29956__auto__ = (function (){try{while(true){
var result__29957__auto__ = switch__29954__auto__(state_30645);
if(cljs.core.keyword_identical_QMARK_(result__29957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29957__auto__;
}
break;
}
}catch (e30671){var ex__29958__auto__ = e30671;
var statearr_30673_33450 = state_30645;
(statearr_30673_33450[(2)] = ex__29958__auto__);


if(cljs.core.seq((state_30645[(4)]))){
var statearr_30674_33451 = state_30645;
(statearr_30674_33451[(1)] = cljs.core.first((state_30645[(4)])));

} else {
throw ex__29958__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33452 = state_30645;
state_30645 = G__33452;
continue;
} else {
return ret_value__29956__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__ = function(state_30645){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____1.call(this,state_30645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__;
})()
;})(__33422,switch__29954__auto__,c__30066__auto___33427,G__30630_33423,G__30630_33424__$1,n__4613__auto___33421,jobs,results,process,async))
})();
var state__30068__auto__ = (function (){var statearr_30683 = f__30067__auto__();
(statearr_30683[(6)] = c__30066__auto___33427);

return statearr_30683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30068__auto__);
});})(__33422,c__30066__auto___33427,G__30630_33423,G__30630_33424__$1,n__4613__auto___33421,jobs,results,process,async))
);


break;
case "async":
var c__30066__auto___33453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33422,c__30066__auto___33453,G__30630_33423,G__30630_33424__$1,n__4613__auto___33421,jobs,results,process,async){
return (function (){
var f__30067__auto__ = (function (){var switch__29954__auto__ = ((function (__33422,c__30066__auto___33453,G__30630_33423,G__30630_33424__$1,n__4613__auto___33421,jobs,results,process,async){
return (function (state_30697){
var state_val_30698 = (state_30697[(1)]);
if((state_val_30698 === (1))){
var state_30697__$1 = state_30697;
var statearr_30702_33454 = state_30697__$1;
(statearr_30702_33454[(2)] = null);

(statearr_30702_33454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (2))){
var state_30697__$1 = state_30697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30697__$1,(4),jobs);
} else {
if((state_val_30698 === (3))){
var inst_30695 = (state_30697[(2)]);
var state_30697__$1 = state_30697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30697__$1,inst_30695);
} else {
if((state_val_30698 === (4))){
var inst_30687 = (state_30697[(2)]);
var inst_30688 = async(inst_30687);
var state_30697__$1 = state_30697;
if(cljs.core.truth_(inst_30688)){
var statearr_30706_33457 = state_30697__$1;
(statearr_30706_33457[(1)] = (5));

} else {
var statearr_30707_33459 = state_30697__$1;
(statearr_30707_33459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (5))){
var state_30697__$1 = state_30697;
var statearr_30709_33460 = state_30697__$1;
(statearr_30709_33460[(2)] = null);

(statearr_30709_33460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (6))){
var state_30697__$1 = state_30697;
var statearr_30715_33462 = state_30697__$1;
(statearr_30715_33462[(2)] = null);

(statearr_30715_33462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (7))){
var inst_30693 = (state_30697[(2)]);
var state_30697__$1 = state_30697;
var statearr_30720_33468 = state_30697__$1;
(statearr_30720_33468[(2)] = inst_30693);

(statearr_30720_33468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33422,c__30066__auto___33453,G__30630_33423,G__30630_33424__$1,n__4613__auto___33421,jobs,results,process,async))
;
return ((function (__33422,switch__29954__auto__,c__30066__auto___33453,G__30630_33423,G__30630_33424__$1,n__4613__auto___33421,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____0 = (function (){
var statearr_30733 = [null,null,null,null,null,null,null];
(statearr_30733[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__);

(statearr_30733[(1)] = (1));

return statearr_30733;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____1 = (function (state_30697){
while(true){
var ret_value__29956__auto__ = (function (){try{while(true){
var result__29957__auto__ = switch__29954__auto__(state_30697);
if(cljs.core.keyword_identical_QMARK_(result__29957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29957__auto__;
}
break;
}
}catch (e30736){var ex__29958__auto__ = e30736;
var statearr_30737_33473 = state_30697;
(statearr_30737_33473[(2)] = ex__29958__auto__);


if(cljs.core.seq((state_30697[(4)]))){
var statearr_30738_33474 = state_30697;
(statearr_30738_33474[(1)] = cljs.core.first((state_30697[(4)])));

} else {
throw ex__29958__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33478 = state_30697;
state_30697 = G__33478;
continue;
} else {
return ret_value__29956__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__ = function(state_30697){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____1.call(this,state_30697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__;
})()
;})(__33422,switch__29954__auto__,c__30066__auto___33453,G__30630_33423,G__30630_33424__$1,n__4613__auto___33421,jobs,results,process,async))
})();
var state__30068__auto__ = (function (){var statearr_30744 = f__30067__auto__();
(statearr_30744[(6)] = c__30066__auto___33453);

return statearr_30744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30068__auto__);
});})(__33422,c__30066__auto___33453,G__30630_33423,G__30630_33424__$1,n__4613__auto___33421,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30630_33424__$1)].join('')));

}

var G__33480 = (__33422 + (1));
__33422 = G__33480;
continue;
} else {
}
break;
}

var c__30066__auto___33481 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30067__auto__ = (function (){var switch__29954__auto__ = (function (state_30775){
var state_val_30777 = (state_30775[(1)]);
if((state_val_30777 === (7))){
var inst_30770 = (state_30775[(2)]);
var state_30775__$1 = state_30775;
var statearr_30789_33486 = state_30775__$1;
(statearr_30789_33486[(2)] = inst_30770);

(statearr_30789_33486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (1))){
var state_30775__$1 = state_30775;
var statearr_30791_33489 = state_30775__$1;
(statearr_30791_33489[(2)] = null);

(statearr_30791_33489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (4))){
var inst_30749 = (state_30775[(7)]);
var inst_30749__$1 = (state_30775[(2)]);
var inst_30750 = (inst_30749__$1 == null);
var state_30775__$1 = (function (){var statearr_30797 = state_30775;
(statearr_30797[(7)] = inst_30749__$1);

return statearr_30797;
})();
if(cljs.core.truth_(inst_30750)){
var statearr_30805_33496 = state_30775__$1;
(statearr_30805_33496[(1)] = (5));

} else {
var statearr_30806_33501 = state_30775__$1;
(statearr_30806_33501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (6))){
var inst_30757 = (state_30775[(8)]);
var inst_30749 = (state_30775[(7)]);
var inst_30757__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30761 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30762 = [inst_30749,inst_30757__$1];
var inst_30763 = (new cljs.core.PersistentVector(null,2,(5),inst_30761,inst_30762,null));
var state_30775__$1 = (function (){var statearr_30807 = state_30775;
(statearr_30807[(8)] = inst_30757__$1);

return statearr_30807;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30775__$1,(8),jobs,inst_30763);
} else {
if((state_val_30777 === (3))){
var inst_30772 = (state_30775[(2)]);
var state_30775__$1 = state_30775;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30775__$1,inst_30772);
} else {
if((state_val_30777 === (2))){
var state_30775__$1 = state_30775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30775__$1,(4),from);
} else {
if((state_val_30777 === (9))){
var inst_30767 = (state_30775[(2)]);
var state_30775__$1 = (function (){var statearr_30812 = state_30775;
(statearr_30812[(9)] = inst_30767);

return statearr_30812;
})();
var statearr_30813_33512 = state_30775__$1;
(statearr_30813_33512[(2)] = null);

(statearr_30813_33512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (5))){
var inst_30752 = cljs.core.async.close_BANG_(jobs);
var state_30775__$1 = state_30775;
var statearr_30820_33513 = state_30775__$1;
(statearr_30820_33513[(2)] = inst_30752);

(statearr_30820_33513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (8))){
var inst_30757 = (state_30775[(8)]);
var inst_30765 = (state_30775[(2)]);
var state_30775__$1 = (function (){var statearr_30821 = state_30775;
(statearr_30821[(10)] = inst_30765);

return statearr_30821;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30775__$1,(9),results,inst_30757);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____0 = (function (){
var statearr_30823 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30823[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__);

(statearr_30823[(1)] = (1));

return statearr_30823;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____1 = (function (state_30775){
while(true){
var ret_value__29956__auto__ = (function (){try{while(true){
var result__29957__auto__ = switch__29954__auto__(state_30775);
if(cljs.core.keyword_identical_QMARK_(result__29957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29957__auto__;
}
break;
}
}catch (e30826){var ex__29958__auto__ = e30826;
var statearr_30828_33518 = state_30775;
(statearr_30828_33518[(2)] = ex__29958__auto__);


if(cljs.core.seq((state_30775[(4)]))){
var statearr_30844_33520 = state_30775;
(statearr_30844_33520[(1)] = cljs.core.first((state_30775[(4)])));

} else {
throw ex__29958__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33521 = state_30775;
state_30775 = G__33521;
continue;
} else {
return ret_value__29956__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__ = function(state_30775){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____1.call(this,state_30775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__;
})()
})();
var state__30068__auto__ = (function (){var statearr_30849 = f__30067__auto__();
(statearr_30849[(6)] = c__30066__auto___33481);

return statearr_30849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30068__auto__);
}));


var c__30066__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30067__auto__ = (function (){var switch__29954__auto__ = (function (state_30909){
var state_val_30910 = (state_30909[(1)]);
if((state_val_30910 === (7))){
var inst_30905 = (state_30909[(2)]);
var state_30909__$1 = state_30909;
var statearr_30913_33527 = state_30909__$1;
(statearr_30913_33527[(2)] = inst_30905);

(statearr_30913_33527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (20))){
var state_30909__$1 = state_30909;
var statearr_30926_33528 = state_30909__$1;
(statearr_30926_33528[(2)] = null);

(statearr_30926_33528[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (1))){
var state_30909__$1 = state_30909;
var statearr_30928_33531 = state_30909__$1;
(statearr_30928_33531[(2)] = null);

(statearr_30928_33531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (4))){
var inst_30859 = (state_30909[(7)]);
var inst_30859__$1 = (state_30909[(2)]);
var inst_30860 = (inst_30859__$1 == null);
var state_30909__$1 = (function (){var statearr_30930 = state_30909;
(statearr_30930[(7)] = inst_30859__$1);

return statearr_30930;
})();
if(cljs.core.truth_(inst_30860)){
var statearr_30932_33533 = state_30909__$1;
(statearr_30932_33533[(1)] = (5));

} else {
var statearr_30933_33534 = state_30909__$1;
(statearr_30933_33534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (15))){
var inst_30887 = (state_30909[(8)]);
var state_30909__$1 = state_30909;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30909__$1,(18),to,inst_30887);
} else {
if((state_val_30910 === (21))){
var inst_30900 = (state_30909[(2)]);
var state_30909__$1 = state_30909;
var statearr_30937_33537 = state_30909__$1;
(statearr_30937_33537[(2)] = inst_30900);

(statearr_30937_33537[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (13))){
var inst_30902 = (state_30909[(2)]);
var state_30909__$1 = (function (){var statearr_30940 = state_30909;
(statearr_30940[(9)] = inst_30902);

return statearr_30940;
})();
var statearr_30942_33539 = state_30909__$1;
(statearr_30942_33539[(2)] = null);

(statearr_30942_33539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (6))){
var inst_30859 = (state_30909[(7)]);
var state_30909__$1 = state_30909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30909__$1,(11),inst_30859);
} else {
if((state_val_30910 === (17))){
var inst_30895 = (state_30909[(2)]);
var state_30909__$1 = state_30909;
if(cljs.core.truth_(inst_30895)){
var statearr_30944_33540 = state_30909__$1;
(statearr_30944_33540[(1)] = (19));

} else {
var statearr_30945_33541 = state_30909__$1;
(statearr_30945_33541[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (3))){
var inst_30907 = (state_30909[(2)]);
var state_30909__$1 = state_30909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30909__$1,inst_30907);
} else {
if((state_val_30910 === (12))){
var inst_30872 = (state_30909[(10)]);
var state_30909__$1 = state_30909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30909__$1,(14),inst_30872);
} else {
if((state_val_30910 === (2))){
var state_30909__$1 = state_30909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30909__$1,(4),results);
} else {
if((state_val_30910 === (19))){
var state_30909__$1 = state_30909;
var statearr_30947_33546 = state_30909__$1;
(statearr_30947_33546[(2)] = null);

(statearr_30947_33546[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (11))){
var inst_30872 = (state_30909[(2)]);
var state_30909__$1 = (function (){var statearr_30951 = state_30909;
(statearr_30951[(10)] = inst_30872);

return statearr_30951;
})();
var statearr_30952_33547 = state_30909__$1;
(statearr_30952_33547[(2)] = null);

(statearr_30952_33547[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (9))){
var state_30909__$1 = state_30909;
var statearr_30953_33548 = state_30909__$1;
(statearr_30953_33548[(2)] = null);

(statearr_30953_33548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (5))){
var state_30909__$1 = state_30909;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30954_33549 = state_30909__$1;
(statearr_30954_33549[(1)] = (8));

} else {
var statearr_30955_33550 = state_30909__$1;
(statearr_30955_33550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (14))){
var inst_30887 = (state_30909[(8)]);
var inst_30887__$1 = (state_30909[(2)]);
var inst_30888 = (inst_30887__$1 == null);
var inst_30889 = cljs.core.not(inst_30888);
var state_30909__$1 = (function (){var statearr_30959 = state_30909;
(statearr_30959[(8)] = inst_30887__$1);

return statearr_30959;
})();
if(inst_30889){
var statearr_30963_33553 = state_30909__$1;
(statearr_30963_33553[(1)] = (15));

} else {
var statearr_30966_33555 = state_30909__$1;
(statearr_30966_33555[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (16))){
var state_30909__$1 = state_30909;
var statearr_30967_33557 = state_30909__$1;
(statearr_30967_33557[(2)] = false);

(statearr_30967_33557[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (10))){
var inst_30866 = (state_30909[(2)]);
var state_30909__$1 = state_30909;
var statearr_30968_33560 = state_30909__$1;
(statearr_30968_33560[(2)] = inst_30866);

(statearr_30968_33560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (18))){
var inst_30892 = (state_30909[(2)]);
var state_30909__$1 = state_30909;
var statearr_30969_33561 = state_30909__$1;
(statearr_30969_33561[(2)] = inst_30892);

(statearr_30969_33561[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (8))){
var inst_30863 = cljs.core.async.close_BANG_(to);
var state_30909__$1 = state_30909;
var statearr_30970_33563 = state_30909__$1;
(statearr_30970_33563[(2)] = inst_30863);

(statearr_30970_33563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____0 = (function (){
var statearr_30972 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30972[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__);

(statearr_30972[(1)] = (1));

return statearr_30972;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____1 = (function (state_30909){
while(true){
var ret_value__29956__auto__ = (function (){try{while(true){
var result__29957__auto__ = switch__29954__auto__(state_30909);
if(cljs.core.keyword_identical_QMARK_(result__29957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29957__auto__;
}
break;
}
}catch (e30973){var ex__29958__auto__ = e30973;
var statearr_30974_33572 = state_30909;
(statearr_30974_33572[(2)] = ex__29958__auto__);


if(cljs.core.seq((state_30909[(4)]))){
var statearr_30975_33576 = state_30909;
(statearr_30975_33576[(1)] = cljs.core.first((state_30909[(4)])));

} else {
throw ex__29958__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33579 = state_30909;
state_30909 = G__33579;
continue;
} else {
return ret_value__29956__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__ = function(state_30909){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____1.call(this,state_30909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29955__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29955__auto__;
})()
})();
var state__30068__auto__ = (function (){var statearr_30982 = f__30067__auto__();
(statearr_30982[(6)] = c__30066__auto__);

return statearr_30982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30068__auto__);
}));

return c__30066__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30992 = arguments.length;
switch (G__30992) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30995 = arguments.length;
switch (G__30995) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31009 = arguments.length;
switch (G__31009) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30066__auto___33595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30067__auto__ = (function (){var switch__29954__auto__ = (function (state_31045){
var state_val_31046 = (state_31045[(1)]);
if((state_val_31046 === (7))){
var inst_31040 = (state_31045[(2)]);
var state_31045__$1 = state_31045;
var statearr_31077_33601 = state_31045__$1;
(statearr_31077_33601[(2)] = inst_31040);

(statearr_31077_33601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (1))){
var state_31045__$1 = state_31045;
var statearr_31078_33602 = state_31045__$1;
(statearr_31078_33602[(2)] = null);

(statearr_31078_33602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (4))){
var inst_31018 = (state_31045[(7)]);
var inst_31018__$1 = (state_31045[(2)]);
var inst_31019 = (inst_31018__$1 == null);
var state_31045__$1 = (function (){var statearr_31085 = state_31045;
(statearr_31085[(7)] = inst_31018__$1);

return statearr_31085;
})();
if(cljs.core.truth_(inst_31019)){
var statearr_31086_33603 = state_31045__$1;
(statearr_31086_33603[(1)] = (5));

} else {
var statearr_31087_33604 = state_31045__$1;
(statearr_31087_33604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (13))){
var state_31045__$1 = state_31045;
var statearr_31088_33605 = state_31045__$1;
(statearr_31088_33605[(2)] = null);

(statearr_31088_33605[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (6))){
var inst_31018 = (state_31045[(7)]);
var inst_31025 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31018) : p.call(null,inst_31018));
var state_31045__$1 = state_31045;
if(cljs.core.truth_(inst_31025)){
var statearr_31089_33619 = state_31045__$1;
(statearr_31089_33619[(1)] = (9));

} else {
var statearr_31091_33625 = state_31045__$1;
(statearr_31091_33625[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (3))){
var inst_31042 = (state_31045[(2)]);
var state_31045__$1 = state_31045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31045__$1,inst_31042);
} else {
if((state_val_31046 === (12))){
var state_31045__$1 = state_31045;
var statearr_31092_33635 = state_31045__$1;
(statearr_31092_33635[(2)] = null);

(statearr_31092_33635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (2))){
var state_31045__$1 = state_31045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31045__$1,(4),ch);
} else {
if((state_val_31046 === (11))){
var inst_31018 = (state_31045[(7)]);
var inst_31030 = (state_31045[(2)]);
var state_31045__$1 = state_31045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31045__$1,(8),inst_31030,inst_31018);
} else {
if((state_val_31046 === (9))){
var state_31045__$1 = state_31045;
var statearr_31097_33647 = state_31045__$1;
(statearr_31097_33647[(2)] = tc);

(statearr_31097_33647[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (5))){
var inst_31022 = cljs.core.async.close_BANG_(tc);
var inst_31023 = cljs.core.async.close_BANG_(fc);
var state_31045__$1 = (function (){var statearr_31100 = state_31045;
(statearr_31100[(8)] = inst_31022);

return statearr_31100;
})();
var statearr_31101_33650 = state_31045__$1;
(statearr_31101_33650[(2)] = inst_31023);

(statearr_31101_33650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (14))){
var inst_31038 = (state_31045[(2)]);
var state_31045__$1 = state_31045;
var statearr_31102_33652 = state_31045__$1;
(statearr_31102_33652[(2)] = inst_31038);

(statearr_31102_33652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (10))){
var state_31045__$1 = state_31045;
var statearr_31103_33653 = state_31045__$1;
(statearr_31103_33653[(2)] = fc);

(statearr_31103_33653[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (8))){
var inst_31032 = (state_31045[(2)]);
var state_31045__$1 = state_31045;
if(cljs.core.truth_(inst_31032)){
var statearr_31106_33658 = state_31045__$1;
(statearr_31106_33658[(1)] = (12));

} else {
var statearr_31107_33660 = state_31045__$1;
(statearr_31107_33660[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29955__auto__ = null;
var cljs$core$async$state_machine__29955__auto____0 = (function (){
var statearr_31123 = [null,null,null,null,null,null,null,null,null];
(statearr_31123[(0)] = cljs$core$async$state_machine__29955__auto__);

(statearr_31123[(1)] = (1));

return statearr_31123;
});
var cljs$core$async$state_machine__29955__auto____1 = (function (state_31045){
while(true){
var ret_value__29956__auto__ = (function (){try{while(true){
var result__29957__auto__ = switch__29954__auto__(state_31045);
if(cljs.core.keyword_identical_QMARK_(result__29957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29957__auto__;
}
break;
}
}catch (e31124){var ex__29958__auto__ = e31124;
var statearr_31130_33667 = state_31045;
(statearr_31130_33667[(2)] = ex__29958__auto__);


if(cljs.core.seq((state_31045[(4)]))){
var statearr_31136_33671 = state_31045;
(statearr_31136_33671[(1)] = cljs.core.first((state_31045[(4)])));

} else {
throw ex__29958__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33678 = state_31045;
state_31045 = G__33678;
continue;
} else {
return ret_value__29956__auto__;
}
break;
}
});
cljs$core$async$state_machine__29955__auto__ = function(state_31045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29955__auto____1.call(this,state_31045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29955__auto____0;
cljs$core$async$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29955__auto____1;
return cljs$core$async$state_machine__29955__auto__;
})()
})();
var state__30068__auto__ = (function (){var statearr_31146 = f__30067__auto__();
(statearr_31146[(6)] = c__30066__auto___33595);

return statearr_31146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30068__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30066__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30067__auto__ = (function (){var switch__29954__auto__ = (function (state_31179){
var state_val_31180 = (state_31179[(1)]);
if((state_val_31180 === (7))){
var inst_31174 = (state_31179[(2)]);
var state_31179__$1 = state_31179;
var statearr_31189_33688 = state_31179__$1;
(statearr_31189_33688[(2)] = inst_31174);

(statearr_31189_33688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31180 === (1))){
var inst_31155 = init;
var inst_31156 = inst_31155;
var state_31179__$1 = (function (){var statearr_31192 = state_31179;
(statearr_31192[(7)] = inst_31156);

return statearr_31192;
})();
var statearr_31217_33695 = state_31179__$1;
(statearr_31217_33695[(2)] = null);

(statearr_31217_33695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31180 === (4))){
var inst_31159 = (state_31179[(8)]);
var inst_31159__$1 = (state_31179[(2)]);
var inst_31160 = (inst_31159__$1 == null);
var state_31179__$1 = (function (){var statearr_31222 = state_31179;
(statearr_31222[(8)] = inst_31159__$1);

return statearr_31222;
})();
if(cljs.core.truth_(inst_31160)){
var statearr_31223_33697 = state_31179__$1;
(statearr_31223_33697[(1)] = (5));

} else {
var statearr_31230_33698 = state_31179__$1;
(statearr_31230_33698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31180 === (6))){
var inst_31159 = (state_31179[(8)]);
var inst_31163 = (state_31179[(9)]);
var inst_31156 = (state_31179[(7)]);
var inst_31163__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31156,inst_31159) : f.call(null,inst_31156,inst_31159));
var inst_31165 = cljs.core.reduced_QMARK_(inst_31163__$1);
var state_31179__$1 = (function (){var statearr_31242 = state_31179;
(statearr_31242[(9)] = inst_31163__$1);

return statearr_31242;
})();
if(inst_31165){
var statearr_31248_33706 = state_31179__$1;
(statearr_31248_33706[(1)] = (8));

} else {
var statearr_31253_33707 = state_31179__$1;
(statearr_31253_33707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31180 === (3))){
var inst_31177 = (state_31179[(2)]);
var state_31179__$1 = state_31179;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31179__$1,inst_31177);
} else {
if((state_val_31180 === (2))){
var state_31179__$1 = state_31179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31179__$1,(4),ch);
} else {
if((state_val_31180 === (9))){
var inst_31163 = (state_31179[(9)]);
var inst_31156 = inst_31163;
var state_31179__$1 = (function (){var statearr_31254 = state_31179;
(statearr_31254[(7)] = inst_31156);

return statearr_31254;
})();
var statearr_31255_33714 = state_31179__$1;
(statearr_31255_33714[(2)] = null);

(statearr_31255_33714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31180 === (5))){
var inst_31156 = (state_31179[(7)]);
var state_31179__$1 = state_31179;
var statearr_31257_33719 = state_31179__$1;
(statearr_31257_33719[(2)] = inst_31156);

(statearr_31257_33719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31180 === (10))){
var inst_31172 = (state_31179[(2)]);
var state_31179__$1 = state_31179;
var statearr_31258_33722 = state_31179__$1;
(statearr_31258_33722[(2)] = inst_31172);

(statearr_31258_33722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31180 === (8))){
var inst_31163 = (state_31179[(9)]);
var inst_31168 = cljs.core.deref(inst_31163);
var state_31179__$1 = state_31179;
var statearr_31260_33728 = state_31179__$1;
(statearr_31260_33728[(2)] = inst_31168);

(statearr_31260_33728[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29955__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29955__auto____0 = (function (){
var statearr_31272 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31272[(0)] = cljs$core$async$reduce_$_state_machine__29955__auto__);

(statearr_31272[(1)] = (1));

return statearr_31272;
});
var cljs$core$async$reduce_$_state_machine__29955__auto____1 = (function (state_31179){
while(true){
var ret_value__29956__auto__ = (function (){try{while(true){
var result__29957__auto__ = switch__29954__auto__(state_31179);
if(cljs.core.keyword_identical_QMARK_(result__29957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29957__auto__;
}
break;
}
}catch (e31276){var ex__29958__auto__ = e31276;
var statearr_31277_33735 = state_31179;
(statearr_31277_33735[(2)] = ex__29958__auto__);


if(cljs.core.seq((state_31179[(4)]))){
var statearr_31279_33739 = state_31179;
(statearr_31279_33739[(1)] = cljs.core.first((state_31179[(4)])));

} else {
throw ex__29958__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33741 = state_31179;
state_31179 = G__33741;
continue;
} else {
return ret_value__29956__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29955__auto__ = function(state_31179){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29955__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29955__auto____1.call(this,state_31179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29955__auto____0;
cljs$core$async$reduce_$_state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29955__auto____1;
return cljs$core$async$reduce_$_state_machine__29955__auto__;
})()
})();
var state__30068__auto__ = (function (){var statearr_31282 = f__30067__auto__();
(statearr_31282[(6)] = c__30066__auto__);

return statearr_31282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30068__auto__);
}));

return c__30066__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30066__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30067__auto__ = (function (){var switch__29954__auto__ = (function (state_31298){
var state_val_31299 = (state_31298[(1)]);
if((state_val_31299 === (1))){
var inst_31291 = cljs.core.async.reduce(f__$1,init,ch);
var state_31298__$1 = state_31298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31298__$1,(2),inst_31291);
} else {
if((state_val_31299 === (2))){
var inst_31293 = (state_31298[(2)]);
var inst_31296 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31293) : f__$1.call(null,inst_31293));
var state_31298__$1 = state_31298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31298__$1,inst_31296);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29955__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29955__auto____0 = (function (){
var statearr_31307 = [null,null,null,null,null,null,null];
(statearr_31307[(0)] = cljs$core$async$transduce_$_state_machine__29955__auto__);

(statearr_31307[(1)] = (1));

return statearr_31307;
});
var cljs$core$async$transduce_$_state_machine__29955__auto____1 = (function (state_31298){
while(true){
var ret_value__29956__auto__ = (function (){try{while(true){
var result__29957__auto__ = switch__29954__auto__(state_31298);
if(cljs.core.keyword_identical_QMARK_(result__29957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29957__auto__;
}
break;
}
}catch (e31309){var ex__29958__auto__ = e31309;
var statearr_31315_33761 = state_31298;
(statearr_31315_33761[(2)] = ex__29958__auto__);


if(cljs.core.seq((state_31298[(4)]))){
var statearr_31316_33764 = state_31298;
(statearr_31316_33764[(1)] = cljs.core.first((state_31298[(4)])));

} else {
throw ex__29958__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33768 = state_31298;
state_31298 = G__33768;
continue;
} else {
return ret_value__29956__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29955__auto__ = function(state_31298){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29955__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29955__auto____1.call(this,state_31298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29955__auto____0;
cljs$core$async$transduce_$_state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29955__auto____1;
return cljs$core$async$transduce_$_state_machine__29955__auto__;
})()
})();
var state__30068__auto__ = (function (){var statearr_31317 = f__30067__auto__();
(statearr_31317[(6)] = c__30066__auto__);

return statearr_31317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30068__auto__);
}));

return c__30066__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31325 = arguments.length;
switch (G__31325) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30066__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30067__auto__ = (function (){var switch__29954__auto__ = (function (state_31372){
var state_val_31373 = (state_31372[(1)]);
if((state_val_31373 === (7))){
var inst_31345 = (state_31372[(2)]);
var state_31372__$1 = state_31372;
var statearr_31374_33781 = state_31372__$1;
(statearr_31374_33781[(2)] = inst_31345);

(statearr_31374_33781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (1))){
var inst_31332 = cljs.core.seq(coll);
var inst_31333 = inst_31332;
var state_31372__$1 = (function (){var statearr_31375 = state_31372;
(statearr_31375[(7)] = inst_31333);

return statearr_31375;
})();
var statearr_31377_33783 = state_31372__$1;
(statearr_31377_33783[(2)] = null);

(statearr_31377_33783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (4))){
var inst_31333 = (state_31372[(7)]);
var inst_31343 = cljs.core.first(inst_31333);
var state_31372__$1 = state_31372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31372__$1,(7),ch,inst_31343);
} else {
if((state_val_31373 === (13))){
var inst_31361 = (state_31372[(2)]);
var state_31372__$1 = state_31372;
var statearr_31382_33784 = state_31372__$1;
(statearr_31382_33784[(2)] = inst_31361);

(statearr_31382_33784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (6))){
var inst_31348 = (state_31372[(2)]);
var state_31372__$1 = state_31372;
if(cljs.core.truth_(inst_31348)){
var statearr_31389_33788 = state_31372__$1;
(statearr_31389_33788[(1)] = (8));

} else {
var statearr_31390_33790 = state_31372__$1;
(statearr_31390_33790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (3))){
var inst_31365 = (state_31372[(2)]);
var state_31372__$1 = state_31372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31372__$1,inst_31365);
} else {
if((state_val_31373 === (12))){
var state_31372__$1 = state_31372;
var statearr_31395_33794 = state_31372__$1;
(statearr_31395_33794[(2)] = null);

(statearr_31395_33794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (2))){
var inst_31333 = (state_31372[(7)]);
var state_31372__$1 = state_31372;
if(cljs.core.truth_(inst_31333)){
var statearr_31396_33797 = state_31372__$1;
(statearr_31396_33797[(1)] = (4));

} else {
var statearr_31397_33798 = state_31372__$1;
(statearr_31397_33798[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (11))){
var inst_31358 = cljs.core.async.close_BANG_(ch);
var state_31372__$1 = state_31372;
var statearr_31398_33801 = state_31372__$1;
(statearr_31398_33801[(2)] = inst_31358);

(statearr_31398_33801[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (9))){
var state_31372__$1 = state_31372;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31399_33805 = state_31372__$1;
(statearr_31399_33805[(1)] = (11));

} else {
var statearr_31404_33806 = state_31372__$1;
(statearr_31404_33806[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (5))){
var inst_31333 = (state_31372[(7)]);
var state_31372__$1 = state_31372;
var statearr_31405_33810 = state_31372__$1;
(statearr_31405_33810[(2)] = inst_31333);

(statearr_31405_33810[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (10))){
var inst_31363 = (state_31372[(2)]);
var state_31372__$1 = state_31372;
var statearr_31406_33824 = state_31372__$1;
(statearr_31406_33824[(2)] = inst_31363);

(statearr_31406_33824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (8))){
var inst_31333 = (state_31372[(7)]);
var inst_31354 = cljs.core.next(inst_31333);
var inst_31333__$1 = inst_31354;
var state_31372__$1 = (function (){var statearr_31408 = state_31372;
(statearr_31408[(7)] = inst_31333__$1);

return statearr_31408;
})();
var statearr_31411_33827 = state_31372__$1;
(statearr_31411_33827[(2)] = null);

(statearr_31411_33827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29955__auto__ = null;
var cljs$core$async$state_machine__29955__auto____0 = (function (){
var statearr_31413 = [null,null,null,null,null,null,null,null];
(statearr_31413[(0)] = cljs$core$async$state_machine__29955__auto__);

(statearr_31413[(1)] = (1));

return statearr_31413;
});
var cljs$core$async$state_machine__29955__auto____1 = (function (state_31372){
while(true){
var ret_value__29956__auto__ = (function (){try{while(true){
var result__29957__auto__ = switch__29954__auto__(state_31372);
if(cljs.core.keyword_identical_QMARK_(result__29957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29957__auto__;
}
break;
}
}catch (e31414){var ex__29958__auto__ = e31414;
var statearr_31415_33839 = state_31372;
(statearr_31415_33839[(2)] = ex__29958__auto__);


if(cljs.core.seq((state_31372[(4)]))){
var statearr_31416_33842 = state_31372;
(statearr_31416_33842[(1)] = cljs.core.first((state_31372[(4)])));

} else {
throw ex__29958__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33847 = state_31372;
state_31372 = G__33847;
continue;
} else {
return ret_value__29956__auto__;
}
break;
}
});
cljs$core$async$state_machine__29955__auto__ = function(state_31372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29955__auto____1.call(this,state_31372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29955__auto____0;
cljs$core$async$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29955__auto____1;
return cljs$core$async$state_machine__29955__auto__;
})()
})();
var state__30068__auto__ = (function (){var statearr_31417 = f__30067__auto__();
(statearr_31417[(6)] = c__30066__auto__);

return statearr_31417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30068__auto__);
}));

return c__30066__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31421 = arguments.length;
switch (G__31421) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33866 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33866(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33875 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33875(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33885 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33885(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33894 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33894(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31487 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31487 = (function (ch,cs,meta31488){
this.ch = ch;
this.cs = cs;
this.meta31488 = meta31488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31489,meta31488__$1){
var self__ = this;
var _31489__$1 = this;
return (new cljs.core.async.t_cljs$core$async31487(self__.ch,self__.cs,meta31488__$1));
}));

(cljs.core.async.t_cljs$core$async31487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31489){
var self__ = this;
var _31489__$1 = this;
return self__.meta31488;
}));

(cljs.core.async.t_cljs$core$async31487.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31487.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31487.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31487.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31487.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31487.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31488","meta31488",1457856249,null)], null);
}));

(cljs.core.async.t_cljs$core$async31487.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31487");

(cljs.core.async.t_cljs$core$async31487.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31487");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31487.
 */
cljs.core.async.__GT_t_cljs$core$async31487 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31487(ch__$1,cs__$1,meta31488){
return (new cljs.core.async.t_cljs$core$async31487(ch__$1,cs__$1,meta31488));
});

}

return (new cljs.core.async.t_cljs$core$async31487(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30066__auto___33946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30067__auto__ = (function (){var switch__29954__auto__ = (function (state_31646){
var state_val_31649 = (state_31646[(1)]);
if((state_val_31649 === (7))){
var inst_31642 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31654_33948 = state_31646__$1;
(statearr_31654_33948[(2)] = inst_31642);

(statearr_31654_33948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (20))){
var inst_31540 = (state_31646[(7)]);
var inst_31555 = cljs.core.first(inst_31540);
var inst_31556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31555,(0),null);
var inst_31557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31555,(1),null);
var state_31646__$1 = (function (){var statearr_31657 = state_31646;
(statearr_31657[(8)] = inst_31556);

return statearr_31657;
})();
if(cljs.core.truth_(inst_31557)){
var statearr_31658_33952 = state_31646__$1;
(statearr_31658_33952[(1)] = (22));

} else {
var statearr_31661_33953 = state_31646__$1;
(statearr_31661_33953[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (27))){
var inst_31591 = (state_31646[(9)]);
var inst_31596 = (state_31646[(10)]);
var inst_31504 = (state_31646[(11)]);
var inst_31589 = (state_31646[(12)]);
var inst_31596__$1 = cljs.core._nth(inst_31589,inst_31591);
var inst_31597 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31596__$1,inst_31504,done);
var state_31646__$1 = (function (){var statearr_31662 = state_31646;
(statearr_31662[(10)] = inst_31596__$1);

return statearr_31662;
})();
if(cljs.core.truth_(inst_31597)){
var statearr_31663_33961 = state_31646__$1;
(statearr_31663_33961[(1)] = (30));

} else {
var statearr_31664_33963 = state_31646__$1;
(statearr_31664_33963[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (1))){
var state_31646__$1 = state_31646;
var statearr_31670_33966 = state_31646__$1;
(statearr_31670_33966[(2)] = null);

(statearr_31670_33966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (24))){
var inst_31540 = (state_31646[(7)]);
var inst_31563 = (state_31646[(2)]);
var inst_31564 = cljs.core.next(inst_31540);
var inst_31513 = inst_31564;
var inst_31514 = null;
var inst_31515 = (0);
var inst_31516 = (0);
var state_31646__$1 = (function (){var statearr_31672 = state_31646;
(statearr_31672[(13)] = inst_31516);

(statearr_31672[(14)] = inst_31563);

(statearr_31672[(15)] = inst_31513);

(statearr_31672[(16)] = inst_31515);

(statearr_31672[(17)] = inst_31514);

return statearr_31672;
})();
var statearr_31674_33972 = state_31646__$1;
(statearr_31674_33972[(2)] = null);

(statearr_31674_33972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (39))){
var state_31646__$1 = state_31646;
var statearr_31678_33973 = state_31646__$1;
(statearr_31678_33973[(2)] = null);

(statearr_31678_33973[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (4))){
var inst_31504 = (state_31646[(11)]);
var inst_31504__$1 = (state_31646[(2)]);
var inst_31505 = (inst_31504__$1 == null);
var state_31646__$1 = (function (){var statearr_31679 = state_31646;
(statearr_31679[(11)] = inst_31504__$1);

return statearr_31679;
})();
if(cljs.core.truth_(inst_31505)){
var statearr_31685_33981 = state_31646__$1;
(statearr_31685_33981[(1)] = (5));

} else {
var statearr_31691_33982 = state_31646__$1;
(statearr_31691_33982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (15))){
var inst_31516 = (state_31646[(13)]);
var inst_31513 = (state_31646[(15)]);
var inst_31515 = (state_31646[(16)]);
var inst_31514 = (state_31646[(17)]);
var inst_31536 = (state_31646[(2)]);
var inst_31537 = (inst_31516 + (1));
var tmp31675 = inst_31513;
var tmp31676 = inst_31515;
var tmp31677 = inst_31514;
var inst_31513__$1 = tmp31675;
var inst_31514__$1 = tmp31677;
var inst_31515__$1 = tmp31676;
var inst_31516__$1 = inst_31537;
var state_31646__$1 = (function (){var statearr_31695 = state_31646;
(statearr_31695[(13)] = inst_31516__$1);

(statearr_31695[(15)] = inst_31513__$1);

(statearr_31695[(16)] = inst_31515__$1);

(statearr_31695[(18)] = inst_31536);

(statearr_31695[(17)] = inst_31514__$1);

return statearr_31695;
})();
var statearr_31713_33986 = state_31646__$1;
(statearr_31713_33986[(2)] = null);

(statearr_31713_33986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (21))){
var inst_31567 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31721_33987 = state_31646__$1;
(statearr_31721_33987[(2)] = inst_31567);

(statearr_31721_33987[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (31))){
var inst_31596 = (state_31646[(10)]);
var inst_31600 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31596);
var state_31646__$1 = state_31646;
var statearr_31722_33989 = state_31646__$1;
(statearr_31722_33989[(2)] = inst_31600);

(statearr_31722_33989[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (32))){
var inst_31590 = (state_31646[(19)]);
var inst_31591 = (state_31646[(9)]);
var inst_31588 = (state_31646[(20)]);
var inst_31589 = (state_31646[(12)]);
var inst_31602 = (state_31646[(2)]);
var inst_31603 = (inst_31591 + (1));
var tmp31718 = inst_31590;
var tmp31719 = inst_31588;
var tmp31720 = inst_31589;
var inst_31588__$1 = tmp31719;
var inst_31589__$1 = tmp31720;
var inst_31590__$1 = tmp31718;
var inst_31591__$1 = inst_31603;
var state_31646__$1 = (function (){var statearr_31727 = state_31646;
(statearr_31727[(19)] = inst_31590__$1);

(statearr_31727[(9)] = inst_31591__$1);

(statearr_31727[(21)] = inst_31602);

(statearr_31727[(20)] = inst_31588__$1);

(statearr_31727[(12)] = inst_31589__$1);

return statearr_31727;
})();
var statearr_31728_33995 = state_31646__$1;
(statearr_31728_33995[(2)] = null);

(statearr_31728_33995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (40))){
var inst_31615 = (state_31646[(22)]);
var inst_31619 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31615);
var state_31646__$1 = state_31646;
var statearr_31729_34000 = state_31646__$1;
(statearr_31729_34000[(2)] = inst_31619);

(statearr_31729_34000[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (33))){
var inst_31606 = (state_31646[(23)]);
var inst_31608 = cljs.core.chunked_seq_QMARK_(inst_31606);
var state_31646__$1 = state_31646;
if(inst_31608){
var statearr_31730_34004 = state_31646__$1;
(statearr_31730_34004[(1)] = (36));

} else {
var statearr_31731_34012 = state_31646__$1;
(statearr_31731_34012[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (13))){
var inst_31530 = (state_31646[(24)]);
var inst_31533 = cljs.core.async.close_BANG_(inst_31530);
var state_31646__$1 = state_31646;
var statearr_31732_34015 = state_31646__$1;
(statearr_31732_34015[(2)] = inst_31533);

(statearr_31732_34015[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (22))){
var inst_31556 = (state_31646[(8)]);
var inst_31560 = cljs.core.async.close_BANG_(inst_31556);
var state_31646__$1 = state_31646;
var statearr_31733_34016 = state_31646__$1;
(statearr_31733_34016[(2)] = inst_31560);

(statearr_31733_34016[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (36))){
var inst_31606 = (state_31646[(23)]);
var inst_31610 = cljs.core.chunk_first(inst_31606);
var inst_31611 = cljs.core.chunk_rest(inst_31606);
var inst_31612 = cljs.core.count(inst_31610);
var inst_31588 = inst_31611;
var inst_31589 = inst_31610;
var inst_31590 = inst_31612;
var inst_31591 = (0);
var state_31646__$1 = (function (){var statearr_31734 = state_31646;
(statearr_31734[(19)] = inst_31590);

(statearr_31734[(9)] = inst_31591);

(statearr_31734[(20)] = inst_31588);

(statearr_31734[(12)] = inst_31589);

return statearr_31734;
})();
var statearr_31735_34020 = state_31646__$1;
(statearr_31735_34020[(2)] = null);

(statearr_31735_34020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (41))){
var inst_31606 = (state_31646[(23)]);
var inst_31621 = (state_31646[(2)]);
var inst_31622 = cljs.core.next(inst_31606);
var inst_31588 = inst_31622;
var inst_31589 = null;
var inst_31590 = (0);
var inst_31591 = (0);
var state_31646__$1 = (function (){var statearr_31736 = state_31646;
(statearr_31736[(25)] = inst_31621);

(statearr_31736[(19)] = inst_31590);

(statearr_31736[(9)] = inst_31591);

(statearr_31736[(20)] = inst_31588);

(statearr_31736[(12)] = inst_31589);

return statearr_31736;
})();
var statearr_31737_34023 = state_31646__$1;
(statearr_31737_34023[(2)] = null);

(statearr_31737_34023[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (43))){
var state_31646__$1 = state_31646;
var statearr_31738_34024 = state_31646__$1;
(statearr_31738_34024[(2)] = null);

(statearr_31738_34024[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (29))){
var inst_31630 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31739_34027 = state_31646__$1;
(statearr_31739_34027[(2)] = inst_31630);

(statearr_31739_34027[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (44))){
var inst_31639 = (state_31646[(2)]);
var state_31646__$1 = (function (){var statearr_31744 = state_31646;
(statearr_31744[(26)] = inst_31639);

return statearr_31744;
})();
var statearr_31745_34033 = state_31646__$1;
(statearr_31745_34033[(2)] = null);

(statearr_31745_34033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (6))){
var inst_31577 = (state_31646[(27)]);
var inst_31576 = cljs.core.deref(cs);
var inst_31577__$1 = cljs.core.keys(inst_31576);
var inst_31578 = cljs.core.count(inst_31577__$1);
var inst_31579 = cljs.core.reset_BANG_(dctr,inst_31578);
var inst_31587 = cljs.core.seq(inst_31577__$1);
var inst_31588 = inst_31587;
var inst_31589 = null;
var inst_31590 = (0);
var inst_31591 = (0);
var state_31646__$1 = (function (){var statearr_31746 = state_31646;
(statearr_31746[(27)] = inst_31577__$1);

(statearr_31746[(19)] = inst_31590);

(statearr_31746[(9)] = inst_31591);

(statearr_31746[(20)] = inst_31588);

(statearr_31746[(12)] = inst_31589);

(statearr_31746[(28)] = inst_31579);

return statearr_31746;
})();
var statearr_31747_34041 = state_31646__$1;
(statearr_31747_34041[(2)] = null);

(statearr_31747_34041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (28))){
var inst_31606 = (state_31646[(23)]);
var inst_31588 = (state_31646[(20)]);
var inst_31606__$1 = cljs.core.seq(inst_31588);
var state_31646__$1 = (function (){var statearr_31748 = state_31646;
(statearr_31748[(23)] = inst_31606__$1);

return statearr_31748;
})();
if(inst_31606__$1){
var statearr_31752_34045 = state_31646__$1;
(statearr_31752_34045[(1)] = (33));

} else {
var statearr_31753_34046 = state_31646__$1;
(statearr_31753_34046[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (25))){
var inst_31590 = (state_31646[(19)]);
var inst_31591 = (state_31646[(9)]);
var inst_31593 = (inst_31591 < inst_31590);
var inst_31594 = inst_31593;
var state_31646__$1 = state_31646;
if(cljs.core.truth_(inst_31594)){
var statearr_31757_34048 = state_31646__$1;
(statearr_31757_34048[(1)] = (27));

} else {
var statearr_31759_34050 = state_31646__$1;
(statearr_31759_34050[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (34))){
var state_31646__$1 = state_31646;
var statearr_31763_34051 = state_31646__$1;
(statearr_31763_34051[(2)] = null);

(statearr_31763_34051[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (17))){
var state_31646__$1 = state_31646;
var statearr_31764_34052 = state_31646__$1;
(statearr_31764_34052[(2)] = null);

(statearr_31764_34052[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (3))){
var inst_31644 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31646__$1,inst_31644);
} else {
if((state_val_31649 === (12))){
var inst_31572 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31765_34057 = state_31646__$1;
(statearr_31765_34057[(2)] = inst_31572);

(statearr_31765_34057[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (2))){
var state_31646__$1 = state_31646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31646__$1,(4),ch);
} else {
if((state_val_31649 === (23))){
var state_31646__$1 = state_31646;
var statearr_31766_34059 = state_31646__$1;
(statearr_31766_34059[(2)] = null);

(statearr_31766_34059[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (35))){
var inst_31628 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31769_34060 = state_31646__$1;
(statearr_31769_34060[(2)] = inst_31628);

(statearr_31769_34060[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (19))){
var inst_31540 = (state_31646[(7)]);
var inst_31547 = cljs.core.chunk_first(inst_31540);
var inst_31548 = cljs.core.chunk_rest(inst_31540);
var inst_31549 = cljs.core.count(inst_31547);
var inst_31513 = inst_31548;
var inst_31514 = inst_31547;
var inst_31515 = inst_31549;
var inst_31516 = (0);
var state_31646__$1 = (function (){var statearr_31772 = state_31646;
(statearr_31772[(13)] = inst_31516);

(statearr_31772[(15)] = inst_31513);

(statearr_31772[(16)] = inst_31515);

(statearr_31772[(17)] = inst_31514);

return statearr_31772;
})();
var statearr_31776_34065 = state_31646__$1;
(statearr_31776_34065[(2)] = null);

(statearr_31776_34065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (11))){
var inst_31540 = (state_31646[(7)]);
var inst_31513 = (state_31646[(15)]);
var inst_31540__$1 = cljs.core.seq(inst_31513);
var state_31646__$1 = (function (){var statearr_31780 = state_31646;
(statearr_31780[(7)] = inst_31540__$1);

return statearr_31780;
})();
if(inst_31540__$1){
var statearr_31782_34068 = state_31646__$1;
(statearr_31782_34068[(1)] = (16));

} else {
var statearr_31783_34069 = state_31646__$1;
(statearr_31783_34069[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (9))){
var inst_31574 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31784_34070 = state_31646__$1;
(statearr_31784_34070[(2)] = inst_31574);

(statearr_31784_34070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (5))){
var inst_31511 = cljs.core.deref(cs);
var inst_31512 = cljs.core.seq(inst_31511);
var inst_31513 = inst_31512;
var inst_31514 = null;
var inst_31515 = (0);
var inst_31516 = (0);
var state_31646__$1 = (function (){var statearr_31786 = state_31646;
(statearr_31786[(13)] = inst_31516);

(statearr_31786[(15)] = inst_31513);

(statearr_31786[(16)] = inst_31515);

(statearr_31786[(17)] = inst_31514);

return statearr_31786;
})();
var statearr_31787_34076 = state_31646__$1;
(statearr_31787_34076[(2)] = null);

(statearr_31787_34076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (14))){
var state_31646__$1 = state_31646;
var statearr_31789_34077 = state_31646__$1;
(statearr_31789_34077[(2)] = null);

(statearr_31789_34077[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (45))){
var inst_31636 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31790_34083 = state_31646__$1;
(statearr_31790_34083[(2)] = inst_31636);

(statearr_31790_34083[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (26))){
var inst_31577 = (state_31646[(27)]);
var inst_31632 = (state_31646[(2)]);
var inst_31633 = cljs.core.seq(inst_31577);
var state_31646__$1 = (function (){var statearr_31794 = state_31646;
(statearr_31794[(29)] = inst_31632);

return statearr_31794;
})();
if(inst_31633){
var statearr_31795_34089 = state_31646__$1;
(statearr_31795_34089[(1)] = (42));

} else {
var statearr_31800_34090 = state_31646__$1;
(statearr_31800_34090[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (16))){
var inst_31540 = (state_31646[(7)]);
var inst_31544 = cljs.core.chunked_seq_QMARK_(inst_31540);
var state_31646__$1 = state_31646;
if(inst_31544){
var statearr_31802_34095 = state_31646__$1;
(statearr_31802_34095[(1)] = (19));

} else {
var statearr_31803_34098 = state_31646__$1;
(statearr_31803_34098[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (38))){
var inst_31625 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31804_34100 = state_31646__$1;
(statearr_31804_34100[(2)] = inst_31625);

(statearr_31804_34100[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (30))){
var state_31646__$1 = state_31646;
var statearr_31805_34101 = state_31646__$1;
(statearr_31805_34101[(2)] = null);

(statearr_31805_34101[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (10))){
var inst_31516 = (state_31646[(13)]);
var inst_31514 = (state_31646[(17)]);
var inst_31529 = cljs.core._nth(inst_31514,inst_31516);
var inst_31530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31529,(0),null);
var inst_31531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31529,(1),null);
var state_31646__$1 = (function (){var statearr_31806 = state_31646;
(statearr_31806[(24)] = inst_31530);

return statearr_31806;
})();
if(cljs.core.truth_(inst_31531)){
var statearr_31807_34103 = state_31646__$1;
(statearr_31807_34103[(1)] = (13));

} else {
var statearr_31808_34104 = state_31646__$1;
(statearr_31808_34104[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (18))){
var inst_31570 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31810_34107 = state_31646__$1;
(statearr_31810_34107[(2)] = inst_31570);

(statearr_31810_34107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (42))){
var state_31646__$1 = state_31646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31646__$1,(45),dchan);
} else {
if((state_val_31649 === (37))){
var inst_31606 = (state_31646[(23)]);
var inst_31615 = (state_31646[(22)]);
var inst_31504 = (state_31646[(11)]);
var inst_31615__$1 = cljs.core.first(inst_31606);
var inst_31616 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31615__$1,inst_31504,done);
var state_31646__$1 = (function (){var statearr_31812 = state_31646;
(statearr_31812[(22)] = inst_31615__$1);

return statearr_31812;
})();
if(cljs.core.truth_(inst_31616)){
var statearr_31813_34110 = state_31646__$1;
(statearr_31813_34110[(1)] = (39));

} else {
var statearr_31814_34111 = state_31646__$1;
(statearr_31814_34111[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (8))){
var inst_31516 = (state_31646[(13)]);
var inst_31515 = (state_31646[(16)]);
var inst_31522 = (inst_31516 < inst_31515);
var inst_31523 = inst_31522;
var state_31646__$1 = state_31646;
if(cljs.core.truth_(inst_31523)){
var statearr_31816_34114 = state_31646__$1;
(statearr_31816_34114[(1)] = (10));

} else {
var statearr_31817_34115 = state_31646__$1;
(statearr_31817_34115[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29955__auto__ = null;
var cljs$core$async$mult_$_state_machine__29955__auto____0 = (function (){
var statearr_31819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31819[(0)] = cljs$core$async$mult_$_state_machine__29955__auto__);

(statearr_31819[(1)] = (1));

return statearr_31819;
});
var cljs$core$async$mult_$_state_machine__29955__auto____1 = (function (state_31646){
while(true){
var ret_value__29956__auto__ = (function (){try{while(true){
var result__29957__auto__ = switch__29954__auto__(state_31646);
if(cljs.core.keyword_identical_QMARK_(result__29957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29957__auto__;
}
break;
}
}catch (e31825){var ex__29958__auto__ = e31825;
var statearr_31826_34121 = state_31646;
(statearr_31826_34121[(2)] = ex__29958__auto__);


if(cljs.core.seq((state_31646[(4)]))){
var statearr_31827_34122 = state_31646;
(statearr_31827_34122[(1)] = cljs.core.first((state_31646[(4)])));

} else {
throw ex__29958__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34123 = state_31646;
state_31646 = G__34123;
continue;
} else {
return ret_value__29956__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29955__auto__ = function(state_31646){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29955__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29955__auto____1.call(this,state_31646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29955__auto____0;
cljs$core$async$mult_$_state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29955__auto____1;
return cljs$core$async$mult_$_state_machine__29955__auto__;
})()
})();
var state__30068__auto__ = (function (){var statearr_31830 = f__30067__auto__();
(statearr_31830[(6)] = c__30066__auto___33946);

return statearr_31830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30068__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31835 = arguments.length;
switch (G__31835) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34128 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34128(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34132 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34132(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34133 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34133(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34135 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34135(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34138 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34138(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34144 = arguments.length;
var i__4737__auto___34146 = (0);
while(true){
if((i__4737__auto___34146 < len__4736__auto___34144)){
args__4742__auto__.push((arguments[i__4737__auto___34146]));

var G__34147 = (i__4737__auto___34146 + (1));
i__4737__auto___34146 = G__34147;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31863){
var map__31864 = p__31863;
var map__31864__$1 = (((((!((map__31864 == null))))?(((((map__31864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31864):map__31864);
var opts = map__31864__$1;
var statearr_31867_34151 = state;
(statearr_31867_34151[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31868_34152 = state;
(statearr_31868_34152[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31869_34154 = state;
(statearr_31869_34154[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31859){
var G__31860 = cljs.core.first(seq31859);
var seq31859__$1 = cljs.core.next(seq31859);
var G__31861 = cljs.core.first(seq31859__$1);
var seq31859__$2 = cljs.core.next(seq31859__$1);
var G__31862 = cljs.core.first(seq31859__$2);
var seq31859__$3 = cljs.core.next(seq31859__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31860,G__31861,G__31862,seq31859__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31881 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31881 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31882){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31882 = meta31882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31883,meta31882__$1){
var self__ = this;
var _31883__$1 = this;
return (new cljs.core.async.t_cljs$core$async31881(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31882__$1));
}));

(cljs.core.async.t_cljs$core$async31881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31883){
var self__ = this;
var _31883__$1 = this;
return self__.meta31882;
}));

(cljs.core.async.t_cljs$core$async31881.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31881.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31881.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31881.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31881.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31881.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31881.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31881.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31882","meta31882",-471467113,null)], null);
}));

(cljs.core.async.t_cljs$core$async31881.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31881");

(cljs.core.async.t_cljs$core$async31881.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31881");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31881.
 */
cljs.core.async.__GT_t_cljs$core$async31881 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31881(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31882){
return (new cljs.core.async.t_cljs$core$async31881(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31882));
});

}

return (new cljs.core.async.t_cljs$core$async31881(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30066__auto___34248 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30067__auto__ = (function (){var switch__29954__auto__ = (function (state_32023){
var state_val_32024 = (state_32023[(1)]);
if((state_val_32024 === (7))){
var inst_31929 = (state_32023[(2)]);
var state_32023__$1 = state_32023;
var statearr_32025_34249 = state_32023__$1;
(statearr_32025_34249[(2)] = inst_31929);

(statearr_32025_34249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (20))){
var inst_31946 = (state_32023[(7)]);
var state_32023__$1 = state_32023;
var statearr_32026_34255 = state_32023__$1;
(statearr_32026_34255[(2)] = inst_31946);

(statearr_32026_34255[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (27))){
var state_32023__$1 = state_32023;
var statearr_32027_34259 = state_32023__$1;
(statearr_32027_34259[(2)] = null);

(statearr_32027_34259[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (1))){
var inst_31911 = (state_32023[(8)]);
var inst_31911__$1 = calc_state();
var inst_31913 = (inst_31911__$1 == null);
var inst_31914 = cljs.core.not(inst_31913);
var state_32023__$1 = (function (){var statearr_32028 = state_32023;
(statearr_32028[(8)] = inst_31911__$1);

return statearr_32028;
})();
if(inst_31914){
var statearr_32029_34263 = state_32023__$1;
(statearr_32029_34263[(1)] = (2));

} else {
var statearr_32030_34265 = state_32023__$1;
(statearr_32030_34265[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (24))){
var inst_31997 = (state_32023[(9)]);
var inst_31979 = (state_32023[(10)]);
var inst_31970 = (state_32023[(11)]);
var inst_31997__$1 = (inst_31970.cljs$core$IFn$_invoke$arity$1 ? inst_31970.cljs$core$IFn$_invoke$arity$1(inst_31979) : inst_31970.call(null,inst_31979));
var state_32023__$1 = (function (){var statearr_32031 = state_32023;
(statearr_32031[(9)] = inst_31997__$1);

return statearr_32031;
})();
if(cljs.core.truth_(inst_31997__$1)){
var statearr_32033_34269 = state_32023__$1;
(statearr_32033_34269[(1)] = (29));

} else {
var statearr_32034_34270 = state_32023__$1;
(statearr_32034_34270[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (4))){
var inst_31932 = (state_32023[(2)]);
var state_32023__$1 = state_32023;
if(cljs.core.truth_(inst_31932)){
var statearr_32036_34271 = state_32023__$1;
(statearr_32036_34271[(1)] = (8));

} else {
var statearr_32038_34272 = state_32023__$1;
(statearr_32038_34272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (15))){
var inst_31964 = (state_32023[(2)]);
var state_32023__$1 = state_32023;
if(cljs.core.truth_(inst_31964)){
var statearr_32042_34273 = state_32023__$1;
(statearr_32042_34273[(1)] = (19));

} else {
var statearr_32043_34274 = state_32023__$1;
(statearr_32043_34274[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (21))){
var inst_31969 = (state_32023[(12)]);
var inst_31969__$1 = (state_32023[(2)]);
var inst_31970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31969__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31969__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31969__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32023__$1 = (function (){var statearr_32045 = state_32023;
(statearr_32045[(12)] = inst_31969__$1);

(statearr_32045[(13)] = inst_31971);

(statearr_32045[(11)] = inst_31970);

return statearr_32045;
})();
return cljs.core.async.ioc_alts_BANG_(state_32023__$1,(22),inst_31972);
} else {
if((state_val_32024 === (31))){
var inst_32005 = (state_32023[(2)]);
var state_32023__$1 = state_32023;
if(cljs.core.truth_(inst_32005)){
var statearr_32050_34287 = state_32023__$1;
(statearr_32050_34287[(1)] = (32));

} else {
var statearr_32051_34288 = state_32023__$1;
(statearr_32051_34288[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (32))){
var inst_31978 = (state_32023[(14)]);
var state_32023__$1 = state_32023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32023__$1,(35),out,inst_31978);
} else {
if((state_val_32024 === (33))){
var inst_31969 = (state_32023[(12)]);
var inst_31946 = inst_31969;
var state_32023__$1 = (function (){var statearr_32057 = state_32023;
(statearr_32057[(7)] = inst_31946);

return statearr_32057;
})();
var statearr_32059_34296 = state_32023__$1;
(statearr_32059_34296[(2)] = null);

(statearr_32059_34296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (13))){
var inst_31946 = (state_32023[(7)]);
var inst_31953 = inst_31946.cljs$lang$protocol_mask$partition0$;
var inst_31954 = (inst_31953 & (64));
var inst_31955 = inst_31946.cljs$core$ISeq$;
var inst_31956 = (cljs.core.PROTOCOL_SENTINEL === inst_31955);
var inst_31957 = ((inst_31954) || (inst_31956));
var state_32023__$1 = state_32023;
if(cljs.core.truth_(inst_31957)){
var statearr_32060_34298 = state_32023__$1;
(statearr_32060_34298[(1)] = (16));

} else {
var statearr_32061_34301 = state_32023__$1;
(statearr_32061_34301[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (22))){
var inst_31979 = (state_32023[(10)]);
var inst_31978 = (state_32023[(14)]);
var inst_31977 = (state_32023[(2)]);
var inst_31978__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31977,(0),null);
var inst_31979__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31977,(1),null);
var inst_31980 = (inst_31978__$1 == null);
var inst_31981 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31979__$1,change);
var inst_31982 = ((inst_31980) || (inst_31981));
var state_32023__$1 = (function (){var statearr_32062 = state_32023;
(statearr_32062[(10)] = inst_31979__$1);

(statearr_32062[(14)] = inst_31978__$1);

return statearr_32062;
})();
if(cljs.core.truth_(inst_31982)){
var statearr_32063_34311 = state_32023__$1;
(statearr_32063_34311[(1)] = (23));

} else {
var statearr_32064_34312 = state_32023__$1;
(statearr_32064_34312[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (36))){
var inst_31969 = (state_32023[(12)]);
var inst_31946 = inst_31969;
var state_32023__$1 = (function (){var statearr_32068 = state_32023;
(statearr_32068[(7)] = inst_31946);

return statearr_32068;
})();
var statearr_32069_34316 = state_32023__$1;
(statearr_32069_34316[(2)] = null);

(statearr_32069_34316[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (29))){
var inst_31997 = (state_32023[(9)]);
var state_32023__$1 = state_32023;
var statearr_32070_34319 = state_32023__$1;
(statearr_32070_34319[(2)] = inst_31997);

(statearr_32070_34319[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (6))){
var state_32023__$1 = state_32023;
var statearr_32071_34323 = state_32023__$1;
(statearr_32071_34323[(2)] = false);

(statearr_32071_34323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (28))){
var inst_31989 = (state_32023[(2)]);
var inst_31994 = calc_state();
var inst_31946 = inst_31994;
var state_32023__$1 = (function (){var statearr_32075 = state_32023;
(statearr_32075[(15)] = inst_31989);

(statearr_32075[(7)] = inst_31946);

return statearr_32075;
})();
var statearr_32076_34324 = state_32023__$1;
(statearr_32076_34324[(2)] = null);

(statearr_32076_34324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (25))){
var inst_32019 = (state_32023[(2)]);
var state_32023__$1 = state_32023;
var statearr_32078_34328 = state_32023__$1;
(statearr_32078_34328[(2)] = inst_32019);

(statearr_32078_34328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (34))){
var inst_32017 = (state_32023[(2)]);
var state_32023__$1 = state_32023;
var statearr_32079_34329 = state_32023__$1;
(statearr_32079_34329[(2)] = inst_32017);

(statearr_32079_34329[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (17))){
var state_32023__$1 = state_32023;
var statearr_32081_34334 = state_32023__$1;
(statearr_32081_34334[(2)] = false);

(statearr_32081_34334[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (3))){
var state_32023__$1 = state_32023;
var statearr_32083_34338 = state_32023__$1;
(statearr_32083_34338[(2)] = false);

(statearr_32083_34338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (12))){
var inst_32021 = (state_32023[(2)]);
var state_32023__$1 = state_32023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32023__$1,inst_32021);
} else {
if((state_val_32024 === (2))){
var inst_31911 = (state_32023[(8)]);
var inst_31921 = inst_31911.cljs$lang$protocol_mask$partition0$;
var inst_31922 = (inst_31921 & (64));
var inst_31923 = inst_31911.cljs$core$ISeq$;
var inst_31924 = (cljs.core.PROTOCOL_SENTINEL === inst_31923);
var inst_31925 = ((inst_31922) || (inst_31924));
var state_32023__$1 = state_32023;
if(cljs.core.truth_(inst_31925)){
var statearr_32086_34340 = state_32023__$1;
(statearr_32086_34340[(1)] = (5));

} else {
var statearr_32087_34341 = state_32023__$1;
(statearr_32087_34341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (23))){
var inst_31978 = (state_32023[(14)]);
var inst_31984 = (inst_31978 == null);
var state_32023__$1 = state_32023;
if(cljs.core.truth_(inst_31984)){
var statearr_32088_34345 = state_32023__$1;
(statearr_32088_34345[(1)] = (26));

} else {
var statearr_32089_34346 = state_32023__$1;
(statearr_32089_34346[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (35))){
var inst_32008 = (state_32023[(2)]);
var state_32023__$1 = state_32023;
if(cljs.core.truth_(inst_32008)){
var statearr_32093_34348 = state_32023__$1;
(statearr_32093_34348[(1)] = (36));

} else {
var statearr_32094_34349 = state_32023__$1;
(statearr_32094_34349[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (19))){
var inst_31946 = (state_32023[(7)]);
var inst_31966 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31946);
var state_32023__$1 = state_32023;
var statearr_32095_34353 = state_32023__$1;
(statearr_32095_34353[(2)] = inst_31966);

(statearr_32095_34353[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (11))){
var inst_31946 = (state_32023[(7)]);
var inst_31950 = (inst_31946 == null);
var inst_31951 = cljs.core.not(inst_31950);
var state_32023__$1 = state_32023;
if(inst_31951){
var statearr_32099_34356 = state_32023__$1;
(statearr_32099_34356[(1)] = (13));

} else {
var statearr_32100_34357 = state_32023__$1;
(statearr_32100_34357[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (9))){
var inst_31911 = (state_32023[(8)]);
var state_32023__$1 = state_32023;
var statearr_32101_34358 = state_32023__$1;
(statearr_32101_34358[(2)] = inst_31911);

(statearr_32101_34358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (5))){
var state_32023__$1 = state_32023;
var statearr_32103_34359 = state_32023__$1;
(statearr_32103_34359[(2)] = true);

(statearr_32103_34359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (14))){
var state_32023__$1 = state_32023;
var statearr_32104_34360 = state_32023__$1;
(statearr_32104_34360[(2)] = false);

(statearr_32104_34360[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (26))){
var inst_31979 = (state_32023[(10)]);
var inst_31986 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31979);
var state_32023__$1 = state_32023;
var statearr_32106_34365 = state_32023__$1;
(statearr_32106_34365[(2)] = inst_31986);

(statearr_32106_34365[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (16))){
var state_32023__$1 = state_32023;
var statearr_32107_34366 = state_32023__$1;
(statearr_32107_34366[(2)] = true);

(statearr_32107_34366[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (38))){
var inst_32013 = (state_32023[(2)]);
var state_32023__$1 = state_32023;
var statearr_32111_34367 = state_32023__$1;
(statearr_32111_34367[(2)] = inst_32013);

(statearr_32111_34367[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (30))){
var inst_31979 = (state_32023[(10)]);
var inst_31971 = (state_32023[(13)]);
var inst_31970 = (state_32023[(11)]);
var inst_32000 = cljs.core.empty_QMARK_(inst_31970);
var inst_32001 = (inst_31971.cljs$core$IFn$_invoke$arity$1 ? inst_31971.cljs$core$IFn$_invoke$arity$1(inst_31979) : inst_31971.call(null,inst_31979));
var inst_32002 = cljs.core.not(inst_32001);
var inst_32003 = ((inst_32000) && (inst_32002));
var state_32023__$1 = state_32023;
var statearr_32116_34372 = state_32023__$1;
(statearr_32116_34372[(2)] = inst_32003);

(statearr_32116_34372[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (10))){
var inst_31911 = (state_32023[(8)]);
var inst_31937 = (state_32023[(2)]);
var inst_31938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31937,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31937,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31937,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31946 = inst_31911;
var state_32023__$1 = (function (){var statearr_32123 = state_32023;
(statearr_32123[(16)] = inst_31945);

(statearr_32123[(17)] = inst_31939);

(statearr_32123[(18)] = inst_31938);

(statearr_32123[(7)] = inst_31946);

return statearr_32123;
})();
var statearr_32126_34378 = state_32023__$1;
(statearr_32126_34378[(2)] = null);

(statearr_32126_34378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (18))){
var inst_31961 = (state_32023[(2)]);
var state_32023__$1 = state_32023;
var statearr_32127_34379 = state_32023__$1;
(statearr_32127_34379[(2)] = inst_31961);

(statearr_32127_34379[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (37))){
var state_32023__$1 = state_32023;
var statearr_32128_34384 = state_32023__$1;
(statearr_32128_34384[(2)] = null);

(statearr_32128_34384[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (8))){
var inst_31911 = (state_32023[(8)]);
var inst_31934 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31911);
var state_32023__$1 = state_32023;
var statearr_32129_34385 = state_32023__$1;
(statearr_32129_34385[(2)] = inst_31934);

(statearr_32129_34385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29955__auto__ = null;
var cljs$core$async$mix_$_state_machine__29955__auto____0 = (function (){
var statearr_32130 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32130[(0)] = cljs$core$async$mix_$_state_machine__29955__auto__);

(statearr_32130[(1)] = (1));

return statearr_32130;
});
var cljs$core$async$mix_$_state_machine__29955__auto____1 = (function (state_32023){
while(true){
var ret_value__29956__auto__ = (function (){try{while(true){
var result__29957__auto__ = switch__29954__auto__(state_32023);
if(cljs.core.keyword_identical_QMARK_(result__29957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29957__auto__;
}
break;
}
}catch (e32131){var ex__29958__auto__ = e32131;
var statearr_32132_34389 = state_32023;
(statearr_32132_34389[(2)] = ex__29958__auto__);


if(cljs.core.seq((state_32023[(4)]))){
var statearr_32133_34390 = state_32023;
(statearr_32133_34390[(1)] = cljs.core.first((state_32023[(4)])));

} else {
throw ex__29958__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34391 = state_32023;
state_32023 = G__34391;
continue;
} else {
return ret_value__29956__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29955__auto__ = function(state_32023){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29955__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29955__auto____1.call(this,state_32023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29955__auto____0;
cljs$core$async$mix_$_state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29955__auto____1;
return cljs$core$async$mix_$_state_machine__29955__auto__;
})()
})();
var state__30068__auto__ = (function (){var statearr_32137 = f__30067__auto__();
(statearr_32137[(6)] = c__30066__auto___34248);

return statearr_32137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30068__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34392 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34392(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34393 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34393(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34396 = (function() {
var G__34397 = null;
var G__34397__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34397__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34397 = function(p,v){
switch(arguments.length){
case 1:
return G__34397__1.call(this,p);
case 2:
return G__34397__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34397.cljs$core$IFn$_invoke$arity$1 = G__34397__1;
G__34397.cljs$core$IFn$_invoke$arity$2 = G__34397__2;
return G__34397;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32211 = arguments.length;
switch (G__32211) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34396(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34396(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32229 = arguments.length;
switch (G__32229) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32219_SHARP_){
if(cljs.core.truth_((p1__32219_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32219_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32219_SHARP_.call(null,topic)))){
return p1__32219_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32219_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32240 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32240 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32241){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32241 = meta32241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32242,meta32241__$1){
var self__ = this;
var _32242__$1 = this;
return (new cljs.core.async.t_cljs$core$async32240(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32241__$1));
}));

(cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32242){
var self__ = this;
var _32242__$1 = this;
return self__.meta32241;
}));

(cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32241","meta32241",1138622907,null)], null);
}));

(cljs.core.async.t_cljs$core$async32240.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32240");

(cljs.core.async.t_cljs$core$async32240.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32240");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32240.
 */
cljs.core.async.__GT_t_cljs$core$async32240 = (function cljs$core$async$__GT_t_cljs$core$async32240(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32241){
return (new cljs.core.async.t_cljs$core$async32240(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32241));
});

}

return (new cljs.core.async.t_cljs$core$async32240(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30066__auto___34421 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30067__auto__ = (function (){var switch__29954__auto__ = (function (state_32363){
var state_val_32364 = (state_32363[(1)]);
if((state_val_32364 === (7))){
var inst_32353 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
var statearr_32367_34424 = state_32363__$1;
(statearr_32367_34424[(2)] = inst_32353);

(statearr_32367_34424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (20))){
var state_32363__$1 = state_32363;
var statearr_32368_34426 = state_32363__$1;
(statearr_32368_34426[(2)] = null);

(statearr_32368_34426[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (1))){
var state_32363__$1 = state_32363;
var statearr_32369_34428 = state_32363__$1;
(statearr_32369_34428[(2)] = null);

(statearr_32369_34428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (24))){
var inst_32336 = (state_32363[(7)]);
var inst_32345 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32336);
var state_32363__$1 = state_32363;
var statearr_32370_34429 = state_32363__$1;
(statearr_32370_34429[(2)] = inst_32345);

(statearr_32370_34429[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (4))){
var inst_32258 = (state_32363[(8)]);
var inst_32258__$1 = (state_32363[(2)]);
var inst_32285 = (inst_32258__$1 == null);
var state_32363__$1 = (function (){var statearr_32371 = state_32363;
(statearr_32371[(8)] = inst_32258__$1);

return statearr_32371;
})();
if(cljs.core.truth_(inst_32285)){
var statearr_32373_34434 = state_32363__$1;
(statearr_32373_34434[(1)] = (5));

} else {
var statearr_32375_34435 = state_32363__$1;
(statearr_32375_34435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (15))){
var inst_32330 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
var statearr_32377_34436 = state_32363__$1;
(statearr_32377_34436[(2)] = inst_32330);

(statearr_32377_34436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (21))){
var inst_32350 = (state_32363[(2)]);
var state_32363__$1 = (function (){var statearr_32378 = state_32363;
(statearr_32378[(9)] = inst_32350);

return statearr_32378;
})();
var statearr_32379_34438 = state_32363__$1;
(statearr_32379_34438[(2)] = null);

(statearr_32379_34438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (13))){
var inst_32309 = (state_32363[(10)]);
var inst_32312 = cljs.core.chunked_seq_QMARK_(inst_32309);
var state_32363__$1 = state_32363;
if(inst_32312){
var statearr_32381_34440 = state_32363__$1;
(statearr_32381_34440[(1)] = (16));

} else {
var statearr_32382_34441 = state_32363__$1;
(statearr_32382_34441[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (22))){
var inst_32342 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
if(cljs.core.truth_(inst_32342)){
var statearr_32384_34442 = state_32363__$1;
(statearr_32384_34442[(1)] = (23));

} else {
var statearr_32385_34443 = state_32363__$1;
(statearr_32385_34443[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (6))){
var inst_32258 = (state_32363[(8)]);
var inst_32336 = (state_32363[(7)]);
var inst_32338 = (state_32363[(11)]);
var inst_32336__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32258) : topic_fn.call(null,inst_32258));
var inst_32337 = cljs.core.deref(mults);
var inst_32338__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32337,inst_32336__$1);
var state_32363__$1 = (function (){var statearr_32388 = state_32363;
(statearr_32388[(7)] = inst_32336__$1);

(statearr_32388[(11)] = inst_32338__$1);

return statearr_32388;
})();
if(cljs.core.truth_(inst_32338__$1)){
var statearr_32391_34446 = state_32363__$1;
(statearr_32391_34446[(1)] = (19));

} else {
var statearr_32392_34447 = state_32363__$1;
(statearr_32392_34447[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (25))){
var inst_32347 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
var statearr_32397_34450 = state_32363__$1;
(statearr_32397_34450[(2)] = inst_32347);

(statearr_32397_34450[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (17))){
var inst_32309 = (state_32363[(10)]);
var inst_32321 = cljs.core.first(inst_32309);
var inst_32322 = cljs.core.async.muxch_STAR_(inst_32321);
var inst_32323 = cljs.core.async.close_BANG_(inst_32322);
var inst_32324 = cljs.core.next(inst_32309);
var inst_32295 = inst_32324;
var inst_32296 = null;
var inst_32297 = (0);
var inst_32298 = (0);
var state_32363__$1 = (function (){var statearr_32402 = state_32363;
(statearr_32402[(12)] = inst_32295);

(statearr_32402[(13)] = inst_32297);

(statearr_32402[(14)] = inst_32298);

(statearr_32402[(15)] = inst_32296);

(statearr_32402[(16)] = inst_32323);

return statearr_32402;
})();
var statearr_32409_34454 = state_32363__$1;
(statearr_32409_34454[(2)] = null);

(statearr_32409_34454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (3))){
var inst_32355 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32363__$1,inst_32355);
} else {
if((state_val_32364 === (12))){
var inst_32332 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
var statearr_32421_34455 = state_32363__$1;
(statearr_32421_34455[(2)] = inst_32332);

(statearr_32421_34455[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (2))){
var state_32363__$1 = state_32363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32363__$1,(4),ch);
} else {
if((state_val_32364 === (23))){
var state_32363__$1 = state_32363;
var statearr_32425_34457 = state_32363__$1;
(statearr_32425_34457[(2)] = null);

(statearr_32425_34457[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (19))){
var inst_32258 = (state_32363[(8)]);
var inst_32338 = (state_32363[(11)]);
var inst_32340 = cljs.core.async.muxch_STAR_(inst_32338);
var state_32363__$1 = state_32363;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32363__$1,(22),inst_32340,inst_32258);
} else {
if((state_val_32364 === (11))){
var inst_32295 = (state_32363[(12)]);
var inst_32309 = (state_32363[(10)]);
var inst_32309__$1 = cljs.core.seq(inst_32295);
var state_32363__$1 = (function (){var statearr_32426 = state_32363;
(statearr_32426[(10)] = inst_32309__$1);

return statearr_32426;
})();
if(inst_32309__$1){
var statearr_32427_34460 = state_32363__$1;
(statearr_32427_34460[(1)] = (13));

} else {
var statearr_32428_34461 = state_32363__$1;
(statearr_32428_34461[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (9))){
var inst_32334 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
var statearr_32429_34462 = state_32363__$1;
(statearr_32429_34462[(2)] = inst_32334);

(statearr_32429_34462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (5))){
var inst_32291 = cljs.core.deref(mults);
var inst_32292 = cljs.core.vals(inst_32291);
var inst_32293 = cljs.core.seq(inst_32292);
var inst_32295 = inst_32293;
var inst_32296 = null;
var inst_32297 = (0);
var inst_32298 = (0);
var state_32363__$1 = (function (){var statearr_32441 = state_32363;
(statearr_32441[(12)] = inst_32295);

(statearr_32441[(13)] = inst_32297);

(statearr_32441[(14)] = inst_32298);

(statearr_32441[(15)] = inst_32296);

return statearr_32441;
})();
var statearr_32442_34463 = state_32363__$1;
(statearr_32442_34463[(2)] = null);

(statearr_32442_34463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (14))){
var state_32363__$1 = state_32363;
var statearr_32448_34464 = state_32363__$1;
(statearr_32448_34464[(2)] = null);

(statearr_32448_34464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (16))){
var inst_32309 = (state_32363[(10)]);
var inst_32316 = cljs.core.chunk_first(inst_32309);
var inst_32317 = cljs.core.chunk_rest(inst_32309);
var inst_32318 = cljs.core.count(inst_32316);
var inst_32295 = inst_32317;
var inst_32296 = inst_32316;
var inst_32297 = inst_32318;
var inst_32298 = (0);
var state_32363__$1 = (function (){var statearr_32451 = state_32363;
(statearr_32451[(12)] = inst_32295);

(statearr_32451[(13)] = inst_32297);

(statearr_32451[(14)] = inst_32298);

(statearr_32451[(15)] = inst_32296);

return statearr_32451;
})();
var statearr_32454_34465 = state_32363__$1;
(statearr_32454_34465[(2)] = null);

(statearr_32454_34465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (10))){
var inst_32295 = (state_32363[(12)]);
var inst_32297 = (state_32363[(13)]);
var inst_32298 = (state_32363[(14)]);
var inst_32296 = (state_32363[(15)]);
var inst_32303 = cljs.core._nth(inst_32296,inst_32298);
var inst_32304 = cljs.core.async.muxch_STAR_(inst_32303);
var inst_32305 = cljs.core.async.close_BANG_(inst_32304);
var inst_32306 = (inst_32298 + (1));
var tmp32443 = inst_32295;
var tmp32444 = inst_32297;
var tmp32445 = inst_32296;
var inst_32295__$1 = tmp32443;
var inst_32296__$1 = tmp32445;
var inst_32297__$1 = tmp32444;
var inst_32298__$1 = inst_32306;
var state_32363__$1 = (function (){var statearr_32457 = state_32363;
(statearr_32457[(12)] = inst_32295__$1);

(statearr_32457[(13)] = inst_32297__$1);

(statearr_32457[(14)] = inst_32298__$1);

(statearr_32457[(15)] = inst_32296__$1);

(statearr_32457[(17)] = inst_32305);

return statearr_32457;
})();
var statearr_32458_34468 = state_32363__$1;
(statearr_32458_34468[(2)] = null);

(statearr_32458_34468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (18))){
var inst_32327 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
var statearr_32459_34469 = state_32363__$1;
(statearr_32459_34469[(2)] = inst_32327);

(statearr_32459_34469[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (8))){
var inst_32297 = (state_32363[(13)]);
var inst_32298 = (state_32363[(14)]);
var inst_32300 = (inst_32298 < inst_32297);
var inst_32301 = inst_32300;
var state_32363__$1 = state_32363;
if(cljs.core.truth_(inst_32301)){
var statearr_32461_34470 = state_32363__$1;
(statearr_32461_34470[(1)] = (10));

} else {
var statearr_32463_34471 = state_32363__$1;
(statearr_32463_34471[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29955__auto__ = null;
var cljs$core$async$state_machine__29955__auto____0 = (function (){
var statearr_32464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32464[(0)] = cljs$core$async$state_machine__29955__auto__);

(statearr_32464[(1)] = (1));

return statearr_32464;
});
var cljs$core$async$state_machine__29955__auto____1 = (function (state_32363){
while(true){
var ret_value__29956__auto__ = (function (){try{while(true){
var result__29957__auto__ = switch__29954__auto__(state_32363);
if(cljs.core.keyword_identical_QMARK_(result__29957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29957__auto__;
}
break;
}
}catch (e32465){var ex__29958__auto__ = e32465;
var statearr_32466_34478 = state_32363;
(statearr_32466_34478[(2)] = ex__29958__auto__);


if(cljs.core.seq((state_32363[(4)]))){
var statearr_32467_34479 = state_32363;
(statearr_32467_34479[(1)] = cljs.core.first((state_32363[(4)])));

} else {
throw ex__29958__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34480 = state_32363;
state_32363 = G__34480;
continue;
} else {
return ret_value__29956__auto__;
}
break;
}
});
cljs$core$async$state_machine__29955__auto__ = function(state_32363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29955__auto____1.call(this,state_32363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29955__auto____0;
cljs$core$async$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29955__auto____1;
return cljs$core$async$state_machine__29955__auto__;
})()
})();
var state__30068__auto__ = (function (){var statearr_32472 = f__30067__auto__();
(statearr_32472[(6)] = c__30066__auto___34421);

return statearr_32472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30068__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32484 = arguments.length;
switch (G__32484) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32490 = arguments.length;
switch (G__32490) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32498 = arguments.length;
switch (G__32498) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30066__auto___34498 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30067__auto__ = (function (){var switch__29954__auto__ = (function (state_32572){
var state_val_32573 = (state_32572[(1)]);
if((state_val_32573 === (7))){
var state_32572__$1 = state_32572;
var statearr_32574_34502 = state_32572__$1;
(statearr_32574_34502[(2)] = null);

(statearr_32574_34502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (1))){
var state_32572__$1 = state_32572;
var statearr_32575_34503 = state_32572__$1;
(statearr_32575_34503[(2)] = null);

(statearr_32575_34503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (4))){
var inst_32527 = (state_32572[(7)]);
var inst_32528 = (state_32572[(8)]);
var inst_32530 = (inst_32528 < inst_32527);
var state_32572__$1 = state_32572;
if(cljs.core.truth_(inst_32530)){
var statearr_32576_34504 = state_32572__$1;
(statearr_32576_34504[(1)] = (6));

} else {
var statearr_32577_34505 = state_32572__$1;
(statearr_32577_34505[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (15))){
var inst_32554 = (state_32572[(9)]);
var inst_32559 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32554);
var state_32572__$1 = state_32572;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32572__$1,(17),out,inst_32559);
} else {
if((state_val_32573 === (13))){
var inst_32554 = (state_32572[(9)]);
var inst_32554__$1 = (state_32572[(2)]);
var inst_32555 = cljs.core.some(cljs.core.nil_QMARK_,inst_32554__$1);
var state_32572__$1 = (function (){var statearr_32578 = state_32572;
(statearr_32578[(9)] = inst_32554__$1);

return statearr_32578;
})();
if(cljs.core.truth_(inst_32555)){
var statearr_32579_34506 = state_32572__$1;
(statearr_32579_34506[(1)] = (14));

} else {
var statearr_32580_34507 = state_32572__$1;
(statearr_32580_34507[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (6))){
var state_32572__$1 = state_32572;
var statearr_32581_34508 = state_32572__$1;
(statearr_32581_34508[(2)] = null);

(statearr_32581_34508[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (17))){
var inst_32561 = (state_32572[(2)]);
var state_32572__$1 = (function (){var statearr_32584 = state_32572;
(statearr_32584[(10)] = inst_32561);

return statearr_32584;
})();
var statearr_32585_34512 = state_32572__$1;
(statearr_32585_34512[(2)] = null);

(statearr_32585_34512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (3))){
var inst_32566 = (state_32572[(2)]);
var state_32572__$1 = state_32572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32572__$1,inst_32566);
} else {
if((state_val_32573 === (12))){
var _ = (function (){var statearr_32586 = state_32572;
(statearr_32586[(4)] = cljs.core.rest((state_32572[(4)])));

return statearr_32586;
})();
var state_32572__$1 = state_32572;
var ex32583 = (state_32572__$1[(2)]);
var statearr_32587_34528 = state_32572__$1;
(statearr_32587_34528[(5)] = ex32583);


if((ex32583 instanceof Object)){
var statearr_32588_34535 = state_32572__$1;
(statearr_32588_34535[(1)] = (11));

(statearr_32588_34535[(5)] = null);

} else {
throw ex32583;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (2))){
var inst_32526 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32527 = cnt;
var inst_32528 = (0);
var state_32572__$1 = (function (){var statearr_32610 = state_32572;
(statearr_32610[(11)] = inst_32526);

(statearr_32610[(7)] = inst_32527);

(statearr_32610[(8)] = inst_32528);

return statearr_32610;
})();
var statearr_32611_34536 = state_32572__$1;
(statearr_32611_34536[(2)] = null);

(statearr_32611_34536[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (11))){
var inst_32532 = (state_32572[(2)]);
var inst_32533 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32572__$1 = (function (){var statearr_32612 = state_32572;
(statearr_32612[(12)] = inst_32532);

return statearr_32612;
})();
var statearr_32613_34537 = state_32572__$1;
(statearr_32613_34537[(2)] = inst_32533);

(statearr_32613_34537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (9))){
var inst_32528 = (state_32572[(8)]);
var _ = (function (){var statearr_32614 = state_32572;
(statearr_32614[(4)] = cljs.core.cons((12),(state_32572[(4)])));

return statearr_32614;
})();
var inst_32539 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32528) : chs__$1.call(null,inst_32528));
var inst_32540 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32528) : done.call(null,inst_32528));
var inst_32541 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32539,inst_32540);
var ___$1 = (function (){var statearr_32615 = state_32572;
(statearr_32615[(4)] = cljs.core.rest((state_32572[(4)])));

return statearr_32615;
})();
var state_32572__$1 = state_32572;
var statearr_32616_34548 = state_32572__$1;
(statearr_32616_34548[(2)] = inst_32541);

(statearr_32616_34548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (5))){
var inst_32552 = (state_32572[(2)]);
var state_32572__$1 = (function (){var statearr_32617 = state_32572;
(statearr_32617[(13)] = inst_32552);

return statearr_32617;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32572__$1,(13),dchan);
} else {
if((state_val_32573 === (14))){
var inst_32557 = cljs.core.async.close_BANG_(out);
var state_32572__$1 = state_32572;
var statearr_32619_34552 = state_32572__$1;
(statearr_32619_34552[(2)] = inst_32557);

(statearr_32619_34552[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (16))){
var inst_32564 = (state_32572[(2)]);
var state_32572__$1 = state_32572;
var statearr_32620_34553 = state_32572__$1;
(statearr_32620_34553[(2)] = inst_32564);

(statearr_32620_34553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (10))){
var inst_32528 = (state_32572[(8)]);
var inst_32545 = (state_32572[(2)]);
var inst_32546 = (inst_32528 + (1));
var inst_32528__$1 = inst_32546;
var state_32572__$1 = (function (){var statearr_32621 = state_32572;
(statearr_32621[(8)] = inst_32528__$1);

(statearr_32621[(14)] = inst_32545);

return statearr_32621;
})();
var statearr_32622_34554 = state_32572__$1;
(statearr_32622_34554[(2)] = null);

(statearr_32622_34554[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32573 === (8))){
var inst_32550 = (state_32572[(2)]);
var state_32572__$1 = state_32572;
var statearr_32623_34555 = state_32572__$1;
(statearr_32623_34555[(2)] = inst_32550);

(statearr_32623_34555[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29955__auto__ = null;
var cljs$core$async$state_machine__29955__auto____0 = (function (){
var statearr_32624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32624[(0)] = cljs$core$async$state_machine__29955__auto__);

(statearr_32624[(1)] = (1));

return statearr_32624;
});
var cljs$core$async$state_machine__29955__auto____1 = (function (state_32572){
while(true){
var ret_value__29956__auto__ = (function (){try{while(true){
var result__29957__auto__ = switch__29954__auto__(state_32572);
if(cljs.core.keyword_identical_QMARK_(result__29957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29957__auto__;
}
break;
}
}catch (e32625){var ex__29958__auto__ = e32625;
var statearr_32626_34556 = state_32572;
(statearr_32626_34556[(2)] = ex__29958__auto__);


if(cljs.core.seq((state_32572[(4)]))){
var statearr_32627_34557 = state_32572;
(statearr_32627_34557[(1)] = cljs.core.first((state_32572[(4)])));

} else {
throw ex__29958__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34562 = state_32572;
state_32572 = G__34562;
continue;
} else {
return ret_value__29956__auto__;
}
break;
}
});
cljs$core$async$state_machine__29955__auto__ = function(state_32572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29955__auto____1.call(this,state_32572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29955__auto____0;
cljs$core$async$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29955__auto____1;
return cljs$core$async$state_machine__29955__auto__;
})()
})();
var state__30068__auto__ = (function (){var statearr_32629 = f__30067__auto__();
(statearr_32629[(6)] = c__30066__auto___34498);

return statearr_32629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30068__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32633 = arguments.length;
switch (G__32633) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30066__auto___34565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30067__auto__ = (function (){var switch__29954__auto__ = (function (state_32665){
var state_val_32666 = (state_32665[(1)]);
if((state_val_32666 === (7))){
var inst_32644 = (state_32665[(7)]);
var inst_32645 = (state_32665[(8)]);
var inst_32644__$1 = (state_32665[(2)]);
var inst_32645__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32644__$1,(0),null);
var inst_32646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32644__$1,(1),null);
var inst_32647 = (inst_32645__$1 == null);
var state_32665__$1 = (function (){var statearr_32685 = state_32665;
(statearr_32685[(7)] = inst_32644__$1);

(statearr_32685[(9)] = inst_32646);

(statearr_32685[(8)] = inst_32645__$1);

return statearr_32685;
})();
if(cljs.core.truth_(inst_32647)){
var statearr_32686_34571 = state_32665__$1;
(statearr_32686_34571[(1)] = (8));

} else {
var statearr_32687_34572 = state_32665__$1;
(statearr_32687_34572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (1))){
var inst_32634 = cljs.core.vec(chs);
var inst_32635 = inst_32634;
var state_32665__$1 = (function (){var statearr_32688 = state_32665;
(statearr_32688[(10)] = inst_32635);

return statearr_32688;
})();
var statearr_32689_34576 = state_32665__$1;
(statearr_32689_34576[(2)] = null);

(statearr_32689_34576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (4))){
var inst_32635 = (state_32665[(10)]);
var state_32665__$1 = state_32665;
return cljs.core.async.ioc_alts_BANG_(state_32665__$1,(7),inst_32635);
} else {
if((state_val_32666 === (6))){
var inst_32661 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
var statearr_32690_34577 = state_32665__$1;
(statearr_32690_34577[(2)] = inst_32661);

(statearr_32690_34577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (3))){
var inst_32663 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32665__$1,inst_32663);
} else {
if((state_val_32666 === (2))){
var inst_32635 = (state_32665[(10)]);
var inst_32637 = cljs.core.count(inst_32635);
var inst_32638 = (inst_32637 > (0));
var state_32665__$1 = state_32665;
if(cljs.core.truth_(inst_32638)){
var statearr_32696_34586 = state_32665__$1;
(statearr_32696_34586[(1)] = (4));

} else {
var statearr_32697_34591 = state_32665__$1;
(statearr_32697_34591[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (11))){
var inst_32635 = (state_32665[(10)]);
var inst_32654 = (state_32665[(2)]);
var tmp32693 = inst_32635;
var inst_32635__$1 = tmp32693;
var state_32665__$1 = (function (){var statearr_32698 = state_32665;
(statearr_32698[(10)] = inst_32635__$1);

(statearr_32698[(11)] = inst_32654);

return statearr_32698;
})();
var statearr_32699_34597 = state_32665__$1;
(statearr_32699_34597[(2)] = null);

(statearr_32699_34597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (9))){
var inst_32645 = (state_32665[(8)]);
var state_32665__$1 = state_32665;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32665__$1,(11),out,inst_32645);
} else {
if((state_val_32666 === (5))){
var inst_32659 = cljs.core.async.close_BANG_(out);
var state_32665__$1 = state_32665;
var statearr_32700_34598 = state_32665__$1;
(statearr_32700_34598[(2)] = inst_32659);

(statearr_32700_34598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (10))){
var inst_32657 = (state_32665[(2)]);
var state_32665__$1 = state_32665;
var statearr_32703_34599 = state_32665__$1;
(statearr_32703_34599[(2)] = inst_32657);

(statearr_32703_34599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32666 === (8))){
var inst_32635 = (state_32665[(10)]);
var inst_32644 = (state_32665[(7)]);
var inst_32646 = (state_32665[(9)]);
var inst_32645 = (state_32665[(8)]);
var inst_32649 = (function (){var cs = inst_32635;
var vec__32640 = inst_32644;
var v = inst_32645;
var c = inst_32646;
return (function (p1__32631_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32631_SHARP_);
});
})();
var inst_32650 = cljs.core.filterv(inst_32649,inst_32635);
var inst_32635__$1 = inst_32650;
var state_32665__$1 = (function (){var statearr_32716 = state_32665;
(statearr_32716[(10)] = inst_32635__$1);

return statearr_32716;
})();
var statearr_32718_34601 = state_32665__$1;
(statearr_32718_34601[(2)] = null);

(statearr_32718_34601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29955__auto__ = null;
var cljs$core$async$state_machine__29955__auto____0 = (function (){
var statearr_32729 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32729[(0)] = cljs$core$async$state_machine__29955__auto__);

(statearr_32729[(1)] = (1));

return statearr_32729;
});
var cljs$core$async$state_machine__29955__auto____1 = (function (state_32665){
while(true){
var ret_value__29956__auto__ = (function (){try{while(true){
var result__29957__auto__ = switch__29954__auto__(state_32665);
if(cljs.core.keyword_identical_QMARK_(result__29957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29957__auto__;
}
break;
}
}catch (e32731){var ex__29958__auto__ = e32731;
var statearr_32732_34605 = state_32665;
(statearr_32732_34605[(2)] = ex__29958__auto__);


if(cljs.core.seq((state_32665[(4)]))){
var statearr_32734_34606 = state_32665;
(statearr_32734_34606[(1)] = cljs.core.first((state_32665[(4)])));

} else {
throw ex__29958__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34607 = state_32665;
state_32665 = G__34607;
continue;
} else {
return ret_value__29956__auto__;
}
break;
}
});
cljs$core$async$state_machine__29955__auto__ = function(state_32665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29955__auto____1.call(this,state_32665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29955__auto____0;
cljs$core$async$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29955__auto____1;
return cljs$core$async$state_machine__29955__auto__;
})()
})();
var state__30068__auto__ = (function (){var statearr_32757 = f__30067__auto__();
(statearr_32757[(6)] = c__30066__auto___34565);

return statearr_32757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30068__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32759 = arguments.length;
switch (G__32759) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30066__auto___34609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30067__auto__ = (function (){var switch__29954__auto__ = (function (state_32784){
var state_val_32785 = (state_32784[(1)]);
if((state_val_32785 === (7))){
var inst_32766 = (state_32784[(7)]);
var inst_32766__$1 = (state_32784[(2)]);
var inst_32767 = (inst_32766__$1 == null);
var inst_32768 = cljs.core.not(inst_32767);
var state_32784__$1 = (function (){var statearr_32786 = state_32784;
(statearr_32786[(7)] = inst_32766__$1);

return statearr_32786;
})();
if(inst_32768){
var statearr_32787_34610 = state_32784__$1;
(statearr_32787_34610[(1)] = (8));

} else {
var statearr_32788_34611 = state_32784__$1;
(statearr_32788_34611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (1))){
var inst_32761 = (0);
var state_32784__$1 = (function (){var statearr_32789 = state_32784;
(statearr_32789[(8)] = inst_32761);

return statearr_32789;
})();
var statearr_32790_34613 = state_32784__$1;
(statearr_32790_34613[(2)] = null);

(statearr_32790_34613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (4))){
var state_32784__$1 = state_32784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32784__$1,(7),ch);
} else {
if((state_val_32785 === (6))){
var inst_32779 = (state_32784[(2)]);
var state_32784__$1 = state_32784;
var statearr_32791_34618 = state_32784__$1;
(statearr_32791_34618[(2)] = inst_32779);

(statearr_32791_34618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (3))){
var inst_32781 = (state_32784[(2)]);
var inst_32782 = cljs.core.async.close_BANG_(out);
var state_32784__$1 = (function (){var statearr_32792 = state_32784;
(statearr_32792[(9)] = inst_32781);

return statearr_32792;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32784__$1,inst_32782);
} else {
if((state_val_32785 === (2))){
var inst_32761 = (state_32784[(8)]);
var inst_32763 = (inst_32761 < n);
var state_32784__$1 = state_32784;
if(cljs.core.truth_(inst_32763)){
var statearr_32793_34620 = state_32784__$1;
(statearr_32793_34620[(1)] = (4));

} else {
var statearr_32794_34624 = state_32784__$1;
(statearr_32794_34624[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (11))){
var inst_32761 = (state_32784[(8)]);
var inst_32771 = (state_32784[(2)]);
var inst_32772 = (inst_32761 + (1));
var inst_32761__$1 = inst_32772;
var state_32784__$1 = (function (){var statearr_32795 = state_32784;
(statearr_32795[(8)] = inst_32761__$1);

(statearr_32795[(10)] = inst_32771);

return statearr_32795;
})();
var statearr_32796_34625 = state_32784__$1;
(statearr_32796_34625[(2)] = null);

(statearr_32796_34625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (9))){
var state_32784__$1 = state_32784;
var statearr_32797_34626 = state_32784__$1;
(statearr_32797_34626[(2)] = null);

(statearr_32797_34626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (5))){
var state_32784__$1 = state_32784;
var statearr_32798_34629 = state_32784__$1;
(statearr_32798_34629[(2)] = null);

(statearr_32798_34629[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (10))){
var inst_32776 = (state_32784[(2)]);
var state_32784__$1 = state_32784;
var statearr_32801_34630 = state_32784__$1;
(statearr_32801_34630[(2)] = inst_32776);

(statearr_32801_34630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (8))){
var inst_32766 = (state_32784[(7)]);
var state_32784__$1 = state_32784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32784__$1,(11),out,inst_32766);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29955__auto__ = null;
var cljs$core$async$state_machine__29955__auto____0 = (function (){
var statearr_32804 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32804[(0)] = cljs$core$async$state_machine__29955__auto__);

(statearr_32804[(1)] = (1));

return statearr_32804;
});
var cljs$core$async$state_machine__29955__auto____1 = (function (state_32784){
while(true){
var ret_value__29956__auto__ = (function (){try{while(true){
var result__29957__auto__ = switch__29954__auto__(state_32784);
if(cljs.core.keyword_identical_QMARK_(result__29957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29957__auto__;
}
break;
}
}catch (e32806){var ex__29958__auto__ = e32806;
var statearr_32807_34636 = state_32784;
(statearr_32807_34636[(2)] = ex__29958__auto__);


if(cljs.core.seq((state_32784[(4)]))){
var statearr_32808_34637 = state_32784;
(statearr_32808_34637[(1)] = cljs.core.first((state_32784[(4)])));

} else {
throw ex__29958__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34638 = state_32784;
state_32784 = G__34638;
continue;
} else {
return ret_value__29956__auto__;
}
break;
}
});
cljs$core$async$state_machine__29955__auto__ = function(state_32784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29955__auto____1.call(this,state_32784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29955__auto____0;
cljs$core$async$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29955__auto____1;
return cljs$core$async$state_machine__29955__auto__;
})()
})();
var state__30068__auto__ = (function (){var statearr_32809 = f__30067__auto__();
(statearr_32809[(6)] = c__30066__auto___34609);

return statearr_32809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30068__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32816 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32816 = (function (f,ch,meta32817){
this.f = f;
this.ch = ch;
this.meta32817 = meta32817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32818,meta32817__$1){
var self__ = this;
var _32818__$1 = this;
return (new cljs.core.async.t_cljs$core$async32816(self__.f,self__.ch,meta32817__$1));
}));

(cljs.core.async.t_cljs$core$async32816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32818){
var self__ = this;
var _32818__$1 = this;
return self__.meta32817;
}));

(cljs.core.async.t_cljs$core$async32816.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32816.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32816.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32816.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32816.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32847 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32847 = (function (f,ch,meta32817,_,fn1,meta32848){
this.f = f;
this.ch = ch;
this.meta32817 = meta32817;
this._ = _;
this.fn1 = fn1;
this.meta32848 = meta32848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32849,meta32848__$1){
var self__ = this;
var _32849__$1 = this;
return (new cljs.core.async.t_cljs$core$async32847(self__.f,self__.ch,self__.meta32817,self__._,self__.fn1,meta32848__$1));
}));

(cljs.core.async.t_cljs$core$async32847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32849){
var self__ = this;
var _32849__$1 = this;
return self__.meta32848;
}));

(cljs.core.async.t_cljs$core$async32847.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32847.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32847.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32847.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32810_SHARP_){
var G__32856 = (((p1__32810_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32810_SHARP_) : self__.f.call(null,p1__32810_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32856) : f1.call(null,G__32856));
});
}));

(cljs.core.async.t_cljs$core$async32847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32817","meta32817",-2023248050,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32816","cljs.core.async/t_cljs$core$async32816",359308912,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32848","meta32848",-719579430,null)], null);
}));

(cljs.core.async.t_cljs$core$async32847.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32847");

(cljs.core.async.t_cljs$core$async32847.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32847");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32847.
 */
cljs.core.async.__GT_t_cljs$core$async32847 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32847(f__$1,ch__$1,meta32817__$1,___$2,fn1__$1,meta32848){
return (new cljs.core.async.t_cljs$core$async32847(f__$1,ch__$1,meta32817__$1,___$2,fn1__$1,meta32848));
});

}

return (new cljs.core.async.t_cljs$core$async32847(self__.f,self__.ch,self__.meta32817,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32859 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32859) : self__.f.call(null,G__32859));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32816.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32816.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32816.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32817","meta32817",-2023248050,null)], null);
}));

(cljs.core.async.t_cljs$core$async32816.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32816");

(cljs.core.async.t_cljs$core$async32816.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32816");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32816.
 */
cljs.core.async.__GT_t_cljs$core$async32816 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32816(f__$1,ch__$1,meta32817){
return (new cljs.core.async.t_cljs$core$async32816(f__$1,ch__$1,meta32817));
});

}

return (new cljs.core.async.t_cljs$core$async32816(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32861 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32861 = (function (f,ch,meta32862){
this.f = f;
this.ch = ch;
this.meta32862 = meta32862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32863,meta32862__$1){
var self__ = this;
var _32863__$1 = this;
return (new cljs.core.async.t_cljs$core$async32861(self__.f,self__.ch,meta32862__$1));
}));

(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32863){
var self__ = this;
var _32863__$1 = this;
return self__.meta32862;
}));

(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32862","meta32862",-475497724,null)], null);
}));

(cljs.core.async.t_cljs$core$async32861.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32861");

(cljs.core.async.t_cljs$core$async32861.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32861");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32861.
 */
cljs.core.async.__GT_t_cljs$core$async32861 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32861(f__$1,ch__$1,meta32862){
return (new cljs.core.async.t_cljs$core$async32861(f__$1,ch__$1,meta32862));
});

}

return (new cljs.core.async.t_cljs$core$async32861(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32870 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32870 = (function (p,ch,meta32871){
this.p = p;
this.ch = ch;
this.meta32871 = meta32871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32872,meta32871__$1){
var self__ = this;
var _32872__$1 = this;
return (new cljs.core.async.t_cljs$core$async32870(self__.p,self__.ch,meta32871__$1));
}));

(cljs.core.async.t_cljs$core$async32870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32872){
var self__ = this;
var _32872__$1 = this;
return self__.meta32871;
}));

(cljs.core.async.t_cljs$core$async32870.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32870.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32870.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32870.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32870.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32870.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32870.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32870.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32871","meta32871",116728758,null)], null);
}));

(cljs.core.async.t_cljs$core$async32870.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32870.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32870");

(cljs.core.async.t_cljs$core$async32870.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32870");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32870.
 */
cljs.core.async.__GT_t_cljs$core$async32870 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32870(p__$1,ch__$1,meta32871){
return (new cljs.core.async.t_cljs$core$async32870(p__$1,ch__$1,meta32871));
});

}

return (new cljs.core.async.t_cljs$core$async32870(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32879 = arguments.length;
switch (G__32879) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30066__auto___34700 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30067__auto__ = (function (){var switch__29954__auto__ = (function (state_32904){
var state_val_32905 = (state_32904[(1)]);
if((state_val_32905 === (7))){
var inst_32900 = (state_32904[(2)]);
var state_32904__$1 = state_32904;
var statearr_32907_34701 = state_32904__$1;
(statearr_32907_34701[(2)] = inst_32900);

(statearr_32907_34701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (1))){
var state_32904__$1 = state_32904;
var statearr_32911_34704 = state_32904__$1;
(statearr_32911_34704[(2)] = null);

(statearr_32911_34704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (4))){
var inst_32886 = (state_32904[(7)]);
var inst_32886__$1 = (state_32904[(2)]);
var inst_32887 = (inst_32886__$1 == null);
var state_32904__$1 = (function (){var statearr_32914 = state_32904;
(statearr_32914[(7)] = inst_32886__$1);

return statearr_32914;
})();
if(cljs.core.truth_(inst_32887)){
var statearr_32915_34706 = state_32904__$1;
(statearr_32915_34706[(1)] = (5));

} else {
var statearr_32917_34708 = state_32904__$1;
(statearr_32917_34708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (6))){
var inst_32886 = (state_32904[(7)]);
var inst_32891 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32886) : p.call(null,inst_32886));
var state_32904__$1 = state_32904;
if(cljs.core.truth_(inst_32891)){
var statearr_32919_34712 = state_32904__$1;
(statearr_32919_34712[(1)] = (8));

} else {
var statearr_32920_34713 = state_32904__$1;
(statearr_32920_34713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (3))){
var inst_32902 = (state_32904[(2)]);
var state_32904__$1 = state_32904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32904__$1,inst_32902);
} else {
if((state_val_32905 === (2))){
var state_32904__$1 = state_32904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32904__$1,(4),ch);
} else {
if((state_val_32905 === (11))){
var inst_32894 = (state_32904[(2)]);
var state_32904__$1 = state_32904;
var statearr_32924_34714 = state_32904__$1;
(statearr_32924_34714[(2)] = inst_32894);

(statearr_32924_34714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (9))){
var state_32904__$1 = state_32904;
var statearr_32925_34715 = state_32904__$1;
(statearr_32925_34715[(2)] = null);

(statearr_32925_34715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (5))){
var inst_32889 = cljs.core.async.close_BANG_(out);
var state_32904__$1 = state_32904;
var statearr_32926_34717 = state_32904__$1;
(statearr_32926_34717[(2)] = inst_32889);

(statearr_32926_34717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (10))){
var inst_32897 = (state_32904[(2)]);
var state_32904__$1 = (function (){var statearr_32927 = state_32904;
(statearr_32927[(8)] = inst_32897);

return statearr_32927;
})();
var statearr_32928_34721 = state_32904__$1;
(statearr_32928_34721[(2)] = null);

(statearr_32928_34721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (8))){
var inst_32886 = (state_32904[(7)]);
var state_32904__$1 = state_32904;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32904__$1,(11),out,inst_32886);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29955__auto__ = null;
var cljs$core$async$state_machine__29955__auto____0 = (function (){
var statearr_32932 = [null,null,null,null,null,null,null,null,null];
(statearr_32932[(0)] = cljs$core$async$state_machine__29955__auto__);

(statearr_32932[(1)] = (1));

return statearr_32932;
});
var cljs$core$async$state_machine__29955__auto____1 = (function (state_32904){
while(true){
var ret_value__29956__auto__ = (function (){try{while(true){
var result__29957__auto__ = switch__29954__auto__(state_32904);
if(cljs.core.keyword_identical_QMARK_(result__29957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29957__auto__;
}
break;
}
}catch (e32933){var ex__29958__auto__ = e32933;
var statearr_32935_34726 = state_32904;
(statearr_32935_34726[(2)] = ex__29958__auto__);


if(cljs.core.seq((state_32904[(4)]))){
var statearr_32936_34728 = state_32904;
(statearr_32936_34728[(1)] = cljs.core.first((state_32904[(4)])));

} else {
throw ex__29958__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34730 = state_32904;
state_32904 = G__34730;
continue;
} else {
return ret_value__29956__auto__;
}
break;
}
});
cljs$core$async$state_machine__29955__auto__ = function(state_32904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29955__auto____1.call(this,state_32904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29955__auto____0;
cljs$core$async$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29955__auto____1;
return cljs$core$async$state_machine__29955__auto__;
})()
})();
var state__30068__auto__ = (function (){var statearr_32937 = f__30067__auto__();
(statearr_32937[(6)] = c__30066__auto___34700);

return statearr_32937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30068__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32939 = arguments.length;
switch (G__32939) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30066__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30067__auto__ = (function (){var switch__29954__auto__ = (function (state_33011){
var state_val_33012 = (state_33011[(1)]);
if((state_val_33012 === (7))){
var inst_33007 = (state_33011[(2)]);
var state_33011__$1 = state_33011;
var statearr_33013_34736 = state_33011__$1;
(statearr_33013_34736[(2)] = inst_33007);

(statearr_33013_34736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (20))){
var inst_32976 = (state_33011[(7)]);
var inst_32988 = (state_33011[(2)]);
var inst_32989 = cljs.core.next(inst_32976);
var inst_32958 = inst_32989;
var inst_32959 = null;
var inst_32960 = (0);
var inst_32961 = (0);
var state_33011__$1 = (function (){var statearr_33015 = state_33011;
(statearr_33015[(8)] = inst_32961);

(statearr_33015[(9)] = inst_32959);

(statearr_33015[(10)] = inst_32958);

(statearr_33015[(11)] = inst_32960);

(statearr_33015[(12)] = inst_32988);

return statearr_33015;
})();
var statearr_33016_34737 = state_33011__$1;
(statearr_33016_34737[(2)] = null);

(statearr_33016_34737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (1))){
var state_33011__$1 = state_33011;
var statearr_33017_34742 = state_33011__$1;
(statearr_33017_34742[(2)] = null);

(statearr_33017_34742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (4))){
var inst_32947 = (state_33011[(13)]);
var inst_32947__$1 = (state_33011[(2)]);
var inst_32948 = (inst_32947__$1 == null);
var state_33011__$1 = (function (){var statearr_33019 = state_33011;
(statearr_33019[(13)] = inst_32947__$1);

return statearr_33019;
})();
if(cljs.core.truth_(inst_32948)){
var statearr_33020_34743 = state_33011__$1;
(statearr_33020_34743[(1)] = (5));

} else {
var statearr_33022_34744 = state_33011__$1;
(statearr_33022_34744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (15))){
var state_33011__$1 = state_33011;
var statearr_33026_34745 = state_33011__$1;
(statearr_33026_34745[(2)] = null);

(statearr_33026_34745[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (21))){
var state_33011__$1 = state_33011;
var statearr_33028_34746 = state_33011__$1;
(statearr_33028_34746[(2)] = null);

(statearr_33028_34746[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (13))){
var inst_32961 = (state_33011[(8)]);
var inst_32959 = (state_33011[(9)]);
var inst_32958 = (state_33011[(10)]);
var inst_32960 = (state_33011[(11)]);
var inst_32972 = (state_33011[(2)]);
var inst_32973 = (inst_32961 + (1));
var tmp33023 = inst_32959;
var tmp33024 = inst_32958;
var tmp33025 = inst_32960;
var inst_32958__$1 = tmp33024;
var inst_32959__$1 = tmp33023;
var inst_32960__$1 = tmp33025;
var inst_32961__$1 = inst_32973;
var state_33011__$1 = (function (){var statearr_33030 = state_33011;
(statearr_33030[(8)] = inst_32961__$1);

(statearr_33030[(9)] = inst_32959__$1);

(statearr_33030[(10)] = inst_32958__$1);

(statearr_33030[(11)] = inst_32960__$1);

(statearr_33030[(14)] = inst_32972);

return statearr_33030;
})();
var statearr_33031_34747 = state_33011__$1;
(statearr_33031_34747[(2)] = null);

(statearr_33031_34747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (22))){
var state_33011__$1 = state_33011;
var statearr_33032_34748 = state_33011__$1;
(statearr_33032_34748[(2)] = null);

(statearr_33032_34748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (6))){
var inst_32947 = (state_33011[(13)]);
var inst_32956 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32947) : f.call(null,inst_32947));
var inst_32957 = cljs.core.seq(inst_32956);
var inst_32958 = inst_32957;
var inst_32959 = null;
var inst_32960 = (0);
var inst_32961 = (0);
var state_33011__$1 = (function (){var statearr_33033 = state_33011;
(statearr_33033[(8)] = inst_32961);

(statearr_33033[(9)] = inst_32959);

(statearr_33033[(10)] = inst_32958);

(statearr_33033[(11)] = inst_32960);

return statearr_33033;
})();
var statearr_33034_34749 = state_33011__$1;
(statearr_33034_34749[(2)] = null);

(statearr_33034_34749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (17))){
var inst_32976 = (state_33011[(7)]);
var inst_32981 = cljs.core.chunk_first(inst_32976);
var inst_32982 = cljs.core.chunk_rest(inst_32976);
var inst_32983 = cljs.core.count(inst_32981);
var inst_32958 = inst_32982;
var inst_32959 = inst_32981;
var inst_32960 = inst_32983;
var inst_32961 = (0);
var state_33011__$1 = (function (){var statearr_33035 = state_33011;
(statearr_33035[(8)] = inst_32961);

(statearr_33035[(9)] = inst_32959);

(statearr_33035[(10)] = inst_32958);

(statearr_33035[(11)] = inst_32960);

return statearr_33035;
})();
var statearr_33036_34750 = state_33011__$1;
(statearr_33036_34750[(2)] = null);

(statearr_33036_34750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (3))){
var inst_33009 = (state_33011[(2)]);
var state_33011__$1 = state_33011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33011__$1,inst_33009);
} else {
if((state_val_33012 === (12))){
var inst_32997 = (state_33011[(2)]);
var state_33011__$1 = state_33011;
var statearr_33038_34751 = state_33011__$1;
(statearr_33038_34751[(2)] = inst_32997);

(statearr_33038_34751[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (2))){
var state_33011__$1 = state_33011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33011__$1,(4),in$);
} else {
if((state_val_33012 === (23))){
var inst_33005 = (state_33011[(2)]);
var state_33011__$1 = state_33011;
var statearr_33039_34752 = state_33011__$1;
(statearr_33039_34752[(2)] = inst_33005);

(statearr_33039_34752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (19))){
var inst_32992 = (state_33011[(2)]);
var state_33011__$1 = state_33011;
var statearr_33040_34757 = state_33011__$1;
(statearr_33040_34757[(2)] = inst_32992);

(statearr_33040_34757[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (11))){
var inst_32976 = (state_33011[(7)]);
var inst_32958 = (state_33011[(10)]);
var inst_32976__$1 = cljs.core.seq(inst_32958);
var state_33011__$1 = (function (){var statearr_33041 = state_33011;
(statearr_33041[(7)] = inst_32976__$1);

return statearr_33041;
})();
if(inst_32976__$1){
var statearr_33042_34759 = state_33011__$1;
(statearr_33042_34759[(1)] = (14));

} else {
var statearr_33043_34760 = state_33011__$1;
(statearr_33043_34760[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (9))){
var inst_32999 = (state_33011[(2)]);
var inst_33000 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33011__$1 = (function (){var statearr_33045 = state_33011;
(statearr_33045[(15)] = inst_32999);

return statearr_33045;
})();
if(cljs.core.truth_(inst_33000)){
var statearr_33046_34761 = state_33011__$1;
(statearr_33046_34761[(1)] = (21));

} else {
var statearr_33047_34762 = state_33011__$1;
(statearr_33047_34762[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (5))){
var inst_32950 = cljs.core.async.close_BANG_(out);
var state_33011__$1 = state_33011;
var statearr_33048_34763 = state_33011__$1;
(statearr_33048_34763[(2)] = inst_32950);

(statearr_33048_34763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (14))){
var inst_32976 = (state_33011[(7)]);
var inst_32978 = cljs.core.chunked_seq_QMARK_(inst_32976);
var state_33011__$1 = state_33011;
if(inst_32978){
var statearr_33049_34764 = state_33011__$1;
(statearr_33049_34764[(1)] = (17));

} else {
var statearr_33050_34765 = state_33011__$1;
(statearr_33050_34765[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (16))){
var inst_32995 = (state_33011[(2)]);
var state_33011__$1 = state_33011;
var statearr_33052_34766 = state_33011__$1;
(statearr_33052_34766[(2)] = inst_32995);

(statearr_33052_34766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (10))){
var inst_32961 = (state_33011[(8)]);
var inst_32959 = (state_33011[(9)]);
var inst_32970 = cljs.core._nth(inst_32959,inst_32961);
var state_33011__$1 = state_33011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33011__$1,(13),out,inst_32970);
} else {
if((state_val_33012 === (18))){
var inst_32976 = (state_33011[(7)]);
var inst_32986 = cljs.core.first(inst_32976);
var state_33011__$1 = state_33011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33011__$1,(20),out,inst_32986);
} else {
if((state_val_33012 === (8))){
var inst_32961 = (state_33011[(8)]);
var inst_32960 = (state_33011[(11)]);
var inst_32967 = (inst_32961 < inst_32960);
var inst_32968 = inst_32967;
var state_33011__$1 = state_33011;
if(cljs.core.truth_(inst_32968)){
var statearr_33054_34771 = state_33011__$1;
(statearr_33054_34771[(1)] = (10));

} else {
var statearr_33055_34772 = state_33011__$1;
(statearr_33055_34772[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29955__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29955__auto____0 = (function (){
var statearr_33057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33057[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29955__auto__);

(statearr_33057[(1)] = (1));

return statearr_33057;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29955__auto____1 = (function (state_33011){
while(true){
var ret_value__29956__auto__ = (function (){try{while(true){
var result__29957__auto__ = switch__29954__auto__(state_33011);
if(cljs.core.keyword_identical_QMARK_(result__29957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29957__auto__;
}
break;
}
}catch (e33058){var ex__29958__auto__ = e33058;
var statearr_33059_34773 = state_33011;
(statearr_33059_34773[(2)] = ex__29958__auto__);


if(cljs.core.seq((state_33011[(4)]))){
var statearr_33061_34774 = state_33011;
(statearr_33061_34774[(1)] = cljs.core.first((state_33011[(4)])));

} else {
throw ex__29958__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34775 = state_33011;
state_33011 = G__34775;
continue;
} else {
return ret_value__29956__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29955__auto__ = function(state_33011){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29955__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29955__auto____1.call(this,state_33011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29955__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29955__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29955__auto__;
})()
})();
var state__30068__auto__ = (function (){var statearr_33068 = f__30067__auto__();
(statearr_33068[(6)] = c__30066__auto__);

return statearr_33068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30068__auto__);
}));

return c__30066__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33075 = arguments.length;
switch (G__33075) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33082 = arguments.length;
switch (G__33082) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33085 = arguments.length;
switch (G__33085) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30066__auto___34788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30067__auto__ = (function (){var switch__29954__auto__ = (function (state_33110){
var state_val_33111 = (state_33110[(1)]);
if((state_val_33111 === (7))){
var inst_33105 = (state_33110[(2)]);
var state_33110__$1 = state_33110;
var statearr_33113_34793 = state_33110__$1;
(statearr_33113_34793[(2)] = inst_33105);

(statearr_33113_34793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (1))){
var inst_33087 = null;
var state_33110__$1 = (function (){var statearr_33114 = state_33110;
(statearr_33114[(7)] = inst_33087);

return statearr_33114;
})();
var statearr_33115_34798 = state_33110__$1;
(statearr_33115_34798[(2)] = null);

(statearr_33115_34798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (4))){
var inst_33090 = (state_33110[(8)]);
var inst_33090__$1 = (state_33110[(2)]);
var inst_33091 = (inst_33090__$1 == null);
var inst_33092 = cljs.core.not(inst_33091);
var state_33110__$1 = (function (){var statearr_33117 = state_33110;
(statearr_33117[(8)] = inst_33090__$1);

return statearr_33117;
})();
if(inst_33092){
var statearr_33118_34803 = state_33110__$1;
(statearr_33118_34803[(1)] = (5));

} else {
var statearr_33119_34804 = state_33110__$1;
(statearr_33119_34804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (6))){
var state_33110__$1 = state_33110;
var statearr_33120_34805 = state_33110__$1;
(statearr_33120_34805[(2)] = null);

(statearr_33120_34805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (3))){
var inst_33107 = (state_33110[(2)]);
var inst_33108 = cljs.core.async.close_BANG_(out);
var state_33110__$1 = (function (){var statearr_33121 = state_33110;
(statearr_33121[(9)] = inst_33107);

return statearr_33121;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33110__$1,inst_33108);
} else {
if((state_val_33111 === (2))){
var state_33110__$1 = state_33110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33110__$1,(4),ch);
} else {
if((state_val_33111 === (11))){
var inst_33090 = (state_33110[(8)]);
var inst_33099 = (state_33110[(2)]);
var inst_33087 = inst_33090;
var state_33110__$1 = (function (){var statearr_33122 = state_33110;
(statearr_33122[(7)] = inst_33087);

(statearr_33122[(10)] = inst_33099);

return statearr_33122;
})();
var statearr_33123_34810 = state_33110__$1;
(statearr_33123_34810[(2)] = null);

(statearr_33123_34810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (9))){
var inst_33090 = (state_33110[(8)]);
var state_33110__$1 = state_33110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33110__$1,(11),out,inst_33090);
} else {
if((state_val_33111 === (5))){
var inst_33090 = (state_33110[(8)]);
var inst_33087 = (state_33110[(7)]);
var inst_33094 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33090,inst_33087);
var state_33110__$1 = state_33110;
if(inst_33094){
var statearr_33126_34811 = state_33110__$1;
(statearr_33126_34811[(1)] = (8));

} else {
var statearr_33127_34813 = state_33110__$1;
(statearr_33127_34813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (10))){
var inst_33102 = (state_33110[(2)]);
var state_33110__$1 = state_33110;
var statearr_33128_34815 = state_33110__$1;
(statearr_33128_34815[(2)] = inst_33102);

(statearr_33128_34815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (8))){
var inst_33087 = (state_33110[(7)]);
var tmp33124 = inst_33087;
var inst_33087__$1 = tmp33124;
var state_33110__$1 = (function (){var statearr_33129 = state_33110;
(statearr_33129[(7)] = inst_33087__$1);

return statearr_33129;
})();
var statearr_33130_34817 = state_33110__$1;
(statearr_33130_34817[(2)] = null);

(statearr_33130_34817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29955__auto__ = null;
var cljs$core$async$state_machine__29955__auto____0 = (function (){
var statearr_33131 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33131[(0)] = cljs$core$async$state_machine__29955__auto__);

(statearr_33131[(1)] = (1));

return statearr_33131;
});
var cljs$core$async$state_machine__29955__auto____1 = (function (state_33110){
while(true){
var ret_value__29956__auto__ = (function (){try{while(true){
var result__29957__auto__ = switch__29954__auto__(state_33110);
if(cljs.core.keyword_identical_QMARK_(result__29957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29957__auto__;
}
break;
}
}catch (e33132){var ex__29958__auto__ = e33132;
var statearr_33133_34827 = state_33110;
(statearr_33133_34827[(2)] = ex__29958__auto__);


if(cljs.core.seq((state_33110[(4)]))){
var statearr_33134_34835 = state_33110;
(statearr_33134_34835[(1)] = cljs.core.first((state_33110[(4)])));

} else {
throw ex__29958__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34836 = state_33110;
state_33110 = G__34836;
continue;
} else {
return ret_value__29956__auto__;
}
break;
}
});
cljs$core$async$state_machine__29955__auto__ = function(state_33110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29955__auto____1.call(this,state_33110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29955__auto____0;
cljs$core$async$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29955__auto____1;
return cljs$core$async$state_machine__29955__auto__;
})()
})();
var state__30068__auto__ = (function (){var statearr_33135 = f__30067__auto__();
(statearr_33135[(6)] = c__30066__auto___34788);

return statearr_33135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30068__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33137 = arguments.length;
switch (G__33137) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30066__auto___34851 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30067__auto__ = (function (){var switch__29954__auto__ = (function (state_33176){
var state_val_33177 = (state_33176[(1)]);
if((state_val_33177 === (7))){
var inst_33172 = (state_33176[(2)]);
var state_33176__$1 = state_33176;
var statearr_33178_34852 = state_33176__$1;
(statearr_33178_34852[(2)] = inst_33172);

(statearr_33178_34852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (1))){
var inst_33139 = (new Array(n));
var inst_33140 = inst_33139;
var inst_33141 = (0);
var state_33176__$1 = (function (){var statearr_33179 = state_33176;
(statearr_33179[(7)] = inst_33141);

(statearr_33179[(8)] = inst_33140);

return statearr_33179;
})();
var statearr_33180_34853 = state_33176__$1;
(statearr_33180_34853[(2)] = null);

(statearr_33180_34853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (4))){
var inst_33144 = (state_33176[(9)]);
var inst_33144__$1 = (state_33176[(2)]);
var inst_33145 = (inst_33144__$1 == null);
var inst_33146 = cljs.core.not(inst_33145);
var state_33176__$1 = (function (){var statearr_33181 = state_33176;
(statearr_33181[(9)] = inst_33144__$1);

return statearr_33181;
})();
if(inst_33146){
var statearr_33182_34857 = state_33176__$1;
(statearr_33182_34857[(1)] = (5));

} else {
var statearr_33183_34858 = state_33176__$1;
(statearr_33183_34858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (15))){
var inst_33166 = (state_33176[(2)]);
var state_33176__$1 = state_33176;
var statearr_33184_34865 = state_33176__$1;
(statearr_33184_34865[(2)] = inst_33166);

(statearr_33184_34865[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (13))){
var state_33176__$1 = state_33176;
var statearr_33185_34866 = state_33176__$1;
(statearr_33185_34866[(2)] = null);

(statearr_33185_34866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (6))){
var inst_33141 = (state_33176[(7)]);
var inst_33162 = (inst_33141 > (0));
var state_33176__$1 = state_33176;
if(cljs.core.truth_(inst_33162)){
var statearr_33188_34867 = state_33176__$1;
(statearr_33188_34867[(1)] = (12));

} else {
var statearr_33190_34868 = state_33176__$1;
(statearr_33190_34868[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (3))){
var inst_33174 = (state_33176[(2)]);
var state_33176__$1 = state_33176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33176__$1,inst_33174);
} else {
if((state_val_33177 === (12))){
var inst_33140 = (state_33176[(8)]);
var inst_33164 = cljs.core.vec(inst_33140);
var state_33176__$1 = state_33176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33176__$1,(15),out,inst_33164);
} else {
if((state_val_33177 === (2))){
var state_33176__$1 = state_33176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33176__$1,(4),ch);
} else {
if((state_val_33177 === (11))){
var inst_33156 = (state_33176[(2)]);
var inst_33157 = (new Array(n));
var inst_33140 = inst_33157;
var inst_33141 = (0);
var state_33176__$1 = (function (){var statearr_33203 = state_33176;
(statearr_33203[(7)] = inst_33141);

(statearr_33203[(8)] = inst_33140);

(statearr_33203[(10)] = inst_33156);

return statearr_33203;
})();
var statearr_33204_34887 = state_33176__$1;
(statearr_33204_34887[(2)] = null);

(statearr_33204_34887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (9))){
var inst_33140 = (state_33176[(8)]);
var inst_33154 = cljs.core.vec(inst_33140);
var state_33176__$1 = state_33176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33176__$1,(11),out,inst_33154);
} else {
if((state_val_33177 === (5))){
var inst_33144 = (state_33176[(9)]);
var inst_33141 = (state_33176[(7)]);
var inst_33149 = (state_33176[(11)]);
var inst_33140 = (state_33176[(8)]);
var inst_33148 = (inst_33140[inst_33141] = inst_33144);
var inst_33149__$1 = (inst_33141 + (1));
var inst_33150 = (inst_33149__$1 < n);
var state_33176__$1 = (function (){var statearr_33212 = state_33176;
(statearr_33212[(12)] = inst_33148);

(statearr_33212[(11)] = inst_33149__$1);

return statearr_33212;
})();
if(cljs.core.truth_(inst_33150)){
var statearr_33213_34906 = state_33176__$1;
(statearr_33213_34906[(1)] = (8));

} else {
var statearr_33214_34912 = state_33176__$1;
(statearr_33214_34912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (14))){
var inst_33169 = (state_33176[(2)]);
var inst_33170 = cljs.core.async.close_BANG_(out);
var state_33176__$1 = (function (){var statearr_33216 = state_33176;
(statearr_33216[(13)] = inst_33169);

return statearr_33216;
})();
var statearr_33217_34938 = state_33176__$1;
(statearr_33217_34938[(2)] = inst_33170);

(statearr_33217_34938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (10))){
var inst_33160 = (state_33176[(2)]);
var state_33176__$1 = state_33176;
var statearr_33218_34946 = state_33176__$1;
(statearr_33218_34946[(2)] = inst_33160);

(statearr_33218_34946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33177 === (8))){
var inst_33149 = (state_33176[(11)]);
var inst_33140 = (state_33176[(8)]);
var tmp33215 = inst_33140;
var inst_33140__$1 = tmp33215;
var inst_33141 = inst_33149;
var state_33176__$1 = (function (){var statearr_33221 = state_33176;
(statearr_33221[(7)] = inst_33141);

(statearr_33221[(8)] = inst_33140__$1);

return statearr_33221;
})();
var statearr_33222_34947 = state_33176__$1;
(statearr_33222_34947[(2)] = null);

(statearr_33222_34947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29955__auto__ = null;
var cljs$core$async$state_machine__29955__auto____0 = (function (){
var statearr_33223 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33223[(0)] = cljs$core$async$state_machine__29955__auto__);

(statearr_33223[(1)] = (1));

return statearr_33223;
});
var cljs$core$async$state_machine__29955__auto____1 = (function (state_33176){
while(true){
var ret_value__29956__auto__ = (function (){try{while(true){
var result__29957__auto__ = switch__29954__auto__(state_33176);
if(cljs.core.keyword_identical_QMARK_(result__29957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29957__auto__;
}
break;
}
}catch (e33225){var ex__29958__auto__ = e33225;
var statearr_33226_34966 = state_33176;
(statearr_33226_34966[(2)] = ex__29958__auto__);


if(cljs.core.seq((state_33176[(4)]))){
var statearr_33227_34967 = state_33176;
(statearr_33227_34967[(1)] = cljs.core.first((state_33176[(4)])));

} else {
throw ex__29958__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34968 = state_33176;
state_33176 = G__34968;
continue;
} else {
return ret_value__29956__auto__;
}
break;
}
});
cljs$core$async$state_machine__29955__auto__ = function(state_33176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29955__auto____1.call(this,state_33176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29955__auto____0;
cljs$core$async$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29955__auto____1;
return cljs$core$async$state_machine__29955__auto__;
})()
})();
var state__30068__auto__ = (function (){var statearr_33228 = f__30067__auto__();
(statearr_33228[(6)] = c__30066__auto___34851);

return statearr_33228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30068__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33231 = arguments.length;
switch (G__33231) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30066__auto___34984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30067__auto__ = (function (){var switch__29954__auto__ = (function (state_33277){
var state_val_33278 = (state_33277[(1)]);
if((state_val_33278 === (7))){
var inst_33273 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33279_34985 = state_33277__$1;
(statearr_33279_34985[(2)] = inst_33273);

(statearr_33279_34985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (1))){
var inst_33232 = [];
var inst_33233 = inst_33232;
var inst_33234 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33277__$1 = (function (){var statearr_33280 = state_33277;
(statearr_33280[(7)] = inst_33233);

(statearr_33280[(8)] = inst_33234);

return statearr_33280;
})();
var statearr_33281_34987 = state_33277__$1;
(statearr_33281_34987[(2)] = null);

(statearr_33281_34987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (4))){
var inst_33239 = (state_33277[(9)]);
var inst_33239__$1 = (state_33277[(2)]);
var inst_33240 = (inst_33239__$1 == null);
var inst_33241 = cljs.core.not(inst_33240);
var state_33277__$1 = (function (){var statearr_33283 = state_33277;
(statearr_33283[(9)] = inst_33239__$1);

return statearr_33283;
})();
if(inst_33241){
var statearr_33286_35000 = state_33277__$1;
(statearr_33286_35000[(1)] = (5));

} else {
var statearr_33287_35001 = state_33277__$1;
(statearr_33287_35001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (15))){
var inst_33267 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33288_35002 = state_33277__$1;
(statearr_33288_35002[(2)] = inst_33267);

(statearr_33288_35002[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (13))){
var state_33277__$1 = state_33277;
var statearr_33291_35003 = state_33277__$1;
(statearr_33291_35003[(2)] = null);

(statearr_33291_35003[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (6))){
var inst_33233 = (state_33277[(7)]);
var inst_33262 = inst_33233.length;
var inst_33263 = (inst_33262 > (0));
var state_33277__$1 = state_33277;
if(cljs.core.truth_(inst_33263)){
var statearr_33296_35004 = state_33277__$1;
(statearr_33296_35004[(1)] = (12));

} else {
var statearr_33297_35005 = state_33277__$1;
(statearr_33297_35005[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (3))){
var inst_33275 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33277__$1,inst_33275);
} else {
if((state_val_33278 === (12))){
var inst_33233 = (state_33277[(7)]);
var inst_33265 = cljs.core.vec(inst_33233);
var state_33277__$1 = state_33277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33277__$1,(15),out,inst_33265);
} else {
if((state_val_33278 === (2))){
var state_33277__$1 = state_33277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33277__$1,(4),ch);
} else {
if((state_val_33278 === (11))){
var inst_33243 = (state_33277[(10)]);
var inst_33239 = (state_33277[(9)]);
var inst_33254 = (state_33277[(2)]);
var inst_33256 = [];
var inst_33257 = inst_33256.push(inst_33239);
var inst_33233 = inst_33256;
var inst_33234 = inst_33243;
var state_33277__$1 = (function (){var statearr_33298 = state_33277;
(statearr_33298[(11)] = inst_33257);

(statearr_33298[(12)] = inst_33254);

(statearr_33298[(7)] = inst_33233);

(statearr_33298[(8)] = inst_33234);

return statearr_33298;
})();
var statearr_33299_35009 = state_33277__$1;
(statearr_33299_35009[(2)] = null);

(statearr_33299_35009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (9))){
var inst_33233 = (state_33277[(7)]);
var inst_33252 = cljs.core.vec(inst_33233);
var state_33277__$1 = state_33277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33277__$1,(11),out,inst_33252);
} else {
if((state_val_33278 === (5))){
var inst_33243 = (state_33277[(10)]);
var inst_33239 = (state_33277[(9)]);
var inst_33234 = (state_33277[(8)]);
var inst_33243__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33239) : f.call(null,inst_33239));
var inst_33245 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33243__$1,inst_33234);
var inst_33246 = cljs.core.keyword_identical_QMARK_(inst_33234,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33247 = ((inst_33245) || (inst_33246));
var state_33277__$1 = (function (){var statearr_33303 = state_33277;
(statearr_33303[(10)] = inst_33243__$1);

return statearr_33303;
})();
if(cljs.core.truth_(inst_33247)){
var statearr_33304_35013 = state_33277__$1;
(statearr_33304_35013[(1)] = (8));

} else {
var statearr_33307_35014 = state_33277__$1;
(statearr_33307_35014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (14))){
var inst_33270 = (state_33277[(2)]);
var inst_33271 = cljs.core.async.close_BANG_(out);
var state_33277__$1 = (function (){var statearr_33309 = state_33277;
(statearr_33309[(13)] = inst_33270);

return statearr_33309;
})();
var statearr_33310_35015 = state_33277__$1;
(statearr_33310_35015[(2)] = inst_33271);

(statearr_33310_35015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (10))){
var inst_33260 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33312_35018 = state_33277__$1;
(statearr_33312_35018[(2)] = inst_33260);

(statearr_33312_35018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (8))){
var inst_33233 = (state_33277[(7)]);
var inst_33243 = (state_33277[(10)]);
var inst_33239 = (state_33277[(9)]);
var inst_33249 = inst_33233.push(inst_33239);
var tmp33308 = inst_33233;
var inst_33233__$1 = tmp33308;
var inst_33234 = inst_33243;
var state_33277__$1 = (function (){var statearr_33313 = state_33277;
(statearr_33313[(14)] = inst_33249);

(statearr_33313[(7)] = inst_33233__$1);

(statearr_33313[(8)] = inst_33234);

return statearr_33313;
})();
var statearr_33316_35021 = state_33277__$1;
(statearr_33316_35021[(2)] = null);

(statearr_33316_35021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29955__auto__ = null;
var cljs$core$async$state_machine__29955__auto____0 = (function (){
var statearr_33318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33318[(0)] = cljs$core$async$state_machine__29955__auto__);

(statearr_33318[(1)] = (1));

return statearr_33318;
});
var cljs$core$async$state_machine__29955__auto____1 = (function (state_33277){
while(true){
var ret_value__29956__auto__ = (function (){try{while(true){
var result__29957__auto__ = switch__29954__auto__(state_33277);
if(cljs.core.keyword_identical_QMARK_(result__29957__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29957__auto__;
}
break;
}
}catch (e33319){var ex__29958__auto__ = e33319;
var statearr_33320_35025 = state_33277;
(statearr_33320_35025[(2)] = ex__29958__auto__);


if(cljs.core.seq((state_33277[(4)]))){
var statearr_33321_35026 = state_33277;
(statearr_33321_35026[(1)] = cljs.core.first((state_33277[(4)])));

} else {
throw ex__29958__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35027 = state_33277;
state_33277 = G__35027;
continue;
} else {
return ret_value__29956__auto__;
}
break;
}
});
cljs$core$async$state_machine__29955__auto__ = function(state_33277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29955__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29955__auto____1.call(this,state_33277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29955__auto____0;
cljs$core$async$state_machine__29955__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29955__auto____1;
return cljs$core$async$state_machine__29955__auto__;
})()
})();
var state__30068__auto__ = (function (){var statearr_33326 = f__30067__auto__();
(statearr_33326[(6)] = c__30066__auto___34984);

return statearr_33326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30068__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
