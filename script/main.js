/*
document.querySelector('a').onclick = function() {
	alert("You have clicked a link");
}
*/

function jscroll(location) {
	$("html").scrollTop( $("#" + location).position().top);
}

function mouseover(ele) {
	ele.style = 'text-decoration: underline';
}

function mouseout(ele) {
	ele.style = 'text-decoration: none';
}