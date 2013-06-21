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
				storeData();
			}
		});
	    var now = new Date();
	    var month = (now.getMonth() + 1);               
	    var day = now.getDate();
	    if(month < 10) 
	        month = "0" + month;
	    if(day < 10) 
	        day = "0" + day;
	    var today = now.getFullYear() + '-' + month + '-' + day;
	    $('#due').val(today);
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
	
//The functions below can go inside or outside the pageinit function for the page in which it is needed.
	var editKey = "";
	
	var storeData = function(data){
		var key = $("#saveQa").data("key");
		var rev = $("#saveQa").data("rev");
		var qa = {};
		if (rev) {
			qa._id = key;
			qa._rev = rev;
		}
		qa.name = $("#name").val();
		qa.call = $("#call").val();
		qa.sale = $("#sale").val();
		qa.qaType = $("#qaType").val();
		qa.score = $("#score").val();
		qa.pip = $("#pip").val();
		qa.notes = $("#notes").val();
		$.couch.db("qaexp2").saveDoc(qa, {
		    success: function(qa) {	
		    	alert("QA Saved!");
		    	$('#saveQa').attr('value', 'Add QA').removeData('key').removeData('rev');
		    	window.location.reload("#");
		    },
		    error: function(status) {
		        console.log(status);
		    }
		});
		
		return false;
	};
	var getData = function(editKey){
		 $.couch.db("qaexp2").view("app/real", {
			success		:	function(data) {
				console.log(data);
				$.each(data.rows, function(index, info) {
		        	var id = info.value._id;
		        	var rev = info.value._rev;
		        	var doc = {_id: id, _rev: rev};
					var makeSubList = $('<div></div>')
					var couched = $(
							'<p>' + '<strong>' + "Name: " + '</strong>' + info.value.name  + '</p>' + 
							'<p>' + '<strong>' + "Date: " + '</strong>' + info.value.call + '</p>' + 
							'<p>' + '<strong>' + "Sales Call Type: " + '</strong>' + info.value.sale + '</p>' + 
							'<p>' + '<strong>' + "QA Type: " + '</strong>' + info.value.qaType + '</p>' + 
							'<p>' + '<strong>' + "Score: " + '</strong>' + info.value.score + '</p>' + 
							'<p>' + '<strong>' + "PIP: " + '</strong>' + info.value.pip + '</p>' + 
							'<p>' + '<strong>' + "Notes: " + '</strong>' + info.value.notes + '</p>' +
							'<hr />'
					);	
					var editLink = $("<a href='#addQa' id='edit"+index+"'> Edit QA</a>");
    				editLink.on('click', function(){
    					$.couch.db("qaexp2").openDoc(id, {
    					    success: function(editKey) {
    					        console.log(editKey);
		    					$("#name").val(info.value.name[1]);
		    					$("#call").val(info.value.call[1]);
		    					$("#sale").val(info.value.sale[1]).selectmenu("refresh");
		    					$("#qaType").val(info.value.qaType[1]).selectmenu("refresh");
		    					$("#score").val(info.value.score[1]).slider("refresh");
		    					$("#pip").val(info.value.pip[1]).selectmenu("refresh");
		    					$("#notes").val(info.value.notes[1]);
								$('#saveQa').prev('.ui-btn-inner').children('.ui-btn-text').html('Update QA');
								$("#saveQa").val('Update QA').data('key', editKey); 
		    					$("#submit").attr("key", id);
    					    },
    					    error: function(status) {
    					        console.log(status);
    					    }
	    				});
	    			});
	    			var deleteLink = $("<a href='#list' id='delete"+index+"'>Delete QA</a>");
	    				deleteLink.on('click', function(editKey){
	    					var ask = confirm("Are you sure you want to delete this QA?");
	    					console.log(id, rev);
	    					if(ask){
	    						$.couch.db("qaexp2").removeDoc(editKey, {
	    						     success: function(editKey) {
	    						         console.log(editKey);
	    						    },
	    						    error: function(status) {
	    						        console.log(status);
	    						    }
	    						});
	    						alert("QA was deleted.");
	    						$("#qaContent").listview('refresh');
	    					}else{
	    						alert("QA was Not deleted.");
	    					};
	    				});
	    			makeSubList.append(couched).append(editLink).append('<br>').append(deleteLink).append('<hr />').appendTo("#qaContent");
			 	});
			$("#qaContent").listview('refresh');
	    },
			error : function(error,parseerror){
				console.log("Error: " + error + "\nParse Error :" + parseerror);
			}
		});
    };
    var autoFillData = function() {
	    $.couch.db("qaexp2").view("app/pip", {
			success		:	function(data) {
				$.each(data.rows, function(index, info) {
					var makeSubList = $('<div></div>')
					var couched = $(
							'<p>' + '<strong>' + "Name: " + '</strong>' + info.value.name  + '</p>' + 
							'<p>' + '<strong>' + "Date: " + '</strong>' + info.value.call + '</p>' + 
							'<p>' + '<strong>' + "Sales Call Type: " + '</strong>' + info.value.sale + '</p>' + 
							'<p>' + '<strong>' + "Qa Type: " + '</strong>' + info.value.qaType + '</p>' + 
							'<p>' + '<strong>' + "Score: " + '</strong>' + info.value.score + '</p>' + 
							'<p>' + '<strong>' + "PIP: " + '</strong>' + info.value.pip + '</p>' + 
							'<p>' + '<strong>' + "Notes: " + '</strong>' + info.value.notes + '</p>' +
							'<hr />'
					);	
				});
				$("#qaContent").listview("refresh");
			},
			error : function(error,parseerror){
				console.log("Error: " + error + "\nParse Error :" + parseerror);
			}
		});
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
			var ask = confirm("Deleting ALL QAs? This can NOT be undone.");
			if(ask){
				localStorage.clear();
				alert("All QAs have been cleared.");
				$("#qaContent").empty();
			}else{
				alert("QAs not deleted.");
				return false;
			};
		};
	};
	$('#clearAllData').on('click', clearData);	
	$("#saveQa").on("click", storeData);
    $(".display").on("click", getData);	
