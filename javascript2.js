// JavaScript Document
"use strict";



function setUpPage() {
	removeSelectDefaults();
	setupDays();
	createEventListeners();
}
if (window.addEventListener) {
	window.addEventListener(	"load", removeSelectDefaults, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", removeSelectDefaults);
}
/* Code Below validates Days in a Month on drop down box in contact.html */
var twentyNine= document.createDocumentFragment();
var thirty= document.createDocumentFragment();
var thirtyOne= document.createDocumentFragment();

function setupDays() {
	var dates= document.getElementById("birthDy").getElementsByTagName("option");
	twentyNine.appendChild(dates[28].cloneNode(true));
	thirty.appendChild(dates[28].cloneNode(true));
	thirty.appendChild(dates[29].cloneNode(true));
	thirtyOne.appendChild(dates[28].cloneNode(true));
	thirtyOne.appendChild(dates[29].cloneNode(true));
	thirtyOne.appendChild(dates[30].cloneNode(true));
}
function updateDays() {
	var birthDay= document.getElementById("birthDy");
	var dates = birthDay.getElementsByTagName("option");
	var birthMonth= document.getElementById("birthMo");
	var birthYear = document.getElementById("birthYr");
	var selectedMonth=birthMonth.options [birthMonth.selectedIndex].value;
	while (dates[28]) {
		birthDay.removeChild(dates[28]);
	}
	if (birthYear.selectedIndex === -1) {
		birthYear.selectedIndex = 0;
	}
	if (selectedMonth === "2" && birthYear.options[birthYear.selectedIndex].value === "2018") {
		birthDay.appendChild(twentyNine.cloneNode(true));
	}
	else if (selectedMonth === "4" || selectedMonth === "6" || selectedMonth === "9" || selectedMonth === "11") {
		birthDay.appendChild(thirty.cloneNode(true));
	}
	else if (selectedMonth === "1" || selectedMonth === "3" || selectedMonth === "5" || selectedMonth === "7" || selectedMonth === "8" || selectedMonth === "10" || selectedMonth === "12") {
		birthDay.appendChild(thirtyOne.cloneNode(true));
	}
}

function removeSelectDefaults() { 
	var emptyBoxes=document.getElementsByTagName("select");
	for (var i = 0; i < emptyBoxes.length; i++) {
		emptyBoxes[i].selectedIndex = -1;
	}
}
function createEventListeners() {
	var birthMonth= document.getElementById("birthMo");
	if (birthMonth.addEventListener) {
		birthMonth.addEventListener("change", updateDays, false);
	} else if (birthMonth.attachEvent) {
		birthMonth.attachEvent("onchange", updateDays);
	}
	var birthYear=document.getElementById("birthYr");
	if (birthYear.addEventListener) {
		birthYear.addEventListener("change", updateDays, false);
	} else if (birthYear.attachEvent) {
		birthYear.attachEvent("onchange", updateDays);
	}
}
if (window.addEventListener) {
	window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", setUpPage);
}
