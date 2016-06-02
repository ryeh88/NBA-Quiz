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

// loop through questions object and append each item onto html including inputs

	for (i = 0; i < questions.length; i++) {

    	$('.questions-wrapper').append('<div class="question-'+i+'"><h1>'+questions[i].question+'</h1><input type="text" id="'+questions[i].inputId+'"><input id="enter-'+questions[i].inputId+'" type="submit" value="Submit"><button id="restart">Restart</button></div>');
    	
	};



// Auto complete

  var nbaTeams = [
    { value: 'Houston Rockets'},
    { value: 'Toronto Raptors'},
    { value: 'Golden State Warriors'},
    { value: 'Atlanta Hawks'},
    { value: 'Los Angeles Lakers'},
    { value: 'Milwaukee Bucks'},
    { value: 'Boston Celtics'},
    { value: 'Miami-Heat'}
  
  ];
 
 
  $('#champion').autocomplete({
    lookup: nbaTeams,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Item:</strong> ' + suggestion.value;
      $('#outputcontent').html(thehtml);
    }
  });

  var mvps = [
  	{value: 'Ray Allen'},
  	{value: 'Klay Thompson'},
  	{value: 'Kyrie Irving'},
  	{value: 'Mark Price'},
  	{value: 'Eddie Jones'},
  	{value: 'Stephen Curry'},
  	{value: 'Kyle Korver'}
  ];

$('#mvp').autocomplete({
    lookup: mvps,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Item:</strong> ' + suggestion.value;
      $('#outputcontent').html(thehtml);
    }
  });

var threes = [
	{value: '401'},
	{value: '402'},
	{value: '403'},
	{value: '404'},
	{value: '400'},
	{value: '399'}
];

$('#threes').autocomplete({
	lookup: threes,
	onSelect: function (suggestion) {
		var thehtml = '<strong>Item:</strong> ' + suggestion.value;
		$('#outputcontent').html(thehtml);
	}

});

$('#firstRound').autocomplete({
	lookup: nbaTeams,
	onSelect: function(suggestion) {
		var thehtml = '<strong>Item:</strong>' + suggestion.value;
		$('#outputcontent').html(thehtml);
	}
});

var allStars = [
	{value: '1'},
	{value: '2'},
	{value: '3'},
	{value: '4'},
	{value: '5'},
	{value: '6'},
	{value: 'one'},
	{value: 'two'},
	{value: 'three'},
	{value: 'four'},
	{value: 'five'}

];

$('#allStar').autocomplete({
	lookup: allStars,
	onSelect: function(suggestion) {
		var thehtml = '<strong> Item: </strong>' + suggestion.value;
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

$("button#restart").click( function () {
	
	initialQuiz();

	});

$("button#restart-main").click( function () {
	
	initialQuiz();

	});

});




function initialQuiz() {
	$("div").hide();
	$("#form-0").find("input").focus();
	$(".question-0").show("slow");
	$("#score").hide();
	$("#restart").hide();
	$("#restart-main").hide();
	$("#applause").hide();
	$("#hints").hide();
	
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
			var currentCorrect = $('#hints span.correct').html();
			currentCorrect++;

			$('div.modal p').html("Your answer was <span class='gold'><strong> "+userAnswer+"</strong></span>. That was a correct answer! You are <span class='correct'>1</span>/<span class='total'>1</span></span>");
			$('div.modal').modal();
			$("#hints").html("<span>You are <span class='correct'>1</span>/<span class='total'>1</span></span>");

		} else {
			$(".question-1").show("slow");
			$(".question-0").hide("slow");
			$('div.modal p').html("Your answer was <strong>"+userAnswer+"</strong>. The correct answer is the <span class='gold'> Golden State Warriors!</span> You are <span class='correct'>0</span>/<span class='total'>1</span>");
			$('div.modal').modal();
			$("#hints").html("<span>You are <span class='correct'>0</span>/<span class='total'>1</span></span>");
			;
			
		}
	
		$("button#restart").show();
	});

};

function testTwo () {

	$("#enter-mvp").click( function () {
		userAnswer = $("input#mvp").val();
		if (userAnswer.toLowerCase() === 'stephen curry' || userAnswer.toLowerCase() === 'steph curry') {
			$(".question-1").hide("slow");
			$(".question-2").show("slow");
			var currentCorrect = $('#hints span.correct').html();
			var currentTotal = $('#hints span.total').html();
			currentCorrect++;
			currentTotal++;
			$("#hints").html("<span>You are <span class='correct'>"+currentCorrect+"</span>/<span class='total'>"+currentTotal+"</span></span>");
			$('div.modal p').html("Your answer was <strong class='gold'> "+userAnswer+"</strong>. That was a correct answer! You are "+currentCorrect+"/"+currentTotal+"");
			$('div.modal').modal();
			
		} else {
			$(".question-2").show("slow");
			$(".question-1").hide("slow");
			var currentCorrect = $('#hints span.correct').html();
			var currentTotal = $('#hints span.total').html();
			currentTotal++;
			$('div.modal p').html("Your answer was <strong> "+userAnswer+"</strong>. The correct answer is <span class='gold'> Stephen Curry!</span> You are "+currentCorrect+'/'+currentTotal+"");
			$('div.modal').modal();
			$("#hints").html("<span>You are <span class='correct'>"+currentCorrect+"</span>/<span class='total'>"+currentTotal+"</span></span>");
			
		
		};

	});
}

function testThree() {
	$("#enter-threes").click( function () {
		userAnswer = $("input#threes").val();
		if (userAnswer.toString() === '402' || userAnswer.toString() === 'four hundred two') {
			$(".question-2").hide("slow");
			$(".question-3").show("slow");
			var currentCorrect = $('#hints span.correct').html();
			var currentTotal = $('#hints span.total').html();
			currentCorrect++;
			currentTotal++;
			$('div.modal p').html('Your answer was <span class="gold"><strong>'+userAnswer+'</strong></span>. That was a correct answer! You are '+currentCorrect+'/'+currentTotal+'');
			$('div.modal').modal();
			$("#hints").html("<span>You are <span class='correct'>"+currentCorrect+"</span>/<span class='total'>"+currentTotal+"</span></span>");

		} else {
			$(".question-3").show("slow");
			$(".question-2").hide("slow");
			var currentCorrect = $('#hints span.correct').html();
			var currentTotal = $('#hints span.total').html();
			currentTotal++;
			$('div.modal p').html('Your answer was <strong> '+userAnswer+'</strong>. The correct answer is <span class="gold">402</span>. You are '+currentCorrect+'/'+currentTotal+'');
			$('div.modal').modal();
			$("#hints").html("<span>You are <span class='correct'>"+currentCorrect+"</span>/<span class='total'>"+currentTotal+"</span></span>");
		
		};
	
	});
};

function testFour() {
	$("#enter-firstRound").click( function () {
		userAnswer = $("input#firstRound").val();
		if (userAnswer.toLowerCase() === 'houston rockets' || userAnswer.toLowerCase() === 'the houston rockets') {
			$(".question-3").hide("slow");
			$(".question-4").show("slow");
			var currentCorrect = $('#hints span.correct').html();
			var currentTotal = $('#hints span.total').html();
			currentCorrect++;
			currentTotal++;
			$('div.modal p').html('Your answer was <span class="gold"><strong>'+userAnswer+'</strong></span>. That was a correct answer! You are '+currentCorrect+'/'+currentTotal+'');
			$('div.modal').modal();
			$("#hints").html("<span>You are <span class='correct'>"+currentCorrect+"</span>/<span class='total'>"+currentTotal+"</span></span>");

			
		} else {
			$(".question-4").show("slow");
			$(".question-3").hide("slow");
			var currentCorrect = $('#hints span.correct').html();
			var currentTotal = $('#hints span.total').html();
			currentTotal++;
			$('div.modal p').html('Your answer was <strong> '+userAnswer+'</strong>. The answer is the <span class="gold">Houston Rockets</span>. You are '+currentCorrect+'/'+currentTotal+'');
			$('div.modal').modal();
			$("#hints").html("<span>You are <span class='correct'>"+currentCorrect+"</span>/<span class='total'>"+currentTotal+"</span></span>");

			
	
			
		};
		

	});
};

function testFive() {
	$("#enter-allStar").click( function () {
		userAnswer = $("input#allStar").val();
		$('#hints').hide();
		if (userAnswer.toString() === '3' || userAnswer.toString() === 'three') {
				$(".question-4").hide("slow");
				var currentCorrect = $('#hints span.correct').html();
				var currentTotal = $('#hints span.total').html();
				currentCorrect++;
				currentTotal++;
				$('div.modal p').html('Your answer was <span class="gold"><strong> '+userAnswer+'</strong></span>. That was clutch ! Your total score is <span class="gold">'+currentCorrect+'/'+currentTotal+'</span>');
				$('div.modal').modal();
				$("#applause").html("<iframe src='http://giphy.com/embed/s59Csd4R2DtQI' width='480' height='403' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='http://giphy.com/gifs/frustrated-applause-thumbs-up-s59Csd4R2DtQI'></a></p>").show();

		} else {
			$(".question-4").hide("slow");
			correct -= 1;
			var currentCorrect = $('#hints span.correct').html();
				var currentTotal = $('#hints span.total').html();
				currentTotal++;
				$('div.modal p').html('Your answer was <strong> '+userAnswer+'</strong>. The correct answer is <span class="gold">3</span>! Your total score is <span class="gold">'+currentCorrect+'/'+currentTotal+'</span>');
				$('div.modal').modal();
				$("#applause").html("<iframe src='http://giphy.com/embed/s59Csd4R2DtQI' width='480' height='403' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='http://giphy.com/gifs/frustrated-applause-thumbs-up-s59Csd4R2DtQI'></a></p>").show();
				
		
		}
		$('#restart-main').show();
	});
};
