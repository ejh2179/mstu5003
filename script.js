$(document).ready(function() {

//Objects within an array that provide the questions for the quiz.

	var quizQuestions = [
		{
			example: 'A student responds to a question with wrong information, and the teacher doesn’t follow up.',
			effectiveness: 'ineffective'		
		},
		{
			example: 'Many questions are of the “recitation” type, such as “How many members of the House of Representatives are there?”',
			effectiveness: 'developing'
		},
		{
			example: 'A student asks, “How many ways are there to get this answer?”',
			effectiveness: 'highlyEffective'
		},			
		{
			example: 'The teacher asks, “Maria, can you comment on Ian’s idea?” but Maria does not respond or makes a comment directly to the teacher.',
			effectiveness: 'developing'
		},
		{
			example: 'The teacher calls only on students who have their hands up',
			effectiveness: 'ineffective'
		},		
		{
			example: 'The teacher asks students when they have formulated an answer to the question “Why do you think Huck Finn did _____?” to find the reason in the text and to explain their thinking to a neighbor.',
			effectiveness: 'effective'
		},		

		{
			example: 'The teacher asks a student to explain his reasoning for why 13 is a prime number but does not follow up when the student falters.',
			effectiveness: 'developing'
		},
		{
			example: 'All questions are of the “recitation” type, such as “What is 3 x 4?”',
			effectiveness: 'ineffective'
		},		
		{
			example: 'A student asks of other students, “Does anyone have another idea how we might figure this out?”',
			effectiveness: 'highlyEffective'
		},
		{
			example: 'The teacher asks a question for which the answer is on the board; students respond by reading it',
			effectiveness: 'ineffective'
		},		
		{
			example: 'The teacher asks, “What might have happened if the colonists had not prevailed in the American war for independence?”',
			effectiveness: 'effective'
		},
		{
			example: 'The teacher uses the plural form in asking questions, such as “What are some things you think might contribute to _____?”',
			effectiveness: 'effective'
		},
		{
			example: 'A student asks, “What if…?”',
			effectiveness: 'highlyEffective'
		},		
		{
			example: 'The teacher asks, “Maria, can you comment on Ian’s idea?” and Maria responds directly to Ian',
			effectiveness: 'effective'
		},
		{
			example: 'The teacher asks, “Who has an idea about this?” The usual three students offer comments',
			effectiveness: 'developing'
		},		
		{
			example: 'The teacher poses a question, asking every student to write a brief response and then share it with a partner, before inviting a few to offer their ideas to the entire class.',
			effectiveness: 'effective'
		},
		{
			example: 'A student says to a classmate, “I don’t think I agree with you on this, because…”',
			effectiveness: 'highlyEffective'
		}
	];

//The state of the elements upon opening the page.

	$('#critical_attributes').hide();
	$('#quiz').hide();
	$('#quizExitButton').hide();
	$('.quizQuestion').hide();
	$('#nextQuestion').hide();
	$('.quizInstructions').hide();

//Randomizes the question that is displayed at the beginning of the quiz.

	var question = quizQuestions[Math.floor(Math.random()*17)];
	effectivenessQuestion = question['effectiveness'];
	$('#question').html(question['example']);

//Determines the correctness of the answer and assigns a new class when you press an answer button.

	$('.choice').click(function(action){
		var effectivenessAnswer = action.target.id;

		if(effectivenessAnswer == effectivenessQuestion) {
			$(action.target).addClass('correct');
		}
		else {
			$(action.target).addClass('incorrect');
		}
	});

//Allows you to toggle the critical attributes button.

	$('#caButton').click(function(){
		$('#critical_attributes').toggle();
	});

//Allows you to toggle the rubric button.

	$('#rubricButton').click(function(){
		$('#rubric').toggle();
	});

//Turns on quiz mode and changes the state of the basic content elements.

	$('#quizButton').click(function(){

		$('#rubric').hide();
		$('#critical_attributes').hide();
		$('#quizButton').hide();
		$('#quizExitButton').show();
		$('#quiz').show();
		$('.quizQuestion').show();
		$('#titles').hide();
		$('#nextQuestion').show();
		$('.quizInstructions').show();
		$('#rubricInstructions').hide();
	});

//Turns off quiz mode and changes the state of the basic content elements.

	$('#quizExitButton').click(function(){
		$('#rubric').show();
		$('#critical_attributes').hide();
		$('#quizButton').show();
		$('#quizExitButton').hide();
		$('#quiz').hide();
		$('.quizQuestion').hide();
		$('#titles').show();
		$('#nextQuestion').hide();
		$('.quizInstructions').hide();
		$('#rubricInstructions').show();
	});

//Iterates to the next question and removes the classes from the answer buttons when you press the "Next Question" button.

	$('#nextQuestion').click(function(){
		var question = quizQuestions[Math.floor(Math.random()*17)];
		effectivenessQuestion = question['effectiveness'];
		$('#question').html(question['example']);
		$('.choice').removeClass('correct');
		$('.choice').removeClass('incorrect');
	});

	
//I tried to create a drag and drop quiz that automatically iterated to the next question, but couldn't get the draggable object and drop zone to communicate correctly.
//I gave up and started over just after midnight on 12/15, but some of the remnants of the code I was working on are below.


	//$('.quizQuestion').draggable({
	//	stack: '.quizQuestion',
	//	cursor: 'hand'
	//});
	
	
	//$('#ineffectiveAnswer').droppable({
	//	 drop: function() {
	//		if ($('.quizQuestions[i].effectiveness').val() === "ineffective") {
	//			$('.question').addClass('correct');
	//		}
	//		else {
	//			$('.question').addClass('incorrect');
	//		}
	//	}
	//});
	//$('#developingAnswer').droppable({
	//	drop: function() {
	//		if ($('.question.effectiveness') === "developing") {
	//			$('.question').addClass('correct');
	//		}
	//		else {
	//			$('.question').addClass('incorrect');
	//		}
	//	}
	//});
	//$('#effectiveAnswer').droppable({
	//	drop: function() {
	//		if ($('.question.effectiveness') === "effective") {
	//			$('.question').addClass('correct');
	//		}
	//		else {
	//			$('.question').addClass('incorrect');
	//		}
	//	}
	//});
	//$('#highlyEffectiveAnswer').droppable({
	//	drop: function() {
	//		if ($('.question.effectiveness') === "highly_effective") {
	//			$('.question').addClass('correct');
	//		}
	//		else {
	//			$('.question').addClass('incorrect');
	//		}
	//	}
	//});

	//var checkAnswer = function() {
	//	var i = 0;
	//	var nextQuestion = function() {
	//		$('.quizQuestion').append('<p>' + quizQuestions[i].example + '</p>');
	//	}
	//	nextQuestion();
	//	$('#ineffectiveButton').click(function(){
	//		if ($(quizQuestion[i].effectiveness) === "ineffective") {
	//			$('#incorrectButton').addClass('correct');
	//			i++;
	//			checkAnswer();
	//		}
	//	});
	//}

	//checkAnswer();

	//	if ($('quizQuestion[i].effectiveness') === ) {
	//		i++;
	//		nextQuestion();
	//	}
		
		//for (var i = 0; i < quizQuestions.length; i++) {
		//	$('#quizQuestion').append('<p>' + quizQuestions[i].example + '</p>');
		//	if ($(this.effectiveness) === $('ul-droppable').droppable.attr('class')) {
		//		alert("Good job!");
		//	}
		//	else {
		//		alert("Try again!");
		//		break;
		//	}
		//}

});