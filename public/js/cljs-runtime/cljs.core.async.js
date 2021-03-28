goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30248 = arguments.length;
switch (G__30248) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30264 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30264 = (function (f,blockable,meta30265){
this.f = f;
this.blockable = blockable;
this.meta30265 = meta30265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30266,meta30265__$1){
var self__ = this;
var _30266__$1 = this;
return (new cljs.core.async.t_cljs$core$async30264(self__.f,self__.blockable,meta30265__$1));
}));

(cljs.core.async.t_cljs$core$async30264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30266){
var self__ = this;
var _30266__$1 = this;
return self__.meta30265;
}));

(cljs.core.async.t_cljs$core$async30264.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30264.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30264.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30264.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30265","meta30265",854146810,null)], null);
}));

(cljs.core.async.t_cljs$core$async30264.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30264");

(cljs.core.async.t_cljs$core$async30264.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30264");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30264.
 */
cljs.core.async.__GT_t_cljs$core$async30264 = (function cljs$core$async$__GT_t_cljs$core$async30264(f__$1,blockable__$1,meta30265){
return (new cljs.core.async.t_cljs$core$async30264(f__$1,blockable__$1,meta30265));
});

}

return (new cljs.core.async.t_cljs$core$async30264(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30299 = arguments.length;
switch (G__30299) {
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
var G__30310 = arguments.length;
switch (G__30310) {
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
var G__30329 = arguments.length;
switch (G__30329) {
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
var val_33178 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33178) : fn1.call(null,val_33178));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33178) : fn1.call(null,val_33178));
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
var G__30347 = arguments.length;
switch (G__30347) {
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
var n__4613__auto___33195 = n;
var x_33196 = (0);
while(true){
if((x_33196 < n__4613__auto___33195)){
(a[x_33196] = x_33196);

var G__33197 = (x_33196 + (1));
x_33196 = G__33197;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30370 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30370 = (function (flag,meta30371){
this.flag = flag;
this.meta30371 = meta30371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30372,meta30371__$1){
var self__ = this;
var _30372__$1 = this;
return (new cljs.core.async.t_cljs$core$async30370(self__.flag,meta30371__$1));
}));

(cljs.core.async.t_cljs$core$async30370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30372){
var self__ = this;
var _30372__$1 = this;
return self__.meta30371;
}));

(cljs.core.async.t_cljs$core$async30370.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30370.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30370.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30370.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30371","meta30371",-409997101,null)], null);
}));

(cljs.core.async.t_cljs$core$async30370.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30370");

(cljs.core.async.t_cljs$core$async30370.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30370");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30370.
 */
cljs.core.async.__GT_t_cljs$core$async30370 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30370(flag__$1,meta30371){
return (new cljs.core.async.t_cljs$core$async30370(flag__$1,meta30371));
});

}

return (new cljs.core.async.t_cljs$core$async30370(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30383 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30383 = (function (flag,cb,meta30384){
this.flag = flag;
this.cb = cb;
this.meta30384 = meta30384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30385,meta30384__$1){
var self__ = this;
var _30385__$1 = this;
return (new cljs.core.async.t_cljs$core$async30383(self__.flag,self__.cb,meta30384__$1));
}));

(cljs.core.async.t_cljs$core$async30383.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30385){
var self__ = this;
var _30385__$1 = this;
return self__.meta30384;
}));

(cljs.core.async.t_cljs$core$async30383.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30383.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30383.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30383.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30383.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30384","meta30384",1142049182,null)], null);
}));

(cljs.core.async.t_cljs$core$async30383.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30383.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30383");

(cljs.core.async.t_cljs$core$async30383.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30383");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30383.
 */
cljs.core.async.__GT_t_cljs$core$async30383 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30383(flag__$1,cb__$1,meta30384){
return (new cljs.core.async.t_cljs$core$async30383(flag__$1,cb__$1,meta30384));
});

}

return (new cljs.core.async.t_cljs$core$async30383(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30407_SHARP_){
var G__30416 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30407_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30416) : fret.call(null,G__30416));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30408_SHARP_){
var G__30417 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30408_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30417) : fret.call(null,G__30417));
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
var G__33229 = (i + (1));
i = G__33229;
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
var len__4736__auto___33235 = arguments.length;
var i__4737__auto___33236 = (0);
while(true){
if((i__4737__auto___33236 < len__4736__auto___33235)){
args__4742__auto__.push((arguments[i__4737__auto___33236]));

var G__33237 = (i__4737__auto___33236 + (1));
i__4737__auto___33236 = G__33237;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30426){
var map__30427 = p__30426;
var map__30427__$1 = (((((!((map__30427 == null))))?(((((map__30427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30427):map__30427);
var opts = map__30427__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30422){
var G__30423 = cljs.core.first(seq30422);
var seq30422__$1 = cljs.core.next(seq30422);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30423,seq30422__$1);
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
var G__30449 = arguments.length;
switch (G__30449) {
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
var c__30102__auto___33257 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30103__auto__ = (function (){var switch__29819__auto__ = (function (state_30485){
var state_val_30486 = (state_30485[(1)]);
if((state_val_30486 === (7))){
var inst_30481 = (state_30485[(2)]);
var state_30485__$1 = state_30485;
var statearr_30501_33261 = state_30485__$1;
(statearr_30501_33261[(2)] = inst_30481);

(statearr_30501_33261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (1))){
var state_30485__$1 = state_30485;
var statearr_30502_33265 = state_30485__$1;
(statearr_30502_33265[(2)] = null);

(statearr_30502_33265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (4))){
var inst_30464 = (state_30485[(7)]);
var inst_30464__$1 = (state_30485[(2)]);
var inst_30465 = (inst_30464__$1 == null);
var state_30485__$1 = (function (){var statearr_30510 = state_30485;
(statearr_30510[(7)] = inst_30464__$1);

return statearr_30510;
})();
if(cljs.core.truth_(inst_30465)){
var statearr_30511_33272 = state_30485__$1;
(statearr_30511_33272[(1)] = (5));

} else {
var statearr_30512_33273 = state_30485__$1;
(statearr_30512_33273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (13))){
var state_30485__$1 = state_30485;
var statearr_30516_33277 = state_30485__$1;
(statearr_30516_33277[(2)] = null);

(statearr_30516_33277[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (6))){
var inst_30464 = (state_30485[(7)]);
var state_30485__$1 = state_30485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30485__$1,(11),to,inst_30464);
} else {
if((state_val_30486 === (3))){
var inst_30483 = (state_30485[(2)]);
var state_30485__$1 = state_30485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30485__$1,inst_30483);
} else {
if((state_val_30486 === (12))){
var state_30485__$1 = state_30485;
var statearr_30522_33286 = state_30485__$1;
(statearr_30522_33286[(2)] = null);

(statearr_30522_33286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (2))){
var state_30485__$1 = state_30485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30485__$1,(4),from);
} else {
if((state_val_30486 === (11))){
var inst_30474 = (state_30485[(2)]);
var state_30485__$1 = state_30485;
if(cljs.core.truth_(inst_30474)){
var statearr_30524_33289 = state_30485__$1;
(statearr_30524_33289[(1)] = (12));

} else {
var statearr_30525_33291 = state_30485__$1;
(statearr_30525_33291[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (9))){
var state_30485__$1 = state_30485;
var statearr_30526_33294 = state_30485__$1;
(statearr_30526_33294[(2)] = null);

(statearr_30526_33294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (5))){
var state_30485__$1 = state_30485;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30527_33297 = state_30485__$1;
(statearr_30527_33297[(1)] = (8));

} else {
var statearr_30529_33300 = state_30485__$1;
(statearr_30529_33300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (14))){
var inst_30479 = (state_30485[(2)]);
var state_30485__$1 = state_30485;
var statearr_30532_33304 = state_30485__$1;
(statearr_30532_33304[(2)] = inst_30479);

(statearr_30532_33304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (10))){
var inst_30471 = (state_30485[(2)]);
var state_30485__$1 = state_30485;
var statearr_30534_33306 = state_30485__$1;
(statearr_30534_33306[(2)] = inst_30471);

(statearr_30534_33306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30486 === (8))){
var inst_30468 = cljs.core.async.close_BANG_(to);
var state_30485__$1 = state_30485;
var statearr_30535_33308 = state_30485__$1;
(statearr_30535_33308[(2)] = inst_30468);

(statearr_30535_33308[(1)] = (10));


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
var cljs$core$async$state_machine__29820__auto__ = null;
var cljs$core$async$state_machine__29820__auto____0 = (function (){
var statearr_30537 = [null,null,null,null,null,null,null,null];
(statearr_30537[(0)] = cljs$core$async$state_machine__29820__auto__);

(statearr_30537[(1)] = (1));

return statearr_30537;
});
var cljs$core$async$state_machine__29820__auto____1 = (function (state_30485){
while(true){
var ret_value__29821__auto__ = (function (){try{while(true){
var result__29822__auto__ = switch__29819__auto__(state_30485);
if(cljs.core.keyword_identical_QMARK_(result__29822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29822__auto__;
}
break;
}
}catch (e30547){var ex__29823__auto__ = e30547;
var statearr_30550_33312 = state_30485;
(statearr_30550_33312[(2)] = ex__29823__auto__);


if(cljs.core.seq((state_30485[(4)]))){
var statearr_30552_33313 = state_30485;
(statearr_30552_33313[(1)] = cljs.core.first((state_30485[(4)])));

} else {
throw ex__29823__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33314 = state_30485;
state_30485 = G__33314;
continue;
} else {
return ret_value__29821__auto__;
}
break;
}
});
cljs$core$async$state_machine__29820__auto__ = function(state_30485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29820__auto____1.call(this,state_30485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29820__auto____0;
cljs$core$async$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29820__auto____1;
return cljs$core$async$state_machine__29820__auto__;
})()
})();
var state__30104__auto__ = (function (){var statearr_30557 = f__30103__auto__();
(statearr_30557[(6)] = c__30102__auto___33257);

return statearr_30557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30104__auto__);
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
var process = (function (p__30567){
var vec__30568 = p__30567;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30568,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30568,(1),null);
var job = vec__30568;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30102__auto___33339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30103__auto__ = (function (){var switch__29819__auto__ = (function (state_30575){
var state_val_30576 = (state_30575[(1)]);
if((state_val_30576 === (1))){
var state_30575__$1 = state_30575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30575__$1,(2),res,v);
} else {
if((state_val_30576 === (2))){
var inst_30572 = (state_30575[(2)]);
var inst_30573 = cljs.core.async.close_BANG_(res);
var state_30575__$1 = (function (){var statearr_30578 = state_30575;
(statearr_30578[(7)] = inst_30572);

return statearr_30578;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30575__$1,inst_30573);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____0 = (function (){
var statearr_30581 = [null,null,null,null,null,null,null,null];
(statearr_30581[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__);

(statearr_30581[(1)] = (1));

return statearr_30581;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____1 = (function (state_30575){
while(true){
var ret_value__29821__auto__ = (function (){try{while(true){
var result__29822__auto__ = switch__29819__auto__(state_30575);
if(cljs.core.keyword_identical_QMARK_(result__29822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29822__auto__;
}
break;
}
}catch (e30584){var ex__29823__auto__ = e30584;
var statearr_30585_33353 = state_30575;
(statearr_30585_33353[(2)] = ex__29823__auto__);


if(cljs.core.seq((state_30575[(4)]))){
var statearr_30586_33355 = state_30575;
(statearr_30586_33355[(1)] = cljs.core.first((state_30575[(4)])));

} else {
throw ex__29823__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33356 = state_30575;
state_30575 = G__33356;
continue;
} else {
return ret_value__29821__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__ = function(state_30575){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____1.call(this,state_30575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__;
})()
})();
var state__30104__auto__ = (function (){var statearr_30587 = f__30103__auto__();
(statearr_30587[(6)] = c__30102__auto___33339);

return statearr_30587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30104__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30592){
var vec__30593 = p__30592;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30593,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30593,(1),null);
var job = vec__30593;
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
var n__4613__auto___33366 = n;
var __33367 = (0);
while(true){
if((__33367 < n__4613__auto___33366)){
var G__30596_33368 = type;
var G__30596_33369__$1 = (((G__30596_33368 instanceof cljs.core.Keyword))?G__30596_33368.fqn:null);
switch (G__30596_33369__$1) {
case "compute":
var c__30102__auto___33371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33367,c__30102__auto___33371,G__30596_33368,G__30596_33369__$1,n__4613__auto___33366,jobs,results,process,async){
return (function (){
var f__30103__auto__ = (function (){var switch__29819__auto__ = ((function (__33367,c__30102__auto___33371,G__30596_33368,G__30596_33369__$1,n__4613__auto___33366,jobs,results,process,async){
return (function (state_30610){
var state_val_30611 = (state_30610[(1)]);
if((state_val_30611 === (1))){
var state_30610__$1 = state_30610;
var statearr_30616_33378 = state_30610__$1;
(statearr_30616_33378[(2)] = null);

(statearr_30616_33378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (2))){
var state_30610__$1 = state_30610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30610__$1,(4),jobs);
} else {
if((state_val_30611 === (3))){
var inst_30608 = (state_30610[(2)]);
var state_30610__$1 = state_30610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30610__$1,inst_30608);
} else {
if((state_val_30611 === (4))){
var inst_30600 = (state_30610[(2)]);
var inst_30601 = process(inst_30600);
var state_30610__$1 = state_30610;
if(cljs.core.truth_(inst_30601)){
var statearr_30626_33383 = state_30610__$1;
(statearr_30626_33383[(1)] = (5));

} else {
var statearr_30627_33384 = state_30610__$1;
(statearr_30627_33384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (5))){
var state_30610__$1 = state_30610;
var statearr_30632_33388 = state_30610__$1;
(statearr_30632_33388[(2)] = null);

(statearr_30632_33388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (6))){
var state_30610__$1 = state_30610;
var statearr_30634_33390 = state_30610__$1;
(statearr_30634_33390[(2)] = null);

(statearr_30634_33390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (7))){
var inst_30606 = (state_30610[(2)]);
var state_30610__$1 = state_30610;
var statearr_30636_33393 = state_30610__$1;
(statearr_30636_33393[(2)] = inst_30606);

(statearr_30636_33393[(1)] = (3));


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
});})(__33367,c__30102__auto___33371,G__30596_33368,G__30596_33369__$1,n__4613__auto___33366,jobs,results,process,async))
;
return ((function (__33367,switch__29819__auto__,c__30102__auto___33371,G__30596_33368,G__30596_33369__$1,n__4613__auto___33366,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____0 = (function (){
var statearr_30640 = [null,null,null,null,null,null,null];
(statearr_30640[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__);

(statearr_30640[(1)] = (1));

return statearr_30640;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____1 = (function (state_30610){
while(true){
var ret_value__29821__auto__ = (function (){try{while(true){
var result__29822__auto__ = switch__29819__auto__(state_30610);
if(cljs.core.keyword_identical_QMARK_(result__29822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29822__auto__;
}
break;
}
}catch (e30641){var ex__29823__auto__ = e30641;
var statearr_30642_33399 = state_30610;
(statearr_30642_33399[(2)] = ex__29823__auto__);


if(cljs.core.seq((state_30610[(4)]))){
var statearr_30643_33400 = state_30610;
(statearr_30643_33400[(1)] = cljs.core.first((state_30610[(4)])));

} else {
throw ex__29823__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33403 = state_30610;
state_30610 = G__33403;
continue;
} else {
return ret_value__29821__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__ = function(state_30610){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____1.call(this,state_30610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__;
})()
;})(__33367,switch__29819__auto__,c__30102__auto___33371,G__30596_33368,G__30596_33369__$1,n__4613__auto___33366,jobs,results,process,async))
})();
var state__30104__auto__ = (function (){var statearr_30645 = f__30103__auto__();
(statearr_30645[(6)] = c__30102__auto___33371);

return statearr_30645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30104__auto__);
});})(__33367,c__30102__auto___33371,G__30596_33368,G__30596_33369__$1,n__4613__auto___33366,jobs,results,process,async))
);


break;
case "async":
var c__30102__auto___33414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33367,c__30102__auto___33414,G__30596_33368,G__30596_33369__$1,n__4613__auto___33366,jobs,results,process,async){
return (function (){
var f__30103__auto__ = (function (){var switch__29819__auto__ = ((function (__33367,c__30102__auto___33414,G__30596_33368,G__30596_33369__$1,n__4613__auto___33366,jobs,results,process,async){
return (function (state_30661){
var state_val_30662 = (state_30661[(1)]);
if((state_val_30662 === (1))){
var state_30661__$1 = state_30661;
var statearr_30673_33420 = state_30661__$1;
(statearr_30673_33420[(2)] = null);

(statearr_30673_33420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (2))){
var state_30661__$1 = state_30661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30661__$1,(4),jobs);
} else {
if((state_val_30662 === (3))){
var inst_30659 = (state_30661[(2)]);
var state_30661__$1 = state_30661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30661__$1,inst_30659);
} else {
if((state_val_30662 === (4))){
var inst_30651 = (state_30661[(2)]);
var inst_30652 = async(inst_30651);
var state_30661__$1 = state_30661;
if(cljs.core.truth_(inst_30652)){
var statearr_30678_33445 = state_30661__$1;
(statearr_30678_33445[(1)] = (5));

} else {
var statearr_30679_33446 = state_30661__$1;
(statearr_30679_33446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (5))){
var state_30661__$1 = state_30661;
var statearr_30680_33451 = state_30661__$1;
(statearr_30680_33451[(2)] = null);

(statearr_30680_33451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (6))){
var state_30661__$1 = state_30661;
var statearr_30682_33480 = state_30661__$1;
(statearr_30682_33480[(2)] = null);

(statearr_30682_33480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30662 === (7))){
var inst_30657 = (state_30661[(2)]);
var state_30661__$1 = state_30661;
var statearr_30684_33481 = state_30661__$1;
(statearr_30684_33481[(2)] = inst_30657);

(statearr_30684_33481[(1)] = (3));


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
});})(__33367,c__30102__auto___33414,G__30596_33368,G__30596_33369__$1,n__4613__auto___33366,jobs,results,process,async))
;
return ((function (__33367,switch__29819__auto__,c__30102__auto___33414,G__30596_33368,G__30596_33369__$1,n__4613__auto___33366,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____0 = (function (){
var statearr_30685 = [null,null,null,null,null,null,null];
(statearr_30685[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__);

(statearr_30685[(1)] = (1));

return statearr_30685;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____1 = (function (state_30661){
while(true){
var ret_value__29821__auto__ = (function (){try{while(true){
var result__29822__auto__ = switch__29819__auto__(state_30661);
if(cljs.core.keyword_identical_QMARK_(result__29822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29822__auto__;
}
break;
}
}catch (e30690){var ex__29823__auto__ = e30690;
var statearr_30692_33485 = state_30661;
(statearr_30692_33485[(2)] = ex__29823__auto__);


if(cljs.core.seq((state_30661[(4)]))){
var statearr_30693_33488 = state_30661;
(statearr_30693_33488[(1)] = cljs.core.first((state_30661[(4)])));

} else {
throw ex__29823__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33490 = state_30661;
state_30661 = G__33490;
continue;
} else {
return ret_value__29821__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__ = function(state_30661){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____1.call(this,state_30661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__;
})()
;})(__33367,switch__29819__auto__,c__30102__auto___33414,G__30596_33368,G__30596_33369__$1,n__4613__auto___33366,jobs,results,process,async))
})();
var state__30104__auto__ = (function (){var statearr_30696 = f__30103__auto__();
(statearr_30696[(6)] = c__30102__auto___33414);

return statearr_30696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30104__auto__);
});})(__33367,c__30102__auto___33414,G__30596_33368,G__30596_33369__$1,n__4613__auto___33366,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30596_33369__$1)].join('')));

}

var G__33496 = (__33367 + (1));
__33367 = G__33496;
continue;
} else {
}
break;
}

var c__30102__auto___33497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30103__auto__ = (function (){var switch__29819__auto__ = (function (state_30726){
var state_val_30727 = (state_30726[(1)]);
if((state_val_30727 === (7))){
var inst_30718 = (state_30726[(2)]);
var state_30726__$1 = state_30726;
var statearr_30744_33515 = state_30726__$1;
(statearr_30744_33515[(2)] = inst_30718);

(statearr_30744_33515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (1))){
var state_30726__$1 = state_30726;
var statearr_30748_33519 = state_30726__$1;
(statearr_30748_33519[(2)] = null);

(statearr_30748_33519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (4))){
var inst_30701 = (state_30726[(7)]);
var inst_30701__$1 = (state_30726[(2)]);
var inst_30702 = (inst_30701__$1 == null);
var state_30726__$1 = (function (){var statearr_30751 = state_30726;
(statearr_30751[(7)] = inst_30701__$1);

return statearr_30751;
})();
if(cljs.core.truth_(inst_30702)){
var statearr_30754_33523 = state_30726__$1;
(statearr_30754_33523[(1)] = (5));

} else {
var statearr_30755_33527 = state_30726__$1;
(statearr_30755_33527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (6))){
var inst_30707 = (state_30726[(8)]);
var inst_30701 = (state_30726[(7)]);
var inst_30707__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30709 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30710 = [inst_30701,inst_30707__$1];
var inst_30711 = (new cljs.core.PersistentVector(null,2,(5),inst_30709,inst_30710,null));
var state_30726__$1 = (function (){var statearr_30759 = state_30726;
(statearr_30759[(8)] = inst_30707__$1);

return statearr_30759;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30726__$1,(8),jobs,inst_30711);
} else {
if((state_val_30727 === (3))){
var inst_30720 = (state_30726[(2)]);
var state_30726__$1 = state_30726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30726__$1,inst_30720);
} else {
if((state_val_30727 === (2))){
var state_30726__$1 = state_30726;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30726__$1,(4),from);
} else {
if((state_val_30727 === (9))){
var inst_30715 = (state_30726[(2)]);
var state_30726__$1 = (function (){var statearr_30765 = state_30726;
(statearr_30765[(9)] = inst_30715);

return statearr_30765;
})();
var statearr_30766_33540 = state_30726__$1;
(statearr_30766_33540[(2)] = null);

(statearr_30766_33540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (5))){
var inst_30704 = cljs.core.async.close_BANG_(jobs);
var state_30726__$1 = state_30726;
var statearr_30769_33545 = state_30726__$1;
(statearr_30769_33545[(2)] = inst_30704);

(statearr_30769_33545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (8))){
var inst_30707 = (state_30726[(8)]);
var inst_30713 = (state_30726[(2)]);
var state_30726__$1 = (function (){var statearr_30773 = state_30726;
(statearr_30773[(10)] = inst_30713);

return statearr_30773;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30726__$1,(9),results,inst_30707);
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
var cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____0 = (function (){
var statearr_30780 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30780[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__);

(statearr_30780[(1)] = (1));

return statearr_30780;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____1 = (function (state_30726){
while(true){
var ret_value__29821__auto__ = (function (){try{while(true){
var result__29822__auto__ = switch__29819__auto__(state_30726);
if(cljs.core.keyword_identical_QMARK_(result__29822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29822__auto__;
}
break;
}
}catch (e30781){var ex__29823__auto__ = e30781;
var statearr_30783_33558 = state_30726;
(statearr_30783_33558[(2)] = ex__29823__auto__);


if(cljs.core.seq((state_30726[(4)]))){
var statearr_30784_33560 = state_30726;
(statearr_30784_33560[(1)] = cljs.core.first((state_30726[(4)])));

} else {
throw ex__29823__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33564 = state_30726;
state_30726 = G__33564;
continue;
} else {
return ret_value__29821__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__ = function(state_30726){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____1.call(this,state_30726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__;
})()
})();
var state__30104__auto__ = (function (){var statearr_30788 = f__30103__auto__();
(statearr_30788[(6)] = c__30102__auto___33497);

return statearr_30788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30104__auto__);
}));


var c__30102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30103__auto__ = (function (){var switch__29819__auto__ = (function (state_30839){
var state_val_30840 = (state_30839[(1)]);
if((state_val_30840 === (7))){
var inst_30835 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
var statearr_30844_33567 = state_30839__$1;
(statearr_30844_33567[(2)] = inst_30835);

(statearr_30844_33567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (20))){
var state_30839__$1 = state_30839;
var statearr_30845_33568 = state_30839__$1;
(statearr_30845_33568[(2)] = null);

(statearr_30845_33568[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (1))){
var state_30839__$1 = state_30839;
var statearr_30850_33569 = state_30839__$1;
(statearr_30850_33569[(2)] = null);

(statearr_30850_33569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (4))){
var inst_30797 = (state_30839[(7)]);
var inst_30797__$1 = (state_30839[(2)]);
var inst_30798 = (inst_30797__$1 == null);
var state_30839__$1 = (function (){var statearr_30852 = state_30839;
(statearr_30852[(7)] = inst_30797__$1);

return statearr_30852;
})();
if(cljs.core.truth_(inst_30798)){
var statearr_30853_33574 = state_30839__$1;
(statearr_30853_33574[(1)] = (5));

} else {
var statearr_30854_33575 = state_30839__$1;
(statearr_30854_33575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (15))){
var inst_30811 = (state_30839[(8)]);
var state_30839__$1 = state_30839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30839__$1,(18),to,inst_30811);
} else {
if((state_val_30840 === (21))){
var inst_30830 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
var statearr_30855_33580 = state_30839__$1;
(statearr_30855_33580[(2)] = inst_30830);

(statearr_30855_33580[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (13))){
var inst_30832 = (state_30839[(2)]);
var state_30839__$1 = (function (){var statearr_30856 = state_30839;
(statearr_30856[(9)] = inst_30832);

return statearr_30856;
})();
var statearr_30857_33584 = state_30839__$1;
(statearr_30857_33584[(2)] = null);

(statearr_30857_33584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (6))){
var inst_30797 = (state_30839[(7)]);
var state_30839__$1 = state_30839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30839__$1,(11),inst_30797);
} else {
if((state_val_30840 === (17))){
var inst_30823 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
if(cljs.core.truth_(inst_30823)){
var statearr_30862_33589 = state_30839__$1;
(statearr_30862_33589[(1)] = (19));

} else {
var statearr_30863_33591 = state_30839__$1;
(statearr_30863_33591[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (3))){
var inst_30837 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30839__$1,inst_30837);
} else {
if((state_val_30840 === (12))){
var inst_30807 = (state_30839[(10)]);
var state_30839__$1 = state_30839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30839__$1,(14),inst_30807);
} else {
if((state_val_30840 === (2))){
var state_30839__$1 = state_30839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30839__$1,(4),results);
} else {
if((state_val_30840 === (19))){
var state_30839__$1 = state_30839;
var statearr_30866_33592 = state_30839__$1;
(statearr_30866_33592[(2)] = null);

(statearr_30866_33592[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (11))){
var inst_30807 = (state_30839[(2)]);
var state_30839__$1 = (function (){var statearr_30867 = state_30839;
(statearr_30867[(10)] = inst_30807);

return statearr_30867;
})();
var statearr_30868_33598 = state_30839__$1;
(statearr_30868_33598[(2)] = null);

(statearr_30868_33598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (9))){
var state_30839__$1 = state_30839;
var statearr_30870_33599 = state_30839__$1;
(statearr_30870_33599[(2)] = null);

(statearr_30870_33599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (5))){
var state_30839__$1 = state_30839;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30871_33683 = state_30839__$1;
(statearr_30871_33683[(1)] = (8));

} else {
var statearr_30875_33684 = state_30839__$1;
(statearr_30875_33684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (14))){
var inst_30811 = (state_30839[(8)]);
var inst_30811__$1 = (state_30839[(2)]);
var inst_30816 = (inst_30811__$1 == null);
var inst_30817 = cljs.core.not(inst_30816);
var state_30839__$1 = (function (){var statearr_30877 = state_30839;
(statearr_30877[(8)] = inst_30811__$1);

return statearr_30877;
})();
if(inst_30817){
var statearr_30878_33692 = state_30839__$1;
(statearr_30878_33692[(1)] = (15));

} else {
var statearr_30879_33694 = state_30839__$1;
(statearr_30879_33694[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (16))){
var state_30839__$1 = state_30839;
var statearr_30881_33696 = state_30839__$1;
(statearr_30881_33696[(2)] = false);

(statearr_30881_33696[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (10))){
var inst_30804 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
var statearr_30882_33703 = state_30839__$1;
(statearr_30882_33703[(2)] = inst_30804);

(statearr_30882_33703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (18))){
var inst_30820 = (state_30839[(2)]);
var state_30839__$1 = state_30839;
var statearr_30883_33708 = state_30839__$1;
(statearr_30883_33708[(2)] = inst_30820);

(statearr_30883_33708[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30840 === (8))){
var inst_30801 = cljs.core.async.close_BANG_(to);
var state_30839__$1 = state_30839;
var statearr_30886_33709 = state_30839__$1;
(statearr_30886_33709[(2)] = inst_30801);

(statearr_30886_33709[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____0 = (function (){
var statearr_30888 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30888[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__);

(statearr_30888[(1)] = (1));

return statearr_30888;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____1 = (function (state_30839){
while(true){
var ret_value__29821__auto__ = (function (){try{while(true){
var result__29822__auto__ = switch__29819__auto__(state_30839);
if(cljs.core.keyword_identical_QMARK_(result__29822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29822__auto__;
}
break;
}
}catch (e30889){var ex__29823__auto__ = e30889;
var statearr_30890_33715 = state_30839;
(statearr_30890_33715[(2)] = ex__29823__auto__);


if(cljs.core.seq((state_30839[(4)]))){
var statearr_30891_33716 = state_30839;
(statearr_30891_33716[(1)] = cljs.core.first((state_30839[(4)])));

} else {
throw ex__29823__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33717 = state_30839;
state_30839 = G__33717;
continue;
} else {
return ret_value__29821__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__ = function(state_30839){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____1.call(this,state_30839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29820__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29820__auto__;
})()
})();
var state__30104__auto__ = (function (){var statearr_30895 = f__30103__auto__();
(statearr_30895[(6)] = c__30102__auto__);

return statearr_30895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30104__auto__);
}));

return c__30102__auto__;
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
var G__30900 = arguments.length;
switch (G__30900) {
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
var G__30909 = arguments.length;
switch (G__30909) {
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
var G__30927 = arguments.length;
switch (G__30927) {
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
var c__30102__auto___33751 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30103__auto__ = (function (){var switch__29819__auto__ = (function (state_30982){
var state_val_30983 = (state_30982[(1)]);
if((state_val_30983 === (7))){
var inst_30974 = (state_30982[(2)]);
var state_30982__$1 = state_30982;
var statearr_30984_33753 = state_30982__$1;
(statearr_30984_33753[(2)] = inst_30974);

(statearr_30984_33753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (1))){
var state_30982__$1 = state_30982;
var statearr_30989_33754 = state_30982__$1;
(statearr_30989_33754[(2)] = null);

(statearr_30989_33754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (4))){
var inst_30954 = (state_30982[(7)]);
var inst_30954__$1 = (state_30982[(2)]);
var inst_30955 = (inst_30954__$1 == null);
var state_30982__$1 = (function (){var statearr_30990 = state_30982;
(statearr_30990[(7)] = inst_30954__$1);

return statearr_30990;
})();
if(cljs.core.truth_(inst_30955)){
var statearr_30995_33756 = state_30982__$1;
(statearr_30995_33756[(1)] = (5));

} else {
var statearr_30996_33757 = state_30982__$1;
(statearr_30996_33757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (13))){
var state_30982__$1 = state_30982;
var statearr_30999_33759 = state_30982__$1;
(statearr_30999_33759[(2)] = null);

(statearr_30999_33759[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (6))){
var inst_30954 = (state_30982[(7)]);
var inst_30961 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30954) : p.call(null,inst_30954));
var state_30982__$1 = state_30982;
if(cljs.core.truth_(inst_30961)){
var statearr_31002_33761 = state_30982__$1;
(statearr_31002_33761[(1)] = (9));

} else {
var statearr_31008_33762 = state_30982__$1;
(statearr_31008_33762[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (3))){
var inst_30976 = (state_30982[(2)]);
var state_30982__$1 = state_30982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30982__$1,inst_30976);
} else {
if((state_val_30983 === (12))){
var state_30982__$1 = state_30982;
var statearr_31011_33826 = state_30982__$1;
(statearr_31011_33826[(2)] = null);

(statearr_31011_33826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (2))){
var state_30982__$1 = state_30982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30982__$1,(4),ch);
} else {
if((state_val_30983 === (11))){
var inst_30954 = (state_30982[(7)]);
var inst_30965 = (state_30982[(2)]);
var state_30982__$1 = state_30982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30982__$1,(8),inst_30965,inst_30954);
} else {
if((state_val_30983 === (9))){
var state_30982__$1 = state_30982;
var statearr_31012_33830 = state_30982__$1;
(statearr_31012_33830[(2)] = tc);

(statearr_31012_33830[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (5))){
var inst_30957 = cljs.core.async.close_BANG_(tc);
var inst_30958 = cljs.core.async.close_BANG_(fc);
var state_30982__$1 = (function (){var statearr_31013 = state_30982;
(statearr_31013[(8)] = inst_30957);

return statearr_31013;
})();
var statearr_31014_33832 = state_30982__$1;
(statearr_31014_33832[(2)] = inst_30958);

(statearr_31014_33832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (14))){
var inst_30972 = (state_30982[(2)]);
var state_30982__$1 = state_30982;
var statearr_31015_33833 = state_30982__$1;
(statearr_31015_33833[(2)] = inst_30972);

(statearr_31015_33833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (10))){
var state_30982__$1 = state_30982;
var statearr_31021_33834 = state_30982__$1;
(statearr_31021_33834[(2)] = fc);

(statearr_31021_33834[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (8))){
var inst_30967 = (state_30982[(2)]);
var state_30982__$1 = state_30982;
if(cljs.core.truth_(inst_30967)){
var statearr_31029_33835 = state_30982__$1;
(statearr_31029_33835[(1)] = (12));

} else {
var statearr_31035_33836 = state_30982__$1;
(statearr_31035_33836[(1)] = (13));

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
var cljs$core$async$state_machine__29820__auto__ = null;
var cljs$core$async$state_machine__29820__auto____0 = (function (){
var statearr_31041 = [null,null,null,null,null,null,null,null,null];
(statearr_31041[(0)] = cljs$core$async$state_machine__29820__auto__);

(statearr_31041[(1)] = (1));

return statearr_31041;
});
var cljs$core$async$state_machine__29820__auto____1 = (function (state_30982){
while(true){
var ret_value__29821__auto__ = (function (){try{while(true){
var result__29822__auto__ = switch__29819__auto__(state_30982);
if(cljs.core.keyword_identical_QMARK_(result__29822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29822__auto__;
}
break;
}
}catch (e31043){var ex__29823__auto__ = e31043;
var statearr_31044_33838 = state_30982;
(statearr_31044_33838[(2)] = ex__29823__auto__);


if(cljs.core.seq((state_30982[(4)]))){
var statearr_31045_33841 = state_30982;
(statearr_31045_33841[(1)] = cljs.core.first((state_30982[(4)])));

} else {
throw ex__29823__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33846 = state_30982;
state_30982 = G__33846;
continue;
} else {
return ret_value__29821__auto__;
}
break;
}
});
cljs$core$async$state_machine__29820__auto__ = function(state_30982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29820__auto____1.call(this,state_30982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29820__auto____0;
cljs$core$async$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29820__auto____1;
return cljs$core$async$state_machine__29820__auto__;
})()
})();
var state__30104__auto__ = (function (){var statearr_31046 = f__30103__auto__();
(statearr_31046[(6)] = c__30102__auto___33751);

return statearr_31046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30104__auto__);
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
var c__30102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30103__auto__ = (function (){var switch__29819__auto__ = (function (state_31097){
var state_val_31098 = (state_31097[(1)]);
if((state_val_31098 === (7))){
var inst_31089 = (state_31097[(2)]);
var state_31097__$1 = state_31097;
var statearr_31116_33852 = state_31097__$1;
(statearr_31116_33852[(2)] = inst_31089);

(statearr_31116_33852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31098 === (1))){
var inst_31064 = init;
var inst_31071 = inst_31064;
var state_31097__$1 = (function (){var statearr_31117 = state_31097;
(statearr_31117[(7)] = inst_31071);

return statearr_31117;
})();
var statearr_31118_33855 = state_31097__$1;
(statearr_31118_33855[(2)] = null);

(statearr_31118_33855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31098 === (4))){
var inst_31074 = (state_31097[(8)]);
var inst_31074__$1 = (state_31097[(2)]);
var inst_31075 = (inst_31074__$1 == null);
var state_31097__$1 = (function (){var statearr_31119 = state_31097;
(statearr_31119[(8)] = inst_31074__$1);

return statearr_31119;
})();
if(cljs.core.truth_(inst_31075)){
var statearr_31120_33857 = state_31097__$1;
(statearr_31120_33857[(1)] = (5));

} else {
var statearr_31122_33859 = state_31097__$1;
(statearr_31122_33859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31098 === (6))){
var inst_31078 = (state_31097[(9)]);
var inst_31071 = (state_31097[(7)]);
var inst_31074 = (state_31097[(8)]);
var inst_31078__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31071,inst_31074) : f.call(null,inst_31071,inst_31074));
var inst_31079 = cljs.core.reduced_QMARK_(inst_31078__$1);
var state_31097__$1 = (function (){var statearr_31126 = state_31097;
(statearr_31126[(9)] = inst_31078__$1);

return statearr_31126;
})();
if(inst_31079){
var statearr_31127_33870 = state_31097__$1;
(statearr_31127_33870[(1)] = (8));

} else {
var statearr_31128_33872 = state_31097__$1;
(statearr_31128_33872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31098 === (3))){
var inst_31091 = (state_31097[(2)]);
var state_31097__$1 = state_31097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31097__$1,inst_31091);
} else {
if((state_val_31098 === (2))){
var state_31097__$1 = state_31097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31097__$1,(4),ch);
} else {
if((state_val_31098 === (9))){
var inst_31078 = (state_31097[(9)]);
var inst_31071 = inst_31078;
var state_31097__$1 = (function (){var statearr_31129 = state_31097;
(statearr_31129[(7)] = inst_31071);

return statearr_31129;
})();
var statearr_31131_33879 = state_31097__$1;
(statearr_31131_33879[(2)] = null);

(statearr_31131_33879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31098 === (5))){
var inst_31071 = (state_31097[(7)]);
var state_31097__$1 = state_31097;
var statearr_31132_33881 = state_31097__$1;
(statearr_31132_33881[(2)] = inst_31071);

(statearr_31132_33881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31098 === (10))){
var inst_31087 = (state_31097[(2)]);
var state_31097__$1 = state_31097;
var statearr_31133_33884 = state_31097__$1;
(statearr_31133_33884[(2)] = inst_31087);

(statearr_31133_33884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31098 === (8))){
var inst_31078 = (state_31097[(9)]);
var inst_31081 = cljs.core.deref(inst_31078);
var state_31097__$1 = state_31097;
var statearr_31138_33887 = state_31097__$1;
(statearr_31138_33887[(2)] = inst_31081);

(statearr_31138_33887[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29820__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29820__auto____0 = (function (){
var statearr_31140 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31140[(0)] = cljs$core$async$reduce_$_state_machine__29820__auto__);

(statearr_31140[(1)] = (1));

return statearr_31140;
});
var cljs$core$async$reduce_$_state_machine__29820__auto____1 = (function (state_31097){
while(true){
var ret_value__29821__auto__ = (function (){try{while(true){
var result__29822__auto__ = switch__29819__auto__(state_31097);
if(cljs.core.keyword_identical_QMARK_(result__29822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29822__auto__;
}
break;
}
}catch (e31144){var ex__29823__auto__ = e31144;
var statearr_31145_33889 = state_31097;
(statearr_31145_33889[(2)] = ex__29823__auto__);


if(cljs.core.seq((state_31097[(4)]))){
var statearr_31146_33891 = state_31097;
(statearr_31146_33891[(1)] = cljs.core.first((state_31097[(4)])));

} else {
throw ex__29823__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33894 = state_31097;
state_31097 = G__33894;
continue;
} else {
return ret_value__29821__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29820__auto__ = function(state_31097){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29820__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29820__auto____1.call(this,state_31097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29820__auto____0;
cljs$core$async$reduce_$_state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29820__auto____1;
return cljs$core$async$reduce_$_state_machine__29820__auto__;
})()
})();
var state__30104__auto__ = (function (){var statearr_31147 = f__30103__auto__();
(statearr_31147[(6)] = c__30102__auto__);

return statearr_31147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30104__auto__);
}));

return c__30102__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30103__auto__ = (function (){var switch__29819__auto__ = (function (state_31169){
var state_val_31170 = (state_31169[(1)]);
if((state_val_31170 === (1))){
var inst_31160 = cljs.core.async.reduce(f__$1,init,ch);
var state_31169__$1 = state_31169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31169__$1,(2),inst_31160);
} else {
if((state_val_31170 === (2))){
var inst_31162 = (state_31169[(2)]);
var inst_31163 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31162) : f__$1.call(null,inst_31162));
var state_31169__$1 = state_31169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31169__$1,inst_31163);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29820__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29820__auto____0 = (function (){
var statearr_31180 = [null,null,null,null,null,null,null];
(statearr_31180[(0)] = cljs$core$async$transduce_$_state_machine__29820__auto__);

(statearr_31180[(1)] = (1));

return statearr_31180;
});
var cljs$core$async$transduce_$_state_machine__29820__auto____1 = (function (state_31169){
while(true){
var ret_value__29821__auto__ = (function (){try{while(true){
var result__29822__auto__ = switch__29819__auto__(state_31169);
if(cljs.core.keyword_identical_QMARK_(result__29822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29822__auto__;
}
break;
}
}catch (e31181){var ex__29823__auto__ = e31181;
var statearr_31182_33978 = state_31169;
(statearr_31182_33978[(2)] = ex__29823__auto__);


if(cljs.core.seq((state_31169[(4)]))){
var statearr_31184_33979 = state_31169;
(statearr_31184_33979[(1)] = cljs.core.first((state_31169[(4)])));

} else {
throw ex__29823__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33984 = state_31169;
state_31169 = G__33984;
continue;
} else {
return ret_value__29821__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29820__auto__ = function(state_31169){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29820__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29820__auto____1.call(this,state_31169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29820__auto____0;
cljs$core$async$transduce_$_state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29820__auto____1;
return cljs$core$async$transduce_$_state_machine__29820__auto__;
})()
})();
var state__30104__auto__ = (function (){var statearr_31187 = f__30103__auto__();
(statearr_31187[(6)] = c__30102__auto__);

return statearr_31187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30104__auto__);
}));

return c__30102__auto__;
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
var G__31195 = arguments.length;
switch (G__31195) {
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
var c__30102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30103__auto__ = (function (){var switch__29819__auto__ = (function (state_31223){
var state_val_31224 = (state_31223[(1)]);
if((state_val_31224 === (7))){
var inst_31205 = (state_31223[(2)]);
var state_31223__$1 = state_31223;
var statearr_31225_33987 = state_31223__$1;
(statearr_31225_33987[(2)] = inst_31205);

(statearr_31225_33987[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31224 === (1))){
var inst_31199 = cljs.core.seq(coll);
var inst_31200 = inst_31199;
var state_31223__$1 = (function (){var statearr_31227 = state_31223;
(statearr_31227[(7)] = inst_31200);

return statearr_31227;
})();
var statearr_31228_33988 = state_31223__$1;
(statearr_31228_33988[(2)] = null);

(statearr_31228_33988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31224 === (4))){
var inst_31200 = (state_31223[(7)]);
var inst_31203 = cljs.core.first(inst_31200);
var state_31223__$1 = state_31223;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31223__$1,(7),ch,inst_31203);
} else {
if((state_val_31224 === (13))){
var inst_31217 = (state_31223[(2)]);
var state_31223__$1 = state_31223;
var statearr_31233_33992 = state_31223__$1;
(statearr_31233_33992[(2)] = inst_31217);

(statearr_31233_33992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31224 === (6))){
var inst_31208 = (state_31223[(2)]);
var state_31223__$1 = state_31223;
if(cljs.core.truth_(inst_31208)){
var statearr_31234_33994 = state_31223__$1;
(statearr_31234_33994[(1)] = (8));

} else {
var statearr_31235_33995 = state_31223__$1;
(statearr_31235_33995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31224 === (3))){
var inst_31221 = (state_31223[(2)]);
var state_31223__$1 = state_31223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31223__$1,inst_31221);
} else {
if((state_val_31224 === (12))){
var state_31223__$1 = state_31223;
var statearr_31239_34000 = state_31223__$1;
(statearr_31239_34000[(2)] = null);

(statearr_31239_34000[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31224 === (2))){
var inst_31200 = (state_31223[(7)]);
var state_31223__$1 = state_31223;
if(cljs.core.truth_(inst_31200)){
var statearr_31240_34001 = state_31223__$1;
(statearr_31240_34001[(1)] = (4));

} else {
var statearr_31241_34002 = state_31223__$1;
(statearr_31241_34002[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31224 === (11))){
var inst_31214 = cljs.core.async.close_BANG_(ch);
var state_31223__$1 = state_31223;
var statearr_31249_34004 = state_31223__$1;
(statearr_31249_34004[(2)] = inst_31214);

(statearr_31249_34004[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31224 === (9))){
var state_31223__$1 = state_31223;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31250_34007 = state_31223__$1;
(statearr_31250_34007[(1)] = (11));

} else {
var statearr_31252_34008 = state_31223__$1;
(statearr_31252_34008[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31224 === (5))){
var inst_31200 = (state_31223[(7)]);
var state_31223__$1 = state_31223;
var statearr_31255_34013 = state_31223__$1;
(statearr_31255_34013[(2)] = inst_31200);

(statearr_31255_34013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31224 === (10))){
var inst_31219 = (state_31223[(2)]);
var state_31223__$1 = state_31223;
var statearr_31256_34015 = state_31223__$1;
(statearr_31256_34015[(2)] = inst_31219);

(statearr_31256_34015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31224 === (8))){
var inst_31200 = (state_31223[(7)]);
var inst_31210 = cljs.core.next(inst_31200);
var inst_31200__$1 = inst_31210;
var state_31223__$1 = (function (){var statearr_31257 = state_31223;
(statearr_31257[(7)] = inst_31200__$1);

return statearr_31257;
})();
var statearr_31259_34016 = state_31223__$1;
(statearr_31259_34016[(2)] = null);

(statearr_31259_34016[(1)] = (2));


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
var cljs$core$async$state_machine__29820__auto__ = null;
var cljs$core$async$state_machine__29820__auto____0 = (function (){
var statearr_31260 = [null,null,null,null,null,null,null,null];
(statearr_31260[(0)] = cljs$core$async$state_machine__29820__auto__);

(statearr_31260[(1)] = (1));

return statearr_31260;
});
var cljs$core$async$state_machine__29820__auto____1 = (function (state_31223){
while(true){
var ret_value__29821__auto__ = (function (){try{while(true){
var result__29822__auto__ = switch__29819__auto__(state_31223);
if(cljs.core.keyword_identical_QMARK_(result__29822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29822__auto__;
}
break;
}
}catch (e31261){var ex__29823__auto__ = e31261;
var statearr_31263_34033 = state_31223;
(statearr_31263_34033[(2)] = ex__29823__auto__);


if(cljs.core.seq((state_31223[(4)]))){
var statearr_31264_34034 = state_31223;
(statearr_31264_34034[(1)] = cljs.core.first((state_31223[(4)])));

} else {
throw ex__29823__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34035 = state_31223;
state_31223 = G__34035;
continue;
} else {
return ret_value__29821__auto__;
}
break;
}
});
cljs$core$async$state_machine__29820__auto__ = function(state_31223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29820__auto____1.call(this,state_31223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29820__auto____0;
cljs$core$async$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29820__auto____1;
return cljs$core$async$state_machine__29820__auto__;
})()
})();
var state__30104__auto__ = (function (){var statearr_31266 = f__30103__auto__();
(statearr_31266[(6)] = c__30102__auto__);

return statearr_31266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30104__auto__);
}));

return c__30102__auto__;
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
var G__31275 = arguments.length;
switch (G__31275) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34039 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_34039(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34046 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_34046(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34052 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_34052(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34055 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_34055(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31304 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31304 = (function (ch,cs,meta31305){
this.ch = ch;
this.cs = cs;
this.meta31305 = meta31305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31306,meta31305__$1){
var self__ = this;
var _31306__$1 = this;
return (new cljs.core.async.t_cljs$core$async31304(self__.ch,self__.cs,meta31305__$1));
}));

(cljs.core.async.t_cljs$core$async31304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31306){
var self__ = this;
var _31306__$1 = this;
return self__.meta31305;
}));

(cljs.core.async.t_cljs$core$async31304.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31304.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31304.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31304.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31304.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31304.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31305","meta31305",-1483146147,null)], null);
}));

(cljs.core.async.t_cljs$core$async31304.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31304");

(cljs.core.async.t_cljs$core$async31304.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31304");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31304.
 */
cljs.core.async.__GT_t_cljs$core$async31304 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31304(ch__$1,cs__$1,meta31305){
return (new cljs.core.async.t_cljs$core$async31304(ch__$1,cs__$1,meta31305));
});

}

return (new cljs.core.async.t_cljs$core$async31304(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30102__auto___34056 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30103__auto__ = (function (){var switch__29819__auto__ = (function (state_31467){
var state_val_31468 = (state_31467[(1)]);
if((state_val_31468 === (7))){
var inst_31460 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
var statearr_31472_34057 = state_31467__$1;
(statearr_31472_34057[(2)] = inst_31460);

(statearr_31472_34057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (20))){
var inst_31358 = (state_31467[(7)]);
var inst_31370 = cljs.core.first(inst_31358);
var inst_31371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31370,(0),null);
var inst_31372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31370,(1),null);
var state_31467__$1 = (function (){var statearr_31477 = state_31467;
(statearr_31477[(8)] = inst_31371);

return statearr_31477;
})();
if(cljs.core.truth_(inst_31372)){
var statearr_31478_34058 = state_31467__$1;
(statearr_31478_34058[(1)] = (22));

} else {
var statearr_31479_34059 = state_31467__$1;
(statearr_31479_34059[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (27))){
var inst_31408 = (state_31467[(9)]);
var inst_31323 = (state_31467[(10)]);
var inst_31402 = (state_31467[(11)]);
var inst_31400 = (state_31467[(12)]);
var inst_31408__$1 = cljs.core._nth(inst_31400,inst_31402);
var inst_31410 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31408__$1,inst_31323,done);
var state_31467__$1 = (function (){var statearr_31481 = state_31467;
(statearr_31481[(9)] = inst_31408__$1);

return statearr_31481;
})();
if(cljs.core.truth_(inst_31410)){
var statearr_31482_34061 = state_31467__$1;
(statearr_31482_34061[(1)] = (30));

} else {
var statearr_31483_34062 = state_31467__$1;
(statearr_31483_34062[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (1))){
var state_31467__$1 = state_31467;
var statearr_31484_34063 = state_31467__$1;
(statearr_31484_34063[(2)] = null);

(statearr_31484_34063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (24))){
var inst_31358 = (state_31467[(7)]);
var inst_31377 = (state_31467[(2)]);
var inst_31378 = cljs.core.next(inst_31358);
var inst_31332 = inst_31378;
var inst_31333 = null;
var inst_31334 = (0);
var inst_31335 = (0);
var state_31467__$1 = (function (){var statearr_31488 = state_31467;
(statearr_31488[(13)] = inst_31334);

(statearr_31488[(14)] = inst_31332);

(statearr_31488[(15)] = inst_31335);

(statearr_31488[(16)] = inst_31333);

(statearr_31488[(17)] = inst_31377);

return statearr_31488;
})();
var statearr_31493_34068 = state_31467__$1;
(statearr_31493_34068[(2)] = null);

(statearr_31493_34068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (39))){
var state_31467__$1 = state_31467;
var statearr_31504_34070 = state_31467__$1;
(statearr_31504_34070[(2)] = null);

(statearr_31504_34070[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (4))){
var inst_31323 = (state_31467[(10)]);
var inst_31323__$1 = (state_31467[(2)]);
var inst_31324 = (inst_31323__$1 == null);
var state_31467__$1 = (function (){var statearr_31508 = state_31467;
(statearr_31508[(10)] = inst_31323__$1);

return statearr_31508;
})();
if(cljs.core.truth_(inst_31324)){
var statearr_31509_34072 = state_31467__$1;
(statearr_31509_34072[(1)] = (5));

} else {
var statearr_31510_34073 = state_31467__$1;
(statearr_31510_34073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (15))){
var inst_31334 = (state_31467[(13)]);
var inst_31332 = (state_31467[(14)]);
var inst_31335 = (state_31467[(15)]);
var inst_31333 = (state_31467[(16)]);
var inst_31354 = (state_31467[(2)]);
var inst_31355 = (inst_31335 + (1));
var tmp31498 = inst_31334;
var tmp31499 = inst_31332;
var tmp31500 = inst_31333;
var inst_31332__$1 = tmp31499;
var inst_31333__$1 = tmp31500;
var inst_31334__$1 = tmp31498;
var inst_31335__$1 = inst_31355;
var state_31467__$1 = (function (){var statearr_31513 = state_31467;
(statearr_31513[(13)] = inst_31334__$1);

(statearr_31513[(18)] = inst_31354);

(statearr_31513[(14)] = inst_31332__$1);

(statearr_31513[(15)] = inst_31335__$1);

(statearr_31513[(16)] = inst_31333__$1);

return statearr_31513;
})();
var statearr_31514_34074 = state_31467__$1;
(statearr_31514_34074[(2)] = null);

(statearr_31514_34074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (21))){
var inst_31381 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
var statearr_31518_34075 = state_31467__$1;
(statearr_31518_34075[(2)] = inst_31381);

(statearr_31518_34075[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (31))){
var inst_31408 = (state_31467[(9)]);
var inst_31414 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31408);
var state_31467__$1 = state_31467;
var statearr_31519_34077 = state_31467__$1;
(statearr_31519_34077[(2)] = inst_31414);

(statearr_31519_34077[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (32))){
var inst_31399 = (state_31467[(19)]);
var inst_31402 = (state_31467[(11)]);
var inst_31400 = (state_31467[(12)]);
var inst_31401 = (state_31467[(20)]);
var inst_31416 = (state_31467[(2)]);
var inst_31417 = (inst_31402 + (1));
var tmp31515 = inst_31399;
var tmp31516 = inst_31400;
var tmp31517 = inst_31401;
var inst_31399__$1 = tmp31515;
var inst_31400__$1 = tmp31516;
var inst_31401__$1 = tmp31517;
var inst_31402__$1 = inst_31417;
var state_31467__$1 = (function (){var statearr_31520 = state_31467;
(statearr_31520[(19)] = inst_31399__$1);

(statearr_31520[(11)] = inst_31402__$1);

(statearr_31520[(21)] = inst_31416);

(statearr_31520[(12)] = inst_31400__$1);

(statearr_31520[(20)] = inst_31401__$1);

return statearr_31520;
})();
var statearr_31521_34086 = state_31467__$1;
(statearr_31521_34086[(2)] = null);

(statearr_31521_34086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (40))){
var inst_31432 = (state_31467[(22)]);
var inst_31437 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31432);
var state_31467__$1 = state_31467;
var statearr_31522_34087 = state_31467__$1;
(statearr_31522_34087[(2)] = inst_31437);

(statearr_31522_34087[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (33))){
var inst_31420 = (state_31467[(23)]);
var inst_31422 = cljs.core.chunked_seq_QMARK_(inst_31420);
var state_31467__$1 = state_31467;
if(inst_31422){
var statearr_31526_34088 = state_31467__$1;
(statearr_31526_34088[(1)] = (36));

} else {
var statearr_31527_34092 = state_31467__$1;
(statearr_31527_34092[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (13))){
var inst_31345 = (state_31467[(24)]);
var inst_31350 = cljs.core.async.close_BANG_(inst_31345);
var state_31467__$1 = state_31467;
var statearr_31528_34093 = state_31467__$1;
(statearr_31528_34093[(2)] = inst_31350);

(statearr_31528_34093[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (22))){
var inst_31371 = (state_31467[(8)]);
var inst_31374 = cljs.core.async.close_BANG_(inst_31371);
var state_31467__$1 = state_31467;
var statearr_31532_34097 = state_31467__$1;
(statearr_31532_34097[(2)] = inst_31374);

(statearr_31532_34097[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (36))){
var inst_31420 = (state_31467[(23)]);
var inst_31425 = cljs.core.chunk_first(inst_31420);
var inst_31426 = cljs.core.chunk_rest(inst_31420);
var inst_31427 = cljs.core.count(inst_31425);
var inst_31399 = inst_31426;
var inst_31400 = inst_31425;
var inst_31401 = inst_31427;
var inst_31402 = (0);
var state_31467__$1 = (function (){var statearr_31539 = state_31467;
(statearr_31539[(19)] = inst_31399);

(statearr_31539[(11)] = inst_31402);

(statearr_31539[(12)] = inst_31400);

(statearr_31539[(20)] = inst_31401);

return statearr_31539;
})();
var statearr_31540_34101 = state_31467__$1;
(statearr_31540_34101[(2)] = null);

(statearr_31540_34101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (41))){
var inst_31420 = (state_31467[(23)]);
var inst_31439 = (state_31467[(2)]);
var inst_31440 = cljs.core.next(inst_31420);
var inst_31399 = inst_31440;
var inst_31400 = null;
var inst_31401 = (0);
var inst_31402 = (0);
var state_31467__$1 = (function (){var statearr_31542 = state_31467;
(statearr_31542[(19)] = inst_31399);

(statearr_31542[(25)] = inst_31439);

(statearr_31542[(11)] = inst_31402);

(statearr_31542[(12)] = inst_31400);

(statearr_31542[(20)] = inst_31401);

return statearr_31542;
})();
var statearr_31543_34106 = state_31467__$1;
(statearr_31543_34106[(2)] = null);

(statearr_31543_34106[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (43))){
var state_31467__$1 = state_31467;
var statearr_31545_34107 = state_31467__$1;
(statearr_31545_34107[(2)] = null);

(statearr_31545_34107[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (29))){
var inst_31448 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
var statearr_31547_34108 = state_31467__$1;
(statearr_31547_34108[(2)] = inst_31448);

(statearr_31547_34108[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (44))){
var inst_31457 = (state_31467[(2)]);
var state_31467__$1 = (function (){var statearr_31550 = state_31467;
(statearr_31550[(26)] = inst_31457);

return statearr_31550;
})();
var statearr_31551_34110 = state_31467__$1;
(statearr_31551_34110[(2)] = null);

(statearr_31551_34110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (6))){
var inst_31391 = (state_31467[(27)]);
var inst_31390 = cljs.core.deref(cs);
var inst_31391__$1 = cljs.core.keys(inst_31390);
var inst_31392 = cljs.core.count(inst_31391__$1);
var inst_31393 = cljs.core.reset_BANG_(dctr,inst_31392);
var inst_31398 = cljs.core.seq(inst_31391__$1);
var inst_31399 = inst_31398;
var inst_31400 = null;
var inst_31401 = (0);
var inst_31402 = (0);
var state_31467__$1 = (function (){var statearr_31553 = state_31467;
(statearr_31553[(19)] = inst_31399);

(statearr_31553[(28)] = inst_31393);

(statearr_31553[(27)] = inst_31391__$1);

(statearr_31553[(11)] = inst_31402);

(statearr_31553[(12)] = inst_31400);

(statearr_31553[(20)] = inst_31401);

return statearr_31553;
})();
var statearr_31556_34112 = state_31467__$1;
(statearr_31556_34112[(2)] = null);

(statearr_31556_34112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (28))){
var inst_31399 = (state_31467[(19)]);
var inst_31420 = (state_31467[(23)]);
var inst_31420__$1 = cljs.core.seq(inst_31399);
var state_31467__$1 = (function (){var statearr_31557 = state_31467;
(statearr_31557[(23)] = inst_31420__$1);

return statearr_31557;
})();
if(inst_31420__$1){
var statearr_31558_34117 = state_31467__$1;
(statearr_31558_34117[(1)] = (33));

} else {
var statearr_31559_34119 = state_31467__$1;
(statearr_31559_34119[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (25))){
var inst_31402 = (state_31467[(11)]);
var inst_31401 = (state_31467[(20)]);
var inst_31404 = (inst_31402 < inst_31401);
var inst_31405 = inst_31404;
var state_31467__$1 = state_31467;
if(cljs.core.truth_(inst_31405)){
var statearr_31560_34121 = state_31467__$1;
(statearr_31560_34121[(1)] = (27));

} else {
var statearr_31561_34122 = state_31467__$1;
(statearr_31561_34122[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (34))){
var state_31467__$1 = state_31467;
var statearr_31563_34123 = state_31467__$1;
(statearr_31563_34123[(2)] = null);

(statearr_31563_34123[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (17))){
var state_31467__$1 = state_31467;
var statearr_31564_34124 = state_31467__$1;
(statearr_31564_34124[(2)] = null);

(statearr_31564_34124[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (3))){
var inst_31462 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31467__$1,inst_31462);
} else {
if((state_val_31468 === (12))){
var inst_31386 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
var statearr_31568_34126 = state_31467__$1;
(statearr_31568_34126[(2)] = inst_31386);

(statearr_31568_34126[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (2))){
var state_31467__$1 = state_31467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31467__$1,(4),ch);
} else {
if((state_val_31468 === (23))){
var state_31467__$1 = state_31467;
var statearr_31572_34128 = state_31467__$1;
(statearr_31572_34128[(2)] = null);

(statearr_31572_34128[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (35))){
var inst_31446 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
var statearr_31573_34130 = state_31467__$1;
(statearr_31573_34130[(2)] = inst_31446);

(statearr_31573_34130[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (19))){
var inst_31358 = (state_31467[(7)]);
var inst_31362 = cljs.core.chunk_first(inst_31358);
var inst_31363 = cljs.core.chunk_rest(inst_31358);
var inst_31364 = cljs.core.count(inst_31362);
var inst_31332 = inst_31363;
var inst_31333 = inst_31362;
var inst_31334 = inst_31364;
var inst_31335 = (0);
var state_31467__$1 = (function (){var statearr_31574 = state_31467;
(statearr_31574[(13)] = inst_31334);

(statearr_31574[(14)] = inst_31332);

(statearr_31574[(15)] = inst_31335);

(statearr_31574[(16)] = inst_31333);

return statearr_31574;
})();
var statearr_31576_34134 = state_31467__$1;
(statearr_31576_34134[(2)] = null);

(statearr_31576_34134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (11))){
var inst_31332 = (state_31467[(14)]);
var inst_31358 = (state_31467[(7)]);
var inst_31358__$1 = cljs.core.seq(inst_31332);
var state_31467__$1 = (function (){var statearr_31577 = state_31467;
(statearr_31577[(7)] = inst_31358__$1);

return statearr_31577;
})();
if(inst_31358__$1){
var statearr_31579_34135 = state_31467__$1;
(statearr_31579_34135[(1)] = (16));

} else {
var statearr_31580_34136 = state_31467__$1;
(statearr_31580_34136[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (9))){
var inst_31388 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
var statearr_31581_34137 = state_31467__$1;
(statearr_31581_34137[(2)] = inst_31388);

(statearr_31581_34137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (5))){
var inst_31330 = cljs.core.deref(cs);
var inst_31331 = cljs.core.seq(inst_31330);
var inst_31332 = inst_31331;
var inst_31333 = null;
var inst_31334 = (0);
var inst_31335 = (0);
var state_31467__$1 = (function (){var statearr_31582 = state_31467;
(statearr_31582[(13)] = inst_31334);

(statearr_31582[(14)] = inst_31332);

(statearr_31582[(15)] = inst_31335);

(statearr_31582[(16)] = inst_31333);

return statearr_31582;
})();
var statearr_31583_34141 = state_31467__$1;
(statearr_31583_34141[(2)] = null);

(statearr_31583_34141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (14))){
var state_31467__$1 = state_31467;
var statearr_31584_34145 = state_31467__$1;
(statearr_31584_34145[(2)] = null);

(statearr_31584_34145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (45))){
var inst_31454 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
var statearr_31585_34146 = state_31467__$1;
(statearr_31585_34146[(2)] = inst_31454);

(statearr_31585_34146[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (26))){
var inst_31391 = (state_31467[(27)]);
var inst_31450 = (state_31467[(2)]);
var inst_31451 = cljs.core.seq(inst_31391);
var state_31467__$1 = (function (){var statearr_31587 = state_31467;
(statearr_31587[(29)] = inst_31450);

return statearr_31587;
})();
if(inst_31451){
var statearr_31588_34151 = state_31467__$1;
(statearr_31588_34151[(1)] = (42));

} else {
var statearr_31589_34152 = state_31467__$1;
(statearr_31589_34152[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (16))){
var inst_31358 = (state_31467[(7)]);
var inst_31360 = cljs.core.chunked_seq_QMARK_(inst_31358);
var state_31467__$1 = state_31467;
if(inst_31360){
var statearr_31590_34154 = state_31467__$1;
(statearr_31590_34154[(1)] = (19));

} else {
var statearr_31591_34155 = state_31467__$1;
(statearr_31591_34155[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (38))){
var inst_31443 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
var statearr_31592_34156 = state_31467__$1;
(statearr_31592_34156[(2)] = inst_31443);

(statearr_31592_34156[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (30))){
var state_31467__$1 = state_31467;
var statearr_31594_34157 = state_31467__$1;
(statearr_31594_34157[(2)] = null);

(statearr_31594_34157[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (10))){
var inst_31335 = (state_31467[(15)]);
var inst_31333 = (state_31467[(16)]);
var inst_31344 = cljs.core._nth(inst_31333,inst_31335);
var inst_31345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31344,(0),null);
var inst_31347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31344,(1),null);
var state_31467__$1 = (function (){var statearr_31595 = state_31467;
(statearr_31595[(24)] = inst_31345);

return statearr_31595;
})();
if(cljs.core.truth_(inst_31347)){
var statearr_31597_34171 = state_31467__$1;
(statearr_31597_34171[(1)] = (13));

} else {
var statearr_31598_34172 = state_31467__$1;
(statearr_31598_34172[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (18))){
var inst_31384 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
var statearr_31599_34173 = state_31467__$1;
(statearr_31599_34173[(2)] = inst_31384);

(statearr_31599_34173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (42))){
var state_31467__$1 = state_31467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31467__$1,(45),dchan);
} else {
if((state_val_31468 === (37))){
var inst_31323 = (state_31467[(10)]);
var inst_31420 = (state_31467[(23)]);
var inst_31432 = (state_31467[(22)]);
var inst_31432__$1 = cljs.core.first(inst_31420);
var inst_31433 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31432__$1,inst_31323,done);
var state_31467__$1 = (function (){var statearr_31603 = state_31467;
(statearr_31603[(22)] = inst_31432__$1);

return statearr_31603;
})();
if(cljs.core.truth_(inst_31433)){
var statearr_31604_34185 = state_31467__$1;
(statearr_31604_34185[(1)] = (39));

} else {
var statearr_31605_34186 = state_31467__$1;
(statearr_31605_34186[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (8))){
var inst_31334 = (state_31467[(13)]);
var inst_31335 = (state_31467[(15)]);
var inst_31337 = (inst_31335 < inst_31334);
var inst_31338 = inst_31337;
var state_31467__$1 = state_31467;
if(cljs.core.truth_(inst_31338)){
var statearr_31606_34187 = state_31467__$1;
(statearr_31606_34187[(1)] = (10));

} else {
var statearr_31607_34188 = state_31467__$1;
(statearr_31607_34188[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29820__auto__ = null;
var cljs$core$async$mult_$_state_machine__29820__auto____0 = (function (){
var statearr_31608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31608[(0)] = cljs$core$async$mult_$_state_machine__29820__auto__);

(statearr_31608[(1)] = (1));

return statearr_31608;
});
var cljs$core$async$mult_$_state_machine__29820__auto____1 = (function (state_31467){
while(true){
var ret_value__29821__auto__ = (function (){try{while(true){
var result__29822__auto__ = switch__29819__auto__(state_31467);
if(cljs.core.keyword_identical_QMARK_(result__29822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29822__auto__;
}
break;
}
}catch (e31609){var ex__29823__auto__ = e31609;
var statearr_31610_34201 = state_31467;
(statearr_31610_34201[(2)] = ex__29823__auto__);


if(cljs.core.seq((state_31467[(4)]))){
var statearr_31612_34202 = state_31467;
(statearr_31612_34202[(1)] = cljs.core.first((state_31467[(4)])));

} else {
throw ex__29823__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34204 = state_31467;
state_31467 = G__34204;
continue;
} else {
return ret_value__29821__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29820__auto__ = function(state_31467){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29820__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29820__auto____1.call(this,state_31467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29820__auto____0;
cljs$core$async$mult_$_state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29820__auto____1;
return cljs$core$async$mult_$_state_machine__29820__auto__;
})()
})();
var state__30104__auto__ = (function (){var statearr_31614 = f__30103__auto__();
(statearr_31614[(6)] = c__30102__auto___34056);

return statearr_31614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30104__auto__);
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
var G__31616 = arguments.length;
switch (G__31616) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_34214 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_34214(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34217 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_34217(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34222 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34222(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34224 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_34224(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34227 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34227(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34235 = arguments.length;
var i__4737__auto___34236 = (0);
while(true){
if((i__4737__auto___34236 < len__4736__auto___34235)){
args__4742__auto__.push((arguments[i__4737__auto___34236]));

var G__34237 = (i__4737__auto___34236 + (1));
i__4737__auto___34236 = G__34237;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31653){
var map__31654 = p__31653;
var map__31654__$1 = (((((!((map__31654 == null))))?(((((map__31654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31654):map__31654);
var opts = map__31654__$1;
var statearr_31656_34240 = state;
(statearr_31656_34240[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31659_34242 = state;
(statearr_31659_34242[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31660_34245 = state;
(statearr_31660_34245[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31649){
var G__31650 = cljs.core.first(seq31649);
var seq31649__$1 = cljs.core.next(seq31649);
var G__31651 = cljs.core.first(seq31649__$1);
var seq31649__$2 = cljs.core.next(seq31649__$1);
var G__31652 = cljs.core.first(seq31649__$2);
var seq31649__$3 = cljs.core.next(seq31649__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31650,G__31651,G__31652,seq31649__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31663 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31663 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31664){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31664 = meta31664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31665,meta31664__$1){
var self__ = this;
var _31665__$1 = this;
return (new cljs.core.async.t_cljs$core$async31663(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31664__$1));
}));

(cljs.core.async.t_cljs$core$async31663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31665){
var self__ = this;
var _31665__$1 = this;
return self__.meta31664;
}));

(cljs.core.async.t_cljs$core$async31663.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31663.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31663.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31663.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31663.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31663.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31663.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31663.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31664","meta31664",-509655261,null)], null);
}));

(cljs.core.async.t_cljs$core$async31663.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31663");

(cljs.core.async.t_cljs$core$async31663.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31663");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31663.
 */
cljs.core.async.__GT_t_cljs$core$async31663 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31663(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31664){
return (new cljs.core.async.t_cljs$core$async31663(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31664));
});

}

return (new cljs.core.async.t_cljs$core$async31663(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30102__auto___34270 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30103__auto__ = (function (){var switch__29819__auto__ = (function (state_31773){
var state_val_31774 = (state_31773[(1)]);
if((state_val_31774 === (7))){
var inst_31684 = (state_31773[(2)]);
var state_31773__$1 = state_31773;
var statearr_31776_34281 = state_31773__$1;
(statearr_31776_34281[(2)] = inst_31684);

(statearr_31776_34281[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (20))){
var inst_31697 = (state_31773[(7)]);
var state_31773__$1 = state_31773;
var statearr_31777_34287 = state_31773__$1;
(statearr_31777_34287[(2)] = inst_31697);

(statearr_31777_34287[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (27))){
var state_31773__$1 = state_31773;
var statearr_31779_34292 = state_31773__$1;
(statearr_31779_34292[(2)] = null);

(statearr_31779_34292[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (1))){
var inst_31670 = (state_31773[(8)]);
var inst_31670__$1 = calc_state();
var inst_31672 = (inst_31670__$1 == null);
var inst_31673 = cljs.core.not(inst_31672);
var state_31773__$1 = (function (){var statearr_31780 = state_31773;
(statearr_31780[(8)] = inst_31670__$1);

return statearr_31780;
})();
if(inst_31673){
var statearr_31781_34305 = state_31773__$1;
(statearr_31781_34305[(1)] = (2));

} else {
var statearr_31782_34307 = state_31773__$1;
(statearr_31782_34307[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (24))){
var inst_31722 = (state_31773[(9)]);
var inst_31732 = (state_31773[(10)]);
var inst_31747 = (state_31773[(11)]);
var inst_31747__$1 = (inst_31722.cljs$core$IFn$_invoke$arity$1 ? inst_31722.cljs$core$IFn$_invoke$arity$1(inst_31732) : inst_31722.call(null,inst_31732));
var state_31773__$1 = (function (){var statearr_31784 = state_31773;
(statearr_31784[(11)] = inst_31747__$1);

return statearr_31784;
})();
if(cljs.core.truth_(inst_31747__$1)){
var statearr_31785_34319 = state_31773__$1;
(statearr_31785_34319[(1)] = (29));

} else {
var statearr_31786_34320 = state_31773__$1;
(statearr_31786_34320[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (4))){
var inst_31687 = (state_31773[(2)]);
var state_31773__$1 = state_31773;
if(cljs.core.truth_(inst_31687)){
var statearr_31789_34326 = state_31773__$1;
(statearr_31789_34326[(1)] = (8));

} else {
var statearr_31790_34327 = state_31773__$1;
(statearr_31790_34327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (15))){
var inst_31716 = (state_31773[(2)]);
var state_31773__$1 = state_31773;
if(cljs.core.truth_(inst_31716)){
var statearr_31794_34328 = state_31773__$1;
(statearr_31794_34328[(1)] = (19));

} else {
var statearr_31795_34329 = state_31773__$1;
(statearr_31795_34329[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (21))){
var inst_31721 = (state_31773[(12)]);
var inst_31721__$1 = (state_31773[(2)]);
var inst_31722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31721__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31721__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31721__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31773__$1 = (function (){var statearr_31796 = state_31773;
(statearr_31796[(9)] = inst_31722);

(statearr_31796[(13)] = inst_31723);

(statearr_31796[(12)] = inst_31721__$1);

return statearr_31796;
})();
return cljs.core.async.ioc_alts_BANG_(state_31773__$1,(22),inst_31724);
} else {
if((state_val_31774 === (31))){
var inst_31755 = (state_31773[(2)]);
var state_31773__$1 = state_31773;
if(cljs.core.truth_(inst_31755)){
var statearr_31797_34331 = state_31773__$1;
(statearr_31797_34331[(1)] = (32));

} else {
var statearr_31798_34332 = state_31773__$1;
(statearr_31798_34332[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (32))){
var inst_31730 = (state_31773[(14)]);
var state_31773__$1 = state_31773;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31773__$1,(35),out,inst_31730);
} else {
if((state_val_31774 === (33))){
var inst_31721 = (state_31773[(12)]);
var inst_31697 = inst_31721;
var state_31773__$1 = (function (){var statearr_31799 = state_31773;
(statearr_31799[(7)] = inst_31697);

return statearr_31799;
})();
var statearr_31802_34337 = state_31773__$1;
(statearr_31802_34337[(2)] = null);

(statearr_31802_34337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (13))){
var inst_31697 = (state_31773[(7)]);
var inst_31705 = inst_31697.cljs$lang$protocol_mask$partition0$;
var inst_31706 = (inst_31705 & (64));
var inst_31707 = inst_31697.cljs$core$ISeq$;
var inst_31708 = (cljs.core.PROTOCOL_SENTINEL === inst_31707);
var inst_31709 = ((inst_31706) || (inst_31708));
var state_31773__$1 = state_31773;
if(cljs.core.truth_(inst_31709)){
var statearr_31803_34338 = state_31773__$1;
(statearr_31803_34338[(1)] = (16));

} else {
var statearr_31804_34339 = state_31773__$1;
(statearr_31804_34339[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (22))){
var inst_31732 = (state_31773[(10)]);
var inst_31730 = (state_31773[(14)]);
var inst_31729 = (state_31773[(2)]);
var inst_31730__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31729,(0),null);
var inst_31732__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31729,(1),null);
var inst_31734 = (inst_31730__$1 == null);
var inst_31735 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31732__$1,change);
var inst_31736 = ((inst_31734) || (inst_31735));
var state_31773__$1 = (function (){var statearr_31805 = state_31773;
(statearr_31805[(10)] = inst_31732__$1);

(statearr_31805[(14)] = inst_31730__$1);

return statearr_31805;
})();
if(cljs.core.truth_(inst_31736)){
var statearr_31806_34343 = state_31773__$1;
(statearr_31806_34343[(1)] = (23));

} else {
var statearr_31807_34344 = state_31773__$1;
(statearr_31807_34344[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (36))){
var inst_31721 = (state_31773[(12)]);
var inst_31697 = inst_31721;
var state_31773__$1 = (function (){var statearr_31808 = state_31773;
(statearr_31808[(7)] = inst_31697);

return statearr_31808;
})();
var statearr_31810_34345 = state_31773__$1;
(statearr_31810_34345[(2)] = null);

(statearr_31810_34345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (29))){
var inst_31747 = (state_31773[(11)]);
var state_31773__$1 = state_31773;
var statearr_31813_34346 = state_31773__$1;
(statearr_31813_34346[(2)] = inst_31747);

(statearr_31813_34346[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (6))){
var state_31773__$1 = state_31773;
var statearr_31814_34347 = state_31773__$1;
(statearr_31814_34347[(2)] = false);

(statearr_31814_34347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (28))){
var inst_31743 = (state_31773[(2)]);
var inst_31744 = calc_state();
var inst_31697 = inst_31744;
var state_31773__$1 = (function (){var statearr_31823 = state_31773;
(statearr_31823[(7)] = inst_31697);

(statearr_31823[(15)] = inst_31743);

return statearr_31823;
})();
var statearr_31824_34349 = state_31773__$1;
(statearr_31824_34349[(2)] = null);

(statearr_31824_34349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (25))){
var inst_31769 = (state_31773[(2)]);
var state_31773__$1 = state_31773;
var statearr_31826_34350 = state_31773__$1;
(statearr_31826_34350[(2)] = inst_31769);

(statearr_31826_34350[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (34))){
var inst_31767 = (state_31773[(2)]);
var state_31773__$1 = state_31773;
var statearr_31830_34353 = state_31773__$1;
(statearr_31830_34353[(2)] = inst_31767);

(statearr_31830_34353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (17))){
var state_31773__$1 = state_31773;
var statearr_31832_34355 = state_31773__$1;
(statearr_31832_34355[(2)] = false);

(statearr_31832_34355[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (3))){
var state_31773__$1 = state_31773;
var statearr_31833_34358 = state_31773__$1;
(statearr_31833_34358[(2)] = false);

(statearr_31833_34358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (12))){
var inst_31771 = (state_31773[(2)]);
var state_31773__$1 = state_31773;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31773__$1,inst_31771);
} else {
if((state_val_31774 === (2))){
var inst_31670 = (state_31773[(8)]);
var inst_31676 = inst_31670.cljs$lang$protocol_mask$partition0$;
var inst_31677 = (inst_31676 & (64));
var inst_31678 = inst_31670.cljs$core$ISeq$;
var inst_31679 = (cljs.core.PROTOCOL_SENTINEL === inst_31678);
var inst_31680 = ((inst_31677) || (inst_31679));
var state_31773__$1 = state_31773;
if(cljs.core.truth_(inst_31680)){
var statearr_31838_34362 = state_31773__$1;
(statearr_31838_34362[(1)] = (5));

} else {
var statearr_31840_34363 = state_31773__$1;
(statearr_31840_34363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (23))){
var inst_31730 = (state_31773[(14)]);
var inst_31738 = (inst_31730 == null);
var state_31773__$1 = state_31773;
if(cljs.core.truth_(inst_31738)){
var statearr_31841_34364 = state_31773__$1;
(statearr_31841_34364[(1)] = (26));

} else {
var statearr_31842_34366 = state_31773__$1;
(statearr_31842_34366[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (35))){
var inst_31758 = (state_31773[(2)]);
var state_31773__$1 = state_31773;
if(cljs.core.truth_(inst_31758)){
var statearr_31846_34367 = state_31773__$1;
(statearr_31846_34367[(1)] = (36));

} else {
var statearr_31848_34369 = state_31773__$1;
(statearr_31848_34369[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (19))){
var inst_31697 = (state_31773[(7)]);
var inst_31718 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31697);
var state_31773__$1 = state_31773;
var statearr_31863_34373 = state_31773__$1;
(statearr_31863_34373[(2)] = inst_31718);

(statearr_31863_34373[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (11))){
var inst_31697 = (state_31773[(7)]);
var inst_31702 = (inst_31697 == null);
var inst_31703 = cljs.core.not(inst_31702);
var state_31773__$1 = state_31773;
if(inst_31703){
var statearr_31868_34375 = state_31773__$1;
(statearr_31868_34375[(1)] = (13));

} else {
var statearr_31870_34376 = state_31773__$1;
(statearr_31870_34376[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (9))){
var inst_31670 = (state_31773[(8)]);
var state_31773__$1 = state_31773;
var statearr_31874_34377 = state_31773__$1;
(statearr_31874_34377[(2)] = inst_31670);

(statearr_31874_34377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (5))){
var state_31773__$1 = state_31773;
var statearr_31877_34379 = state_31773__$1;
(statearr_31877_34379[(2)] = true);

(statearr_31877_34379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (14))){
var state_31773__$1 = state_31773;
var statearr_31878_34381 = state_31773__$1;
(statearr_31878_34381[(2)] = false);

(statearr_31878_34381[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (26))){
var inst_31732 = (state_31773[(10)]);
var inst_31740 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31732);
var state_31773__$1 = state_31773;
var statearr_31884_34382 = state_31773__$1;
(statearr_31884_34382[(2)] = inst_31740);

(statearr_31884_34382[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (16))){
var state_31773__$1 = state_31773;
var statearr_31905_34385 = state_31773__$1;
(statearr_31905_34385[(2)] = true);

(statearr_31905_34385[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (38))){
var inst_31763 = (state_31773[(2)]);
var state_31773__$1 = state_31773;
var statearr_31906_34387 = state_31773__$1;
(statearr_31906_34387[(2)] = inst_31763);

(statearr_31906_34387[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (30))){
var inst_31722 = (state_31773[(9)]);
var inst_31723 = (state_31773[(13)]);
var inst_31732 = (state_31773[(10)]);
var inst_31750 = cljs.core.empty_QMARK_(inst_31722);
var inst_31751 = (inst_31723.cljs$core$IFn$_invoke$arity$1 ? inst_31723.cljs$core$IFn$_invoke$arity$1(inst_31732) : inst_31723.call(null,inst_31732));
var inst_31752 = cljs.core.not(inst_31751);
var inst_31753 = ((inst_31750) && (inst_31752));
var state_31773__$1 = state_31773;
var statearr_31912_34390 = state_31773__$1;
(statearr_31912_34390[(2)] = inst_31753);

(statearr_31912_34390[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (10))){
var inst_31670 = (state_31773[(8)]);
var inst_31692 = (state_31773[(2)]);
var inst_31693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31692,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31692,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31692,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31697 = inst_31670;
var state_31773__$1 = (function (){var statearr_31915 = state_31773;
(statearr_31915[(7)] = inst_31697);

(statearr_31915[(16)] = inst_31694);

(statearr_31915[(17)] = inst_31695);

(statearr_31915[(18)] = inst_31693);

return statearr_31915;
})();
var statearr_31916_34398 = state_31773__$1;
(statearr_31916_34398[(2)] = null);

(statearr_31916_34398[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (18))){
var inst_31713 = (state_31773[(2)]);
var state_31773__$1 = state_31773;
var statearr_31923_34402 = state_31773__$1;
(statearr_31923_34402[(2)] = inst_31713);

(statearr_31923_34402[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (37))){
var state_31773__$1 = state_31773;
var statearr_31928_34409 = state_31773__$1;
(statearr_31928_34409[(2)] = null);

(statearr_31928_34409[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (8))){
var inst_31670 = (state_31773[(8)]);
var inst_31689 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31670);
var state_31773__$1 = state_31773;
var statearr_31932_34410 = state_31773__$1;
(statearr_31932_34410[(2)] = inst_31689);

(statearr_31932_34410[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__29820__auto__ = null;
var cljs$core$async$mix_$_state_machine__29820__auto____0 = (function (){
var statearr_31951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31951[(0)] = cljs$core$async$mix_$_state_machine__29820__auto__);

(statearr_31951[(1)] = (1));

return statearr_31951;
});
var cljs$core$async$mix_$_state_machine__29820__auto____1 = (function (state_31773){
while(true){
var ret_value__29821__auto__ = (function (){try{while(true){
var result__29822__auto__ = switch__29819__auto__(state_31773);
if(cljs.core.keyword_identical_QMARK_(result__29822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29822__auto__;
}
break;
}
}catch (e31953){var ex__29823__auto__ = e31953;
var statearr_31958_34414 = state_31773;
(statearr_31958_34414[(2)] = ex__29823__auto__);


if(cljs.core.seq((state_31773[(4)]))){
var statearr_31959_34416 = state_31773;
(statearr_31959_34416[(1)] = cljs.core.first((state_31773[(4)])));

} else {
throw ex__29823__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34417 = state_31773;
state_31773 = G__34417;
continue;
} else {
return ret_value__29821__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29820__auto__ = function(state_31773){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29820__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29820__auto____1.call(this,state_31773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29820__auto____0;
cljs$core$async$mix_$_state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29820__auto____1;
return cljs$core$async$mix_$_state_machine__29820__auto__;
})()
})();
var state__30104__auto__ = (function (){var statearr_31960 = f__30103__auto__();
(statearr_31960[(6)] = c__30102__auto___34270);

return statearr_31960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30104__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_34419 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_34419(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34422 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_34422(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34426 = (function() {
var G__34427 = null;
var G__34427__1 = (function (p){
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
var G__34427__2 = (function (p,v){
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
G__34427 = function(p,v){
switch(arguments.length){
case 1:
return G__34427__1.call(this,p);
case 2:
return G__34427__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34427.cljs$core$IFn$_invoke$arity$1 = G__34427__1;
G__34427.cljs$core$IFn$_invoke$arity$2 = G__34427__2;
return G__34427;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32007 = arguments.length;
switch (G__32007) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34426(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34426(p,v);
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
var G__32028 = arguments.length;
switch (G__32028) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32024_SHARP_){
if(cljs.core.truth_((p1__32024_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32024_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32024_SHARP_.call(null,topic)))){
return p1__32024_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32024_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32034 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32034 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32035){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32035 = meta32035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32036,meta32035__$1){
var self__ = this;
var _32036__$1 = this;
return (new cljs.core.async.t_cljs$core$async32034(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32035__$1));
}));

(cljs.core.async.t_cljs$core$async32034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32036){
var self__ = this;
var _32036__$1 = this;
return self__.meta32035;
}));

(cljs.core.async.t_cljs$core$async32034.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32034.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32034.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32034.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32034.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32034.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32034.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32035","meta32035",-1197964615,null)], null);
}));

(cljs.core.async.t_cljs$core$async32034.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32034");

(cljs.core.async.t_cljs$core$async32034.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32034");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32034.
 */
cljs.core.async.__GT_t_cljs$core$async32034 = (function cljs$core$async$__GT_t_cljs$core$async32034(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32035){
return (new cljs.core.async.t_cljs$core$async32034(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32035));
});

}

return (new cljs.core.async.t_cljs$core$async32034(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30102__auto___34455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30103__auto__ = (function (){var switch__29819__auto__ = (function (state_32154){
var state_val_32159 = (state_32154[(1)]);
if((state_val_32159 === (7))){
var inst_32145 = (state_32154[(2)]);
var state_32154__$1 = state_32154;
var statearr_32160_34456 = state_32154__$1;
(statearr_32160_34456[(2)] = inst_32145);

(statearr_32160_34456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (20))){
var state_32154__$1 = state_32154;
var statearr_32161_34457 = state_32154__$1;
(statearr_32161_34457[(2)] = null);

(statearr_32161_34457[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (1))){
var state_32154__$1 = state_32154;
var statearr_32162_34461 = state_32154__$1;
(statearr_32162_34461[(2)] = null);

(statearr_32162_34461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (24))){
var inst_32119 = (state_32154[(7)]);
var inst_32133 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32119);
var state_32154__$1 = state_32154;
var statearr_32165_34462 = state_32154__$1;
(statearr_32165_34462[(2)] = inst_32133);

(statearr_32165_34462[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (4))){
var inst_32062 = (state_32154[(8)]);
var inst_32062__$1 = (state_32154[(2)]);
var inst_32065 = (inst_32062__$1 == null);
var state_32154__$1 = (function (){var statearr_32166 = state_32154;
(statearr_32166[(8)] = inst_32062__$1);

return statearr_32166;
})();
if(cljs.core.truth_(inst_32065)){
var statearr_32167_34464 = state_32154__$1;
(statearr_32167_34464[(1)] = (5));

} else {
var statearr_32168_34465 = state_32154__$1;
(statearr_32168_34465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (15))){
var inst_32109 = (state_32154[(2)]);
var state_32154__$1 = state_32154;
var statearr_32170_34470 = state_32154__$1;
(statearr_32170_34470[(2)] = inst_32109);

(statearr_32170_34470[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (21))){
var inst_32138 = (state_32154[(2)]);
var state_32154__$1 = (function (){var statearr_32171 = state_32154;
(statearr_32171[(9)] = inst_32138);

return statearr_32171;
})();
var statearr_32172_34471 = state_32154__$1;
(statearr_32172_34471[(2)] = null);

(statearr_32172_34471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (13))){
var inst_32091 = (state_32154[(10)]);
var inst_32093 = cljs.core.chunked_seq_QMARK_(inst_32091);
var state_32154__$1 = state_32154;
if(inst_32093){
var statearr_32173_34473 = state_32154__$1;
(statearr_32173_34473[(1)] = (16));

} else {
var statearr_32174_34475 = state_32154__$1;
(statearr_32174_34475[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (22))){
var inst_32130 = (state_32154[(2)]);
var state_32154__$1 = state_32154;
if(cljs.core.truth_(inst_32130)){
var statearr_32175_34476 = state_32154__$1;
(statearr_32175_34476[(1)] = (23));

} else {
var statearr_32176_34477 = state_32154__$1;
(statearr_32176_34477[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (6))){
var inst_32119 = (state_32154[(7)]);
var inst_32062 = (state_32154[(8)]);
var inst_32125 = (state_32154[(11)]);
var inst_32119__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32062) : topic_fn.call(null,inst_32062));
var inst_32120 = cljs.core.deref(mults);
var inst_32125__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32120,inst_32119__$1);
var state_32154__$1 = (function (){var statearr_32178 = state_32154;
(statearr_32178[(7)] = inst_32119__$1);

(statearr_32178[(11)] = inst_32125__$1);

return statearr_32178;
})();
if(cljs.core.truth_(inst_32125__$1)){
var statearr_32180_34488 = state_32154__$1;
(statearr_32180_34488[(1)] = (19));

} else {
var statearr_32181_34489 = state_32154__$1;
(statearr_32181_34489[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (25))){
var inst_32135 = (state_32154[(2)]);
var state_32154__$1 = state_32154;
var statearr_32182_34490 = state_32154__$1;
(statearr_32182_34490[(2)] = inst_32135);

(statearr_32182_34490[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (17))){
var inst_32091 = (state_32154[(10)]);
var inst_32100 = cljs.core.first(inst_32091);
var inst_32101 = cljs.core.async.muxch_STAR_(inst_32100);
var inst_32102 = cljs.core.async.close_BANG_(inst_32101);
var inst_32103 = cljs.core.next(inst_32091);
var inst_32074 = inst_32103;
var inst_32075 = null;
var inst_32076 = (0);
var inst_32077 = (0);
var state_32154__$1 = (function (){var statearr_32183 = state_32154;
(statearr_32183[(12)] = inst_32074);

(statearr_32183[(13)] = inst_32075);

(statearr_32183[(14)] = inst_32076);

(statearr_32183[(15)] = inst_32102);

(statearr_32183[(16)] = inst_32077);

return statearr_32183;
})();
var statearr_32184_34498 = state_32154__$1;
(statearr_32184_34498[(2)] = null);

(statearr_32184_34498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (3))){
var inst_32147 = (state_32154[(2)]);
var state_32154__$1 = state_32154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32154__$1,inst_32147);
} else {
if((state_val_32159 === (12))){
var inst_32111 = (state_32154[(2)]);
var state_32154__$1 = state_32154;
var statearr_32187_34499 = state_32154__$1;
(statearr_32187_34499[(2)] = inst_32111);

(statearr_32187_34499[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (2))){
var state_32154__$1 = state_32154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32154__$1,(4),ch);
} else {
if((state_val_32159 === (23))){
var state_32154__$1 = state_32154;
var statearr_32189_34501 = state_32154__$1;
(statearr_32189_34501[(2)] = null);

(statearr_32189_34501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (19))){
var inst_32062 = (state_32154[(8)]);
var inst_32125 = (state_32154[(11)]);
var inst_32127 = cljs.core.async.muxch_STAR_(inst_32125);
var state_32154__$1 = state_32154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32154__$1,(22),inst_32127,inst_32062);
} else {
if((state_val_32159 === (11))){
var inst_32074 = (state_32154[(12)]);
var inst_32091 = (state_32154[(10)]);
var inst_32091__$1 = cljs.core.seq(inst_32074);
var state_32154__$1 = (function (){var statearr_32190 = state_32154;
(statearr_32190[(10)] = inst_32091__$1);

return statearr_32190;
})();
if(inst_32091__$1){
var statearr_32191_34503 = state_32154__$1;
(statearr_32191_34503[(1)] = (13));

} else {
var statearr_32192_34504 = state_32154__$1;
(statearr_32192_34504[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (9))){
var inst_32113 = (state_32154[(2)]);
var state_32154__$1 = state_32154;
var statearr_32193_34505 = state_32154__$1;
(statearr_32193_34505[(2)] = inst_32113);

(statearr_32193_34505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (5))){
var inst_32071 = cljs.core.deref(mults);
var inst_32072 = cljs.core.vals(inst_32071);
var inst_32073 = cljs.core.seq(inst_32072);
var inst_32074 = inst_32073;
var inst_32075 = null;
var inst_32076 = (0);
var inst_32077 = (0);
var state_32154__$1 = (function (){var statearr_32198 = state_32154;
(statearr_32198[(12)] = inst_32074);

(statearr_32198[(13)] = inst_32075);

(statearr_32198[(14)] = inst_32076);

(statearr_32198[(16)] = inst_32077);

return statearr_32198;
})();
var statearr_32201_34507 = state_32154__$1;
(statearr_32201_34507[(2)] = null);

(statearr_32201_34507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (14))){
var state_32154__$1 = state_32154;
var statearr_32205_34514 = state_32154__$1;
(statearr_32205_34514[(2)] = null);

(statearr_32205_34514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (16))){
var inst_32091 = (state_32154[(10)]);
var inst_32095 = cljs.core.chunk_first(inst_32091);
var inst_32096 = cljs.core.chunk_rest(inst_32091);
var inst_32097 = cljs.core.count(inst_32095);
var inst_32074 = inst_32096;
var inst_32075 = inst_32095;
var inst_32076 = inst_32097;
var inst_32077 = (0);
var state_32154__$1 = (function (){var statearr_32206 = state_32154;
(statearr_32206[(12)] = inst_32074);

(statearr_32206[(13)] = inst_32075);

(statearr_32206[(14)] = inst_32076);

(statearr_32206[(16)] = inst_32077);

return statearr_32206;
})();
var statearr_32208_34516 = state_32154__$1;
(statearr_32208_34516[(2)] = null);

(statearr_32208_34516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (10))){
var inst_32074 = (state_32154[(12)]);
var inst_32075 = (state_32154[(13)]);
var inst_32076 = (state_32154[(14)]);
var inst_32077 = (state_32154[(16)]);
var inst_32085 = cljs.core._nth(inst_32075,inst_32077);
var inst_32086 = cljs.core.async.muxch_STAR_(inst_32085);
var inst_32087 = cljs.core.async.close_BANG_(inst_32086);
var inst_32088 = (inst_32077 + (1));
var tmp32202 = inst_32074;
var tmp32203 = inst_32075;
var tmp32204 = inst_32076;
var inst_32074__$1 = tmp32202;
var inst_32075__$1 = tmp32203;
var inst_32076__$1 = tmp32204;
var inst_32077__$1 = inst_32088;
var state_32154__$1 = (function (){var statearr_32210 = state_32154;
(statearr_32210[(12)] = inst_32074__$1);

(statearr_32210[(13)] = inst_32075__$1);

(statearr_32210[(14)] = inst_32076__$1);

(statearr_32210[(17)] = inst_32087);

(statearr_32210[(16)] = inst_32077__$1);

return statearr_32210;
})();
var statearr_32214_34518 = state_32154__$1;
(statearr_32214_34518[(2)] = null);

(statearr_32214_34518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (18))){
var inst_32106 = (state_32154[(2)]);
var state_32154__$1 = state_32154;
var statearr_32219_34519 = state_32154__$1;
(statearr_32219_34519[(2)] = inst_32106);

(statearr_32219_34519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (8))){
var inst_32076 = (state_32154[(14)]);
var inst_32077 = (state_32154[(16)]);
var inst_32081 = (inst_32077 < inst_32076);
var inst_32082 = inst_32081;
var state_32154__$1 = state_32154;
if(cljs.core.truth_(inst_32082)){
var statearr_32225_34520 = state_32154__$1;
(statearr_32225_34520[(1)] = (10));

} else {
var statearr_32230_34521 = state_32154__$1;
(statearr_32230_34521[(1)] = (11));

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
var cljs$core$async$state_machine__29820__auto__ = null;
var cljs$core$async$state_machine__29820__auto____0 = (function (){
var statearr_32236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32236[(0)] = cljs$core$async$state_machine__29820__auto__);

(statearr_32236[(1)] = (1));

return statearr_32236;
});
var cljs$core$async$state_machine__29820__auto____1 = (function (state_32154){
while(true){
var ret_value__29821__auto__ = (function (){try{while(true){
var result__29822__auto__ = switch__29819__auto__(state_32154);
if(cljs.core.keyword_identical_QMARK_(result__29822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29822__auto__;
}
break;
}
}catch (e32241){var ex__29823__auto__ = e32241;
var statearr_32242_34528 = state_32154;
(statearr_32242_34528[(2)] = ex__29823__auto__);


if(cljs.core.seq((state_32154[(4)]))){
var statearr_32243_34530 = state_32154;
(statearr_32243_34530[(1)] = cljs.core.first((state_32154[(4)])));

} else {
throw ex__29823__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34531 = state_32154;
state_32154 = G__34531;
continue;
} else {
return ret_value__29821__auto__;
}
break;
}
});
cljs$core$async$state_machine__29820__auto__ = function(state_32154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29820__auto____1.call(this,state_32154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29820__auto____0;
cljs$core$async$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29820__auto____1;
return cljs$core$async$state_machine__29820__auto__;
})()
})();
var state__30104__auto__ = (function (){var statearr_32244 = f__30103__auto__();
(statearr_32244[(6)] = c__30102__auto___34455);

return statearr_32244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30104__auto__);
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
var G__32256 = arguments.length;
switch (G__32256) {
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
var G__32260 = arguments.length;
switch (G__32260) {
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
var G__32267 = arguments.length;
switch (G__32267) {
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
var c__30102__auto___34544 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30103__auto__ = (function (){var switch__29819__auto__ = (function (state_32313){
var state_val_32314 = (state_32313[(1)]);
if((state_val_32314 === (7))){
var state_32313__$1 = state_32313;
var statearr_32316_34545 = state_32313__$1;
(statearr_32316_34545[(2)] = null);

(statearr_32316_34545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (1))){
var state_32313__$1 = state_32313;
var statearr_32317_34546 = state_32313__$1;
(statearr_32317_34546[(2)] = null);

(statearr_32317_34546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (4))){
var inst_32273 = (state_32313[(7)]);
var inst_32272 = (state_32313[(8)]);
var inst_32276 = (inst_32273 < inst_32272);
var state_32313__$1 = state_32313;
if(cljs.core.truth_(inst_32276)){
var statearr_32318_34547 = state_32313__$1;
(statearr_32318_34547[(1)] = (6));

} else {
var statearr_32319_34548 = state_32313__$1;
(statearr_32319_34548[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (15))){
var inst_32299 = (state_32313[(9)]);
var inst_32304 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32299);
var state_32313__$1 = state_32313;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32313__$1,(17),out,inst_32304);
} else {
if((state_val_32314 === (13))){
var inst_32299 = (state_32313[(9)]);
var inst_32299__$1 = (state_32313[(2)]);
var inst_32300 = cljs.core.some(cljs.core.nil_QMARK_,inst_32299__$1);
var state_32313__$1 = (function (){var statearr_32326 = state_32313;
(statearr_32326[(9)] = inst_32299__$1);

return statearr_32326;
})();
if(cljs.core.truth_(inst_32300)){
var statearr_32327_34553 = state_32313__$1;
(statearr_32327_34553[(1)] = (14));

} else {
var statearr_32328_34554 = state_32313__$1;
(statearr_32328_34554[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (6))){
var state_32313__$1 = state_32313;
var statearr_32330_34555 = state_32313__$1;
(statearr_32330_34555[(2)] = null);

(statearr_32330_34555[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (17))){
var inst_32306 = (state_32313[(2)]);
var state_32313__$1 = (function (){var statearr_32332 = state_32313;
(statearr_32332[(10)] = inst_32306);

return statearr_32332;
})();
var statearr_32333_34556 = state_32313__$1;
(statearr_32333_34556[(2)] = null);

(statearr_32333_34556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (3))){
var inst_32311 = (state_32313[(2)]);
var state_32313__$1 = state_32313;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32313__$1,inst_32311);
} else {
if((state_val_32314 === (12))){
var _ = (function (){var statearr_32334 = state_32313;
(statearr_32334[(4)] = cljs.core.rest((state_32313[(4)])));

return statearr_32334;
})();
var state_32313__$1 = state_32313;
var ex32331 = (state_32313__$1[(2)]);
var statearr_32336_34557 = state_32313__$1;
(statearr_32336_34557[(5)] = ex32331);


if((ex32331 instanceof Object)){
var statearr_32337_34558 = state_32313__$1;
(statearr_32337_34558[(1)] = (11));

(statearr_32337_34558[(5)] = null);

} else {
throw ex32331;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (2))){
var inst_32271 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32272 = cnt;
var inst_32273 = (0);
var state_32313__$1 = (function (){var statearr_32342 = state_32313;
(statearr_32342[(11)] = inst_32271);

(statearr_32342[(7)] = inst_32273);

(statearr_32342[(8)] = inst_32272);

return statearr_32342;
})();
var statearr_32343_34561 = state_32313__$1;
(statearr_32343_34561[(2)] = null);

(statearr_32343_34561[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (11))){
var inst_32278 = (state_32313[(2)]);
var inst_32279 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32313__$1 = (function (){var statearr_32344 = state_32313;
(statearr_32344[(12)] = inst_32278);

return statearr_32344;
})();
var statearr_32345_34562 = state_32313__$1;
(statearr_32345_34562[(2)] = inst_32279);

(statearr_32345_34562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (9))){
var inst_32273 = (state_32313[(7)]);
var _ = (function (){var statearr_32347 = state_32313;
(statearr_32347[(4)] = cljs.core.cons((12),(state_32313[(4)])));

return statearr_32347;
})();
var inst_32285 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32273) : chs__$1.call(null,inst_32273));
var inst_32286 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32273) : done.call(null,inst_32273));
var inst_32287 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32285,inst_32286);
var ___$1 = (function (){var statearr_32348 = state_32313;
(statearr_32348[(4)] = cljs.core.rest((state_32313[(4)])));

return statearr_32348;
})();
var state_32313__$1 = state_32313;
var statearr_32349_34563 = state_32313__$1;
(statearr_32349_34563[(2)] = inst_32287);

(statearr_32349_34563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (5))){
var inst_32297 = (state_32313[(2)]);
var state_32313__$1 = (function (){var statearr_32351 = state_32313;
(statearr_32351[(13)] = inst_32297);

return statearr_32351;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32313__$1,(13),dchan);
} else {
if((state_val_32314 === (14))){
var inst_32302 = cljs.core.async.close_BANG_(out);
var state_32313__$1 = state_32313;
var statearr_32352_34564 = state_32313__$1;
(statearr_32352_34564[(2)] = inst_32302);

(statearr_32352_34564[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (16))){
var inst_32309 = (state_32313[(2)]);
var state_32313__$1 = state_32313;
var statearr_32353_34565 = state_32313__$1;
(statearr_32353_34565[(2)] = inst_32309);

(statearr_32353_34565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (10))){
var inst_32273 = (state_32313[(7)]);
var inst_32290 = (state_32313[(2)]);
var inst_32291 = (inst_32273 + (1));
var inst_32273__$1 = inst_32291;
var state_32313__$1 = (function (){var statearr_32354 = state_32313;
(statearr_32354[(7)] = inst_32273__$1);

(statearr_32354[(14)] = inst_32290);

return statearr_32354;
})();
var statearr_32356_34568 = state_32313__$1;
(statearr_32356_34568[(2)] = null);

(statearr_32356_34568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (8))){
var inst_32295 = (state_32313[(2)]);
var state_32313__$1 = state_32313;
var statearr_32357_34569 = state_32313__$1;
(statearr_32357_34569[(2)] = inst_32295);

(statearr_32357_34569[(1)] = (5));


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
var cljs$core$async$state_machine__29820__auto__ = null;
var cljs$core$async$state_machine__29820__auto____0 = (function (){
var statearr_32359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32359[(0)] = cljs$core$async$state_machine__29820__auto__);

(statearr_32359[(1)] = (1));

return statearr_32359;
});
var cljs$core$async$state_machine__29820__auto____1 = (function (state_32313){
while(true){
var ret_value__29821__auto__ = (function (){try{while(true){
var result__29822__auto__ = switch__29819__auto__(state_32313);
if(cljs.core.keyword_identical_QMARK_(result__29822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29822__auto__;
}
break;
}
}catch (e32360){var ex__29823__auto__ = e32360;
var statearr_32361_34584 = state_32313;
(statearr_32361_34584[(2)] = ex__29823__auto__);


if(cljs.core.seq((state_32313[(4)]))){
var statearr_32362_34591 = state_32313;
(statearr_32362_34591[(1)] = cljs.core.first((state_32313[(4)])));

} else {
throw ex__29823__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34592 = state_32313;
state_32313 = G__34592;
continue;
} else {
return ret_value__29821__auto__;
}
break;
}
});
cljs$core$async$state_machine__29820__auto__ = function(state_32313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29820__auto____1.call(this,state_32313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29820__auto____0;
cljs$core$async$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29820__auto____1;
return cljs$core$async$state_machine__29820__auto__;
})()
})();
var state__30104__auto__ = (function (){var statearr_32363 = f__30103__auto__();
(statearr_32363[(6)] = c__30102__auto___34544);

return statearr_32363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30104__auto__);
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
var G__32367 = arguments.length;
switch (G__32367) {
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
var c__30102__auto___34607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30103__auto__ = (function (){var switch__29819__auto__ = (function (state_32400){
var state_val_32401 = (state_32400[(1)]);
if((state_val_32401 === (7))){
var inst_32380 = (state_32400[(7)]);
var inst_32378 = (state_32400[(8)]);
var inst_32378__$1 = (state_32400[(2)]);
var inst_32380__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32378__$1,(0),null);
var inst_32381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32378__$1,(1),null);
var inst_32382 = (inst_32380__$1 == null);
var state_32400__$1 = (function (){var statearr_32402 = state_32400;
(statearr_32402[(7)] = inst_32380__$1);

(statearr_32402[(8)] = inst_32378__$1);

(statearr_32402[(9)] = inst_32381);

return statearr_32402;
})();
if(cljs.core.truth_(inst_32382)){
var statearr_32403_34621 = state_32400__$1;
(statearr_32403_34621[(1)] = (8));

} else {
var statearr_32404_34623 = state_32400__$1;
(statearr_32404_34623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (1))){
var inst_32368 = cljs.core.vec(chs);
var inst_32369 = inst_32368;
var state_32400__$1 = (function (){var statearr_32406 = state_32400;
(statearr_32406[(10)] = inst_32369);

return statearr_32406;
})();
var statearr_32407_34624 = state_32400__$1;
(statearr_32407_34624[(2)] = null);

(statearr_32407_34624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (4))){
var inst_32369 = (state_32400[(10)]);
var state_32400__$1 = state_32400;
return cljs.core.async.ioc_alts_BANG_(state_32400__$1,(7),inst_32369);
} else {
if((state_val_32401 === (6))){
var inst_32396 = (state_32400[(2)]);
var state_32400__$1 = state_32400;
var statearr_32408_34628 = state_32400__$1;
(statearr_32408_34628[(2)] = inst_32396);

(statearr_32408_34628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (3))){
var inst_32398 = (state_32400[(2)]);
var state_32400__$1 = state_32400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32400__$1,inst_32398);
} else {
if((state_val_32401 === (2))){
var inst_32369 = (state_32400[(10)]);
var inst_32371 = cljs.core.count(inst_32369);
var inst_32372 = (inst_32371 > (0));
var state_32400__$1 = state_32400;
if(cljs.core.truth_(inst_32372)){
var statearr_32411_34632 = state_32400__$1;
(statearr_32411_34632[(1)] = (4));

} else {
var statearr_32412_34634 = state_32400__$1;
(statearr_32412_34634[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (11))){
var inst_32369 = (state_32400[(10)]);
var inst_32389 = (state_32400[(2)]);
var tmp32409 = inst_32369;
var inst_32369__$1 = tmp32409;
var state_32400__$1 = (function (){var statearr_32413 = state_32400;
(statearr_32413[(10)] = inst_32369__$1);

(statearr_32413[(11)] = inst_32389);

return statearr_32413;
})();
var statearr_32415_34636 = state_32400__$1;
(statearr_32415_34636[(2)] = null);

(statearr_32415_34636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (9))){
var inst_32380 = (state_32400[(7)]);
var state_32400__$1 = state_32400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32400__$1,(11),out,inst_32380);
} else {
if((state_val_32401 === (5))){
var inst_32394 = cljs.core.async.close_BANG_(out);
var state_32400__$1 = state_32400;
var statearr_32416_34637 = state_32400__$1;
(statearr_32416_34637[(2)] = inst_32394);

(statearr_32416_34637[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (10))){
var inst_32392 = (state_32400[(2)]);
var state_32400__$1 = state_32400;
var statearr_32418_34638 = state_32400__$1;
(statearr_32418_34638[(2)] = inst_32392);

(statearr_32418_34638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (8))){
var inst_32380 = (state_32400[(7)]);
var inst_32369 = (state_32400[(10)]);
var inst_32378 = (state_32400[(8)]);
var inst_32381 = (state_32400[(9)]);
var inst_32384 = (function (){var cs = inst_32369;
var vec__32374 = inst_32378;
var v = inst_32380;
var c = inst_32381;
return (function (p1__32365_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32365_SHARP_);
});
})();
var inst_32385 = cljs.core.filterv(inst_32384,inst_32369);
var inst_32369__$1 = inst_32385;
var state_32400__$1 = (function (){var statearr_32421 = state_32400;
(statearr_32421[(10)] = inst_32369__$1);

return statearr_32421;
})();
var statearr_32422_34642 = state_32400__$1;
(statearr_32422_34642[(2)] = null);

(statearr_32422_34642[(1)] = (2));


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
var cljs$core$async$state_machine__29820__auto__ = null;
var cljs$core$async$state_machine__29820__auto____0 = (function (){
var statearr_32423 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32423[(0)] = cljs$core$async$state_machine__29820__auto__);

(statearr_32423[(1)] = (1));

return statearr_32423;
});
var cljs$core$async$state_machine__29820__auto____1 = (function (state_32400){
while(true){
var ret_value__29821__auto__ = (function (){try{while(true){
var result__29822__auto__ = switch__29819__auto__(state_32400);
if(cljs.core.keyword_identical_QMARK_(result__29822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29822__auto__;
}
break;
}
}catch (e32424){var ex__29823__auto__ = e32424;
var statearr_32425_34643 = state_32400;
(statearr_32425_34643[(2)] = ex__29823__auto__);


if(cljs.core.seq((state_32400[(4)]))){
var statearr_32426_34644 = state_32400;
(statearr_32426_34644[(1)] = cljs.core.first((state_32400[(4)])));

} else {
throw ex__29823__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34646 = state_32400;
state_32400 = G__34646;
continue;
} else {
return ret_value__29821__auto__;
}
break;
}
});
cljs$core$async$state_machine__29820__auto__ = function(state_32400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29820__auto____1.call(this,state_32400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29820__auto____0;
cljs$core$async$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29820__auto____1;
return cljs$core$async$state_machine__29820__auto__;
})()
})();
var state__30104__auto__ = (function (){var statearr_32433 = f__30103__auto__();
(statearr_32433[(6)] = c__30102__auto___34607);

return statearr_32433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30104__auto__);
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
var G__32436 = arguments.length;
switch (G__32436) {
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
var c__30102__auto___34649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30103__auto__ = (function (){var switch__29819__auto__ = (function (state_32462){
var state_val_32463 = (state_32462[(1)]);
if((state_val_32463 === (7))){
var inst_32444 = (state_32462[(7)]);
var inst_32444__$1 = (state_32462[(2)]);
var inst_32445 = (inst_32444__$1 == null);
var inst_32446 = cljs.core.not(inst_32445);
var state_32462__$1 = (function (){var statearr_32471 = state_32462;
(statearr_32471[(7)] = inst_32444__$1);

return statearr_32471;
})();
if(inst_32446){
var statearr_32472_34650 = state_32462__$1;
(statearr_32472_34650[(1)] = (8));

} else {
var statearr_32473_34651 = state_32462__$1;
(statearr_32473_34651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32463 === (1))){
var inst_32439 = (0);
var state_32462__$1 = (function (){var statearr_32478 = state_32462;
(statearr_32478[(8)] = inst_32439);

return statearr_32478;
})();
var statearr_32479_34652 = state_32462__$1;
(statearr_32479_34652[(2)] = null);

(statearr_32479_34652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32463 === (4))){
var state_32462__$1 = state_32462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32462__$1,(7),ch);
} else {
if((state_val_32463 === (6))){
var inst_32457 = (state_32462[(2)]);
var state_32462__$1 = state_32462;
var statearr_32482_34653 = state_32462__$1;
(statearr_32482_34653[(2)] = inst_32457);

(statearr_32482_34653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32463 === (3))){
var inst_32459 = (state_32462[(2)]);
var inst_32460 = cljs.core.async.close_BANG_(out);
var state_32462__$1 = (function (){var statearr_32483 = state_32462;
(statearr_32483[(9)] = inst_32459);

return statearr_32483;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32462__$1,inst_32460);
} else {
if((state_val_32463 === (2))){
var inst_32439 = (state_32462[(8)]);
var inst_32441 = (inst_32439 < n);
var state_32462__$1 = state_32462;
if(cljs.core.truth_(inst_32441)){
var statearr_32484_34654 = state_32462__$1;
(statearr_32484_34654[(1)] = (4));

} else {
var statearr_32485_34655 = state_32462__$1;
(statearr_32485_34655[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32463 === (11))){
var inst_32439 = (state_32462[(8)]);
var inst_32449 = (state_32462[(2)]);
var inst_32450 = (inst_32439 + (1));
var inst_32439__$1 = inst_32450;
var state_32462__$1 = (function (){var statearr_32486 = state_32462;
(statearr_32486[(10)] = inst_32449);

(statearr_32486[(8)] = inst_32439__$1);

return statearr_32486;
})();
var statearr_32487_34656 = state_32462__$1;
(statearr_32487_34656[(2)] = null);

(statearr_32487_34656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32463 === (9))){
var state_32462__$1 = state_32462;
var statearr_32489_34657 = state_32462__$1;
(statearr_32489_34657[(2)] = null);

(statearr_32489_34657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32463 === (5))){
var state_32462__$1 = state_32462;
var statearr_32490_34659 = state_32462__$1;
(statearr_32490_34659[(2)] = null);

(statearr_32490_34659[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32463 === (10))){
var inst_32454 = (state_32462[(2)]);
var state_32462__$1 = state_32462;
var statearr_32496_34660 = state_32462__$1;
(statearr_32496_34660[(2)] = inst_32454);

(statearr_32496_34660[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32463 === (8))){
var inst_32444 = (state_32462[(7)]);
var state_32462__$1 = state_32462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32462__$1,(11),out,inst_32444);
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
var cljs$core$async$state_machine__29820__auto__ = null;
var cljs$core$async$state_machine__29820__auto____0 = (function (){
var statearr_32497 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32497[(0)] = cljs$core$async$state_machine__29820__auto__);

(statearr_32497[(1)] = (1));

return statearr_32497;
});
var cljs$core$async$state_machine__29820__auto____1 = (function (state_32462){
while(true){
var ret_value__29821__auto__ = (function (){try{while(true){
var result__29822__auto__ = switch__29819__auto__(state_32462);
if(cljs.core.keyword_identical_QMARK_(result__29822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29822__auto__;
}
break;
}
}catch (e32499){var ex__29823__auto__ = e32499;
var statearr_32500_34662 = state_32462;
(statearr_32500_34662[(2)] = ex__29823__auto__);


if(cljs.core.seq((state_32462[(4)]))){
var statearr_32504_34664 = state_32462;
(statearr_32504_34664[(1)] = cljs.core.first((state_32462[(4)])));

} else {
throw ex__29823__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34665 = state_32462;
state_32462 = G__34665;
continue;
} else {
return ret_value__29821__auto__;
}
break;
}
});
cljs$core$async$state_machine__29820__auto__ = function(state_32462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29820__auto____1.call(this,state_32462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29820__auto____0;
cljs$core$async$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29820__auto____1;
return cljs$core$async$state_machine__29820__auto__;
})()
})();
var state__30104__auto__ = (function (){var statearr_32506 = f__30103__auto__();
(statearr_32506[(6)] = c__30102__auto___34649);

return statearr_32506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30104__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32514 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32514 = (function (f,ch,meta32515){
this.f = f;
this.ch = ch;
this.meta32515 = meta32515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32516,meta32515__$1){
var self__ = this;
var _32516__$1 = this;
return (new cljs.core.async.t_cljs$core$async32514(self__.f,self__.ch,meta32515__$1));
}));

(cljs.core.async.t_cljs$core$async32514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32516){
var self__ = this;
var _32516__$1 = this;
return self__.meta32515;
}));

(cljs.core.async.t_cljs$core$async32514.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32514.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32514.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32514.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32514.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32522 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32522 = (function (f,ch,meta32515,_,fn1,meta32523){
this.f = f;
this.ch = ch;
this.meta32515 = meta32515;
this._ = _;
this.fn1 = fn1;
this.meta32523 = meta32523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32524,meta32523__$1){
var self__ = this;
var _32524__$1 = this;
return (new cljs.core.async.t_cljs$core$async32522(self__.f,self__.ch,self__.meta32515,self__._,self__.fn1,meta32523__$1));
}));

(cljs.core.async.t_cljs$core$async32522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32524){
var self__ = this;
var _32524__$1 = this;
return self__.meta32523;
}));

(cljs.core.async.t_cljs$core$async32522.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32522.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32522.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32522.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32509_SHARP_){
var G__32540 = (((p1__32509_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32509_SHARP_) : self__.f.call(null,p1__32509_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32540) : f1.call(null,G__32540));
});
}));

(cljs.core.async.t_cljs$core$async32522.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32515","meta32515",828343379,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32514","cljs.core.async/t_cljs$core$async32514",1635136760,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32523","meta32523",884640823,null)], null);
}));

(cljs.core.async.t_cljs$core$async32522.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32522.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32522");

(cljs.core.async.t_cljs$core$async32522.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32522");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32522.
 */
cljs.core.async.__GT_t_cljs$core$async32522 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32522(f__$1,ch__$1,meta32515__$1,___$2,fn1__$1,meta32523){
return (new cljs.core.async.t_cljs$core$async32522(f__$1,ch__$1,meta32515__$1,___$2,fn1__$1,meta32523));
});

}

return (new cljs.core.async.t_cljs$core$async32522(self__.f,self__.ch,self__.meta32515,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32541 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32541) : self__.f.call(null,G__32541));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32514.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32514.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32514.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32515","meta32515",828343379,null)], null);
}));

(cljs.core.async.t_cljs$core$async32514.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32514");

(cljs.core.async.t_cljs$core$async32514.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32514");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32514.
 */
cljs.core.async.__GT_t_cljs$core$async32514 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32514(f__$1,ch__$1,meta32515){
return (new cljs.core.async.t_cljs$core$async32514(f__$1,ch__$1,meta32515));
});

}

return (new cljs.core.async.t_cljs$core$async32514(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32544 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32544 = (function (f,ch,meta32545){
this.f = f;
this.ch = ch;
this.meta32545 = meta32545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32546,meta32545__$1){
var self__ = this;
var _32546__$1 = this;
return (new cljs.core.async.t_cljs$core$async32544(self__.f,self__.ch,meta32545__$1));
}));

(cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32546){
var self__ = this;
var _32546__$1 = this;
return self__.meta32545;
}));

(cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32545","meta32545",-918400377,null)], null);
}));

(cljs.core.async.t_cljs$core$async32544.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32544");

(cljs.core.async.t_cljs$core$async32544.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32544");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32544.
 */
cljs.core.async.__GT_t_cljs$core$async32544 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32544(f__$1,ch__$1,meta32545){
return (new cljs.core.async.t_cljs$core$async32544(f__$1,ch__$1,meta32545));
});

}

return (new cljs.core.async.t_cljs$core$async32544(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32552 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32552 = (function (p,ch,meta32553){
this.p = p;
this.ch = ch;
this.meta32553 = meta32553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32554,meta32553__$1){
var self__ = this;
var _32554__$1 = this;
return (new cljs.core.async.t_cljs$core$async32552(self__.p,self__.ch,meta32553__$1));
}));

(cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32554){
var self__ = this;
var _32554__$1 = this;
return self__.meta32553;
}));

(cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32553","meta32553",-270231369,null)], null);
}));

(cljs.core.async.t_cljs$core$async32552.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32552");

(cljs.core.async.t_cljs$core$async32552.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32552");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32552.
 */
cljs.core.async.__GT_t_cljs$core$async32552 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32552(p__$1,ch__$1,meta32553){
return (new cljs.core.async.t_cljs$core$async32552(p__$1,ch__$1,meta32553));
});

}

return (new cljs.core.async.t_cljs$core$async32552(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32600 = arguments.length;
switch (G__32600) {
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
var c__30102__auto___34703 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30103__auto__ = (function (){var switch__29819__auto__ = (function (state_32627){
var state_val_32628 = (state_32627[(1)]);
if((state_val_32628 === (7))){
var inst_32623 = (state_32627[(2)]);
var state_32627__$1 = state_32627;
var statearr_32631_34708 = state_32627__$1;
(statearr_32631_34708[(2)] = inst_32623);

(statearr_32631_34708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (1))){
var state_32627__$1 = state_32627;
var statearr_32632_34709 = state_32627__$1;
(statearr_32632_34709[(2)] = null);

(statearr_32632_34709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (4))){
var inst_32608 = (state_32627[(7)]);
var inst_32608__$1 = (state_32627[(2)]);
var inst_32609 = (inst_32608__$1 == null);
var state_32627__$1 = (function (){var statearr_32633 = state_32627;
(statearr_32633[(7)] = inst_32608__$1);

return statearr_32633;
})();
if(cljs.core.truth_(inst_32609)){
var statearr_32634_34717 = state_32627__$1;
(statearr_32634_34717[(1)] = (5));

} else {
var statearr_32635_34718 = state_32627__$1;
(statearr_32635_34718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (6))){
var inst_32608 = (state_32627[(7)]);
var inst_32614 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32608) : p.call(null,inst_32608));
var state_32627__$1 = state_32627;
if(cljs.core.truth_(inst_32614)){
var statearr_32638_34719 = state_32627__$1;
(statearr_32638_34719[(1)] = (8));

} else {
var statearr_32639_34720 = state_32627__$1;
(statearr_32639_34720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (3))){
var inst_32625 = (state_32627[(2)]);
var state_32627__$1 = state_32627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32627__$1,inst_32625);
} else {
if((state_val_32628 === (2))){
var state_32627__$1 = state_32627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32627__$1,(4),ch);
} else {
if((state_val_32628 === (11))){
var inst_32617 = (state_32627[(2)]);
var state_32627__$1 = state_32627;
var statearr_32642_34722 = state_32627__$1;
(statearr_32642_34722[(2)] = inst_32617);

(statearr_32642_34722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (9))){
var state_32627__$1 = state_32627;
var statearr_32644_34723 = state_32627__$1;
(statearr_32644_34723[(2)] = null);

(statearr_32644_34723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (5))){
var inst_32612 = cljs.core.async.close_BANG_(out);
var state_32627__$1 = state_32627;
var statearr_32645_34724 = state_32627__$1;
(statearr_32645_34724[(2)] = inst_32612);

(statearr_32645_34724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (10))){
var inst_32620 = (state_32627[(2)]);
var state_32627__$1 = (function (){var statearr_32646 = state_32627;
(statearr_32646[(8)] = inst_32620);

return statearr_32646;
})();
var statearr_32647_34733 = state_32627__$1;
(statearr_32647_34733[(2)] = null);

(statearr_32647_34733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32628 === (8))){
var inst_32608 = (state_32627[(7)]);
var state_32627__$1 = state_32627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32627__$1,(11),out,inst_32608);
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
var cljs$core$async$state_machine__29820__auto__ = null;
var cljs$core$async$state_machine__29820__auto____0 = (function (){
var statearr_32649 = [null,null,null,null,null,null,null,null,null];
(statearr_32649[(0)] = cljs$core$async$state_machine__29820__auto__);

(statearr_32649[(1)] = (1));

return statearr_32649;
});
var cljs$core$async$state_machine__29820__auto____1 = (function (state_32627){
while(true){
var ret_value__29821__auto__ = (function (){try{while(true){
var result__29822__auto__ = switch__29819__auto__(state_32627);
if(cljs.core.keyword_identical_QMARK_(result__29822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29822__auto__;
}
break;
}
}catch (e32650){var ex__29823__auto__ = e32650;
var statearr_32651_34737 = state_32627;
(statearr_32651_34737[(2)] = ex__29823__auto__);


if(cljs.core.seq((state_32627[(4)]))){
var statearr_32652_34738 = state_32627;
(statearr_32652_34738[(1)] = cljs.core.first((state_32627[(4)])));

} else {
throw ex__29823__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34739 = state_32627;
state_32627 = G__34739;
continue;
} else {
return ret_value__29821__auto__;
}
break;
}
});
cljs$core$async$state_machine__29820__auto__ = function(state_32627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29820__auto____1.call(this,state_32627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29820__auto____0;
cljs$core$async$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29820__auto____1;
return cljs$core$async$state_machine__29820__auto__;
})()
})();
var state__30104__auto__ = (function (){var statearr_32653 = f__30103__auto__();
(statearr_32653[(6)] = c__30102__auto___34703);

return statearr_32653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30104__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32655 = arguments.length;
switch (G__32655) {
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
var c__30102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30103__auto__ = (function (){var switch__29819__auto__ = (function (state_32724){
var state_val_32725 = (state_32724[(1)]);
if((state_val_32725 === (7))){
var inst_32720 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
var statearr_32730_34742 = state_32724__$1;
(statearr_32730_34742[(2)] = inst_32720);

(statearr_32730_34742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (20))){
var inst_32690 = (state_32724[(7)]);
var inst_32701 = (state_32724[(2)]);
var inst_32702 = cljs.core.next(inst_32690);
var inst_32674 = inst_32702;
var inst_32675 = null;
var inst_32676 = (0);
var inst_32677 = (0);
var state_32724__$1 = (function (){var statearr_32731 = state_32724;
(statearr_32731[(8)] = inst_32701);

(statearr_32731[(9)] = inst_32674);

(statearr_32731[(10)] = inst_32675);

(statearr_32731[(11)] = inst_32676);

(statearr_32731[(12)] = inst_32677);

return statearr_32731;
})();
var statearr_32735_34743 = state_32724__$1;
(statearr_32735_34743[(2)] = null);

(statearr_32735_34743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (1))){
var state_32724__$1 = state_32724;
var statearr_32737_34744 = state_32724__$1;
(statearr_32737_34744[(2)] = null);

(statearr_32737_34744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (4))){
var inst_32662 = (state_32724[(13)]);
var inst_32662__$1 = (state_32724[(2)]);
var inst_32663 = (inst_32662__$1 == null);
var state_32724__$1 = (function (){var statearr_32738 = state_32724;
(statearr_32738[(13)] = inst_32662__$1);

return statearr_32738;
})();
if(cljs.core.truth_(inst_32663)){
var statearr_32740_34745 = state_32724__$1;
(statearr_32740_34745[(1)] = (5));

} else {
var statearr_32741_34746 = state_32724__$1;
(statearr_32741_34746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (15))){
var state_32724__$1 = state_32724;
var statearr_32748_34747 = state_32724__$1;
(statearr_32748_34747[(2)] = null);

(statearr_32748_34747[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (21))){
var state_32724__$1 = state_32724;
var statearr_32750_34753 = state_32724__$1;
(statearr_32750_34753[(2)] = null);

(statearr_32750_34753[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (13))){
var inst_32674 = (state_32724[(9)]);
var inst_32675 = (state_32724[(10)]);
var inst_32676 = (state_32724[(11)]);
var inst_32677 = (state_32724[(12)]);
var inst_32684 = (state_32724[(2)]);
var inst_32687 = (inst_32677 + (1));
var tmp32742 = inst_32674;
var tmp32743 = inst_32675;
var tmp32744 = inst_32676;
var inst_32674__$1 = tmp32742;
var inst_32675__$1 = tmp32743;
var inst_32676__$1 = tmp32744;
var inst_32677__$1 = inst_32687;
var state_32724__$1 = (function (){var statearr_32751 = state_32724;
(statearr_32751[(9)] = inst_32674__$1);

(statearr_32751[(10)] = inst_32675__$1);

(statearr_32751[(14)] = inst_32684);

(statearr_32751[(11)] = inst_32676__$1);

(statearr_32751[(12)] = inst_32677__$1);

return statearr_32751;
})();
var statearr_32752_34785 = state_32724__$1;
(statearr_32752_34785[(2)] = null);

(statearr_32752_34785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (22))){
var state_32724__$1 = state_32724;
var statearr_32753_34792 = state_32724__$1;
(statearr_32753_34792[(2)] = null);

(statearr_32753_34792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (6))){
var inst_32662 = (state_32724[(13)]);
var inst_32671 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32662) : f.call(null,inst_32662));
var inst_32672 = cljs.core.seq(inst_32671);
var inst_32674 = inst_32672;
var inst_32675 = null;
var inst_32676 = (0);
var inst_32677 = (0);
var state_32724__$1 = (function (){var statearr_32754 = state_32724;
(statearr_32754[(9)] = inst_32674);

(statearr_32754[(10)] = inst_32675);

(statearr_32754[(11)] = inst_32676);

(statearr_32754[(12)] = inst_32677);

return statearr_32754;
})();
var statearr_32755_34810 = state_32724__$1;
(statearr_32755_34810[(2)] = null);

(statearr_32755_34810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (17))){
var inst_32690 = (state_32724[(7)]);
var inst_32694 = cljs.core.chunk_first(inst_32690);
var inst_32695 = cljs.core.chunk_rest(inst_32690);
var inst_32696 = cljs.core.count(inst_32694);
var inst_32674 = inst_32695;
var inst_32675 = inst_32694;
var inst_32676 = inst_32696;
var inst_32677 = (0);
var state_32724__$1 = (function (){var statearr_32757 = state_32724;
(statearr_32757[(9)] = inst_32674);

(statearr_32757[(10)] = inst_32675);

(statearr_32757[(11)] = inst_32676);

(statearr_32757[(12)] = inst_32677);

return statearr_32757;
})();
var statearr_32758_34829 = state_32724__$1;
(statearr_32758_34829[(2)] = null);

(statearr_32758_34829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (3))){
var inst_32722 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32724__$1,inst_32722);
} else {
if((state_val_32725 === (12))){
var inst_32710 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
var statearr_32763_34838 = state_32724__$1;
(statearr_32763_34838[(2)] = inst_32710);

(statearr_32763_34838[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (2))){
var state_32724__$1 = state_32724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32724__$1,(4),in$);
} else {
if((state_val_32725 === (23))){
var inst_32718 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
var statearr_32768_34839 = state_32724__$1;
(statearr_32768_34839[(2)] = inst_32718);

(statearr_32768_34839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (19))){
var inst_32705 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
var statearr_32769_34840 = state_32724__$1;
(statearr_32769_34840[(2)] = inst_32705);

(statearr_32769_34840[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (11))){
var inst_32674 = (state_32724[(9)]);
var inst_32690 = (state_32724[(7)]);
var inst_32690__$1 = cljs.core.seq(inst_32674);
var state_32724__$1 = (function (){var statearr_32771 = state_32724;
(statearr_32771[(7)] = inst_32690__$1);

return statearr_32771;
})();
if(inst_32690__$1){
var statearr_32772_34845 = state_32724__$1;
(statearr_32772_34845[(1)] = (14));

} else {
var statearr_32773_34850 = state_32724__$1;
(statearr_32773_34850[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (9))){
var inst_32712 = (state_32724[(2)]);
var inst_32713 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32724__$1 = (function (){var statearr_32774 = state_32724;
(statearr_32774[(15)] = inst_32712);

return statearr_32774;
})();
if(cljs.core.truth_(inst_32713)){
var statearr_32775_34855 = state_32724__$1;
(statearr_32775_34855[(1)] = (21));

} else {
var statearr_32777_34856 = state_32724__$1;
(statearr_32777_34856[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (5))){
var inst_32665 = cljs.core.async.close_BANG_(out);
var state_32724__$1 = state_32724;
var statearr_32778_34858 = state_32724__$1;
(statearr_32778_34858[(2)] = inst_32665);

(statearr_32778_34858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (14))){
var inst_32690 = (state_32724[(7)]);
var inst_32692 = cljs.core.chunked_seq_QMARK_(inst_32690);
var state_32724__$1 = state_32724;
if(inst_32692){
var statearr_32779_34860 = state_32724__$1;
(statearr_32779_34860[(1)] = (17));

} else {
var statearr_32780_34861 = state_32724__$1;
(statearr_32780_34861[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (16))){
var inst_32708 = (state_32724[(2)]);
var state_32724__$1 = state_32724;
var statearr_32781_34862 = state_32724__$1;
(statearr_32781_34862[(2)] = inst_32708);

(statearr_32781_34862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32725 === (10))){
var inst_32675 = (state_32724[(10)]);
var inst_32677 = (state_32724[(12)]);
var inst_32682 = cljs.core._nth(inst_32675,inst_32677);
var state_32724__$1 = state_32724;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32724__$1,(13),out,inst_32682);
} else {
if((state_val_32725 === (18))){
var inst_32690 = (state_32724[(7)]);
var inst_32699 = cljs.core.first(inst_32690);
var state_32724__$1 = state_32724;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32724__$1,(20),out,inst_32699);
} else {
if((state_val_32725 === (8))){
var inst_32676 = (state_32724[(11)]);
var inst_32677 = (state_32724[(12)]);
var inst_32679 = (inst_32677 < inst_32676);
var inst_32680 = inst_32679;
var state_32724__$1 = state_32724;
if(cljs.core.truth_(inst_32680)){
var statearr_32783_34866 = state_32724__$1;
(statearr_32783_34866[(1)] = (10));

} else {
var statearr_32784_34867 = state_32724__$1;
(statearr_32784_34867[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29820__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29820__auto____0 = (function (){
var statearr_32787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32787[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29820__auto__);

(statearr_32787[(1)] = (1));

return statearr_32787;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29820__auto____1 = (function (state_32724){
while(true){
var ret_value__29821__auto__ = (function (){try{while(true){
var result__29822__auto__ = switch__29819__auto__(state_32724);
if(cljs.core.keyword_identical_QMARK_(result__29822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29822__auto__;
}
break;
}
}catch (e32788){var ex__29823__auto__ = e32788;
var statearr_32789_34870 = state_32724;
(statearr_32789_34870[(2)] = ex__29823__auto__);


if(cljs.core.seq((state_32724[(4)]))){
var statearr_32791_34871 = state_32724;
(statearr_32791_34871[(1)] = cljs.core.first((state_32724[(4)])));

} else {
throw ex__29823__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34873 = state_32724;
state_32724 = G__34873;
continue;
} else {
return ret_value__29821__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29820__auto__ = function(state_32724){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29820__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29820__auto____1.call(this,state_32724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29820__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29820__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29820__auto__;
})()
})();
var state__30104__auto__ = (function (){var statearr_32793 = f__30103__auto__();
(statearr_32793[(6)] = c__30102__auto__);

return statearr_32793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30104__auto__);
}));

return c__30102__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32795 = arguments.length;
switch (G__32795) {
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
var G__32798 = arguments.length;
switch (G__32798) {
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
var G__32801 = arguments.length;
switch (G__32801) {
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
var c__30102__auto___34913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30103__auto__ = (function (){var switch__29819__auto__ = (function (state_32825){
var state_val_32826 = (state_32825[(1)]);
if((state_val_32826 === (7))){
var inst_32820 = (state_32825[(2)]);
var state_32825__$1 = state_32825;
var statearr_32833_34917 = state_32825__$1;
(statearr_32833_34917[(2)] = inst_32820);

(statearr_32833_34917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (1))){
var inst_32802 = null;
var state_32825__$1 = (function (){var statearr_32839 = state_32825;
(statearr_32839[(7)] = inst_32802);

return statearr_32839;
})();
var statearr_32840_34925 = state_32825__$1;
(statearr_32840_34925[(2)] = null);

(statearr_32840_34925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (4))){
var inst_32805 = (state_32825[(8)]);
var inst_32805__$1 = (state_32825[(2)]);
var inst_32806 = (inst_32805__$1 == null);
var inst_32807 = cljs.core.not(inst_32806);
var state_32825__$1 = (function (){var statearr_32841 = state_32825;
(statearr_32841[(8)] = inst_32805__$1);

return statearr_32841;
})();
if(inst_32807){
var statearr_32842_34932 = state_32825__$1;
(statearr_32842_34932[(1)] = (5));

} else {
var statearr_32844_34938 = state_32825__$1;
(statearr_32844_34938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (6))){
var state_32825__$1 = state_32825;
var statearr_32846_34942 = state_32825__$1;
(statearr_32846_34942[(2)] = null);

(statearr_32846_34942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (3))){
var inst_32822 = (state_32825[(2)]);
var inst_32823 = cljs.core.async.close_BANG_(out);
var state_32825__$1 = (function (){var statearr_32851 = state_32825;
(statearr_32851[(9)] = inst_32822);

return statearr_32851;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32825__$1,inst_32823);
} else {
if((state_val_32826 === (2))){
var state_32825__$1 = state_32825;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32825__$1,(4),ch);
} else {
if((state_val_32826 === (11))){
var inst_32805 = (state_32825[(8)]);
var inst_32814 = (state_32825[(2)]);
var inst_32802 = inst_32805;
var state_32825__$1 = (function (){var statearr_32852 = state_32825;
(statearr_32852[(7)] = inst_32802);

(statearr_32852[(10)] = inst_32814);

return statearr_32852;
})();
var statearr_32853_34947 = state_32825__$1;
(statearr_32853_34947[(2)] = null);

(statearr_32853_34947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (9))){
var inst_32805 = (state_32825[(8)]);
var state_32825__$1 = state_32825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32825__$1,(11),out,inst_32805);
} else {
if((state_val_32826 === (5))){
var inst_32802 = (state_32825[(7)]);
var inst_32805 = (state_32825[(8)]);
var inst_32809 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32805,inst_32802);
var state_32825__$1 = state_32825;
if(inst_32809){
var statearr_32855_34949 = state_32825__$1;
(statearr_32855_34949[(1)] = (8));

} else {
var statearr_32856_34950 = state_32825__$1;
(statearr_32856_34950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (10))){
var inst_32817 = (state_32825[(2)]);
var state_32825__$1 = state_32825;
var statearr_32857_34951 = state_32825__$1;
(statearr_32857_34951[(2)] = inst_32817);

(statearr_32857_34951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (8))){
var inst_32802 = (state_32825[(7)]);
var tmp32854 = inst_32802;
var inst_32802__$1 = tmp32854;
var state_32825__$1 = (function (){var statearr_32860 = state_32825;
(statearr_32860[(7)] = inst_32802__$1);

return statearr_32860;
})();
var statearr_32861_34955 = state_32825__$1;
(statearr_32861_34955[(2)] = null);

(statearr_32861_34955[(1)] = (2));


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
var cljs$core$async$state_machine__29820__auto__ = null;
var cljs$core$async$state_machine__29820__auto____0 = (function (){
var statearr_32862 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32862[(0)] = cljs$core$async$state_machine__29820__auto__);

(statearr_32862[(1)] = (1));

return statearr_32862;
});
var cljs$core$async$state_machine__29820__auto____1 = (function (state_32825){
while(true){
var ret_value__29821__auto__ = (function (){try{while(true){
var result__29822__auto__ = switch__29819__auto__(state_32825);
if(cljs.core.keyword_identical_QMARK_(result__29822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29822__auto__;
}
break;
}
}catch (e32863){var ex__29823__auto__ = e32863;
var statearr_32864_34957 = state_32825;
(statearr_32864_34957[(2)] = ex__29823__auto__);


if(cljs.core.seq((state_32825[(4)]))){
var statearr_32865_34958 = state_32825;
(statearr_32865_34958[(1)] = cljs.core.first((state_32825[(4)])));

} else {
throw ex__29823__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34967 = state_32825;
state_32825 = G__34967;
continue;
} else {
return ret_value__29821__auto__;
}
break;
}
});
cljs$core$async$state_machine__29820__auto__ = function(state_32825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29820__auto____1.call(this,state_32825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29820__auto____0;
cljs$core$async$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29820__auto____1;
return cljs$core$async$state_machine__29820__auto__;
})()
})();
var state__30104__auto__ = (function (){var statearr_32866 = f__30103__auto__();
(statearr_32866[(6)] = c__30102__auto___34913);

return statearr_32866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30104__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32868 = arguments.length;
switch (G__32868) {
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
var c__30102__auto___34980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30103__auto__ = (function (){var switch__29819__auto__ = (function (state_32908){
var state_val_32909 = (state_32908[(1)]);
if((state_val_32909 === (7))){
var inst_32903 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
var statearr_32916_34981 = state_32908__$1;
(statearr_32916_34981[(2)] = inst_32903);

(statearr_32916_34981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (1))){
var inst_32869 = (new Array(n));
var inst_32870 = inst_32869;
var inst_32871 = (0);
var state_32908__$1 = (function (){var statearr_32919 = state_32908;
(statearr_32919[(7)] = inst_32870);

(statearr_32919[(8)] = inst_32871);

return statearr_32919;
})();
var statearr_32924_34983 = state_32908__$1;
(statearr_32924_34983[(2)] = null);

(statearr_32924_34983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (4))){
var inst_32874 = (state_32908[(9)]);
var inst_32874__$1 = (state_32908[(2)]);
var inst_32875 = (inst_32874__$1 == null);
var inst_32876 = cljs.core.not(inst_32875);
var state_32908__$1 = (function (){var statearr_32925 = state_32908;
(statearr_32925[(9)] = inst_32874__$1);

return statearr_32925;
})();
if(inst_32876){
var statearr_32926_34986 = state_32908__$1;
(statearr_32926_34986[(1)] = (5));

} else {
var statearr_32927_34987 = state_32908__$1;
(statearr_32927_34987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (15))){
var inst_32897 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
var statearr_32928_34994 = state_32908__$1;
(statearr_32928_34994[(2)] = inst_32897);

(statearr_32928_34994[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (13))){
var state_32908__$1 = state_32908;
var statearr_32929_35000 = state_32908__$1;
(statearr_32929_35000[(2)] = null);

(statearr_32929_35000[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (6))){
var inst_32871 = (state_32908[(8)]);
var inst_32893 = (inst_32871 > (0));
var state_32908__$1 = state_32908;
if(cljs.core.truth_(inst_32893)){
var statearr_32932_35004 = state_32908__$1;
(statearr_32932_35004[(1)] = (12));

} else {
var statearr_32935_35008 = state_32908__$1;
(statearr_32935_35008[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (3))){
var inst_32906 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32908__$1,inst_32906);
} else {
if((state_val_32909 === (12))){
var inst_32870 = (state_32908[(7)]);
var inst_32895 = cljs.core.vec(inst_32870);
var state_32908__$1 = state_32908;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32908__$1,(15),out,inst_32895);
} else {
if((state_val_32909 === (2))){
var state_32908__$1 = state_32908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32908__$1,(4),ch);
} else {
if((state_val_32909 === (11))){
var inst_32886 = (state_32908[(2)]);
var inst_32887 = (new Array(n));
var inst_32870 = inst_32887;
var inst_32871 = (0);
var state_32908__$1 = (function (){var statearr_32939 = state_32908;
(statearr_32939[(7)] = inst_32870);

(statearr_32939[(8)] = inst_32871);

(statearr_32939[(10)] = inst_32886);

return statearr_32939;
})();
var statearr_32944_35015 = state_32908__$1;
(statearr_32944_35015[(2)] = null);

(statearr_32944_35015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (9))){
var inst_32870 = (state_32908[(7)]);
var inst_32884 = cljs.core.vec(inst_32870);
var state_32908__$1 = state_32908;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32908__$1,(11),out,inst_32884);
} else {
if((state_val_32909 === (5))){
var inst_32879 = (state_32908[(11)]);
var inst_32870 = (state_32908[(7)]);
var inst_32874 = (state_32908[(9)]);
var inst_32871 = (state_32908[(8)]);
var inst_32878 = (inst_32870[inst_32871] = inst_32874);
var inst_32879__$1 = (inst_32871 + (1));
var inst_32880 = (inst_32879__$1 < n);
var state_32908__$1 = (function (){var statearr_32951 = state_32908;
(statearr_32951[(11)] = inst_32879__$1);

(statearr_32951[(12)] = inst_32878);

return statearr_32951;
})();
if(cljs.core.truth_(inst_32880)){
var statearr_32953_35026 = state_32908__$1;
(statearr_32953_35026[(1)] = (8));

} else {
var statearr_32954_35027 = state_32908__$1;
(statearr_32954_35027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (14))){
var inst_32900 = (state_32908[(2)]);
var inst_32901 = cljs.core.async.close_BANG_(out);
var state_32908__$1 = (function (){var statearr_32959 = state_32908;
(statearr_32959[(13)] = inst_32900);

return statearr_32959;
})();
var statearr_32960_35028 = state_32908__$1;
(statearr_32960_35028[(2)] = inst_32901);

(statearr_32960_35028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (10))){
var inst_32891 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
var statearr_32961_35029 = state_32908__$1;
(statearr_32961_35029[(2)] = inst_32891);

(statearr_32961_35029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (8))){
var inst_32879 = (state_32908[(11)]);
var inst_32870 = (state_32908[(7)]);
var tmp32955 = inst_32870;
var inst_32870__$1 = tmp32955;
var inst_32871 = inst_32879;
var state_32908__$1 = (function (){var statearr_32962 = state_32908;
(statearr_32962[(7)] = inst_32870__$1);

(statearr_32962[(8)] = inst_32871);

return statearr_32962;
})();
var statearr_32964_35049 = state_32908__$1;
(statearr_32964_35049[(2)] = null);

(statearr_32964_35049[(1)] = (2));


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
var cljs$core$async$state_machine__29820__auto__ = null;
var cljs$core$async$state_machine__29820__auto____0 = (function (){
var statearr_32970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32970[(0)] = cljs$core$async$state_machine__29820__auto__);

(statearr_32970[(1)] = (1));

return statearr_32970;
});
var cljs$core$async$state_machine__29820__auto____1 = (function (state_32908){
while(true){
var ret_value__29821__auto__ = (function (){try{while(true){
var result__29822__auto__ = switch__29819__auto__(state_32908);
if(cljs.core.keyword_identical_QMARK_(result__29822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29822__auto__;
}
break;
}
}catch (e32972){var ex__29823__auto__ = e32972;
var statearr_32973_35065 = state_32908;
(statearr_32973_35065[(2)] = ex__29823__auto__);


if(cljs.core.seq((state_32908[(4)]))){
var statearr_32974_35066 = state_32908;
(statearr_32974_35066[(1)] = cljs.core.first((state_32908[(4)])));

} else {
throw ex__29823__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35067 = state_32908;
state_32908 = G__35067;
continue;
} else {
return ret_value__29821__auto__;
}
break;
}
});
cljs$core$async$state_machine__29820__auto__ = function(state_32908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29820__auto____1.call(this,state_32908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29820__auto____0;
cljs$core$async$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29820__auto____1;
return cljs$core$async$state_machine__29820__auto__;
})()
})();
var state__30104__auto__ = (function (){var statearr_32976 = f__30103__auto__();
(statearr_32976[(6)] = c__30102__auto___34980);

return statearr_32976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30104__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32988 = arguments.length;
switch (G__32988) {
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
var c__30102__auto___35071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30103__auto__ = (function (){var switch__29819__auto__ = (function (state_33047){
var state_val_33048 = (state_33047[(1)]);
if((state_val_33048 === (7))){
var inst_33041 = (state_33047[(2)]);
var state_33047__$1 = state_33047;
var statearr_33054_35075 = state_33047__$1;
(statearr_33054_35075[(2)] = inst_33041);

(statearr_33054_35075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (1))){
var inst_32995 = [];
var inst_32996 = inst_32995;
var inst_32997 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33047__$1 = (function (){var statearr_33058 = state_33047;
(statearr_33058[(7)] = inst_32996);

(statearr_33058[(8)] = inst_32997);

return statearr_33058;
})();
var statearr_33061_35076 = state_33047__$1;
(statearr_33061_35076[(2)] = null);

(statearr_33061_35076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (4))){
var inst_33001 = (state_33047[(9)]);
var inst_33001__$1 = (state_33047[(2)]);
var inst_33003 = (inst_33001__$1 == null);
var inst_33004 = cljs.core.not(inst_33003);
var state_33047__$1 = (function (){var statearr_33063 = state_33047;
(statearr_33063[(9)] = inst_33001__$1);

return statearr_33063;
})();
if(inst_33004){
var statearr_33064_35079 = state_33047__$1;
(statearr_33064_35079[(1)] = (5));

} else {
var statearr_33067_35080 = state_33047__$1;
(statearr_33067_35080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (15))){
var inst_33035 = (state_33047[(2)]);
var state_33047__$1 = state_33047;
var statearr_33068_35082 = state_33047__$1;
(statearr_33068_35082[(2)] = inst_33035);

(statearr_33068_35082[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (13))){
var state_33047__$1 = state_33047;
var statearr_33075_35083 = state_33047__$1;
(statearr_33075_35083[(2)] = null);

(statearr_33075_35083[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (6))){
var inst_32996 = (state_33047[(7)]);
var inst_33030 = inst_32996.length;
var inst_33031 = (inst_33030 > (0));
var state_33047__$1 = state_33047;
if(cljs.core.truth_(inst_33031)){
var statearr_33078_35085 = state_33047__$1;
(statearr_33078_35085[(1)] = (12));

} else {
var statearr_33079_35086 = state_33047__$1;
(statearr_33079_35086[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (3))){
var inst_33043 = (state_33047[(2)]);
var state_33047__$1 = state_33047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33047__$1,inst_33043);
} else {
if((state_val_33048 === (12))){
var inst_32996 = (state_33047[(7)]);
var inst_33033 = cljs.core.vec(inst_32996);
var state_33047__$1 = state_33047;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33047__$1,(15),out,inst_33033);
} else {
if((state_val_33048 === (2))){
var state_33047__$1 = state_33047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33047__$1,(4),ch);
} else {
if((state_val_33048 === (11))){
var inst_33008 = (state_33047[(10)]);
var inst_33001 = (state_33047[(9)]);
var inst_33020 = (state_33047[(2)]);
var inst_33021 = [];
var inst_33023 = inst_33021.push(inst_33001);
var inst_32996 = inst_33021;
var inst_32997 = inst_33008;
var state_33047__$1 = (function (){var statearr_33089 = state_33047;
(statearr_33089[(11)] = inst_33020);

(statearr_33089[(12)] = inst_33023);

(statearr_33089[(7)] = inst_32996);

(statearr_33089[(8)] = inst_32997);

return statearr_33089;
})();
var statearr_33091_35091 = state_33047__$1;
(statearr_33091_35091[(2)] = null);

(statearr_33091_35091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (9))){
var inst_32996 = (state_33047[(7)]);
var inst_33018 = cljs.core.vec(inst_32996);
var state_33047__$1 = state_33047;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33047__$1,(11),out,inst_33018);
} else {
if((state_val_33048 === (5))){
var inst_33008 = (state_33047[(10)]);
var inst_33001 = (state_33047[(9)]);
var inst_32997 = (state_33047[(8)]);
var inst_33008__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33001) : f.call(null,inst_33001));
var inst_33011 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33008__$1,inst_32997);
var inst_33012 = cljs.core.keyword_identical_QMARK_(inst_32997,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33013 = ((inst_33011) || (inst_33012));
var state_33047__$1 = (function (){var statearr_33096 = state_33047;
(statearr_33096[(10)] = inst_33008__$1);

return statearr_33096;
})();
if(cljs.core.truth_(inst_33013)){
var statearr_33097_35092 = state_33047__$1;
(statearr_33097_35092[(1)] = (8));

} else {
var statearr_33099_35093 = state_33047__$1;
(statearr_33099_35093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (14))){
var inst_33038 = (state_33047[(2)]);
var inst_33039 = cljs.core.async.close_BANG_(out);
var state_33047__$1 = (function (){var statearr_33102 = state_33047;
(statearr_33102[(13)] = inst_33038);

return statearr_33102;
})();
var statearr_33105_35094 = state_33047__$1;
(statearr_33105_35094[(2)] = inst_33039);

(statearr_33105_35094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (10))){
var inst_33026 = (state_33047[(2)]);
var state_33047__$1 = state_33047;
var statearr_33107_35095 = state_33047__$1;
(statearr_33107_35095[(2)] = inst_33026);

(statearr_33107_35095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (8))){
var inst_33008 = (state_33047[(10)]);
var inst_33001 = (state_33047[(9)]);
var inst_32996 = (state_33047[(7)]);
var inst_33015 = inst_32996.push(inst_33001);
var tmp33101 = inst_32996;
var inst_32996__$1 = tmp33101;
var inst_32997 = inst_33008;
var state_33047__$1 = (function (){var statearr_33109 = state_33047;
(statearr_33109[(14)] = inst_33015);

(statearr_33109[(7)] = inst_32996__$1);

(statearr_33109[(8)] = inst_32997);

return statearr_33109;
})();
var statearr_33110_35096 = state_33047__$1;
(statearr_33110_35096[(2)] = null);

(statearr_33110_35096[(1)] = (2));


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
var cljs$core$async$state_machine__29820__auto__ = null;
var cljs$core$async$state_machine__29820__auto____0 = (function (){
var statearr_33115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33115[(0)] = cljs$core$async$state_machine__29820__auto__);

(statearr_33115[(1)] = (1));

return statearr_33115;
});
var cljs$core$async$state_machine__29820__auto____1 = (function (state_33047){
while(true){
var ret_value__29821__auto__ = (function (){try{while(true){
var result__29822__auto__ = switch__29819__auto__(state_33047);
if(cljs.core.keyword_identical_QMARK_(result__29822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29822__auto__;
}
break;
}
}catch (e33116){var ex__29823__auto__ = e33116;
var statearr_33117_35099 = state_33047;
(statearr_33117_35099[(2)] = ex__29823__auto__);


if(cljs.core.seq((state_33047[(4)]))){
var statearr_33119_35101 = state_33047;
(statearr_33119_35101[(1)] = cljs.core.first((state_33047[(4)])));

} else {
throw ex__29823__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29821__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35102 = state_33047;
state_33047 = G__35102;
continue;
} else {
return ret_value__29821__auto__;
}
break;
}
});
cljs$core$async$state_machine__29820__auto__ = function(state_33047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29820__auto____1.call(this,state_33047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29820__auto____0;
cljs$core$async$state_machine__29820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29820__auto____1;
return cljs$core$async$state_machine__29820__auto__;
})()
})();
var state__30104__auto__ = (function (){var statearr_33123 = f__30103__auto__();
(statearr_33123[(6)] = c__30102__auto___35071);

return statearr_33123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30104__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
