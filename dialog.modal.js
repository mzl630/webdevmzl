// JavaScript Document
if ($.cookie('restriction') == undefined || $.cookie('restriction') == null) {
	$(function() {
		$("#birthDate").dialog({
			autoOpen: true,
			resizable: false,
			draggable: false,
			modal: true,
			width: 350,
			hide: "scale"
		});
		$(".ui-dialog").css({top: '20%'});
		$( ".ui-dialog-titlebar" ).css({display: 'none'});
	        $( ".ui-widget-overlay" ).css({background: '#999', opacity: '1'});
	                    });
}