// JavaScript Document
if ($.cookie('restriction') == undefined || $.cookie('restriction') == null) {
 ...
}
var day = $("#day").val();
var month = $("#month").val();
var year = $("#year").val();
var mydate = new Date();
mydate.setFullYear(year, month-1, day);
var age = 18;
$.cookie("restriction", "AgeRestriction", { path: '/' });
$(this).dialog( "close" );
alert("Sorry, only persons over the age of " + age + " may enter this site");

