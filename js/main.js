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
		var qaSub = $('#addQa');
		qaSub.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
				//var data = qaSub.serializeArray();
				storeData(this.id);
			}
		});
	});	
			
	
	
	$('#view').on('pageinit', function(id, qa) {
		
	});
		
	$('#about').on('pageinit', function() {
		(function() {
			$("dd").filter(":nth-child(n+4)").hide();
			$("dt").on("click", function() {
				$(this).next().fadeIn().siblings("dd").fadeOut();
				return false;	
			});
		})();
	});
	
	$('#err').on('pageinit', function() {
		
	});
	



//The functions below can go inside or outside the pageinit function for the page in which it is needed.

	var storeData = function(key){
		key = $('#saveQa').data('key');
		if (!key) {
			var id = Math.floor(Math.random()*1000000);
		} else {
			var id = this.key;
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
			return false;
			
	};
	var getData = function(key){
		if(localStorage.length === 0){
			autoFillData();
			alert("There is no data in Local Storage so default data was added.");
		}
		$.mobile.changePage("#view");
		
		for(var i=0, l=localStorage.length; i<l;i++){
			var key = localStorage.key(i),
				qaCall = JSON.parse(localStorage.getItem(key)),
				makeSubList = $('<li></li>'),
				createQaLi = $(
					"<p>" + qaCall.name[0] + " " + qaCall.name[1] + "</p>" + 
					"<p>" + qaCall.call[0] + " " + qaCall.call[1] + "</p>" +
					"<p>" + qaCall.sale[0] + " " + qaCall.sale[1] + "</p>" +
					"<p>" + qaCall.qaType[0] + " " + qaCall.qaType[1] + "</p>" + 
					"<p>" + qaCall.score[0] + " " + qaCall.score[1] + "</p>" +
					"<p>" + qaCall.notes[0] + " " + qaCall.notes[1] + "</p>"
				);
			var editLink = $("<button id='editButton'><a href='#addQa' id='edit"+key+"'> Edit QA</a></button>");
				editLink.on('click', function(){
					editItem();
				});
			var deleteLink = $("<button><a href='#addQa' id='delete"+key+"'>Delete QA</a></button>");
				deleteLink.on('click', function(){
					deleteItem(this.key);
				});	
			makeSubList.append(createQaLi).append(editLink).append("<br>").append(deleteLink).appendTo("#qaContent")		
		};
    };
        
    var deleteItem = function(){
		var ask = confirm("Are you sure you want to delete this log entry?");
		var key = localStorage.key(this.key);
		if(ask){
			localStorage.removeItem(key);
			alert("Log Entry was deleted.");
			window.location = "#add";
			window.location.reload("#");
		}else{
			alert("Log entry was Not deleted.");
		};
	}    
    var editItem =function(key) {
		var id = parseInt(key.match(/\d+/g));
		var qa = JSON.parse(localStorage.getItem(id));
		$("#name").val(qa.name[1]);
		$("#call").val(qa.call[1]);
		$("#sale").val(qa.sale[1]);
		$("#qaType").val(qa.qaType[1]);
		$("#score").val(qa.score[1]);
		$("#notes").val(qa.notes[1]);
		$("#view div form#addQa div.ui-field-contain.ui-body.ui-br div.ui-btn.ui-shadow.ui-btn-corner-all.ui-fullsize.ui-btn-block.ui-btn-up-b span.ui-btn-inner.ui-btn-corner-all span.ui-btn-text").text("Save QA Edit");
		//Save the key value established in this function as a property of #addLogItem
		$("#saveQa").attr("id", this.key);
    };
    var autoFillData = function(){
        for(var n in sampleQa){
            var id = Math.floor(Math.random()*100000001);
            localStorage.setItem(id, JSON.stringify(sampleQa[n]));
        }
    };  

	
	$('input').on("focus", function() {
		$(this).parent().addClass('highlight');
		return false;
	});
	$('input').on("blur", function(){
		$(this).parent().removeClass('highlight');
		return false;
	});
	$("textarea").on("focus", function() {
		$(this).parent().addClass('highlight');
		return false;
	});
	$("textarea").on("blur", function(){
		$(this).parent().removeClass('highlight');
		return false;
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
	$('#clearAllData').on('click', clearData);	
	$("#saveQa").on("click", storeData);
    $("#display").on("click", getData);	
});