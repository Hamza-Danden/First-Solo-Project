var tabel = [
	['-','-','-','-','-','-','-'],
	['-','-','-','-','-','-','-'],
	['-','-','-','-','-','-','-'],
	['-','-','-','-','-','-','-'],
	['-','-','-','-','-','-','-'],
	['-','-','-','-','-','-','-'],
	['-','-','-','-','-','-','-']
	];
//console.log(tabel);
// array[0] === array[1] && array[1] === array[2] && array[2] === array[3] && array[0] === 4

// Rules part
$('p').hide()
var countr = 0;
$('#rules').on('click', function(){
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
/////////////



/////////////////

var count = 0;
$('.button').on('click', function() {

	var idButton = ($(this).attr('id'));
	
	if( idButton < 10 || tabel[idButton[0] - 1][idButton[1]] !== '-' ) {

		if(count === 0) {

			tabel[idButton[0]][idButton[1]] = 'Y';
			// console.log('ha')
			$("#" + idButton).css("background-color", "yellow");
			$("#" + idButton).text('Y');
		} else if (count === 1) {
			
			$("#" + idButton).text('B');
			$("#" + idButton).css("background-color", "blue");
			tabel[idButton[0]][idButton[1]] = 'B';
		}

		count += 1;
		if(count === 2) {
			count = 0;
		}
		
		var result = checkWin(tabel);
		console.log(tabel)
		if(result !== undefined) {

			console.log(result);
			// $('#playAgain').slideDown(3000)
		}
	}
}); 

///////////////////////////








// check win conditions part
function checkWin(arr) {
	for(var i = 0; i <= 3; i++) {
		for(var j = 0; j <= 0; j++) {
			// console.log('this is i: ' + (i + 3));
			// console.log('this is j: ' + (j + 3));
			// console.log(s * (3*3))
			if((arr[i][j] === arr[i][j+1] && arr[i][j+1] === arr[i][j+2] && arr[i][j+2] === arr[i][j+3] && arr[i][j+3] === 'B') || (arr[i][j] === arr[i+1][j] && arr[i+1][j] === arr[i+2][j] && arr[i+2][j] === arr[i+3][j] && arr[i+3][j] === 'B') || (arr[i][j] === arr[i+1][j+1] && arr[i+1][j+1] === arr[i+2][j+2] && arr[i+2][j+2] === arr[i+3][j+3] && arr[i+3][j+3] === 'B')) {
				return 'B win';
			}	else if((arr[i][j] === arr[i][j+1] && arr[i][j+1] === arr[i][j+2] && arr[i][j+2] === arr[i][j+3] && arr[i][j+3] === 'Y') || (arr[i][j] === arr[i+1][j] && arr[i+1][j] === arr[i+2][j] && arr[i+2][j] === arr[i+3][j] && arr[i+3][j] === 'Y') || (arr[i][j] === arr[i+1][j+1] && arr[i+1][j+1] === arr[i+2][j+2] && arr[i+2][j+2] === arr[i+3][j+3] && arr[i+3][j+3] === 'Y')) {
				return'Y win';
			}																													 									
		}
	}

	for(var i = 6; i >= 3; i--) {
		for(var j = 7; j >= 4; j--) {
			/*console.log('this is line: ' + i); 
			console.log('this is colum: ' + j);*/
			if((arr[i][j] === arr[i][j-1] && arr[i][j-1] === arr[i][j-2] && arr[i][j-2] === arr[i][j-3] && arr[i][j-3] === 'B') || (arr[i][j] === arr[i-1][j] && arr[i-1][j] === arr[i-2][j] && arr[i-2][j] === arr[i-3][j] && arr[i-3][j] === 'B') || (arr[i][j] === arr[i-1][j-1] && arr[i-1][j-1] === arr[i-2][j-2] && arr[i-2][j-2] === arr[i-3][j-3] && arr[i-3][j-3] === 'B' || (arr[i][j] === arr[i][j-1] && arr[i][j-1] === arr[i][j-2] && arr[i][j-2] === arr[i][j-3] && arr[i][j-3] === 'B') || (arr[i][j] === arr[i-1][j] && arr[i-1][j] === arr[i-2][j] && arr[i-2][j] === arr[i-3][j] && arr[i-3][j] === 'B')) ) {
				return 'B win';
			}	else if((arr[i][j] === arr[i][j-1] && arr[i][j-1] === arr[i][j-2] && arr[i][j-2] === arr[i][j-3] && arr[i][j-3] === 'Y') || (arr[i][j] === arr[i-1][j] && arr[i-1][j] === arr[i-2][j] && arr[i-2][j] === arr[i-3][j] && arr[i-3][j] === 'Y') || (arr[i][j] === arr[i-1][j-1] && arr[i-1][j-1] === arr[i-2][j-2] && arr[i-2][j-2] === arr[i-3][j-3] && arr[i-3][j-3] === 'Y') || (arr[i][j] === arr[i][j-1] && arr[i][j-1] === arr[i][j-2] && arr[i][j-2] === arr[i][j-3] && arr[i][j-3] === 'Y') || (arr[i][j] === arr[i-1][j] && arr[i-1][j] === arr[i-2][j] && arr[i-2][j] === arr[i-3][j] && arr[i-3][j] === 'Y')) {
				return'Y win';
			} 
		}
	}


	// this for this way \
	for(var i = 0; i <= 3; i++) {
		for(var j = 3; j <= 6; j++){
			if ((arr[i][j] === arr[i+1][j-1] && arr[i+2][j-2] === arr[i+1][j-1] && arr[i+2][j-2] === arr[i+3][j-3] && arr[i+3][j-3] === 'B')) {
				return 'B win';
			} else if (arr[i][j] === arr[i+1][j-1] && arr[i+2][j-2] === arr[i+1][j-1] && arr[i+2][j-2] === arr[i+3][j-3] && arr[i+3][j-3] === 'Y' ) {
				return 'Y win';
			}
		}
	}
}
/////////////////////













