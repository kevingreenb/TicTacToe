var counter = 0;
var over = false;
var turn = 'X';

function gameOver() {
	alert(turn + " wins");
	over = true;
}

function getWinner() {
	// get cells
	var cell1 = document.getElementById('cell1'),
		cell2 = document.getElementById('cell2'),
		cell3 = document.getElementById('cell3'),
		cell4 = document.getElementById('cell4'),
		cell5 = document.getElementById('cell5'),
		cell6 = document.getElementById('cell6'),
		cell7 = document.getElementById('cell7'),
		cell8 = document.getElementById('cell8'),
		cell9 = document.getElementById('cell9');

	// possible horizontal winning combinations
	if (cell1.innerHTML !== "" && cell1.innerHTML === cell2.innerHTML && cell2.innerHTML === cell3.innerHTML)
		gameOver();
	else if (cell4.innerHTML !== "" && cell4.innerHTML === cell5.innerHTML && cell5.innerHTML === cell6.innerHTML)
		gameOver();
	else if (cell7.innerHTML !== "" && cell7.innerHTML === cell8.innerHTML && cell8.innerHTML === cell9.innerHTML)
		gameOver();
	// possible vertical winning combinations
	else if (cell1.innerHTML !== "" && cell1.innerHTML === cell4.innerHTML && cell4.innerHTML === cell7.innerHTML)
		gameOver();
	else if (cell2.innerHTML !== "" && cell2.innerHTML === cell5.innerHTML && cell5.innerHTML === cell8.innerHTML)
		gameOver();
	else if (cell3.innerHTML !== "" && cell3.innerHTML === cell6.innerHTML && cell6.innerHTML === cell9.innerHTML)
		gameOver();
	// possible diagonal winning combinations
	else if (cell1.innerHTML !== "" && cell1.innerHTML === cell5.innerHTML && cell5.innerHTML === cell9.innerHTML)
		gameOver();
	else if (cell3.innerHTML !== "" && cell3.innerHTML === cell5.innerHTML && cell5.innerHTML === cell7.innerHTML)
		gameOver();
	else if (counter === 9) 
		gameOver();

}

//Fill box
document.querySelector('#box').addEventListener("click", function(e) {
	if (e.target.innerHTML === "" && !over)
		if (counter % 2 === 0){ //Even gets X
			e.target.innerHTML = 'X';
			counter++;
			turn = 'X';
		}
		else {
			e.target.innerHTML = 'O'; //Odd gets O
			counter++;
			turn = 'O';
		}
		if (counter > 4 && !over) {
			getWinner();
		}	
});


//Reset
document.getElementById('again-btn').addEventListener("click", function(e){
	counter = 0;
	var cells = document.querySelector('#box').children;
	for (var i = 0; i<cells.length; i++){
		cells[i].innerHTML = "";
	}
});

getWinner();

