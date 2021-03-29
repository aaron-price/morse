goog.provide('app.helpers.parse');
app.helpers.parse.inv_chart = clojure.set.map_invert(app.db.chart);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.helpers.parse","loose-morse-sym","app.helpers.parse/loose-morse-sym",671690017),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["-","null","charspace","null","symspace","null",".","null","wordspace","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["-",null,"charspace",null,"symspace",null,".",null,"wordspace",null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.helpers.parse","morse-sym","app.helpers.parse/morse-sym",-447803112),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["-","null","charspace","null",".","null","wordspace","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["-",null,"charspace",null,".",null,"wordspace",null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.helpers.parse","morse-code","app.helpers.parse/morse-code",1471782479),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.helpers.parse","morse-sym","app.helpers.parse/morse-sym",-447803112)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.helpers.parse","morse-sym","app.helpers.parse/morse-sym",-447803112),new cljs.core.Keyword("app.helpers.parse","morse-sym","app.helpers.parse/morse-sym",-447803112),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__62982){
return cljs.core.coll_QMARK_(G__62982);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.helpers.parse","morse-sym","app.helpers.parse/morse-sym",-447803112))], null),null));
cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","morse-code","app.helpers.parse/morse-code",1471782479),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","-","charspace","wordspace"], null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.helpers.parse","loose-morse-code","app.helpers.parse/loose-morse-code",1061477893),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.helpers.parse","loose-morse-sym","app.helpers.parse/loose-morse-sym",671690017)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.helpers.parse","loose-morse-sym","app.helpers.parse/loose-morse-sym",671690017),new cljs.core.Keyword("app.helpers.parse","loose-morse-sym","app.helpers.parse/loose-morse-sym",671690017),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__62983){
return cljs.core.coll_QMARK_(G__62983);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.helpers.parse","loose-morse-sym","app.helpers.parse/loose-morse-sym",671690017))], null),null));
cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","loose-morse-code","app.helpers.parse/loose-morse-code",1061477893),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","-","charspace","wordspace","symspace"], null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.helpers.parse","spaced-code","app.helpers.parse/spaced-code",618492741),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.helpers.parse","morse-code","app.helpers.parse/morse-code",1471782479)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.helpers.parse","morse-code","app.helpers.parse/morse-code",1471782479),new cljs.core.Keyword("app.helpers.parse","morse-code","app.helpers.parse/morse-code",1471782479),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__62984){
return cljs.core.coll_QMARK_(G__62984);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.helpers.parse","morse-code","app.helpers.parse/morse-code",1471782479))], null),null));
cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","spaced-code","app.helpers.parse/spaced-code",618492741),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","-"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["wordspace"], null)], null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.helpers.parse","type","app.helpers.parse/type",-1535384951),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tick","tick",-835886976),"null",new cljs.core.Keyword(null,"down","down",1565245570),"null",new cljs.core.Keyword(null,"up","up",-269712113),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tick","tick",-835886976),null,new cljs.core.Keyword(null,"down","down",1565245570),null,new cljs.core.Keyword(null,"up","up",-269712113),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.helpers.parse","time","app.helpers.parse/time",-1239623801),new cljs.core.Symbol("cljs.core","integer?","cljs.core/integer?",1710697810,null),cljs.core.integer_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.helpers.parse","log-entry","app.helpers.parse/log-entry",104955209),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.helpers.parse","type","app.helpers.parse/type",-1535384951),new cljs.core.Keyword("app.helpers.parse","time","app.helpers.parse/time",-1239623801)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.helpers.parse","type","app.helpers.parse/type",-1535384951),new cljs.core.Keyword("app.helpers.parse","time","app.helpers.parse/time",-1239623801)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__62992){
return cljs.core.map_QMARK_(G__62992);
}),(function (G__62992){
return cljs.core.contains_QMARK_(G__62992,new cljs.core.Keyword(null,"type","type",1174270348));
}),(function (G__62992){
return cljs.core.contains_QMARK_(G__62992,new cljs.core.Keyword(null,"time","time",1385887882));
})], null),(function (G__62992){
return ((cljs.core.map_QMARK_(G__62992)) && (cljs.core.contains_QMARK_(G__62992,new cljs.core.Keyword(null,"type","type",1174270348))) && (cljs.core.contains_QMARK_(G__62992,new cljs.core.Keyword(null,"time","time",1385887882))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.helpers.parse","type","app.helpers.parse/type",-1535384951),new cljs.core.Keyword("app.helpers.parse","time","app.helpers.parse/time",-1239623801)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"time","time",1385887882)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"type","type",1174270348))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"time","time",1385887882)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.helpers.parse","log","app.helpers.parse/log",1113865375),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.helpers.parse","log-entry","app.helpers.parse/log-entry",104955209)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.helpers.parse","log-entry","app.helpers.parse/log-entry",104955209),new cljs.core.Keyword("app.helpers.parse","log-entry","app.helpers.parse/log-entry",104955209),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__63011){
return cljs.core.coll_QMARK_(G__63011);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.helpers.parse","log-entry","app.helpers.parse/log-entry",104955209))], null),null));
app.helpers.parse.sample_entry = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"time","time",1385887882),(18413250135)], null);
cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","log-entry","app.helpers.parse/log-entry",104955209),app.helpers.parse.sample_entry);
cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","log","app.helpers.parse/log",1113865375),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.helpers.parse.sample_entry,app.helpers.parse.sample_entry], null));
app.helpers.parse.avail_chars = cljs.core.set(cljs.core.keys(app.db.chart));
app.helpers.parse.plain_text_QMARK_ = (function app$helpers$parse$plain_text_QMARK_(s){
return cljs.core.every_QMARK_(app.helpers.parse.avail_chars,s);
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.helpers.parse","plain-char","app.helpers.parse/plain-char",-1665720750),new cljs.core.Symbol("app.helpers.parse","avail-chars","app.helpers.parse/avail-chars",-632285500,null),app.helpers.parse.avail_chars);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.helpers.parse","plain-text","app.helpers.parse/plain-text",1870916687),new cljs.core.Symbol("app.helpers.parse","plain-text?","app.helpers.parse/plain-text?",396378829,null),app.helpers.parse.plain_text_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.helpers.parse","plain-text-loose","app.helpers.parse/plain-text-loose",-1457950364),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.helpers.parse","spaced-plain","app.helpers.parse/spaced-plain",894679461),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.helpers.parse","plain-char","app.helpers.parse/plain-char",-1665720750)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.helpers.parse","plain-char","app.helpers.parse/plain-char",-1665720750),new cljs.core.Keyword("app.helpers.parse","plain-char","app.helpers.parse/plain-char",-1665720750),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__63012){
return cljs.core.coll_QMARK_(G__63012);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.helpers.parse","plain-char","app.helpers.parse/plain-char",-1665720750))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.helpers.parse","char","app.helpers.parse/char",927214971),new cljs.core.Symbol("app.helpers.parse","avail-chars","app.helpers.parse/avail-chars",-632285500,null),app.helpers.parse.avail_chars);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.helpers.parse","count","app.helpers.parse/count",638485818),new cljs.core.Symbol("cljs.core","integer?","cljs.core/integer?",1710697810,null),cljs.core.integer_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.helpers.parse","num-syms","app.helpers.parse/num-syms",440430019),new cljs.core.Symbol("cljs.core","integer?","cljs.core/integer?",1710697810,null),cljs.core.integer_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.helpers.parse","counted-char","app.helpers.parse/counted-char",834814015),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.helpers.parse","char","app.helpers.parse/char",927214971),new cljs.core.Keyword("app.helpers.parse","count","app.helpers.parse/count",638485818),new cljs.core.Keyword("app.helpers.parse","num-syms","app.helpers.parse/num-syms",440430019)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.helpers.parse","char","app.helpers.parse/char",927214971),new cljs.core.Keyword("app.helpers.parse","count","app.helpers.parse/count",638485818),new cljs.core.Keyword("app.helpers.parse","num-syms","app.helpers.parse/num-syms",440430019)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__63013){
return cljs.core.map_QMARK_(G__63013);
}),(function (G__63013){
return cljs.core.contains_QMARK_(G__63013,new cljs.core.Keyword(null,"char","char",-641587586));
}),(function (G__63013){
return cljs.core.contains_QMARK_(G__63013,new cljs.core.Keyword(null,"count","count",2139924085));
}),(function (G__63013){
return cljs.core.contains_QMARK_(G__63013,new cljs.core.Keyword(null,"num-syms","num-syms",-1195226432));
})], null),(function (G__63013){
return ((cljs.core.map_QMARK_(G__63013)) && (cljs.core.contains_QMARK_(G__63013,new cljs.core.Keyword(null,"char","char",-641587586))) && (cljs.core.contains_QMARK_(G__63013,new cljs.core.Keyword(null,"count","count",2139924085))) && (cljs.core.contains_QMARK_(G__63013,new cljs.core.Keyword(null,"num-syms","num-syms",-1195226432))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.helpers.parse","char","app.helpers.parse/char",927214971),new cljs.core.Keyword("app.helpers.parse","count","app.helpers.parse/count",638485818),new cljs.core.Keyword("app.helpers.parse","num-syms","app.helpers.parse/num-syms",440430019)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"num-syms","num-syms",-1195226432)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"char","char",-641587586))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"count","count",2139924085))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"num-syms","num-syms",-1195226432)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.helpers.parse","counted-plain","app.helpers.parse/counted-plain",-1227620342),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.helpers.parse","counted-char","app.helpers.parse/counted-char",834814015)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.helpers.parse","counted-char","app.helpers.parse/counted-char",834814015),new cljs.core.Keyword("app.helpers.parse","counted-char","app.helpers.parse/counted-char",834814015),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__63019){
return cljs.core.coll_QMARK_(G__63019);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("app.helpers.parse","counted-char","app.helpers.parse/counted-char",834814015))], null),null));
cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","plain-char","app.helpers.parse/plain-char",-1665720750),"A");
cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","plain-text","app.helpers.parse/plain-text",1870916687),"HELLO WORLD");
cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","plain-text-loose","app.helpers.parse/plain-text-loose",-1457950364),"AfadfFGzcxv.,");
cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","spaced-plain","app.helpers.parse/spaced-plain",894679461),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["H","I"," ","T","H","E","R","E"], null));
app.helpers.parse.get_duration = (function app$helpers$parse$get_duration(unit,t1,t2){
return Math.floor(((t2 - t1) / unit));
});
app.helpers.parse.parse_log_pair = (function app$helpers$parse$parse_log_pair(unit,a,b){
if(cljs.core.integer_QMARK_(unit)){
} else {
throw (new Error("Assert failed: (integer? unit)"));
}

if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","log-entry","app.helpers.parse/log-entry",104955209),a)){
} else {
throw (new Error("Assert failed: (s/valid? :app.helpers.parse/log-entry a)"));
}

if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","log-entry","app.helpers.parse/log-entry",104955209),b)){
} else {
throw (new Error("Assert failed: (s/valid? :app.helpers.parse/log-entry b)"));
}

var _PERCENT_ = (function (){var map__63024 = a;
var map__63024__$1 = (((((!((map__63024 == null))))?(((((map__63024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63024):map__63024);
var atime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63024__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var atype = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63024__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var map__63025 = b;
var map__63025__$1 = (((((!((map__63025 == null))))?(((((map__63025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63025):map__63025);
var btime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63025__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var btype = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63025__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var duration = app.helpers.parse.get_duration(unit,atime,btime);
try{if(cljs.core.keyword_identical_QMARK_(atype,new cljs.core.Keyword(null,"down","down",1565245570))){
try{if((function (p1__63021_SHARP_){
return (p1__63021_SHARP_ >= (3));
})(duration)){
return "-";
} else {
throw cljs.core.match.backtrack;

}
}catch (e63045){if((e63045 instanceof Error)){
var e__34948__auto__ = e63045;
if((e__34948__auto__ === cljs.core.match.backtrack)){
return ".";
} else {
throw e__34948__auto__;
}
} else {
throw e63045;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63040){if((e63040 instanceof Error)){
var e__34948__auto__ = e63040;
if((e__34948__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(atype,new cljs.core.Keyword(null,"up","up",-269712113))){
try{if((function (p1__63022_SHARP_){
return (p1__63022_SHARP_ >= (7));
})(duration)){
return "wordspace";
} else {
throw cljs.core.match.backtrack;

}
}catch (e63042){if((e63042 instanceof Error)){
var e__34948__auto____$1 = e63042;
if((e__34948__auto____$1 === cljs.core.match.backtrack)){
try{if((function (p1__63023_SHARP_){
return (p1__63023_SHARP_ >= (3));
})(duration)){
return "charspace";
} else {
throw cljs.core.match.backtrack;

}
}catch (e63043){if((e63043 instanceof Error)){
var e__34948__auto____$2 = e63043;
if((e__34948__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__34948__auto____$2;
}
} else {
throw e63043;

}
}} else {
throw e__34948__auto____$1;
}
} else {
throw e63042;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e63041){if((e63041 instanceof Error)){
var e__34948__auto____$1 = e63041;
if((e__34948__auto____$1 === cljs.core.match.backtrack)){
return "symspace";
} else {
throw e__34948__auto____$1;
}
} else {
throw e63041;

}
}} else {
throw e__34948__auto__;
}
} else {
throw e63040;

}
}})();
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","loose-morse-sym","app.helpers.parse/loose-morse-sym",671690017),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :app.helpers.parse/loose-morse-sym %)"));
}

return _PERCENT_;
});
app.helpers.parse.parse_log = (function app$helpers$parse$parse_log(unit,log){
if(cljs.core.integer_QMARK_(unit)){
} else {
throw (new Error("Assert failed: (integer? unit)"));
}

if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","log","app.helpers.parse/log",1113865375),log)){
} else {
throw (new Error("Assert failed: (s/valid? :app.helpers.parse/log log)"));
}

var _PERCENT_ = (function (){var acc = cljs.core.PersistentVector.EMPTY;
var l = log;
while(true){
if((cljs.core.count(l) < (2))){
return acc;
} else {
var a = cljs.core.first(l);
var b = cljs.core.second(l);
var sym = app.helpers.parse.parse_log_pair(unit,a,b);
var new_acc = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym,"symspace"))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,sym));
var G__63194 = new_acc;
var G__63195 = cljs.core.rest(l);
acc = G__63194;
l = G__63195;
continue;
}
break;
}
})();
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","morse-code","app.helpers.parse/morse-code",1471782479),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :app.helpers.parse/morse-code %)"));
}

return _PERCENT_;
});
app.helpers.parse.get_spaced_code = (function app$helpers$parse$get_spaced_code(morse_code){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","morse-code","app.helpers.parse/morse-code",1471782479),morse_code)){
} else {
throw (new Error("Assert failed: (s/valid? :app.helpers.parse/morse-code morse-code)"));
}

var _PERCENT_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__63049,sym){
var map__63050 = p__63049;
var map__63050__$1 = (((((!((map__63050 == null))))?(((((map__63050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63050):map__63050);
var acc = map__63050__$1;
var resolved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63050__$1,new cljs.core.Keyword(null,"resolved","resolved",968763567));
var pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63050__$1,new cljs.core.Keyword(null,"pending","pending",-220036727));
try{if((sym === "charspace")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"resolved","resolved",968763567),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(resolved,pending)),new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.PersistentVector.EMPTY);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63055){if((e63055 instanceof Error)){
var e__34948__auto__ = e63055;
if((e__34948__auto__ === cljs.core.match.backtrack)){
try{if((sym === "wordspace")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"resolved","resolved",968763567),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(resolved,pending,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["wordspace"], null)], 0))),new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.PersistentVector.EMPTY);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63058){if((e63058 instanceof Error)){
var e__34948__auto____$1 = e63058;
if((e__34948__auto____$1 === cljs.core.match.backtrack)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pending,sym));
} else {
throw e__34948__auto____$1;
}
} else {
throw e63058;

}
}} else {
throw e__34948__auto__;
}
} else {
throw e63055;

}
}}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"resolved","resolved",968763567),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.PersistentVector.EMPTY], null),morse_code);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.helpers.parse","resolved","app.helpers.parse/resolved",406603182),new cljs.core.Keyword("app.helpers.parse","pending","app.helpers.parse/pending",-799218548)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__63060){
return cljs.core.map_QMARK_(G__63060);
}),(function (G__63060){
return cljs.core.contains_QMARK_(G__63060,new cljs.core.Keyword(null,"resolved","resolved",968763567));
}),(function (G__63060){
return cljs.core.contains_QMARK_(G__63060,new cljs.core.Keyword(null,"pending","pending",-220036727));
})], null),(function (G__63060){
return ((cljs.core.map_QMARK_(G__63060)) && (cljs.core.contains_QMARK_(G__63060,new cljs.core.Keyword(null,"resolved","resolved",968763567))) && (cljs.core.contains_QMARK_(G__63060,new cljs.core.Keyword(null,"pending","pending",-220036727))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.helpers.parse","resolved","app.helpers.parse/resolved",406603182),new cljs.core.Keyword("app.helpers.parse","pending","app.helpers.parse/pending",-799218548)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolved","resolved",968763567),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"resolved","resolved",968763567))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"pending","pending",-220036727)))], null),null])),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? (s/keys :req-un [:app.helpers.parse/resolved :app.helpers.parse/pending]) %)"));
}

return _PERCENT_;
});
app.helpers.parse.parse_spaces = (function app$helpers$parse$parse_spaces(morse_code){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","morse-code","app.helpers.parse/morse-code",1471782479),morse_code)){
} else {
throw (new Error("Assert failed: (s/valid? :app.helpers.parse/morse-code morse-code)"));
}

var _PERCENT_ = (function (){var map__63065 = app.helpers.parse.get_spaced_code(morse_code);
var map__63065__$1 = (((((!((map__63065 == null))))?(((((map__63065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63065):map__63065);
var resolved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63065__$1,new cljs.core.Keyword(null,"resolved","resolved",968763567));
var pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63065__$1,new cljs.core.Keyword(null,"pending","pending",-220036727));
var resolved__$1 = ((cljs.core.empty_QMARK_(pending))?resolved:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(resolved,pending));
return resolved__$1;
})();
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","spaced-code","app.helpers.parse/spaced-code",618492741),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :app.helpers.parse/spaced-code %)"));
}

return _PERCENT_;
});
app.helpers.parse.spaced_code__GT_spaced_plain = (function app$helpers$parse$spaced_code__GT_spaced_plain(spaced_code){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","spaced-code","app.helpers.parse/spaced-code",618492741),spaced_code)){
} else {
throw (new Error("Assert failed: (s/valid? :app.helpers.parse/spaced-code spaced-code)"));
}

var _PERCENT_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.helpers.parse.inv_chart,spaced_code);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","spaced-plain","app.helpers.parse/spaced-plain",894679461),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :app.helpers.parse/spaced-plain %)"));
}

return _PERCENT_;
});
app.helpers.parse.log__GT_plain = (function app$helpers$parse$log__GT_plain(unit,log){
if(cljs.core.integer_QMARK_(unit)){
} else {
throw (new Error("Assert failed: (integer? unit)"));
}

if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","log","app.helpers.parse/log",1113865375),log)){
} else {
throw (new Error("Assert failed: (s/valid? :app.helpers.parse/log log)"));
}

var _PERCENT_ = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",app.helpers.parse.spaced_code__GT_spaced_plain(app.helpers.parse.parse_spaces(app.helpers.parse.parse_log(unit,log))));
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","plain-text","app.helpers.parse/plain-text",1870916687),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :app.helpers.parse/plain-text %)"));
}

return _PERCENT_;
});
app.helpers.parse.plain_chars__GT_morse_code = (function app$helpers$parse$plain_chars__GT_morse_code(list_of_chars){
var acc = cljs.core.PersistentVector.EMPTY;
var li = list_of_chars;
while(true){
if(cljs.core.empty_QMARK_(li)){
return acc;
} else {
var a = cljs.core.first(li);
var b = cljs.core.second(li);
var tl = cljs.core.rest(li);
var morse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.db.chart,a);
var new_acc = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,morse);
var new_acc__$1 = (function (){try{if((b === null)){
return new_acc;
} else {
throw cljs.core.match.backtrack;

}
}catch (e63092){if((e63092 instanceof Error)){
var e__34948__auto__ = e63092;
if((e__34948__auto__ === cljs.core.match.backtrack)){
try{if((a === " ")){
return new_acc;
} else {
throw cljs.core.match.backtrack;

}
}catch (e63093){if((e63093 instanceof Error)){
var e__34948__auto____$1 = e63093;
if((e__34948__auto____$1 === cljs.core.match.backtrack)){
try{if((b === " ")){
return new_acc;
} else {
throw cljs.core.match.backtrack;

}
}catch (e63094){if((e63094 instanceof Error)){
var e__34948__auto____$2 = e63094;
if((e__34948__auto____$2 === cljs.core.match.backtrack)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new_acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["charspace"], null));
} else {
throw e__34948__auto____$2;
}
} else {
throw e63094;

}
}} else {
throw e__34948__auto____$1;
}
} else {
throw e63093;

}
}} else {
throw e__34948__auto__;
}
} else {
throw e63092;

}
}})();
var G__63220 = new_acc__$1;
var G__63221 = tl;
acc = G__63220;
li = G__63221;
continue;
}
break;
}
});
app.helpers.parse.plain__GT_code = (function app$helpers$parse$plain__GT_code(plain){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","plain-text-loose","app.helpers.parse/plain-text-loose",-1457950364),plain)){
} else {
throw (new Error("Assert failed: (s/valid? :app.helpers.parse/plain-text-loose plain)"));
}

var _PERCENT_ = (function (){var plain_chars = clojure.string.split.cljs$core$IFn$_invoke$arity$2(plain,(new RegExp("")));
var strict_chars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.helpers.parse.avail_chars,plain_chars);
var morse_chars = app.helpers.parse.plain_chars__GT_morse_code(strict_chars);
return morse_chars;
})();
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","morse-code","app.helpers.parse/morse-code",1471782479),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :app.helpers.parse/morse-code %)"));
}

return _PERCENT_;
});
app.helpers.parse.code__GT_plain = (function app$helpers$parse$code__GT_plain(code){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","morse-code","app.helpers.parse/morse-code",1471782479),code)){
} else {
throw (new Error("Assert failed: (s/valid? :app.helpers.parse/morse-code code)"));
}

var _PERCENT_ = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",app.helpers.parse.spaced_code__GT_spaced_plain(app.helpers.parse.parse_spaces(code)));
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","plain-text","app.helpers.parse/plain-text",1870916687),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :app.helpers.parse/plain-text %)"));
}

return _PERCENT_;
});
app.helpers.parse.count_sym = (function app$helpers$parse$count_sym(sym){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","morse-sym","app.helpers.parse/morse-sym",-447803112),sym)){
} else {
throw (new Error("Assert failed: (s/valid? :app.helpers.parse/morse-sym sym)"));
}

var _PERCENT_ = (function (){try{if((sym === ".")){
return (1);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63099){if((e63099 instanceof Error)){
var e__34948__auto__ = e63099;
if((e__34948__auto__ === cljs.core.match.backtrack)){
try{if((sym === "-")){
return (3);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63100){if((e63100 instanceof Error)){
var e__34948__auto____$1 = e63100;
if((e__34948__auto____$1 === cljs.core.match.backtrack)){
try{if((sym === "charspace")){
return (3);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63101){if((e63101 instanceof Error)){
var e__34948__auto____$2 = e63101;
if((e__34948__auto____$2 === cljs.core.match.backtrack)){
try{if((sym === "wordspace")){
return (7);
} else {
throw cljs.core.match.backtrack;

}
}catch (e63102){if((e63102 instanceof Error)){
var e__34948__auto____$3 = e63102;
if((e__34948__auto____$3 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')));
} else {
throw e__34948__auto____$3;
}
} else {
throw e63102;

}
}} else {
throw e__34948__auto____$2;
}
} else {
throw e63101;

}
}} else {
throw e__34948__auto____$1;
}
} else {
throw e63100;

}
}} else {
throw e__34948__auto__;
}
} else {
throw e63099;

}
}})();
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.integer_QMARK_,_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? integer? %)"));
}

return _PERCENT_;
});
app.helpers.parse.count_code = (function app$helpers$parse$count_code(code){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","morse-code","app.helpers.parse/morse-code",1471782479),code)){
} else {
throw (new Error("Assert failed: (s/valid? :app.helpers.parse/morse-code code)"));
}

var _PERCENT_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,sym){
return (acc + app.helpers.parse.count_sym(sym));
}),(0),code);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.integer_QMARK_,_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? integer? %)"));
}

return _PERCENT_;
});
app.helpers.parse.code__GT_counted_plain = (function app$helpers$parse$code__GT_counted_plain(code){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","morse-code","app.helpers.parse/morse-code",1471782479),code)){
} else {
throw (new Error("Assert failed: (s/valid? :app.helpers.parse/morse-code code)"));
}

var _PERCENT_ = (function (){var space = app.helpers.parse.parse_spaces(code);
var cplain = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (char_code){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",-641587586),cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.helpers.parse.inv_chart,char_code),new cljs.core.Keyword(null,"num-syms","num-syms",-1195226432),cljs.core.count(char_code),new cljs.core.Keyword(null,"count","count",2139924085),app.helpers.parse.count_code(char_code)], null);
}),space);
return cplain;
})();
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.helpers.parse","counted-plain","app.helpers.parse/counted-plain",-1227620342),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :app.helpers.parse/counted-plain %)"));
}

return _PERCENT_;
});

//# sourceMappingURL=app.helpers.parse.js.map