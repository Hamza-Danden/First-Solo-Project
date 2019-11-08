$('#playAgain').hide();
var playerOneScore = 0;
var playerTwoScore = 0;

var Tabel = [
	['', '', ''],
	['', '', ''],
	['', '', '']
];

var players = ['X', 'O'];
var choose = 0;
var count = 0;

$('.button').on('click', function() {
	$('#playAgain').slideUp()
	var idButton = ($(this).attr('id'))
	if (Tabel[idButton[0]][idButton[1]]=== '') {
		count +=1;
		Tabel[idButton[0]][idButton[1]] = players[choose];
		$('#' + idButton).text( players[choose]);
		choose += 1;
	}
	if(choose === 2) {
		choose = 0;
	}
	
	var result = checkWin(Tabel, count);
	if(result !== undefined) {
		alert(result);
		$('#playAgain').slideDown(3000);
	}
});

$('#playAgain').on('click', function() {
	Tabel = [
	['', '', ''],
	['', '', ''],
	['', '', '']
	];
	choose = 0;
	count = 0;
	$('.button').text('--');

	var idButton = ($(this).attr('id'))
	if (Tabel[idButton[0]][idButton[1]]=== '') {
		count +=1;
		Tabel[idButton[0]][idButton[1]] = players[choose];
		$('#' + idButton).text( players[choose]);
		choose += 1;
	}


	if(choose === 2) {
		choose = 0;
	}

	var result = checkWin(Tabel, count);
	if(result !== undefined) {
		alert(result);
		$('#playAgain').slideDown(3000);
	}

})

/*
$('#playAgain').on('click', function() {
	// $('#playAgain').slideUp()
	console.log('OOOOOOOOOOOOO')
	Tabel = [
	['', '', ''],
	['', '', ''],
	['', '', '']
	];
	choose = 0;
	count = 0;
	$('.button').text('--');

	var idButton = ($(this).attr('id'))
	if (Tabel[idButton[0]][idButton[1]]=== '') {
		count +=1;
		Tabel[idButton[0]][idButton[1]] = players[choose];
		$('#' + idButton).text( players[choose]);
		choose += 1;
	}


	if(choose === 2) {
		choose = 0;
	}
	
	var result = checkWin(Tabel, count);
	if(result !== undefined) {
		alert(result);
		$('body').append('<button id="playAgain">play again</button> ')
	}

});
*/



function checkWin(array, count) {
	
	// check vertical X and O
	if( (array[1][0] === array[1][1] && array[1][1] === array[1][2] && array[1][2] === 'X') || (array[2][0] === array[2][1] && array[2][1] === array[2][2] && array[2][2] === 'X') || (array[0][0] === array[0][1] && array[0][1] === array[0][2] && array[0][2] === 'X')) {
		playerOneScore += 1;
		return 'PLAYER ONE WIN !!!!!!!!!';
	}

	if( (array[1][0] === array[1][1] && array[1][1] === array[1][2] && array[1][2] === 'O') || (array[2][0] === array[2][1] && array[2][1] === array[2][2] && array[2][2] === 'O') || (array[0][0] === array[0][1] && array[0][1] === array[0][2] && array[0][2] === 'O')) {
		playerTwoScore += 1;
		return 'PLAYER TWO WIN !!!!!!!!!';
	}
	

	// check horizontal X and O
	if((array[0][0] === array[1][0] && array[1][0] === array[2][0] && array[2][0] === 'X') || (array[0][1] === array[1][1] && array[1][1] === array[2][1] && array[2][1] === 'X') || (array[0][2] === array[1][2] && array[1][2] === array[2][2] && array[2][2] === 'X')) {
		playerOneScore += 1;
		return 'PLAYER ONE WIN !!!!!!!!!';
	}
	
	if((array[0][0] === array[1][0] && array[1][0] === array[2][0] && array[2][0] === 'O') || (array[0][1] === array[1][1] && array[1][1] === array[2][1] && array[2][1] === 'O') || (array[0][2] === array[1][2] && array[1][2] === array[2][2] && array[2][2] === 'O')) {
		playerTwoScore += 1;
		return 'PLAYER TWO WIN !!!!!!!!!';
	}
	
	// check diagonal X and O
	if((array[0][0] === array[1][1] && array[1][1] === array[2][2] && array[2][2] === 'X') || (array[0][2] === array[1][1] && array[1][1] === array[2][0] && array[2][0] === 'X')) {
		playerOneScore += 1;
		return 'PLAYER ONE WIN !!!!!!!!!';
	}

	if((array[0][0] === array[1][1] && array[1][1] === array[2][2] && array[2][2] === 'O') || (array[0][2] === array[1][1] && array[1][1] === array[2][0] && array[2][0] === 'O')) {
		playerTwoScore += 1;
		return 'PLAYER TWO WIN !!!!!!!!!';
	}

	// Check draw
	if(count === 9) {
		return 'Draw';
	}

}





















