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
		$('input').focus(function() {
			$(this)
				.parent().addClass('highlight')
		});
		
		$('input').blur(function(){
			$(this)
				.parent().removeClass('highlight')
		});
		submitHandler:function() {
			var data = qaForm.serializeArray();
			getForm(data);
		};
	});
	
	$('#view').on('pageinit', function() {
		$("#clearAllData").click(function() {
			localStorage.clear();	
		});
	});
		
	$('#about').on('pageinit', function() {
		
	});
	
	$('#err').on('pageinit', function() {
		
	});

});