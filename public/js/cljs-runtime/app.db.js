goog.provide('app.db');
app.db.chart = cljs.core.PersistentHashMap.fromArrays(["T","K","Q","L","G","J","M","S","Y","Z","H","E","R","C","F","B","P","V","U","O","X","N","A","I"," ","W","D"],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",".","-"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-","-",".","-"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","-",".","."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-","-","."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","-","-","-"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-","-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".",".","."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",".","-","-"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-","-",".","."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".",".",".","."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","-","."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",".","-","."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".",".","-","."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",".",".","."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","-","-","."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".",".",".","-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".",".","-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-","-","-"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",".",".","-"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-","."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","-"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["wordspace"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","-","-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",".","."], null)]);
app.db.sym_chart = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__38729){
var vec__38730 = p__38729;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38730,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38730,(1),null);
try{if((k === " ")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e38734){if((e38734 instanceof Error)){
var e__31919__auto__ = e38734;
if((e__31919__auto__ === cljs.core.match.backtrack)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,v)));
} else {
throw e__31919__auto__;
}
} else {
throw e38734;

}
}}),cljs.core.PersistentArrayMap.EMPTY,app.db.chart);
app.db.ticker = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),Date.now(),new cljs.core.Keyword(null,"count","count",2139924085),(0)], null);
app.db.default_db = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"unit","unit",375175175),(200),new cljs.core.Keyword(null,"score","score",-1963588780),(0),new cljs.core.Keyword(null,"btn-type","btn-type",1955528955),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"challenge","challenge",1302148691),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"curr-code","curr-code",905590378),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"waiting","waiting",895906735),new cljs.core.Keyword(null,"index","index",-1531685915),(0)], null),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"ticker","ticker",214613162),app.db.ticker], null);

//# sourceMappingURL=app.db.js.map
