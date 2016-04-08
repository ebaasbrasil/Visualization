!function(t,e){"function"==typeof define&&define.amd?define(["d3","./Material"],e):t.google_MaterialGantt=e(t.d3,t.google_Material)}(this,function(t,e){function a(){e.call(this),this._chartType="GanttChart",this._gType="gantt",this._tag="div",this._data_google=[],this._selection={}}return a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.prototype._class+=" google_MaterialGantt",a.prototype.publish("backgroundColor","#ffffff","html-color","The background color for the main area of the chart. Can be either a simple HTML color string, for example:  or '#00cc00'.",null,{tags:["Basic"]}),a.prototype.publish("arrowAngle",45,"number","Angle of the head of the arrows connecting tasks.",null,{tags:["Basic"]}),a.prototype.publish("arrowColor","#000000","html-color","Color of the path arrow.",null,{tags:["Basic"]}),a.prototype.publish("arrowLength",8,"number","Length of the head of the path arrow.",null,{tags:["Basic"]}),a.prototype.publish("arrowRadius",15,"number","The radius for defining the curve of the arrow between two tasks.",null,{tags:["Basic"]}),a.prototype.publish("arrowSpaceAfter",4,"number","The amount of whitespace between the head of an arrow and the task to which it points.",null,{tags:["Basic"]}),a.prototype.publish("arrowWidth",1.4,"number","The width of the arrows.",null,{tags:["Basic"]}),a.prototype.publish("barCornerRadius",null,"number","The radius for defining the curve of a bar's corners.",null,{tags:["Basic"]}),a.prototype.publish("barHeight",null,"number","The height of the bars for tasks.",null,{tags:["Basic"]}),a.prototype.publish("criticalPathEnabled",!0,"boolean","If true any arrows on the critical path will be styled differently.",null,{tags:["Basic"]}),a.prototype.publish("criticalPathColor","#ff0000","html-color","The color of any critical path arrows.",null,{tags:["Basic"]}),a.prototype.publish("criticalPathStrokeWidth",2,"number","The color of any critical path arrows.",null,{tags:["Basic"]}),a.prototype.publish("datePattern","%Y-%m-%d","string","Format for the date columns",null,{tags:["Basic"]}),a.prototype.publish("defaultStartDate",null,"number","If the start date cannot be computed from the values in the DataTable, the start date will be set to this. Accepts a date value (new Date(YYYY, M, D)) or a number, which is the number of milliseconds to use.",null,{tags:["Basic"]}),a.prototype.publish("durationUnit","day","set","Units of the duration, day, hour, minute, second, millisecons",["day","hour","minute","second","millisecond"],{tags:["Basic"]}),a.prototype.publish("innerGridLineColor",null,"html-color","The color of the inner horizontal grid lines.",null,{tags:["Basic"]}),a.prototype.publish("innerGridLineWidth",null,"number","The width of the inner horizontal grid lines.",null,{tags:["Basic"]}),a.prototype.publish("trackColor",null,"html-color","The fill color of the inner grid track.",null,{tags:["Basic"]}),a.prototype.publish("trackZebraColor","","html-color","The fill color of the alternate, dark inner grid track.",null,{tags:["Basic"]}),a.prototype.publish("labelMaxWidth",300,"number","The maximum amount of space allowed for each task label.",null,{tags:["Basic"]}),a.prototype.publish("percentEnabled",!0,"boolean","Fills the task bar based on the percentage completed for the task.",null,{tags:["Basic"]}),a.prototype.publish("percentFillColor",null,"html-color","The color of the percentage completed portion of a task bar.",null,{tags:["Basic"]}),a.prototype.publish("shadowEnabled",!0,"boolean","If set to true, draws a shadow under each task bar which has dependencies.",null,{tags:["Basic"]}),a.prototype.publish("shadowColor","#000000","html-color","Defines the color of the shadows under any task bar which has dependencies.",null,{tags:["Basic"]}),a.prototype.publish("shadowOffset",1,"number","Defines the offset, in pixels, of the shadows under any task bar which has dependencies.",null,{tags:["Basic"]}),a.prototype.publish("trackHeight",null,"number","The height of the tracks.",null,{tags:["Basic"]}),a.prototype.publish("xAxisHeight",50,"number","Height of the text area for the x-axis",null,{tags:["Basic"]}),a.prototype.publish("labelFontSize",null,"number","Label Font Size",null,{tags:["Basic","Shared"]}),a.prototype.publish("labelFontFamily",null,"string"," Label Font Name",null,{tags:["Basic","Shared"]}),a.prototype.getChartOptions=function(){var t=[];return t.height=this.height(),t.backgroundColor={fill:this.backgroundColor()},t.gantt={trackHeight:(this.height()-this.xAxisHeight())/this.data().length,arrow:{angle:this.arrowAngle(),color:this.arrowColor(),length:this.arrowLength(),radius:this.arrowRadius(),spaceAfter:this.arrowSpaceAfter(),width:this.arrowWidth()},barCornerRadius:this.barCornerRadius(),barHeight:this.barHeight(),criticalPathEnabled:this.criticalPathEnabled(),criticalPathStyle:{stroke:this.criticalPathColor(),strokeWidth:this.criticalPathStrokeWidth()},defaultStartDate:this.defaultStartDate(),innerGridHorizLine:{stroke:this.innerGridLineColor(),strokeWidth:this.innerGridLineWidth()},innerGridTrack:{fill:this.trackColor()},innerGridDarkTrack:{fill:this.trackZebraColor()},labelMaxWidth:this.labelMaxWidth(),labelStyle:{fontName:this.labelFontFamily(),fontSize:this.labelFontSize()},percentEnabled:this.percentEnabled(),percentStyle:{fill:this.percentFillColor()},shadowEnabled:this.shadowEnabled(),shadowColor:this.shadowColor(),shadowOffset:this.shadowOffset()},t},a.prototype.formatData=function(){var e=null;if(this.data().length){this._data_google=new google.visualization.DataTable,this._data_google.addColumn("string",this.columns()[0]),this._data_google.addColumn("string",this.columns()[3]),this._data_google.addColumn("string",this.columns()[4]),this._data_google.addColumn("date","Start"),this._data_google.addColumn("date","End"),this._data_google.addColumn("number",this.columns()[2]),this._data_google.addColumn("number",this.columns()[5]),this._data_google.addColumn("string",this.columns()[6]);var a=t.time.format(this.datePattern()).parse;e=this.data().map(function(t){var e=t[0],o=a(t[1][0]),r=a(t[1][1]),i=t[2]||r-o||null,l=t[3]||t[0],s=t[4],n=t[5],h=t[6];if(i)switch(this.durationUnit()){case"day":i*=864e5;break;case"hour":i*=36e5;break;case"minute":i*=6e4;break;case"second":i*=1e3}this._data_google.addRows([[l,e,s,o,r,i,n,h]])},this)}else e=[["",{role:"annotation"}],["",""]];return this._data_google},a});