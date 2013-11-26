
$(document).ready(function() {
	$("#playshow").hide(); //play button
	$(".minigame").click(function() {
		$("#playshow").toggle();
		$(this).fadeIn(2000);
	})
})