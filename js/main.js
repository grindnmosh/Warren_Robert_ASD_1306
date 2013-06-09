/*

Robert Warren
Term 1306
Advanced Scalable Data Infrastructures (ASD)
Quality Experience


Github: https://github.com/grindnmosh/Warren_Robert_ASD_1306.git
URL: http://grind-design.com (page for new app coming soon... will be moving 1st app to a sub domain...)

*/

$(document).ready(function(){
	
	$('#home').on('pageinit', function() {
		
	});
	
	$('#add').on('pageinit', function() {
		var qaForm = $('#addQa');
		qaForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
				//var data = qaForm.serializeArray();
				storeData(this.id);
			}
		});
		var storeData = function(data){
			key = $('#saveQa').data('key');
			if (!key) {
				var id = Math.floor(Math.random()*1000000);
			} else {
				var id = key;
			}
			var qa = {};
				qa.name = ["Name:", $("#name").val()];
				qa.call = ["Date and Time:", $("#call").val()];
				qa.sale = ["Sales Call Type:", $("#sale").val()];
				qa.qaType = ["QA Style:", $("#qaType").val()];
				qa.score = ["QA Score:", $("#score").val()];
				qa.notes = ["Notes:", $("#notes").val()];
				localStorage.setItem(id, JSON.stringify(qa));
				alert("Log Saved!");
				window.location.reload("#");
				return false
				
		};
		
		var getData = function(){
		if(localStorage.length === 0){
			alert("There is no data in Local Storage so default data was added.");
			autoFillData();
			}
			var getQa = $('#qaContent');
			$(getQA).empty();
			for(var i=0, l=localStorage.length; i<l;i++){
				var key = localStorage.key(i);
		        var value = localStorage.getItem(key);
		        value = value.split(',');
		        $("div").attr("ul").appendTo(getQa);
		       // $("img").attr('src': 'img/other.png').appendTo(getQa);
		        $("li").html(qaCall.name[0]+" "+qaCall.name[1]).appendTo(getQa);
				$("li").html(qaCall.call[0]+" "+qaCall.call[1]).appendTo(getQa);
				$("li").html(qaCall.sale[0]+" "+qaCall.sale[1]).appendTo(getQa);
				$("li").html(qaCall.qaType[0]+" "+qaCall.qaType[1]).appendTo(getQa);
				$("li").html(qaCall.score[0]+" "+qaCall.score[1]).appendTo(getQa);
				$("li").html(qaCall.notes[0]+" "+qaCall.notes[1]).appendTo(getQa);
				//$('<p>').html($('<a>').attr({'href': '#','onclick': 'deleteItem(' + key + ');'}).html('Delete QA')).appendTo(getQa);
		       // $('<p>').html($('<a>').attr({'href': '#','onclick': 'editItem(' + key + ');'}).html('Edit QA')).appendTo(getQa);
		        //$('<br>').html('').appendTo(getQa);
		        return false
			};
				
			$("#saveQa").on("click", storeData);
			$("#display").on("click", getData);	
			
		
			
			var deleteItem = function(){
				var ask = confirm("Are you sure you want to delete this QA");
				if(ask){
					localStorage.removeItem(key);
					alert("QA was deleted.");
					$("#view").qaContent('refresh');
				}else{
					alert("QA was Not deleted.");
				};
			};
			var autoFillData = function(){
				for(var n in sampleQa){
					var id = Math.floor(Math.random()*100000001);
					localStorage.setItem(id, JSON.stringify(sampleQa[n]));
				};
			};
				
		};
				
			
	});	
			
	
	
	$('#view').on('pageinit', function() {
		$('#clearAllData').on('click', clearData);	
		
	

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

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

$('input').on("focus", function() {
	$(this).parent().addClass('highlight');
	return false
});
$('input').on("blur", function(){
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




var clearData = function(){
	if (localStorage.length === 0) {
		alert("There are no QAs to clear.");
	} else {
		localStorage.clear();
		alert("All QAs have been cleared.");
		window.location.reload("#add");
		return false;
	}
};