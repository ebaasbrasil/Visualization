!function(t,i){"function"==typeof define&&define.amd?define(["d3","../common/HTMLWidget","../common/Utility","../common/PropertyExt","css!orb","css!./Orb"],i):t.template_Orb=i(t.d3,t.common_HTMLWidget,t.common_Utility,t.common_PropertyExt,t.React)}(this,function(t,i,e,o){function s(t){o.call(this),this._owner=t}function r(t){i.call(this),this.orbFields=[],this.savedField=[],this.rowFields=[],this.dataFields=[],this.columnFields=[],this.removeFields=[],this.prevOrbConfig=""}s.prototype=Object.create(o.prototype),s.prototype.constructor=s,s.prototype._class+=" react_Orb.Mapping",s.prototype.publish("addField","","set","Show Toolbox or not",function(){return this._owner?this._owner.columns():[]},{optional:!0}),s.prototype.publish("location",!0,"set","Data Location",["row","column","data","remove"],{tags:["basic"]}),s.prototype.publish("aggregateFunc","","set","Aggregate Function type",["sum","count","min","max","avg","prod","var","varp","stdev","stdevp"],{optional:!0}),s.prototype.publish("formatFunction","","string","Format function");var l=null;return r.prototype._OrbTypes=[{id:"PIVOT",display:"Pivot Table",widgetClass:"react_Orb"}],r.prototype=Object.create(i.prototype),r.prototype.constructor=r,r.prototype._class+=" react_Orb",r.prototype.Mapping=s,r.prototype.publish("stringProp","defaultValue","string","Sample Property"),r.prototype.publish("width","2000","string","Table width",null,{tags:["basic"]}),r.prototype.publish("height","711","string","Table height",null,{tags:["basic"]}),r.prototype.publish("toolbar",!0,"boolean","Show Toolbox or not",null,{tags:["basic"]}),r.prototype.publish("themeColor","blue","set","Theme color",["blue","red","black","green"],{tags:["basic"]}),r.prototype.publish("newField",[],"propertyArray","Source Columns",null,{autoExpand:s}),r.prototype.publish("columnGrandTotal",!0,"boolean","Show Grand total or not"),r.prototype.publish("rowGrandTotal",!0,"boolean","Show Grand total or not"),r.prototype.orbConfig=function(t,i,e,o,s){var r={dataSource:t,canMoveFields:!1,dataHeadersLocation:"columns",width:this.width(),height:this.height(),theme:this.themeColor(),toolbar:{visible:this.toolbar()},grandTotal:{rowsvisible:this.rowGrandTotal(),columnsvisible:this.columnGrandTotal()},subTotal:{visible:!0,collapsed:!1,collapsible:!0},rowSettings:{subTotal:{visible:!0,collapsed:!1,collapsible:!0}},columnSettings:{subTotal:{visible:!0,collapsed:!1,collapsible:!0}},fields:i,rows:this.rowFields,columns:this.columnFields,data:this.dataFields};return r},r.prototype.enter=function(t,e){i.prototype.enter.apply(this,arguments),this._orbDiv=e.append("div"),this._orb=new l.pgridwidget(this.orbConfig()),this._orb.render(this._orbDiv.node())},r.prototype.deleteField=function(t){var i=this.savedField.indexOf(t);i>-1&&this.savedField.splice(i),i=this.rowFields.indexOf(t),i>-1&&this.rowFields.splice(i),i=this.columnFields.indexOf(t),i>-1&&this.columnFields.splice(i),i=this.dataFields.indexOf(t),i>-1&&this.dataFields.splice(i),this.orbFields.forEach(function(i,e,o){i.caption===t&&o.splice(e,1)})},r.prototype.update=function(e,o){function s(i){return function(e){return t.format(i)(e)}}i.prototype.update.apply(this,arguments);for(var r=this.data(),n=this.columns(),a=0;a<this.orbFields.length;a++)-1===this.savedField.indexOf(this.orbFields[a].caption)&&this.savedField.push(this.orbFields[a].caption);this.newField().forEach(function(t,i){var e=t.__prop_addField;if(-1===this.savedField.indexOf(e)){var o=n.indexOf(e);-1!==o&&this.orbFields.push({name:o.toString(),caption:e})}},this),this.newField().forEach(function(t,i){var e=t.__prop_addField,o=this.columnFields.indexOf(e),s=this.dataFields.indexOf(e),r=this.rowFields.indexOf(e),l=this.removeFields.indexOf(e);if(null!==e)switch(t.__prop_location){case"row":-1===r&&(this.rowFields.push(e),o>-1&&this.columnFields.splice(o,1),s>-1&&this.dataFields.splice(s,1),l>-1&&this.removeFields.splice(l,1));break;case"column":-1===o&&(this.columnFields.push(e),r>-1&&this.rowFields.splice(o,1),s>-1&&this.dataFields.splice(s,1),l>-1&&this.removeFields.splice(l,1));break;case"data":-1===s&&(this.dataFields.push(e),r>-1&&this.rowFields.splice(o,1),o>-1&&this.columnFields.splice(s,1),l>-1&&this.removeFields.splice(l,1));break;case"remove":-1===l&&(this.removeFields.push(e),this.deleteField(e))}},this),this.newField().forEach(function(t,i){for(var e=t.__prop_addField,o=0;o<this.orbFields.length;o++)if(this.orbFields[o].caption===e){var r=t.formatFunction();this.orbFields[o].dataSettings={aggregateFunc:t.aggregateFunc(),formatFunc:s(r)}}},this);var p=this.orbConfig(r,this.orbFields,this.rowFields,this.columnFields,this.dataFields);if(this.prevOrbConfig!==JSON.stringify(p)){var d=React;d.unmountComponentAtNode(this._orbDiv.node()),this.prevOrbConfig=p}this._orbDiv=o.append("div"),this._orb=new l.pgridwidget(p),this._orb.render(this._orbDiv.node()),this._orb.refreshData(this.data())},r.prototype.exit=function(t,e){this._orbDiv.remove(),i.prototype.exit.apply(this,arguments)},r.prototype.render=function(t,e){if(l)i.prototype.render.apply(this,arguments);else{var o=this,s=arguments;require(["orb-react"],function(t){window.React=window.React||t,require(["orb"],function(t){l=t,i.prototype.render.apply(o,s)})})}},r});