var userAnswer;
var correct;

$(document).ready( function () {

	var questions = [
		{
			"question": "Who won the NBA Championship in 2015?",
			"inputId": "champion"
		},
		{
			"question": "Who won the MVP award 2015?",
			"inputId": "mvp"
		},
		{
			"question": "How many threes did Steph Curry make in the 2015/2016 season?",
			"inputId": "threes"
		},
		{
			"question": "Who did the Warriors face in the first round of the 2016 playoffs?",
			"inputId": "firstRound"
		},
		{
			"question": "How many players from Golden State participated in the 2016 All-Star Game?",
			"inputId":"allStar"
		},
	];

// 	$.ajax({
//       url: "questions.json",
//       dataType: "json",
//       success: function(data) {
//             setting(data);
//             console.log(data);
//       }
// });

	for (i = 0; i < questions.length; i++) {

    	$('.questions-wrapper').append('<div class="question-'+i+'"><h1>'+questions[i].question+'</h1><input type="text" id="'+questions[i].inputId+'"><input id="enter-'+questions[i].inputId+'" type="submit" value="Submit"></div>');
    	
	};


  var nbaTeams = [
    { value: 'Rockets'},
    { value: 'Raptors'},
    { value: 'Warriors'},
    { value: 'Hawks'},
    { value: 'Lakers'},
    { value: 'Bucks'},
    { value: 'Celtics'},
  
  ];
 
  // setup autocomplete function pulling from nbaTeams[] array
  $('#champion').autocomplete({
    lookup: nbaTeams,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Item:</strong> ' + suggestion.value;
      $('#outputcontent').html(thehtml);
    }
  });




	// Show First Question
	initialQuiz();
	testOne();
	testTwo();
	testThree();
	testFour();
	testFive();
	
	$("#restart").click( function () {
		
		initialQuiz();

	});

});

function initialQuiz() {
	$("div").hide();
	$("#form-0").find("input").focus();
	$(".question-0").show("slow");
	$("#score").hide();
	$("#restart").hide();
	
	//Reset all input values
	$(":input:text").val("");
	correct = 5;



};


	
function testOne() {
	$("#enter-champion").click( function () {
		userAnswer = $("input#champion").val();
		if (userAnswer.toLowerCase() === 'golden state warriors' || userAnswer.toLowerCase() === 'the golden state warriors') {
			$(".question-0").hide("slow");
			$(".question-1").show("slow");
		} else {
			$(".question-1").show("slow");
			$(".question-0").hide("slow");
			$("#hints").html("<span>The correct answer was the Golden State Warriors</span>");
			$("#hints").fadeOut(3000);
			correct -= 1;
		}
	
		$("#restart").show();
	});

};

function testTwo () {

	$("#enter-mvp").click( function () {
		userAnswer = $("input#mvp").val();
		if (userAnswer.toLowerCase() === 'stephen curry' || userAnswer.toLowerCase() === 'steph curry') {
			$(".question-1").hide("slow");
			$(".question-2").show("slow");
		} else {
			$(".question-2").show("slow");
			$(".question-1").hide("slow");
			$("#hints").html("<span>The correct answer was Stephen Curry</span>").show();
			$("#hints").fadeOut(3000);
			
			correct -=1;
		};

	});
}

function testThree() {
	$("#enter-threes").click( function () {
		userAnswer = $("input#threes").val();
		if (userAnswer.toString() === '402' || userAnswer.toString() === 'four hundred two') {
			$(".question-2").hide("slow");
			$(".question-3").show("slow");
		} else {
			$(".question-3").show("slow");
			$(".question-2").hide("slow");
			$("#hints").html("<span>The correct answer was 402</span>").show();
			$("#hints").fadeOut(3000);
			
				correct -= 1;
		};
	
	});
};

function testFour() {
	$("#enter-firstRound").click( function () {
		userAnswer = $("input#firstRound").val();
		if (userAnswer.toLowerCase() === 'houston rockets' || userAnswer.toLowerCase() === 'the houston rockets') {
			$(".question-3").hide("slow");
			$(".question-4").show("slow");
		} else {
			$(".question-4").show("slow");
			$(".question-3").hide("slow");
			$("#hints").html("<span>The correct answer was the Houston Rockets</span>").show();
			$("#hints").fadeOut(3000);
			correct -= 1;
			
		};
		

	});
};

function testFive() {
	$("#enter-allStar").click( function () {
		userAnswer = $("input#allStar").val();
		if (userAnswer.toString() === '3' || userAnswer.toString() === 'three') {
				$(".question-4").hide("slow");
				$("#score").html("You got " + correct + " out of 5 correct").show();
		} else {
			$(".question-4").hide("slow");
			correct -= 1;
			$("#hints").html("<span>The correct answer was 3</span>").show();
			$("#hints").fadeOut(3000);
			$("#score").html("You got " + correct + " out of 5 correct").show();
		
		}
	});
};