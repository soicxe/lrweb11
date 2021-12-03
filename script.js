let countTrue = 0;
let countAll = 0;
let answer;
let flag = 1;
const words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
const answers = ["один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять", "десять"];
let wordsTemp = [];
let answersTemp = [];
wordsTemp.push.apply(wordsTemp, words);
answersTemp.push.apply(answersTemp, answers);
const allWords = words.length;
function randWord() {
	$("#wordAnswer").css("color", "black");
	$("#wordAnswer").css("color", "black");
	if (countAll == allWords) { endGame(); return;}
	let wordIndex = Math.floor(Math.random() * wordsTemp.length);
	$("#word").val(wordsTemp[wordIndex]);
	wordsTemp.splice(wordIndex, 1);
	answer = answersTemp[wordIndex];
	answersTemp.splice(wordIndex, 1);
	countAll++;
	$("#wordNum").text("Word " + countAll + "/10");
	flag = 1;
	console.log(answer);
}
function boolWord() {
	if (flag == 0) return;
	if ($("#wordAnswer").val() == answer) {
		countTrue++;
		$("#wordAnswer").css("color", "#38a03c");
	}
	else {
		$("#wordAnswer").css("color", "#c2111b");
    } 
	$("#wordTF").text("True/False: " + countTrue + "/" + (countAll - countTrue));
	flag = 0;
}
function endGame() {
	if (countTrue >= allWords - 1) alert("Excellent knowledge. True: "+countTrue+"/"+countAll);
	else if (countTrue >= allWords - 4) alert("Good knowledge. True: " + countTrue + "/" + countAll);
	else alert("Bad knowledge. True: " + countTrue + "/" + countAll);
	countTrue = 0;
	countAll = 0;
	wordsTemp.length = 0;
	answersTemp.length = 0;
	wordsTemp.push.apply(wordsTemp, words);
	answersTemp.push.apply(answersTemp, answers);
	$("#wordTF").text("True/False: 0/0");
	randWord();
}
window.onload = randWord();