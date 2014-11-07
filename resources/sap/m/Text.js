/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.Text");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.Text",{metadata:{library:"sap.m",properties:{"text":{type:"string",group:"",defaultValue:'',bindable:"bindable"},"textDirection":{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:sap.ui.core.TextDirection.Inherit},"visible":{type:"boolean",group:"Appearance",defaultValue:true},"wrapping":{type:"boolean",group:"Appearance",defaultValue:true},"textAlign":{type:"sap.ui.core.TextAlign",group:"Appearance",defaultValue:sap.ui.core.TextAlign.Begin},"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"maxLines":{type:"int",group:"Appearance",defaultValue:null}}}});sap.m.Text.prototype.normalLineHeight=1.2;sap.m.Text.prototype.cacheLineHeight=true;sap.m.Text.prototype.ellipsis='…';sap.m.Text.hasNativeLineClamp=(function(){return(typeof document.documentElement.style.webkitLineClamp!="undefined")})();
sap.m.Text.prototype.setText=function(t){this.setProperty("text",t,true);var d=this.getTextDomRef();if(d){d.textContent=this.getText(true)}return this};
sap.m.Text.prototype.getText=function(n){var t=this.getProperty("text");if(n){return t.replace(/\r\n/g,"\n")}return t};
sap.m.Text.prototype.onAfterRendering=function(){if(this.getVisible()&&this.hasMaxLines()&&!this.canUseNativeLineClamp()){this.clampHeight()}};
sap.m.Text.prototype.hasMaxLines=function(){return(this.getWrapping()&&this.getMaxLines()>1)};
sap.m.Text.prototype.getTextDomRef=function(){if(!this.getVisible()){return null}if(this.hasMaxLines()){return this.getDomRef("inner")}return this.getDomRef()};
sap.m.Text.prototype.canUseNativeLineClamp=function(){if(!sap.m.Text.hasNativeLineClamp){return false}var d=sap.ui.core.TextDirection;if(this.getTextDirection()==d.RTL){return false}if(this.getTextDirection()==d.Inherit&&sap.ui.getCore().getConfiguration().getRTL()){return false}return true};
sap.m.Text.prototype.getLineHeight=function(d){if(this.cacheLineHeight&&this._iLineHeight){return this._iLineHeight}d=d||this.getTextDomRef();if(!d){return 0}var s=window.getComputedStyle(d),l=s.lineHeight,L;if(/px$/i.test(l)){L=parseFloat(l)}else if(/^normal$/i.test(l)){L=parseFloat(s.fontSize)*this.normalLineHeight}else{L=parseFloat(s.fontSize)*parseFloat(l)}var i=Math.floor(L);if(this.cacheLineHeight&&i){this._iLineHeight=i}return i};
sap.m.Text.prototype.getClampHeight=function(d){d=d||this.getTextDomRef();return this.getMaxLines()*this.getLineHeight(d)};
sap.m.Text.prototype.clampHeight=function(d){d=d||this.getTextDomRef();if(!d){return 0}var m=this.getClampHeight(d);if(m){d.style.maxHeight=m+"px"}return m};
sap.m.Text.prototype.clampText=function(d,s,e){d=d||this.getTextDomRef();if(!d){return}var E;var t=this.getText(true);var m=this.getClampHeight(d);s=s||0;e=e||t.length;d.textContent=t.slice(0,e);if(d.scrollHeight>m){var S=d.style,h=S.height,a=this.ellipsis,i=a.length;S.height=m+"px";while((e-s)>i){E=(s+e)>>1;d.textContent=t.slice(0,E-i)+a;if(d.scrollHeight>m){e=E}else{s=E}}if(d.scrollHeight>m&&s>0){E=s;d.textContent=t.slice(0,E-i)+a}S.height=h}return E};
