$(document).ready(function() {
        $("#about").fancybox({
            helpers: {
                title : {
                    type : 'float'
                }
            }
        }
        });
/*
 * $(document).ready(function() {
	$("#playshow").hide(); //play button
	$("#runshow").hide(); //run button
	$(".aboutshow").hide();
//resume button click event
	$(".resume").click(function() {
		$("#playshow").hide();
		$("#runshow").hide();
		$("#projshow").hide();
		$(".aboutshow").hide();
		$("#resumeshow").fadeIn(2000);
	})
//run button click event
	$(".running").click(function() {
		$("#playshow").hide();
		$("#resumeshow").hide();
		$("#projshow").hide();
		$(".aboutshow").hide();
		$("#runshow").fadeIn(2000);
	})
//proj button click event
	$(".projects").click(function() {
		$("#playshow").hide();
		$("#resumeshow").hide();
		$("#runshow").hide();
		$(".aboutshow").hide();
		$("#projshow").fadeIn(2000);
	})
//about button click event
	$(".about").click(function() {
		$("#playshow").hide();
		$("#resumeshow").hide();
		$("#projshow").hide();
		$("#runshow").hide();
		$(".aboutshow").fadeIn(2000);
	})
})
*/
