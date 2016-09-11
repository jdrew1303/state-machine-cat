/* istanbul ignore else */
if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}
define(['../lib/handlebars.runtime'], function(Handlebars) {
  Handlebars = Handlebars["default"];  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
return templates['dot.states.template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  \""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "\" [shape=circle style=filled fillcolor=black fixedsize=true height=0.15 label=\"\"]\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, buffer = 
  "  \""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" [label=\"{"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)));
  stack1 = ((helper = (helper = helpers.activities || (depth0 != null ? depth0.activities : depth0)) != null ? helper : alias2),(options={"name":"activities","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.activities) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "}\"]\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "|"
    + container.escapeExpression(container.lambda(depth0, depth0));
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  \""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "\" [shape=circle style=filled fillcolor=black fixedsize=true height=0.15 peripheries=2 label=\"\"]\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  subgraph \"cluster_"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" {\n    label=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" style=rounded penwidth=2.0\n    \""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" [shape=point style=invis margin=0 width=0 height=0]\n    "
    + ((stack1 = (helpers.stateSection || (depth0 && depth0.stateSection) || alias2).call(alias1,(depth0 != null ? depth0.statemachine : depth0),{"name":"stateSection","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  }\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "";
},"11":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.noteName || (depth0 != null ? depth0.noteName : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"noteName","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.noteName) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "    \""
    + alias2(alias1(depth0, depth0))
    + "\" [label=\""
    + alias2(alias1((depths[1] != null ? depths[1].noteFlattened : depths[1]), depth0))
    + "\" shape=note fontsize=10 fillcolor=\"#ffffcc\" penwidth=1.0]\n    \""
    + alias2(alias1((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + "\" -- \""
    + alias2(alias1(depth0, depth0))
    + "\" [style=dashed arrowtail=none arrowhead=none]\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = "";

  stack1 = ((helper = (helper = helpers.initialStates || (depth0 != null ? depth0.initialStates : depth0)) != null ? helper : alias2),(options={"name":"initialStates","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.initialStates) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers.regularStates || (depth0 != null ? depth0.regularStates : depth0)) != null ? helper : alias2),(options={"name":"regularStates","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.regularStates) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers.finalStates || (depth0 != null ? depth0.finalStates : depth0)) != null ? helper : alias2),(options={"name":"finalStates","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.finalStates) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers.compositeStates || (depth0 != null ? depth0.compositeStates : depth0)) != null ? helper : alias2),(options={"name":"compositeStates","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.compositeStates) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers.states || (depth0 != null ? depth0.states : depth0)) != null ? helper : alias2),(options={"name":"states","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.states) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true,"useDepths":true});
});