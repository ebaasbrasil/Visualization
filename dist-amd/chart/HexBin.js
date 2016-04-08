!function(t,e){"function"==typeof define&&define.amd?define(["d3","../common/SVGWidget","./XYAxis","../api/INDChart","../api/ITooltip","../common/Palette","d3-hexbin","css!./HexBin"],e):t.chart_HexBin=e(t.d3,t.common_SVGWidget,t.chart_XYAxis,t.api_INDChart,t.api_ITooltip,t.common_Palette)}(this,function(t,e,i,a,n,o,s){function r(t){i.call(this),a.call(this),n.call(this),this._hexbin=new s,this.xAxisGuideLines_default(!1),this.yAxisGuideLines_default(!1)}return s=s||t.hexbin||window.d3.hexbin,r.prototype=Object.create(i.prototype),r.prototype.constructor=r,r.prototype._class+=" chart_HexBin",r.prototype["implements"](a.prototype),r.prototype["implements"](n.prototype),r.prototype._palette=o.rainbow("default"),r.prototype.publish("paletteID","Blues","set","Palette ID",r.prototype._palette["switch"](),{tags:["Basic","Shared"]}),r.prototype.publish("useClonedPalette",!1,"boolean","Enable or disable using a cloned palette",null,{tags:["Intermediate","Shared"]}),r.prototype.publish("binSize",20,"number","Bin radius"),r.prototype.xPos=function(t){return"horizontal"===this.orientation()?this.dataPos(t.label):this.valuePos(t.value)},r.prototype.yPos=function(t){return"horizontal"===this.orientation()?this.valuePos(t.value):this.dataPos(t.label)},r.prototype.updateChart=function(e,i,a,n,o,s,r){var l=this;this._palette=this._palette["switch"](this.paletteID()),this.useClonedPalette()&&(this._palette=this._palette.cloneNotExists(this.paletteID()+"_"+this.id())),this._hexbin.size([n,o]).radius(this.binSize());var p=this.flattenData(),h=p.map(function(t,e){return[l.xPos(t),l.yPos(t)]}),u=this._hexbin(h),c=t.max(u,function(t){return t.length}),d=this.svgData.selectAll(".hexagon").data(u);d.enter().append("path").attr("class","hexagon").attr("transform",function(t){return"translate("+t.x+","+t.y+")scale(0)"}),d.transition().duration(r).attr("d",this._hexbin.hexagon()).attr("transform",function(t){return"translate("+t.x+","+t.y+")scale(1)"}).style("fill",function(t){return l._palette(t.length,0,c)}),d.exit().transition().duration(r).attr("transform",function(t){return"translate("+t.x+","+t.y+")scale(0)"}).remove()},r.prototype.exit=function(t,i){e.prototype.exit.apply(this,arguments)},r});