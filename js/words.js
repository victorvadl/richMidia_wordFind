/**
 * All this wordfind game was modified by Victor Codes and improved,
 * removing several bugs and tweaked to be usable within an interactive media ads
 * For more information contact me:
 *    https://victorcodes.tech/
 *    https://github.com/victorvadl
 *
 */

// Words to find
var words = ["Inglês", "Estrutura", "Artes", "Acolhimento", "Esportes"];

// start a word find game
var gamePuzzle = wordfindgame.create(words, "#puzzle", "#words");

$("#solve").click(function () {
	wordfindgame.solve(gamePuzzle, words);
});

// create just a puzzle, without filling in the blanks and print to console
var puzzle = wordfind.newPuzzle(words, {
	height: 20,
	width: 20,
});

wordfind.print(puzzle);
