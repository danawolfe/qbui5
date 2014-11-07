/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.layout.GridData");jQuery.sap.require("sap.ui.layout.library");jQuery.sap.require("sap.ui.core.LayoutData");sap.ui.core.LayoutData.extend("sap.ui.layout.GridData",{metadata:{library:"sap.ui.layout",properties:{"span":{type:"sap.ui.layout.GridSpan",group:"Behavior",defaultValue:null},"spanL":{type:"int",group:"Behavior",defaultValue:null},"spanM":{type:"int",group:"Behavior",defaultValue:null},"spanS":{type:"int",group:"Behavior",defaultValue:null},"indent":{type:"sap.ui.layout.GridIndent",group:"Behavior",defaultValue:null},"indentL":{type:"int",group:"Behavior",defaultValue:null},"indentM":{type:"int",group:"Behavior",defaultValue:null},"indentS":{type:"int",group:"Behavior",defaultValue:null},"visibleL":{type:"boolean",group:"Behavior",defaultValue:true},"visibleM":{type:"boolean",group:"Behavior",defaultValue:true},"visibleS":{type:"boolean",group:"Behavior",defaultValue:true},"moveBackwards":{type:"sap.ui.layout.GridIndent",group:"Misc",defaultValue:null},"moveForward":{type:"sap.ui.layout.GridIndent",group:"Misc",defaultValue:null},"linebreak":{type:"boolean",group:"Misc",defaultValue:false},"linebreakL":{type:"boolean",group:"Misc",defaultValue:false},"linebreakM":{type:"boolean",group:"Misc",defaultValue:false},"linebreakS":{type:"boolean",group:"Misc",defaultValue:false},"spanLarge":{type:"int",group:"Behavior",defaultValue:null,deprecated:true},"spanMedium":{type:"int",group:"Behavior",defaultValue:null,deprecated:true},"spanSmall":{type:"int",group:"Behavior",defaultValue:null,deprecated:true},"indentLarge":{type:"int",group:"Behavior",defaultValue:null,deprecated:true},"indentMedium":{type:"int",group:"Behavior",defaultValue:null,deprecated:true},"indentSmall":{type:"int",group:"Behavior",defaultValue:null,deprecated:true},"visibleOnLarge":{type:"boolean",group:"Behavior",defaultValue:true,deprecated:true},"visibleOnMedium":{type:"boolean",group:"Behavior",defaultValue:true,deprecated:true},"visibleOnSmall":{type:"boolean",group:"Behavior",defaultValue:true,deprecated:true}}}});(function(){sap.ui.layout.GridData.prototype._setStylesInternal=function(s){if(s&&s.length>0){this._sStylesInternal=s}else{this._sStylesInternal=undefined}};sap.ui.layout.GridData.prototype._getEffectiveSpanLarge=function(){var s=this.getSpanL();if(s&&(s>0)&&(s<13)){return s}var S=/L([1-9]|1[0-2])(?:\s|$)/i;var a=S.exec(this.getSpan());if(a){var b=a[0];if(b){b=b.toUpperCase();if(b.substr(0,1)==="L"){return parseInt(b.substr(1))}}}return undefined};sap.ui.layout.GridData.prototype._getEffectiveSpanMedium=function(){var s=this.getSpanM();if(s&&(s>0)&&(s<13)){return s}var S=/M([1-9]|1[0-2])(?:\s|$)/i;var a=S.exec(this.getSpan());if(a){var b=a[0];if(b){b=b.toUpperCase();if(b.substr(0,1)==="M"){return parseInt(b.substr(1))}}}return undefined};sap.ui.layout.GridData.prototype._getEffectiveSpanSmall=function(){var s=this.getSpanS();if(s&&(s>0)&&(s<13)){return s}var S=/S([1-9]|1[0-2])(?:\s|$)/i;var a=S.exec(this.getSpan());if(a){var b=a[0];if(b){b=b.toUpperCase();if(b.substr(0,1)==="S"){return parseInt(b.substr(1))}}}return undefined};sap.ui.layout.GridData.prototype.setSpanLarge=function(s){this.setSpanL(s);jQuery.sap.log.warning("Deprecated property spanLarge is used, please use spanL instead.")};sap.ui.layout.GridData.prototype.setSpanMedium=function(s){this.setSpanM(s);jQuery.sap.log.warning("Deprecated property spanMedium is used, please use spanM instead.")};sap.ui.layout.GridData.prototype.setSpanSmall=function(s){this.setSpanS(s);jQuery.sap.log.warning("Deprecated property spanSmall is used, please use spanS instead.")};sap.ui.layout.GridData.prototype.setIndentLarge=function(i){this.setIndentL(i);jQuery.sap.log.warning("Deprecated property indentLarge is used, please use indentL instead.")};sap.ui.layout.GridData.prototype.setIndentMedium=function(i){this.setIndentM(i);jQuery.sap.log.warning("Deprecated property indentMedium is used, please use indentM instead.")};sap.ui.layout.GridData.prototype.setIndentSmall=function(i){this.setIndentS(i);jQuery.sap.log.warning("Deprecated property indentSmall is used, please use indentS instead.")};sap.ui.layout.GridData.prototype.setVisibleOnLarge=function(v){this.setVisibleL(v);jQuery.sap.log.warning("Deprecated property visibleOnLarge is used, please use visibleL instead.")};sap.ui.layout.GridData.prototype.setVisibleOnMedium=function(v){this.setVisibleM(v);jQuery.sap.log.warning("Deprecated property visibleOnMedium is used, please use visibleM instead.")};sap.ui.layout.GridData.prototype.setVisibleOnSmall=function(v){this.setVisibleS(v);jQuery.sap.log.warning("Deprecated property visibleOnSmall is used, please use visibleS instead.")};sap.ui.layout.GridData.prototype.getSpanLarge=function(){jQuery.sap.log.warning("Deprecated property spanLarge is used, please use spanL instead.");return this.getSpanL()};sap.ui.layout.GridData.prototype.getSpanMedium=function(){jQuery.sap.log.warning("Deprecated property spanMedium is used, please use spanM instead.");return this.getSpanM()};sap.ui.layout.GridData.prototype.getSpanSmall=function(){jQuery.sap.log.warning("Deprecated property spanSmall is used, please use spanS instead.");return this.getSpanS()};sap.ui.layout.GridData.prototype.getIndentLarge=function(){jQuery.sap.log.warning("Deprecated property indentLarge is used, please use indentL instead.");return this.getIndentL()};sap.ui.layout.GridData.prototype.getIndentMedium=function(){jQuery.sap.log.warning("Deprecated property indentMedium is used, please use indentM instead.");return this.getIndentM()};sap.ui.layout.GridData.prototype.getIndentSmall=function(){jQuery.sap.log.warning("Deprecated property indentSmall is used, please use indentS instead.");return this.getIndentS()};sap.ui.layout.GridData.prototype.getVisibleOnLarge=function(){jQuery.sap.log.warning("Deprecated property visibleOnLarge is used, please use visibleL instead.");return this.getVisibleL()};sap.ui.layout.GridData.prototype.getVisibleOnMedium=function(){jQuery.sap.log.warning("Deprecated property visibleOnMedium is used, please use visibleM instead.");return this.getVisibleM()};sap.ui.layout.GridData.prototype.getVisibleOnSmall=function(){jQuery.sap.log.warning("Deprecated property visibleOnSmall is used, please use visibleS instead.");return this.getVisibleS()}}());
