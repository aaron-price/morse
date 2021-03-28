goog.provide('app.reg.events.challenge');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.reg.events.challenge","state","app.reg.events.challenge/state",3004164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"completed","completed",-486056503),"null",new cljs.core.Keyword(null,"running","running",1554969103),"null",new cljs.core.Keyword(null,"waiting","waiting",895906735),"null",new cljs.core.Keyword(null,"failed","failed",-1397425762),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"completed","completed",-486056503),null,new cljs.core.Keyword(null,"running","running",1554969103),null,new cljs.core.Keyword(null,"waiting","waiting",895906735),null,new cljs.core.Keyword(null,"failed","failed",-1397425762),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.reg.events.challenge","abnormal-challenge-spec","app.reg.events.challenge/abnormal-challenge-spec",-1429937306),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.reg.events.challenge","plain","app.reg.events.challenge/plain",-1486556510),new cljs.core.Keyword("app.reg.events.challenge","code","app.reg.events.challenge/code",337585185),new cljs.core.Keyword("app.reg.events.challenge","hide-plain?","app.reg.events.challenge/hide-plain?",-1864253683),new cljs.core.Keyword("app.reg.events.challenge","hide-code?","app.reg.events.challenge/hide-code?",-885159316),new cljs.core.Keyword("app.reg.events.challenge","hide-log-plain?","app.reg.events.challenge/hide-log-plain?",-1042025039),new cljs.core.Keyword("app.reg.events.challenge","hide-log-code?","app.reg.events.challenge/hide-log-code?",-934110358),new cljs.core.Keyword("app.reg.events.challenge","note","app.reg.events.challenge/note",-900376677),new cljs.core.Keyword("app.reg.events.challenge","wpm","app.reg.events.challenge/wpm",-540476284)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.reg.events.challenge","plain","app.reg.events.challenge/plain",-1486556510),new cljs.core.Keyword("app.reg.events.challenge","code","app.reg.events.challenge/code",337585185),new cljs.core.Keyword("app.reg.events.challenge","hide-plain?","app.reg.events.challenge/hide-plain?",-1864253683),new cljs.core.Keyword("app.reg.events.challenge","hide-code?","app.reg.events.challenge/hide-code?",-885159316),new cljs.core.Keyword("app.reg.events.challenge","hide-log-plain?","app.reg.events.challenge/hide-log-plain?",-1042025039),new cljs.core.Keyword("app.reg.events.challenge","hide-log-code?","app.reg.events.challenge/hide-log-code?",-934110358),new cljs.core.Keyword("app.reg.events.challenge","note","app.reg.events.challenge/note",-900376677),new cljs.core.Keyword("app.reg.events.challenge","wpm","app.reg.events.challenge/wpm",-540476284)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__65317){
return cljs.core.map_QMARK_(G__65317);
})], null),(function (G__65317){
return cljs.core.map_QMARK_(G__65317);
}),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"hide-plain?","hide-plain?",456225404),new cljs.core.Keyword(null,"hide-code?","hide-code?",1496273121),new cljs.core.Keyword(null,"hide-log-plain?","hide-log-plain?",1547059206),new cljs.core.Keyword(null,"hide-log-code?","hide-log-code?",1390534115),new cljs.core.Keyword(null,"note","note",1426297904),new cljs.core.Keyword(null,"wpm","wpm",2035825399)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.reg.events.challenge","plain","app.reg.events.challenge/plain",-1486556510),new cljs.core.Keyword("app.reg.events.challenge","code","app.reg.events.challenge/code",337585185),new cljs.core.Keyword("app.reg.events.challenge","hide-plain?","app.reg.events.challenge/hide-plain?",-1864253683),new cljs.core.Keyword("app.reg.events.challenge","hide-code?","app.reg.events.challenge/hide-code?",-885159316),new cljs.core.Keyword("app.reg.events.challenge","hide-log-plain?","app.reg.events.challenge/hide-log-plain?",-1042025039),new cljs.core.Keyword("app.reg.events.challenge","hide-log-code?","app.reg.events.challenge/hide-log-code?",-934110358),new cljs.core.Keyword("app.reg.events.challenge","note","app.reg.events.challenge/note",-900376677),new cljs.core.Keyword("app.reg.events.challenge","wpm","app.reg.events.challenge/wpm",-540476284)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.reg.events.challenge","challenge-spec","app.reg.events.challenge/challenge-spec",1036634758),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.reg.events.challenge","wpm","app.reg.events.challenge/wpm",-540476284)], null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.reg.events.challenge","plain","app.reg.events.challenge/plain",-1486556510),new cljs.core.Keyword("app.reg.events.challenge","code","app.reg.events.challenge/code",337585185),new cljs.core.Keyword("app.reg.events.challenge","hide-plain?","app.reg.events.challenge/hide-plain?",-1864253683),new cljs.core.Keyword("app.reg.events.challenge","hide-code?","app.reg.events.challenge/hide-code?",-885159316),new cljs.core.Keyword("app.reg.events.challenge","hide-log-plain?","app.reg.events.challenge/hide-log-plain?",-1042025039),new cljs.core.Keyword("app.reg.events.challenge","hide-log-code?","app.reg.events.challenge/hide-log-code?",-934110358),new cljs.core.Keyword("app.reg.events.challenge","note","app.reg.events.challenge/note",-900376677),new cljs.core.Keyword("app.reg.events.challenge","wpm","app.reg.events.challenge/wpm",-540476284)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.reg.events.challenge","plain","app.reg.events.challenge/plain",-1486556510),new cljs.core.Keyword("app.reg.events.challenge","code","app.reg.events.challenge/code",337585185),new cljs.core.Keyword("app.reg.events.challenge","hide-plain?","app.reg.events.challenge/hide-plain?",-1864253683),new cljs.core.Keyword("app.reg.events.challenge","hide-code?","app.reg.events.challenge/hide-code?",-885159316),new cljs.core.Keyword("app.reg.events.challenge","hide-log-plain?","app.reg.events.challenge/hide-log-plain?",-1042025039),new cljs.core.Keyword("app.reg.events.challenge","hide-log-code?","app.reg.events.challenge/hide-log-code?",-934110358),new cljs.core.Keyword("app.reg.events.challenge","note","app.reg.events.challenge/note",-900376677),new cljs.core.Keyword("app.reg.events.challenge","wpm","app.reg.events.challenge/wpm",-540476284)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.reg.events.challenge","wpm","app.reg.events.challenge/wpm",-540476284)], null),null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__65326){
return cljs.core.map_QMARK_(G__65326);
}),(function (G__65326){
return cljs.core.contains_QMARK_(G__65326,new cljs.core.Keyword(null,"plain","plain",1368629269));
}),(function (G__65326){
return cljs.core.contains_QMARK_(G__65326,new cljs.core.Keyword(null,"code","code",1586293142));
}),(function (G__65326){
return cljs.core.contains_QMARK_(G__65326,new cljs.core.Keyword(null,"hide-plain?","hide-plain?",456225404));
}),(function (G__65326){
return cljs.core.contains_QMARK_(G__65326,new cljs.core.Keyword(null,"hide-code?","hide-code?",1496273121));
}),(function (G__65326){
return cljs.core.contains_QMARK_(G__65326,new cljs.core.Keyword(null,"hide-log-plain?","hide-log-plain?",1547059206));
}),(function (G__65326){
return cljs.core.contains_QMARK_(G__65326,new cljs.core.Keyword(null,"hide-log-code?","hide-log-code?",1390534115));
}),(function (G__65326){
return cljs.core.contains_QMARK_(G__65326,new cljs.core.Keyword(null,"note","note",1426297904));
}),(function (G__65326){
return cljs.core.contains_QMARK_(G__65326,new cljs.core.Keyword(null,"wpm","wpm",2035825399));
})], null),(function (G__65326){
return ((cljs.core.map_QMARK_(G__65326)) && (cljs.core.contains_QMARK_(G__65326,new cljs.core.Keyword(null,"plain","plain",1368629269))) && (cljs.core.contains_QMARK_(G__65326,new cljs.core.Keyword(null,"code","code",1586293142))) && (cljs.core.contains_QMARK_(G__65326,new cljs.core.Keyword(null,"hide-plain?","hide-plain?",456225404))) && (cljs.core.contains_QMARK_(G__65326,new cljs.core.Keyword(null,"hide-code?","hide-code?",1496273121))) && (cljs.core.contains_QMARK_(G__65326,new cljs.core.Keyword(null,"hide-log-plain?","hide-log-plain?",1547059206))) && (cljs.core.contains_QMARK_(G__65326,new cljs.core.Keyword(null,"hide-log-code?","hide-log-code?",1390534115))) && (cljs.core.contains_QMARK_(G__65326,new cljs.core.Keyword(null,"note","note",1426297904))) && (cljs.core.contains_QMARK_(G__65326,new cljs.core.Keyword(null,"wpm","wpm",2035825399))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wpm","wpm",2035825399)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.reg.events.challenge","plain","app.reg.events.challenge/plain",-1486556510),new cljs.core.Keyword("app.reg.events.challenge","code","app.reg.events.challenge/code",337585185),new cljs.core.Keyword("app.reg.events.challenge","hide-plain?","app.reg.events.challenge/hide-plain?",-1864253683),new cljs.core.Keyword("app.reg.events.challenge","hide-code?","app.reg.events.challenge/hide-code?",-885159316),new cljs.core.Keyword("app.reg.events.challenge","hide-log-plain?","app.reg.events.challenge/hide-log-plain?",-1042025039),new cljs.core.Keyword("app.reg.events.challenge","hide-log-code?","app.reg.events.challenge/hide-log-code?",-934110358),new cljs.core.Keyword("app.reg.events.challenge","note","app.reg.events.challenge/note",-900376677),new cljs.core.Keyword("app.reg.events.challenge","wpm","app.reg.events.challenge/wpm",-540476284)], null),null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"hide-plain?","hide-plain?",456225404),new cljs.core.Keyword(null,"hide-code?","hide-code?",1496273121),new cljs.core.Keyword(null,"hide-log-plain?","hide-log-plain?",1547059206),new cljs.core.Keyword(null,"hide-log-code?","hide-log-code?",1390534115),new cljs.core.Keyword(null,"note","note",1426297904),new cljs.core.Keyword(null,"wpm","wpm",2035825399)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.reg.events.challenge","wpm","app.reg.events.challenge/wpm",-540476284)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"plain","plain",1368629269))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"code","code",1586293142))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"hide-plain?","hide-plain?",456225404))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"hide-code?","hide-code?",1496273121))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"hide-log-plain?","hide-log-plain?",1547059206))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"hide-log-code?","hide-log-code?",1390534115))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"note","note",1426297904))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"wpm","wpm",2035825399)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.reg.events.challenge","db-challenge","app.reg.events.challenge/db-challenge",2114722932),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.reg.events.challenge","index","app.reg.events.challenge/index",939987836),new cljs.core.Keyword("app.reg.events.challenge","state","app.reg.events.challenge/state",3004164),new cljs.core.Keyword("app.reg.events.challenge","challenge-specs","app.reg.events.challenge/challenge-specs",-965169142),new cljs.core.Keyword("app.reg.events.challenge","curr-code","app.reg.events.challenge/curr-code",-1412728813)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.reg.events.challenge","index","app.reg.events.challenge/index",939987836),new cljs.core.Keyword("app.reg.events.challenge","state","app.reg.events.challenge/state",3004164),new cljs.core.Keyword("app.reg.events.challenge","challenge-specs","app.reg.events.challenge/challenge-specs",-965169142),new cljs.core.Keyword("app.reg.events.challenge","curr-code","app.reg.events.challenge/curr-code",-1412728813)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__65340){
return cljs.core.map_QMARK_(G__65340);
}),(function (G__65340){
return cljs.core.contains_QMARK_(G__65340,new cljs.core.Keyword(null,"index","index",-1531685915));
}),(function (G__65340){
return cljs.core.contains_QMARK_(G__65340,new cljs.core.Keyword(null,"state","state",-1988618099));
}),(function (G__65340){
return cljs.core.contains_QMARK_(G__65340,new cljs.core.Keyword(null,"challenge-specs","challenge-specs",1094085111));
}),(function (G__65340){
return cljs.core.contains_QMARK_(G__65340,new cljs.core.Keyword(null,"curr-code","curr-code",905590378));
})], null),(function (G__65340){
return ((cljs.core.map_QMARK_(G__65340)) && (cljs.core.contains_QMARK_(G__65340,new cljs.core.Keyword(null,"index","index",-1531685915))) && (cljs.core.contains_QMARK_(G__65340,new cljs.core.Keyword(null,"state","state",-1988618099))) && (cljs.core.contains_QMARK_(G__65340,new cljs.core.Keyword(null,"challenge-specs","challenge-specs",1094085111))) && (cljs.core.contains_QMARK_(G__65340,new cljs.core.Keyword(null,"curr-code","curr-code",905590378))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.reg.events.challenge","index","app.reg.events.challenge/index",939987836),new cljs.core.Keyword("app.reg.events.challenge","state","app.reg.events.challenge/state",3004164),new cljs.core.Keyword("app.reg.events.challenge","challenge-specs","app.reg.events.challenge/challenge-specs",-965169142),new cljs.core.Keyword("app.reg.events.challenge","curr-code","app.reg.events.challenge/curr-code",-1412728813)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"challenge-specs","challenge-specs",1094085111),new cljs.core.Keyword(null,"curr-code","curr-code",905590378)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"index","index",-1531685915))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"state","state",-1988618099))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"challenge-specs","challenge-specs",1094085111))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"curr-code","curr-code",905590378)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.reg.events.challenge","index","app.reg.events.challenge/index",939987836),new cljs.core.Symbol("cljs.core","integer?","cljs.core/integer?",1710697810,null),cljs.core.integer_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.reg.events.challenge","challenge-specs","app.reg.events.challenge/challenge-specs",-965169142),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.reg.events.challenge","challenge-spec","app.reg.events.challenge/challenge-spec",1036634758)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.reg.events.challenge","challenge-spec","app.reg.events.challenge/challenge-spec",1036634758),new cljs.core.Keyword("app.reg.events.challenge","challenge-spec","app.reg.events.challenge/challenge-spec",1036634758),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65383){
return cljs.core.coll_QMARK_(G__65383);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.reg.events.challenge","challenge-spec","app.reg.events.challenge/challenge-spec",1036634758))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.reg.events.challenge","abnormal-challenge-specs","app.reg.events.challenge/abnormal-challenge-specs",-111165911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.reg.events.challenge","abnormal-challenge-spec","app.reg.events.challenge/abnormal-challenge-spec",-1429937306)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.reg.events.challenge","abnormal-challenge-spec","app.reg.events.challenge/abnormal-challenge-spec",-1429937306),new cljs.core.Keyword("app.reg.events.challenge","abnormal-challenge-spec","app.reg.events.challenge/abnormal-challenge-spec",-1429937306),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__65384){
return cljs.core.coll_QMARK_(G__65384);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.reg.events.challenge","abnormal-challenge-spec","app.reg.events.challenge/abnormal-challenge-spec",-1429937306))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.reg.events.challenge","curr-code","app.reg.events.challenge/curr-code",-1412728813),new cljs.core.Keyword("app.helpers.parse","morse-code","app.helpers.parse/morse-code",1471782479),new cljs.core.Keyword("app.helpers.parse","morse-code","app.helpers.parse/morse-code",1471782479));
app.reg.events.challenge.empty_db_challenge = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"index","index",-1531685915),(0),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"waiting","waiting",895906735),new cljs.core.Keyword(null,"challenge-specs","challenge-specs",1094085111),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"curr-code","curr-code",905590378),cljs.core.PersistentVector.EMPTY], null);
app.reg.events.challenge.normalize_specs = (function app$reg$events$challenge$normalize_specs(specs){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.reg.events.challenge","abnormal-challenge-specs","app.reg.events.challenge/abnormal-challenge-specs",-111165911),specs)){
} else {
throw (new Error("Assert failed: (s/valid? :app.reg.events.challenge/abnormal-challenge-specs specs)"));
}

var _PERCENT_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__65385){
var map__65386 = p__65385;
var map__65386__$1 = (((((!((map__65386 == null))))?(((((map__65386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65386):map__65386);
var spec = map__65386__$1;
var plain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65386__$1,new cljs.core.Keyword(null,"plain","plain",1368629269));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65386__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var hide_plain_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65386__$1,new cljs.core.Keyword(null,"hide-plain?","hide-plain?",456225404),false);
var hide_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65386__$1,new cljs.core.Keyword(null,"hide-code?","hide-code?",1496273121),false);
var hide_log_plain_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65386__$1,new cljs.core.Keyword(null,"hide-log-plain?","hide-log-plain?",1547059206),false);
var hide_log_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65386__$1,new cljs.core.Keyword(null,"hide-log-code?","hide-log-code?",1390534115));
var note = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65386__$1,new cljs.core.Keyword(null,"note","note",1426297904),"");
var wpm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65386__$1,new cljs.core.Keyword(null,"wpm","wpm",2035825399));
var plain__$1 = (cljs.core.truth_(plain)?plain:app.helpers.parse.code__GT_plain(code));
var code__$1 = (cljs.core.truth_(code)?code:app.helpers.parse.plain__GT_code(plain__$1));
var new_spec = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"plain","plain",1368629269),plain__$1,new cljs.core.Keyword(null,"code","code",1586293142),code__$1,new cljs.core.Keyword(null,"wpm","wpm",2035825399),wpm,new cljs.core.Keyword(null,"note","note",1426297904),note,new cljs.core.Keyword(null,"hide-plain?","hide-plain?",456225404),hide_plain_QMARK_,new cljs.core.Keyword(null,"hide-code?","hide-code?",1496273121),hide_code_QMARK_,new cljs.core.Keyword(null,"hide-log-plain?","hide-log-plain?",1547059206),hide_log_plain_QMARK_,new cljs.core.Keyword(null,"hide-log-code?","hide-log-code?",1390534115),hide_log_code_QMARK_], null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_spec);
}),cljs.core.PersistentVector.EMPTY,specs);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.reg.events.challenge","challenge-specs","app.reg.events.challenge/challenge-specs",-965169142),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :app.reg.events.challenge/challenge-specs %)"));
}

return _PERCENT_;
});
app.reg.events.challenge.create_db_challenge = (function app$reg$events$challenge$create_db_challenge(specs){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.reg.events.challenge","challenge-specs","app.reg.events.challenge/challenge-specs",-965169142),specs)){
} else {
throw (new Error("Assert failed: (s/valid? :app.reg.events.challenge/challenge-specs specs)"));
}

var _PERCENT_ = (function (){var specs__$1 = app.reg.events.challenge.normalize_specs(specs);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.reg.events.challenge.empty_db_challenge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"challenge-specs","challenge-specs",1094085111),specs__$1,new cljs.core.Keyword(null,"curr-code","curr-code",905590378),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(specs__$1),new cljs.core.Keyword(null,"code","code",1586293142))], null)], 0));
})();
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.reg.events.challenge","db-challenge","app.reg.events.challenge/db-challenge",2114722932),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :app.reg.events.challenge/db-challenge %)"));
}

return _PERCENT_;
});
app.reg.events.challenge.done_challenge = (function app$reg$events$challenge$done_challenge(db_challenge){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.reg.events.challenge","db-challenge","app.reg.events.challenge/db-challenge",2114722932),db_challenge)){
} else {
throw (new Error("Assert failed: (s/valid? :app.reg.events.challenge/db-challenge db-challenge)"));
}

var _PERCENT_ = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.reg.events.challenge","db-challenge","app.reg.events.challenge/db-challenge",2114722932),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :app.reg.events.challenge/db-challenge %)"));
}

return _PERCENT_;
});
app.reg.events.challenge.finish_challenges = (function app$reg$events$challenge$finish_challenges(){
return null;
});
app.reg.events.challenge.inc_challenges = (function app$reg$events$challenge$inc_challenges(){
return null;
});
app.reg.events.challenge.next_challenge = (function app$reg$events$challenge$next_challenge(old_challenge){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.reg.events.challenge","db-challenge","app.reg.events.challenge/db-challenge",2114722932),old_challenge)){
} else {
throw (new Error("Assert failed: (s/valid? :app.reg.events.challenge/db-challenge old-challenge)"));
}

var _PERCENT_ = (function (){var map__65400 = old_challenge;
var map__65400__$1 = (((((!((map__65400 == null))))?(((((map__65400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65400):map__65400);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65400__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var challenge_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65400__$1,new cljs.core.Keyword(null,"challenge-specs","challenge-specs",1094085111));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65400__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var num_specs = cljs.core.count(challenge_specs);
var done_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((index + (1)),num_specs);
var idx = (function (){var x__4217__auto__ = (index + (1));
var y__4218__auto__ = (num_specs - (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var spec = ((done_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.PersistentVector.EMPTY], null):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(challenge_specs,idx));
var curr = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(spec);
var state__$1 = ((done_QMARK_)?new cljs.core.Keyword(null,"completed","completed",-486056503):state);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_challenge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),idx,new cljs.core.Keyword(null,"state","state",-1988618099),state__$1,new cljs.core.Keyword(null,"curr-code","curr-code",905590378),curr], null)], 0));
})();
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.reg.events.challenge","db-challenge","app.reg.events.challenge/db-challenge",2114722932),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :app.reg.events.challenge/db-challenge %)"));
}

return _PERCENT_;
});
app.reg.events.challenge.challenge_complete_QMARK_ = (function app$reg$events$challenge$challenge_complete_QMARK_(db_challenge,log_code){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.reg.events.challenge","db-challenge","app.reg.events.challenge/db-challenge",2114722932),db_challenge)){
} else {
throw (new Error("Assert failed: (s/valid? :app.reg.events.challenge/db-challenge db-challenge)"));
}

if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","morse-code","app.helpers.parse/morse-code",1471782479),log_code)){
} else {
throw (new Error("Assert failed: (s/valid? :app.helpers.parse/morse-code log-code)"));
}

var _PERCENT_ = (function (){var map__65408 = db_challenge;
var map__65408__$1 = (((((!((map__65408 == null))))?(((((map__65408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65408):map__65408);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65408__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var curr_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65408__$1,new cljs.core.Keyword(null,"curr-code","curr-code",905590378));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"running","running",1554969103))){
return false;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(log_code,curr_code);

}
})();
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean_QMARK_,_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? boolean? %)"));
}

return _PERCENT_;
});
app.reg.events.challenge.challenge_failed_QMARK_ = (function app$reg$events$challenge$challenge_failed_QMARK_(db_challenge,log_code){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.reg.events.challenge","db-challenge","app.reg.events.challenge/db-challenge",2114722932),db_challenge)){
} else {
throw (new Error("Assert failed: (s/valid? :app.reg.events.challenge/db-challenge db-challenge)"));
}

if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","morse-code","app.helpers.parse/morse-code",1471782479),log_code)){
} else {
throw (new Error("Assert failed: (s/valid? :app.helpers.parse/morse-code log-code)"));
}

var _PERCENT_ = (function (){var map__65411 = db_challenge;
var map__65411__$1 = (((((!((map__65411 == null))))?(((((map__65411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65411):map__65411);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65411__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var curr_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65411__$1,new cljs.core.Keyword(null,"curr-code","curr-code",905590378));
var sub_chal = cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(log_code),curr_code);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"running","running",1554969103))){
return false;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(log_code,sub_chal);

}
})();
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean_QMARK_,_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? boolean? %)"));
}

return _PERCENT_;
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-challenges","init-challenges",1095613635),(function (db,p__65413){
var vec__65414 = p__65413;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65414,(0),null);
var challenge_specs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65414,(1),null);
var specs = app.reg.events.challenge.normalize_specs(challenge_specs);
var db_challenge = app.reg.events.challenge.create_db_challenge(specs);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"challenge","challenge",1302148691),db_challenge);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"next-challenge","next-challenge",-613647923),(function (cofx,_){
var db = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx);
var map__65417 = new cljs.core.Keyword(null,"challenge","challenge",1302148691).cljs$core$IFn$_invoke$arity$1(db);
var map__65417__$1 = (((((!((map__65417 == null))))?(((((map__65417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65417):map__65417);
var challenge = map__65417__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65417__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var challenge_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65417__$1,new cljs.core.Keyword(null,"challenge-specs","challenge-specs",1094085111));
var next_c = app.reg.events.challenge.next_challenge(challenge);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"challenge","challenge",1302148691),next_c)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-challenge-state","set-challenge-state",-37054126),(function (db,p__65419){
var vec__65420 = p__65419;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65420,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65420,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"challenge","challenge",1302148691),new cljs.core.Keyword(null,"state","state",-1988618099)], null),state);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"check-work","check-work",664113736),(function (cofx,_){
var db_challenge = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"challenge","challenge",1302148691)], null));
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var log_code = app.helpers.parse.parse_log(unit,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"log","log",-1595516004)], null)));
var complete_QMARK_ = app.reg.events.challenge.challenge_complete_QMARK_(db_challenge,log_code);
var fail_QMARK_ = app.reg.events.challenge.challenge_failed_QMARK_(db_challenge,log_code);
if(complete_QMARK_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-log","reset-log",209055708)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop-ticker","stop-ticker",-1801221445)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-challenge","next-challenge",-613647923)], null)], null)], null)], null);
} else {
if(fail_QMARK_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop-ticker","stop-ticker",-1801221445)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-challenge-state","set-challenge-state",-37054126),new cljs.core.Keyword(null,"failed","failed",-1397425762)], null)], null)], null)], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-challenge","reset-challenge",-2092688734),(function (cofx,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-log","reset-log",209055708)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-challenge-state","set-challenge-state",-37054126),new cljs.core.Keyword(null,"waiting","waiting",895906735)], null)], null)], null)], null);
}));

//# sourceMappingURL=app.reg.events.challenge.js.map
