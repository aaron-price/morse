goog.provide('app.helpers.singer');
app.helpers.singer.full_notes = (function app$helpers$singer$full_notes(notes){

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__50669,p__50670){
var map__50672 = p__50669;
var map__50672__$1 = (((((!((map__50672 == null))))?(((((map__50672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50672):map__50672);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50672__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var notes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50672__$1,new cljs.core.Keyword(null,"notes","notes",-1039600523));
var vec__50673 = p__50670;
var dur = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50673,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50673,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(start + dur),new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(notes__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dur,t,start], null))], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentVector.EMPTY], null),notes),new cljs.core.Keyword(null,"notes","notes",-1039600523));
});
app.helpers.singer.make_notes = (function app$helpers$singer$make_notes(flat_morse_text){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,t){
try{if((t === ".")){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"play","play",-580418022)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"rest","rest",-1241696419)], null)], 0));
} else {
throw cljs.core.match.backtrack;

}
}catch (e50697){if((e50697 instanceof Error)){
var e__34553__auto__ = e50697;
if((e__34553__auto__ === cljs.core.match.backtrack)){
try{if((t === "-")){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),new cljs.core.Keyword(null,"play","play",-580418022)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"rest","rest",-1241696419)], null)], 0));
} else {
throw cljs.core.match.backtrack;

}
}catch (e50704){if((e50704 instanceof Error)){
var e__34553__auto____$1 = e50704;
if((e__34553__auto____$1 === cljs.core.match.backtrack)){
try{if((t === " ")){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),new cljs.core.Keyword(null,"rest","rest",-1241696419)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e50705){if((e50705 instanceof Error)){
var e__34553__auto____$2 = e50705;
if((e__34553__auto____$2 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join('')));
} else {
throw e__34553__auto____$2;
}
} else {
throw e50705;

}
}} else {
throw e__34553__auto____$1;
}
} else {
throw e50704;

}
}} else {
throw e__34553__auto__;
}
} else {
throw e50697;

}
}}),cljs.core.PersistentVector.EMPTY,flat_morse_text);
});
app.helpers.singer.flatten_morse_text = (function app$helpers$singer$flatten_morse_text(morse_text){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,char_vec){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,char_vec),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null));
}),cljs.core.PersistentVector.EMPTY,morse_text);
});
app.helpers.singer.sing_notes = (function app$helpers$singer$sing_notes(unit,morse_text){
var notes = app.helpers.singer.full_notes(app.helpers.singer.make_notes(app.helpers.singer.flatten_morse_text(morse_text)));
var seq__50712 = cljs.core.seq(notes);
var chunk__50713 = null;
var count__50714 = (0);
var i__50715 = (0);
while(true){
if((i__50715 < count__50714)){
var vec__50765 = chunk__50713.cljs$core$IIndexed$_nth$arity$2(null,i__50715);
var dur = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50765,(0),null);
var typ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50765,(1),null);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50765,(2),null);
try{if((dur === (1))){
try{if(cljs.core.keyword_identical_QMARK_(typ,new cljs.core.Keyword(null,"play","play",-580418022))){
window.play_dit(start,unit);
} else {
throw cljs.core.match.backtrack;

}
}catch (e50775){if((e50775 instanceof Error)){
var e__34553__auto___50788 = e50775;
if((e__34553__auto___50788 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34553__auto___50788;
}
} else {
throw e50775;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50772){if((e50772 instanceof Error)){
var e__34553__auto___50789 = e50772;
if((e__34553__auto___50789 === cljs.core.match.backtrack)){
try{if((dur === (3))){
try{if(cljs.core.keyword_identical_QMARK_(typ,new cljs.core.Keyword(null,"play","play",-580418022))){
window.play_dah(start,unit);
} else {
throw cljs.core.match.backtrack;

}
}catch (e50774){if((e50774 instanceof Error)){
var e__34553__auto___50790__$1 = e50774;
if((e__34553__auto___50790__$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34553__auto___50790__$1;
}
} else {
throw e50774;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50773){if((e50773 instanceof Error)){
var e__34553__auto___50791__$1 = e50773;
if((e__34553__auto___50791__$1 === cljs.core.match.backtrack)){
} else {
throw e__34553__auto___50791__$1;
}
} else {
throw e50773;

}
}} else {
throw e__34553__auto___50789;
}
} else {
throw e50772;

}
}

var G__50792 = seq__50712;
var G__50793 = chunk__50713;
var G__50794 = count__50714;
var G__50795 = (i__50715 + (1));
seq__50712 = G__50792;
chunk__50713 = G__50793;
count__50714 = G__50794;
i__50715 = G__50795;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50712);
if(temp__5735__auto__){
var seq__50712__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50712__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50712__$1);
var G__50796 = cljs.core.chunk_rest(seq__50712__$1);
var G__50797 = c__4556__auto__;
var G__50798 = cljs.core.count(c__4556__auto__);
var G__50799 = (0);
seq__50712 = G__50796;
chunk__50713 = G__50797;
count__50714 = G__50798;
i__50715 = G__50799;
continue;
} else {
var vec__50776 = cljs.core.first(seq__50712__$1);
var dur = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50776,(0),null);
var typ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50776,(1),null);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50776,(2),null);
try{if((dur === (1))){
try{if(cljs.core.keyword_identical_QMARK_(typ,new cljs.core.Keyword(null,"play","play",-580418022))){
window.play_dit(start,unit);
} else {
throw cljs.core.match.backtrack;

}
}catch (e50786){if((e50786 instanceof Error)){
var e__34553__auto___50804 = e50786;
if((e__34553__auto___50804 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34553__auto___50804;
}
} else {
throw e50786;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50783){if((e50783 instanceof Error)){
var e__34553__auto___50807 = e50783;
if((e__34553__auto___50807 === cljs.core.match.backtrack)){
try{if((dur === (3))){
try{if(cljs.core.keyword_identical_QMARK_(typ,new cljs.core.Keyword(null,"play","play",-580418022))){
window.play_dah(start,unit);
} else {
throw cljs.core.match.backtrack;

}
}catch (e50785){if((e50785 instanceof Error)){
var e__34553__auto___50813__$1 = e50785;
if((e__34553__auto___50813__$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34553__auto___50813__$1;
}
} else {
throw e50785;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e50784){if((e50784 instanceof Error)){
var e__34553__auto___50820__$1 = e50784;
if((e__34553__auto___50820__$1 === cljs.core.match.backtrack)){
} else {
throw e__34553__auto___50820__$1;
}
} else {
throw e50784;

}
}} else {
throw e__34553__auto___50807;
}
} else {
throw e50783;

}
}

var G__50822 = cljs.core.next(seq__50712__$1);
var G__50823 = null;
var G__50824 = (0);
var G__50825 = (0);
seq__50712 = G__50822;
chunk__50713 = G__50823;
count__50714 = G__50824;
i__50715 = G__50825;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=app.helpers.singer.js.map
