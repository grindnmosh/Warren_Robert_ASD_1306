/*

Robert Warren
Term 1306
Advanced Scalable Data Infrastructures (ASD)
Quality Experience


Github: https://github.com/grindnmosh/Warren_Robert_ASD_1306.git
URL: http://grind-design.com (page for new app coming soon... will be moving 1st app to a sub domain...)

*/



	$('#home').on('pageinit', function() {

	});

	$('#add').on('pageinit', function() {
		var qaSub = $('#addQa');
		qaSub.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
				//var data = qaSub.serializeArray();
				storeData(this.key);
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
	$('#completed').on('pageinit', function() {
		
	});
	
	$('#active').on('pageinit', function() {
		
	});
	
	
//The functions below can go inside or outside the pageinit function for the page in which it is needed.
	var editKey = "";
	
	var storeData = function(){
		if (!editKey) {
			var id = Math.floor(Math.random()*1000000);
		} else {
			var id = editKey;
		}

		var qa = {};
			qa.name = ["Name:", $("#name").val()];
			qa.call = ["Date and Time:", $("#call").val()];
			qa.sale = ["Sales Call Type:", $("#sale").val()];
			qa.qaType = ["QA Style:", $("#qaType").val()];
			qa.score = ["QA Score:", $("#score").val()];
			qa.pip = ["PIP:", $("#pip").val()];
			//qa.pip = ["PIP:", $("#addQa :radio:checked + label").text()];
			qa.notes = ["Notes:", $("#notes").val()];
			localStorage.setItem(id, JSON.stringify(qa));
			alert("QA Saved!");
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
				makeSubQa = $('<div></div>'),
				createQaLi = $(
					"<p>" + qaCall.name[0] + " " + qaCall.name[1] + "</p>" + 
					"<p>" + qaCall.call[0] + " " + qaCall.call[1] + "</p>" +
					"<p>" + qaCall.sale[0] + " " + qaCall.sale[1] + "</p>" +
					"<p>" + qaCall.qaType[0] + " " + qaCall.qaType[1] + "</p>" + 
					"<p>" + qaCall.score[0] + " " + qaCall.score[1] + "</p>" +
					"<p>" + qaCall.pip[0] + " " + qaCall.pip[1] + "</p>" +
					"<p>" + qaCall.notes[0] + " " + qaCall.notes[1] + "</p>"
				);
			var editBut = $("<button data-key='"+key+"'><a href='#add'> Edit QA</a></button>");
				editBut.on('click', function(){
					editKey = $(this).data('key');
					editItem(editKey);
				});
			var deleteBut = $("<button data-key='"+key+"'><a href='#addQa' id='delete"+key+"'>Delete QA</a></button>");
				deleteBut.on('click', function(){
					editKey = $(this).data('key');
					deleteItem(editKey);
				});	
		makeSubQa.append(createQaLi).append(editBut).append("<br>").append(deleteBut).appendTo("#qaContent");
		}
    };
    
	$('#compPip').on('click', function () {
		$.mobile.changePage("#completed",{});
		$('#pipComp').empty();
		$.ajax({
			url			:	"xhr/data.xml",
			type		:	"GET",
			dataType	:	"xml",
			success		:	function(data, status) {
				alert("XML Success");
				$(data).find("completed").each(function(){
					var completed = {}
						completed.name = $(this).find("name").text();
						completed.call = $(this).find("call").text();
						completed.sale = $(this).find("sale").text();
						completed.qaType = $(this).find("qaType").text();
						completed.score = $(this).find("score").text();
						completed.pip = $(this).find("pip").text();
						completed.notes = $(this).find("notes").text();
						console.log(completed);
					var makeSubList = $('<div></div>');
					var makeSubLi = $(''+
						'<div class="Data">' +
							'<p>' + "Name: "  + completed.name + '</p>' +
							'<p>' + "Date: "  + completed.call + '</p>' +
							'<p>' + "Sales Call Type: " + completed.sale + '</p>' +
							'<p>' + "QA Style: " + completed.qaType + '</p>' +
							'<p>' + "Score: " + completed.score + '</p>' +
							'<p>' + "PIP: " + completed.pip + '</p>' +
							'<p>' + "Notes: " + completed.notes + '</p>' +
							'<hr />' +
						'</div>'
					);
					makeSubList.append(makeSubLi).appendTo('#pipComp');
			});
	        },
			error : function(error,parseerror){
				console.log("Error: " + error + "\nParse Error :" + parseerror);
			}

				
		});
	});	
    
    
    	
	$('#actPip').on('click', function () {
		$.mobile.changePage("#active",{});
		$('#pipAct').empty();
			$.ajax({
			url			:	"xhr/data.json",
			type		:	"GET",
			dataType	:	"json",
			success		:	function(data, status) {
				alert("JSON Success");
				$.each(data, function(i, data) {
					var makeSubList = $('<div></div>');
					var makeSubLi = $(
						'<p>' + "Name: " + data.name + '</p>' +
						'<p>' + "Date: " + data.call + '</p>' +
						'<p>' + "Sales Call Type: " + data.sale + '</p>' +
						'<p>' + "QA Style: " + data.qaType + '</p>' +
						'<p>' + "Score: " + data.score + '</p>' +
						'<p>' + "PIP: " + data.pip + '</p>' + 
						'<p>' + "Notes: " + data.notes + '</p>' + 
						'<hr />'
					);
					makeSubList.append(makeSubLi).appendTo('#pipAct');
				});
			},
			error : function(error,parseerror){
				console.log("Error: " + error + "\nParse Error :" + parseerror);
			}
		});
	});	
	$('#slouch').on('click', function () {
			$.ajax({
			url			:	'_view/pip',
			dataType	:	"json",
			success		:	function(data) {
				$.each(data.rows, function(index, info) {
					console.log(data.rows);
					var makeSubList = $('<div></div>')
					var couched = $(
							'<p>' + "Name: " + info.value.name  + '</p>' + 
							'<p>' + "Date: " + info.value.call + '</p>' + 
							'<p>' + "Sales Call Type: " + info.value.sale + '</p>' + 
							'<p>' + "Qa Type: " + info.value.qaType + '</p>' + 
							'<p>' + "Score: " + info.value.score + '</p>' + 
							'<p>' + "PIP: " + info.value.pip + '</p>' + 
							'<p>' + "Notes: " + info.value.notes + '</p>' +
							'<hr />'
					);	
					makeSubList.append(couched).appendTo('#couchdb');	
				});
				$("#couchdb").listview("refresh");
			},
			error : function(error,parseerror){
				console.log("Error: " + error + "\nParse Error :" + parseerror);
			}
		});
	});
        
    var deleteItem = function(editKey){
		var ask = confirm("Are you sure you want to delete this QA entry?");
		if(ask){
			localStorage.removeItem(editKey);
			alert("QA entry was deleted.");
			window.location = "#add";
			window.location.reload("#");
		}else{
			alert("QA entry was not deleted.");
		}
	};    
    var editItem = function(editKey) {
		var qa = JSON.parse(localStorage.getItem(editKey));
		$("#name").val(qa.name[1]);
		$("#call").val(qa.call[1]);
		$("#sale").val(qa.sale[1]).selectmenu("refresh");
		$("#qaType").val(qa.qaType[1]).selectmenu("refresh");
		$("#score").val(qa.score[1]).slider("refresh");
		$("#pip").val(qa.pip[1]).selectmenu("refresh");
		$("#notes").val(qa.notes[1]);
		$('#saveQa').prev('.ui-btn-inner').children('.ui-btn-text').html('Update QA');
		$("#saveQa").val('Update QA').data('key', editKey); 
    };
    
    var autoFillData = function(){
        for(var n in sampleQa){
            var id = Math.floor(Math.random()*100000001);
            localStorage.setItem(id, JSON.stringify(sampleQa[n]));
        }
    };  


	$('input').on("focus", function() {
		var $this = $(this).parent();
		$this.addClass('highlight');
		$('input').on("blur", function(){
			$this.removeClass('highlight');
		});
		return false;
	});
	$("textarea").on("focus", function() {
		var $this = $(this).parent();
		$this.addClass('highlight');
		$("textarea").on("blur", function(){
			$this.removeClass('highlight');
		});
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
    $(".display").on("click", getData);	
    $("#").listview("refresh");
