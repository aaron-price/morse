goog.provide('app.helpers.interop');
app.helpers.interop.get_node = (function app$helpers$interop$get_node(id){
return document.getElementById(id);
});
app.helpers.interop.set_node = (function app$helpers$interop$set_node(id,v){
return (document.getElementById(id).innerHTML = v);
});

//# sourceMappingURL=app.helpers.interop.js.map
