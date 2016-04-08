!function(t,e){"function"==typeof define&&define.amd?define(["d3","../common/SVGWidget","../common/TextBox","../common/Surface","../common/ResizeSurface","../chart/MultiChartSurface","../common/Palette","../graph/Graph","../graph/Vertex","../graph/Edge","./HipieDDL"],e):t.marshaller_Graph=e(t.d3,t.common_SVGWidget,t.common_TextBox,t.common_Surface,t.common_ResizeSurface,t.chart_MultiChartSurface,t.common_Palette,t.graph_Graph,t.graph_Vertex,t.graph_Edge,t.marshaller_HipieDDL)}(this,function(t,e,a,i,r,o,s,n,d,c,h){function u(t,e,o){function n(t,e,a,i,r,o){i=i||"",r=r||"",o=o||"",e&&a&&t.vertexMap[e]&&t.vertexMap[a]?t.edges.push((new c).sourceVertex(t.vertexMap[e]).targetVertex(t.vertexMap[a]).sourceMarker(i).targetMarker(r).text(o)):(t.vertexMap[e]||console.log("Unknown Vertex:  "+e),t.vertexMap[a]||console.log("Unknown Vertex:  "+a))}e instanceof Object||e&&(e=JSON.parse(e));var u=null,l={},p={},f=[];return t.accept({_visualizeRoxie:o,visit:function(t){if(t instanceof h.Dashboard)u={dashboard:t,vertexMap:p,edges:f},l[t.getQualifiedID()]=u;else if(t instanceof h.DataSource){if(t.databomb&&e[t.id]&&t.comms.databomb(e[t.id]),this._visualizeRoxie){var o="";t.filter.forEach(function(t){o.length>0&&(o+=", "),o+=t}),o=" ("+o+")",u.vertexMap[t.getQualifiedID()]=(new d)["class"]("vertexLabel").faChar("").text(t.id+o)}}else if(t instanceof h.Output)t.dataSource.databomb&&t.dataSource.comms.databombOutput(t.from),this._visualizeRoxie&&(u.vertexMap[t.getQualifiedID()]=(new d)["class"]("vertexLabel").faChar("").text(t.id+"\n["+t.from+"]"));else if(t instanceof h.Visualization&&t.widget){var n=null;if(t.widget instanceof i)n=t.widget.size({width:210,height:210});else if(t.widget instanceof a)n=t.widget;else{var c=280,g=210;"GRAPH"===t.type&&(c=800,g=600),n=(new r).size({width:c,height:g}).title(t.title).content(t.widget)}if(n)switch(t.widgetSurface=n,u.vertexMap[t.getQualifiedID()]=n,t.type){case"2DCHART":case"PIE":case"BUBBLE":case"BAR":case"WORD_CLOUD":n.menu(t.widget._2DChartTypes.concat(t.widget._NDChartTypes.concat(t.widget._anyChartTypes)).map(function(t){return t.display}).sort()),n._menu.click=function(e){t.widget.chartType(e).render()};break;case"LINE":n.menu(t.widget._NDChartTypes.concat(t.widget._anyChartTypes).map(function(t){return t.display}).sort()),n._menu.click=function(e){t.widget.chartType(e).render()};break;case"CHORO":n._menu.data(s.rainbow()),n._menu.click=function(t){n._content.paletteID(t).render(t)};break;case"GRAPH":n._menu.data(["Circle","ForceDirected","ForceDirected2","Hierarchy"]),n._menu.click=function(t){n._content.layout(t)}}}}}),u=null,t.accept({_visualizeRoxie:o,visit:function(t){t instanceof h.Dashboard?u=l[t.getQualifiedID()]:t instanceof h.DataSource||(t instanceof h.Output?this._visualizeRoxie&&n(u,t.dataSource.getQualifiedID(),t.getQualifiedID(),"circleFoot","circleHead"):t instanceof h.Visualization&&(this._visualizeRoxie&&(t.source.getDatasource()&&n(u,t.getQualifiedID(),t.source.getDatasource().getQualifiedID(),"","arrowHead","update"),t.source.getOutput()&&n(u,t.source.getOutput().getQualifiedID(),t.getQualifiedID(),"","arrowHead","notify")),t.events.getUpdates().forEach(function(e){n(u,t.getQualifiedID(),e.visualization.getQualifiedID(),void 0,"arrowHead","on "+e.eventID)})))}}),l}function l(){n.call(this),this._design_mode=!1,this._dashboards=[],this.graphAttributes=["snapToGrid","showEdges"],this.widgetAttributes=["layout","chartType","palette","title","columns","data"]}var p=2;return l.prototype=Object.create(n.prototype),l.prototype.constructor=l,l.prototype._class+=" marshaller_Graph",l.prototype.publish("ddlUrl","","string","DDL URL",null,{tags:["Private"]}),l.prototype.publish("databomb","","string","Data Bomb",null,{tags:["Private"]}),l.prototype.publish("visualizeRoxie",!1,"boolean","Show Roxie Data Sources",null,{tags:["Private"]}),l.prototype.publish("proxyMappings",{},"object","Proxy Mappings",null,{tags:["Private"]}),l.prototype.design_mode=function(t){return arguments.length?(this._design_mode=t,this.showEdges(this._designMode).snapToGrid(this._designMode?12:0).allowDragging(this._designMode),this.data().vertices&&this.data().vertices.forEach(function(t){t.show_title(this._design_mode).render()},this),this):this._design_mode},l.prototype.dashboards=function(t){return arguments.length?(this._dashboards=t,this):this._dashboards},l.prototype.title=function(){var t="";return this._dashboards.forEach(function(e){t&&(t+=", "),t+=e.dashboard.title}),t},l.prototype.renderDashboards=function(t){this.data({vertices:[],edges:[]});var e=[],a=[];for(var i in this._dashboards){for(var r in this._dashboards[i].vertexMap)e.push(this._dashboards[i].vertexMap[r]);a=a.concat(this._dashboards[i].edges)}this.data({vertices:e,edges:a});var o=t?this.load():{changed:!1,dataChanged:!1};return o.changed&&this.layout(""),this},l.prototype.fetchData=function(){for(var t in this._dashboards){var e=this._dashboards[t].dashboard;for(var a in e.datasources)e.datasources[a].fetchData({},!0)}return this},l.prototype.checksum=function(t){var e,a,i=0,r=t.length;if(0===r)return i;for(e=0;r>e;e++)a=t.charCodeAt(e),i=(i<<5)-i+a,i&=i;return i},l.prototype.calcHash=function(){var t=this,e=p;for(var a in this._dashboards){var i=this._dashboards[a].dashboard;i.accept({visit:function(a){a instanceof h.Visualization&&(e+=t.checksum(a.getQualifiedID()))}})}return e},l.prototype.clear=function(){localStorage.setItem("Graph_"+this.calcHash(),"")},l.prototype.serialize=function(t,e){t=t||[],e=e||[];var a={};a.zoom={translation:this.zoom.translate(),scale:this.zoom.scale()},t.forEach(function(t){this[t]&&(a[t]=this[t]())},this);for(var i in this._dashboards){var r=this._dashboards[i].dashboard,o=r.getQualifiedID();a[o]={},r.accept({visit:function(t){if(t instanceof h.Visualization&&t.widgetSurface){var i={pos:t.widgetSurface.pos(),size:t.widgetSurface.size()};e.forEach(function(e){t.widget[e]?i[e]=t.widget[e]():t.widgetSurface[e]&&(i[e]=t.widgetSurface[e]())}),a[o][t.getQualifiedID()]=i}}})}return JSON.stringify(a)},l.prototype.save=function(){localStorage.setItem("Graph_"+this.calcHash(),this.serialize(this.graphAttributes,this.widgetAttributes))},l.prototype.deserialize=function(t,e,a){e=e||[],a=a||[];var i=!1,r=!1;e.forEach(function(e){this[e]&&void 0!==t[e]&&this[e](t[e])},this),t.zoom&&(this.setZoom(t.zoom.translation,t.zoom.scale),i=!0);for(var o in this._dashboards){var s=this._dashboards[o].dashboard,n=s.getQualifiedID();s.accept({visit:function(e){if(e instanceof h.Visualization&&t[n]&&t[n][e.getQualifiedID()]){var o=t[n][e.getQualifiedID()];e.widgetSurface.pos(o.pos).size(o.size),i=!0,a.forEach(function(t){e.widget[t]&&void 0!==o[t]?(e.widget[t](o[t]),"data"===t&&(r=!0)):e.widgetSurface[t]&&o[t]&&e.widgetSurface[t](o[t])})}}})}return{changed:i,dataChanged:r}},l.prototype.load=function(){var t={changed:!1,dataChanged:!1},e=localStorage.getItem("Graph_"+this.calcHash());return e&&(t=this.deserialize(JSON.parse(e),this.graphAttributes,this.widgetAttributes)),t},l.prototype.enter=function(t,e){n.prototype.enter.apply(this,arguments),e.classed("graph_Graph",!0)},l.prototype.update=function(t,e){n.prototype.update.apply(this,arguments)},l.prototype.render=function(t){function e(){var e=u(i,a.databomb(),a.visualizeRoxie());a.dashboards(e),a.applyScaleOnLayout(!0).layout("Hierarchy").renderDashboards(!0),n.prototype.render.call(a,function(e){a.fetchData();var r=0,o=setInterval(function(){(i.commsDataLoaded()||++r>120)&&(clearInterval(o),t&&t(e))},500)})}if(""===this.ddlUrl()||this.ddlUrl()===this._prev_ddlUrl&&this.databomb()===this._prev_databomb&&this._prev_visualizeRoxie===this.visualizeRoxie())return n.prototype.render.apply(this,arguments);this._prev_ddlUrl=this.ddlUrl(),this._prev_databomb=this.databomb(),this._prev_visualizeRoxie=this.visualizeRoxie();var a=this,i=(new h.Marshaller).proxyMappings(this.proxyMappings()).on("commsError",function(t,e){a.commsError(t,e)});return"["===this.ddlUrl()[0]||"{"===this.ddlUrl()[0]?i.parse(this.ddlUrl(),function(){e()}):i.url(this.ddlUrl(),function(){e()}),this},l.prototype.commsError=function(t,e){alert("Comms Error:\n"+t+"\n"+e)},l});