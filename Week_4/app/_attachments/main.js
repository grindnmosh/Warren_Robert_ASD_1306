/*

Robert Warren
Term 1306
Advanced Scalable Data Infrastructures (ASD)
Quality Experience


Github: https://github.com/grindnmosh/Warren_Robert_ASD_1306.git

*/



$('#home').on('pageinit', function () {

});

$('#add').on('pageinit', function () {
    var qaSub = $('#addQa');
    qaSub.validate({
        invalidHandler: function (form, validator) {},
        submitHandler: function () {
            storeData(editKey);
            console.log(editKey);
            
        }
    });
    var now = new Date();
    var month = (now.getMonth() + 1);
    var day = now.getDate();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    var today = now.getFullYear() + '-' + month + '-' + day;
    $('#due').val(today);
});



$('#view').on('pageinit', function () {
	$("#view").trigger("create");
});

$('#about').on('pageinit', function () {
    (function () {
        $("dd").filter(":nth-child(n+4)").hide();
        $("dt").on("click", function () {
            $(this).next().fadeIn().siblings("dd").fadeOut();
            return false;
        });
    })();
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.
var editKey = null;



var storeData = function (editKey) {
	var qa = {};
    if (!editKey) {
    	var id = Math.floor(Math.random() * 1000000);
        qa._id = "real:" + id;
    }else{
        qa._id=editKey._id;
        qa._rev=editKey._rev;
    }
    
    console.log(qa._id);
    qa.name = $("#name").val();
    qa.call = $("#call").val();
    qa.sale = $("#sale").val();
    qa.qaType = $("#qaType").val();
    qa.score = $("#score").val();
    qa.pip = $("#pip").val();
    qa.notes = $("#notes").val();
    $.couch.db("qaexp2").saveDoc(qa, {
        success: function (data) {
        },
        error: function (status) {
            console.log(status);
        }
    });
	alert("QA Saved!");
	window.location.reload("#");
	return false;
};
$(document).on('pageinit', '#view', function () {
	$("#qaContent").empty();
    $.couch.db("qaexp2").view("app/real", {
        success: function (data) {
            $.each(data.rows, function (index, info) {
                var id = info.value.id;
                var rev = info.value.rev;
                var editKey = {_id: id, _rev: rev};
                var makeSubList = $('<div></div>');
                var couched = $(
                    '<p>' + '<strong>' + "Name: " + '</strong>' + info.value.name + '</p>' +
                    '<p>' + '<strong>' + "Date: " + '</strong>' + info.value.call + '</p>' +
                    '<p>' + '<strong>' + "Sales Call Type: " + '</strong>' + info.value.sale + '</p>' +
                    '<p>' + '<strong>' + "QA Type: " + '</strong>' + info.value.qaType + '</p>' +
                    '<p>' + '<strong>' + "Score: " + '</strong>' + info.value.score + '</p>' +
                    '<p>' + '<strong>' + "PIP: " + '</strong>' + info.value.pip + '</p>' +
                    '<p>' + '<strong>' + "Notes: " + '</strong>' + info.value.notes + '</p>');
                    console.log(couched);
                var editLink = $("<button><a href='#add' id='edit" + index + "'> Edit QA</a></button>");
                editLink.on('click', function () {
                	console.log(id, rev);
                	$.couch.db("qaexp2").openDoc(id, {
                        success: function (data) {
	                        console.log(data);
	                        $("#name").val(info.value.name);
	                        $("#call").val(info.value.call);
	                        $("#sale").val(info.value.sale).selectmenu("refresh");
	                        $("#qaType").val(info.value.qaType).selectmenu("refresh");
	                        $("#score").val(info.value.score).slider("refresh");
	                        $("#pip").val(info.value.pip).selectmenu("refresh");
	                        $("#notes").val(info.value.notes);
                            $('#saveQa').prev('.ui-btn-inner').children('.ui-btn-text').html('Update QA');
	                        $("#saveQa").data(editKey.id);
                    	}
               		});
                });
                var deleteLink = $("<button><a href='#' id='delete" + index + "'>Delete QA</a></button>");
                deleteLink.on('click', function () {
	                var ask = confirm("Are you sure you want to delete this QA?");
                    if (ask) {
                        $.couch.db("qaexp2").removeDoc(editKey, {
                            success: function (data) {
                                console.log(data);
                                window.location.reload("#")
                            },
                        });
                    }
                });
                makeSubList.append(couched).append(editLink).append('<br>').append(deleteLink).append('<hr />').appendTo("#qaContent");
            });
                    
            
        }
    });
});

$('input').on("focus", function () {
    var $this = $(this).parent();
    $this.addClass('highlight');
    $('input').on("blur", function () {
        $this.removeClass('highlight');
    });
    return false;
});
$("textarea").on("focus", function () {
    var $this = $(this).parent();
    $this.addClass('highlight');
    $("textarea").on("blur", function () {
        $this.removeClass('highlight');
    });
    return false;
});

var clearData = function () {
    if (localStorage.length === 0) {
        alert("There are no QAs to clear.");
    } else {
        var ask = confirm("Deleting ALL QAs? This can NOT be undone.");
        if (ask) {
            localStorage.clear();
            alert("All QAs have been cleared.");
            $("#qaContent").empty();
        } else {
            alert("QAs not deleted.");
            return false;
        }
    }
};
$('#clearAllData ').on('click', clearData);
$("#saveMe").on("click", storeData);