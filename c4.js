
var tabel = [
	['-', '-', '-', '-', '-', '-', '-'], 
	['-', '-', '-', '-', '-', '-', '-'], 
	['-', '-', '-', '-', '-', '-', '-'], 
	['-', '-', '-', '-', '-', '-', '-'], 
	['-', '-', '-', '-', '-', '-', '-'], 
	['-', '-', '-', '-', '-', '-', '-'], 
	['-', '-', '-', '-', '-', '-', '-']
	];



// Rules part
// this part will give you the rules of the game in case you don't know it.
// by pressing of Rules button
$('p').hide()
var countr = 0;
$('#rules').on('click',  function(){
	countr += 1;
	if (countr === 1) {
		$('p').slideDown(2000);
	} else if (countr === 2){
		($('p').slideUp(2000));
	}
	if (countr === 2) {
		countr = 0;
	}
})


var countClick = 0;
var count = 0;


// this part for managing the game 
$('.button').on('click', function() {
	var idButton = ($(this).attr('id'));
	
	// this part will give you a hint  if you stack
	// if you are good it will work fine
	if( idButton < 10 || tabel[idButton[0] - 1][idButton[1]] !== '-' ) {
		if(tabel[idButton[0]][idButton[1]] !== '-') {
			$('#rules').text('Hint');
			$('p').text('you can\'t choose this it\'s allready choosen');
			$('p').slideDown(2000);
			$('p').slideUp(3000);
			setTimeout(function(){
				$('#rules').text('Rules');
			$('p').text('The Rules Are Simple In fact, it is in the name. To win Connect Four, all you have to do is connect four of your colored checker pieces in a row, much the same as tic tac toe. This can be done horizontally, vertically or diagonally. Each player will drop in one checker piece at a time');
			}, 5555);
		} else if(count === 0) {
			count += 1;
			tabel[idButton[0]][idButton[1]] = 'Y';
			$("#" + idButton).css("background-color", "yellow");
			$("#" + idButton).text('Y');

		} else if (count === 1) {
			count += 1;
			$("#" + idButton).text('R');
			$("#" + idButton).css("background-color", "red");
			tabel[idButton[0]][idButton[1]] = 'R';
		}
		
		if(count === 2) {
			count = 0;
		}
		
		var result = checkWin(tabel);
		if(result !== undefined) {
			$('#rules').text('Result');
			if(result === 'Y'){
				$('p').text("Player One \"" + result +  "\" is the winner play");
				$('p').slideDown(2000);
			} else {
				$('p').text("Player Two \"" + result +  "\" is the winner play");
				$('p').slideDown(2000);
			}
		}

		} else {
		
		countClick += 1;
		if (countClick > 2) {
			$('#rules').text('Hint');
			$('p').text('start from bottom dude')
			$('p').slideDown(2000);
			$('p').slideUp(3000);
			setTimeout(function(){
				$('#rules').text('Rules');
			$('p').text('The Rules Are Simple In fact, it is in the name. To win Connect Four, all you have to do is connect four of your colored checker pieces in a row, much the same as tic tac toe. This can be done horizontally, vertically or diagonally. Each player will drop in one checker piece at a time');
			}, 5555);
			countClick = 0;
		}
	}
}); 


///////////////////////////








// check win conditions part
function checkWin(arr) {
	for(var i = 0; i <= 3; i++) {
		for(var j = 0; j <= 7; j++) {
			
			if((arr[i][j] === arr[i][j+1] && arr[i][j+1] === arr[i][j+2] && arr[i][j+2] === arr[i][j+3] && arr[i][j+3] === 'R') || (arr[i][j] === arr[i+1][j] && arr[i+1][j] === arr[i+2][j] && arr[i+2][j] === arr[i+3][j] && arr[i+3][j] === 'R') || (arr[i][j] === arr[i+1][j+1] && arr[i+1][j+1] === arr[i+2][j+2] && arr[i+2][j+2] === arr[i+3][j+3] && arr[i+3][j+3] === 'R')) {
				return 'R';
			}	else if((arr[i][j] === arr[i][j+1] && arr[i][j+1] === arr[i][j+2] && arr[i][j+2] === arr[i][j+3] && arr[i][j+3] === 'Y') || (arr[i][j] === arr[i+1][j] && arr[i+1][j] === arr[i+2][j] && arr[i+2][j] === arr[i+3][j] && arr[i+3][j] === 'Y') || (arr[i][j] === arr[i+1][j+1] && arr[i+1][j+1] === arr[i+2][j+2] && arr[i+2][j+2] === arr[i+3][j+3] && arr[i+3][j+3] === 'Y')) {
				return'Y';
			}																													 									
		}
	}
	
	for(var i = 6; i >= 3; i--) {
		for(var j = 7; j >= 0; j--) {
			if((arr[i][j] === arr[i][j-1] && arr[i][j-1] === arr[i][j-2] && arr[i][j-2] === arr[i][j-3] && arr[i][j-3] === 'R') || (arr[i][j] === arr[i-1][j] && arr[i-1][j] === arr[i-2][j] && arr[i-2][j] === arr[i-3][j] && arr[i-3][j] === 'R') || (arr[i][j] === arr[i-1][j-1] && arr[i-1][j-1] === arr[i-2][j-2] && arr[i-2][j-2] === arr[i-3][j-3] && arr[i-3][j-3] === 'R' || (arr[i][j] === arr[i][j-1] && arr[i][j-1] === arr[i][j-2] && arr[i][j-2] === arr[i][j-3] && arr[i][j-3] === 'R') || (arr[i][j] === arr[i-1][j] && arr[i-1][j] === arr[i-2][j] && arr[i-2][j] === arr[i-3][j] && arr[i-3][j] === 'R')) ) {
				return 'R';
			}	else if((arr[i][j] === arr[i][j-1] && arr[i][j-1] === arr[i][j-2] && arr[i][j-2] === arr[i][j-3] && arr[i][j-3] === 'Y') || (arr[i][j] === arr[i-1][j] && arr[i-1][j] === arr[i-2][j] && arr[i-2][j] === arr[i-3][j] && arr[i-3][j] === 'Y') || (arr[i][j] === arr[i-1][j-1] && arr[i-1][j-1] === arr[i-2][j-2] && arr[i-2][j-2] === arr[i-3][j-3] && arr[i-3][j-3] === 'Y') || (arr[i][j] === arr[i][j-1] && arr[i][j-1] === arr[i][j-2] && arr[i][j-2] === arr[i][j-3] && arr[i][j-3] === 'Y') || (arr[i][j] === arr[i-1][j] && arr[i-1][j] === arr[i-2][j] && arr[i-2][j] === arr[i-3][j] && arr[i-3][j] === 'Y')) {
				return'Y';
			} 
		}
	}
	

	// this for this way \
	for(var i = 0; i <= 3; i++) {
		for(var j = 3; j <= 7; j++){
			if ((arr[i][j] === arr[i+1][j-1] && arr[i+2][j-2] === arr[i+1][j-1] && arr[i+2][j-2] === arr[i+3][j-3] && arr[i+3][j-3] === 'R')) {
				return 'R';
			} else if (arr[i][j] === arr[i+1][j-1] && arr[i+2][j-2] === arr[i+1][j-1] && arr[i+2][j-2] === arr[i+3][j-3] && arr[i+3][j-3] === 'Y' ) {
				return 'Y';
			}
		}
	}

}
/////////////////////











