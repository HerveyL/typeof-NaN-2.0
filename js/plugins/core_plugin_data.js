/* 
 * core_plugin_data.js
 * ------------------------------
 * Core plugin: Data handling (jQuery abstaction level)
 * jQuery data expandos, HTML5 data- Attributes, localStorage & sessionStorage.
 * 
 * This code runs in strict mode (if supported by the environment).
 * ------------------------------
 * Author: Andreas Goebel
 * Date: 2011-05-18
 * Changed: 2011-05-30
 */

!(function _core_plugin_ajax_wrap() {
	"use strict";
	
	Object.lookup( 'ir.components.Core.plugin', 0 ).execute(function( win, doc, $, Private, Public, Sandbox, PagePreview, undef ) {
		/****** BASE LIBRARY ABSTRACTIONS ## JQUERY 1.6.1 ******** *******/
		/****** ************************************************** *******/
		Public.data = function _data( elem, key, value ) {
			var rVal = $.data( elem, key, value );
			
			return value ? this : rVal;
		};
		
		Public.removeData = function _removeData( elem, key ) {
			$.removeData( elem, key );
			return Public;
		};
		
		Public.hasData = function _hasData( elem ) {
			return $.hasData( elem );
		};
	});
}());