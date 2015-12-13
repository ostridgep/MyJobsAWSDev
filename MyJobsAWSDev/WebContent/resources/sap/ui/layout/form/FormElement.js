/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/Element','sap/ui/core/EnabledPropagator','sap/ui/layout/library'],function(q,E,a,l){"use strict";var F=E.extend("sap.ui.layout.form.FormElement",{metadata:{library:"sap.ui.layout",properties:{visible:{type:"boolean",group:"Misc",defaultValue:true}},defaultAggregation:"fields",aggregations:{label:{type:"sap.ui.core.Label",altTypes:["string"],multiple:false},fields:{type:"sap.ui.core.Control",multiple:true,singularName:"field"}}}});(function(){F.prototype.init=function(){this._oFieldDelegate={oElement:this,onAfterRendering:c};};F.prototype.exit=function(){if(this._oLabel){this._oLabel.destroy();delete this._oLabel;}this._oFieldDelegate=undefined;};F.prototype.setLabel=function(A){if(!this._oLabel){var o=this.getLabel();if(o&&o.isRequired){o.isRequired=o._sapuiIsRequired;o._sapuiIsRequired=undefined;}}this.setAggregation("label",A);var L=A;if(typeof L==="string"){if(!this._oLabel){this._oLabel=sap.ui.layout.form.FormHelper.createLabel(L);this._oLabel.setParent(this);if(L.isRequired){this._oLabel.isRequired=_;}}else{this._oLabel.setText(L);}}else{if(this._oLabel){this._oLabel.destroy();delete this._oLabel;}if(L&&L.isRequired){L._sapuiIsRequired=L.isRequired;L.isRequired=_;}}b(this);return this;};F.prototype.getLabelControl=function(){if(this._oLabel){return this._oLabel;}else{return this.getLabel();}};F.prototype.addField=function(f){this.addAggregation("fields",f);f.addDelegate(this._oFieldDelegate);b(this);return this;};F.prototype.insertField=function(f,i){this.insertAggregation("fields",f,i);f.addDelegate(this._oFieldDelegate);b(this);return this;};F.prototype.removeField=function(f){var r=this.removeAggregation("fields",f);r.removeDelegate(this._oFieldDelegate);b(this);return r;};F.prototype.removeAllFields=function(){var r=this.removeAllAggregation("fields");for(var i=0;i<r.length;i++){var R=r[i];R.removeDelegate(this._oFieldDelegate);}b(this);return r;};F.prototype.destroyFields=function(){var f=this.getFields();for(var i=0;i<f.length;i++){var o=f[i];o.removeDelegate(this._oFieldDelegate);}this.destroyAggregation("fields");b(this);return this;};F.prototype.updateFields=function(){var f=this.getFields();var o;var i=0;for(i=0;i<f.length;i++){o=f[i];o.removeDelegate(this._oFieldDelegate);}this.updateAggregation("fields");f=this.getFields();for(i=0;i<f.length;i++){o=f[i];o.addDelegate(this._oFieldDelegate);}b(this);return this;};F.prototype.enhanceAccessibilityState=function(e,A){var L=this.getLabelControl();if(L&&L!=e){var s=A["labelledby"];if(!s){s=L.getId();}else{var d=s.split(" ");if(q.inArray(L.getId(),d)<0){d.splice(0,0,L.getId());s=d.join(" ");}}A["labelledby"]=s;}return A;};F.prototype.onLayoutDataChange=function(e){var p=this.getParent();if(p&&p.onLayoutDataChange){p.onLayoutDataChange(e);}};function _(){var f=this.getParent();var d=f.getFields();for(var i=0;i<d.length;i++){var o=d[i];if(o.getRequired&&o.getRequired()===true){return true;}}return false;}function b(f){var d=f.getFields();var o=d.length>0?d[0]:null;var L=f._oLabel;if(L){L.setAlternativeLabelFor(o);}L=f.getLabel();if(L instanceof sap.ui.core.Control){L.setAlternativeLabelFor(o);}}function c(e){var p=this.oElement.getParent();if(p&&p.contentOnAfterRendering){p.contentOnAfterRendering(this.oElement,e.srcControl);}}}());return F;},true);
