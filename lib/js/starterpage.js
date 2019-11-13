// simple recurring function to set the time on the screen
setInterval(setTime, 5000);
function setTime () {
	var d = new Date(); // for now
	var hours = d.getHours(); // => 9
	var minutes = d.getMinutes(); // =>  30
	var seconds = d.getSeconds(); // => 51
	$('#time').text(hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0'));
}

$(document).ready(setTime);