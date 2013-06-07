/*

Robert Warren
Term 1306
Advanced Scalable Data Infrastructures (ASD)
I Owe, I Owe * Bill List

Dropbox: https://www.dropbox.com/sh/srvyfqhe3p51wpg/1GdfB_rIFK
Github: https://github.com/grindnmosh/Warren_Robert_ASD_1306.git
URL: http://grind-design.com
*/

$(document).ready(function(){

	$('#home').on('pageinit', function() {
		
	});
	
	$('#add').on('pageinit', function() {
		$('.input').on("focus", function() {
			$(this).parent().addClass('highlight');
			return false
		});
		$('.input').on("blur", function(){
			$(this).parent().removeClass('highlight')
			return false
		});
		$("textarea").on("focus", function() {
			$(this).parent().addClass('highlight');
			return false
		});
		$("textarea").on("blur", function(){
			$(this).parent().removeClass('highlight')
			return false
		});
	});
	
	$('#view').on('pageinit', function() {
		$("#clearAllData").on("click", function() {
			localStorage.clear();
			return false	
		});
	});
		
	$('#about').on('pageinit', function() {
		(function() {
		$("dd").filter(":nth-child(n+4)").hide();
		$("dt").on("click", function() {
			$(this).next().fadeIn().siblings("dd").fadeOut();
			return false	
		})
})();
	});
	
	$('#err').on('pageinit', function() {
		
	});
	


});

