var firebaseConfig = {
    apiKey: "AIzaSyBhbP43SzVH8GzhOEitfjoDZBAFFR73nB8",
    authDomain: "project1-eb4f0.firebaseapp.com",
    databaseURL: "https://project1-eb4f0.firebaseio.com",
    projectId: "project1-eb4f0",
    storageBucket: "project1-eb4f0.appspot.com",
    messagingSenderId: "807281379794",
    appId: "1:807281379794:web:ed3ee104dc1d2fd133200b"
  };
  // Initialize Firebase


firebase.initializeApp(firebaseConfig);

var possibleSymbols = ["ae", "awkwardH", "backwardsC", "backwardsE2D", "backwardsP", "blankStar", "broken3", "C", "candles", "copyright",
"fancyH", "hSmiley", "lambda", "looper", "noseEye", "omega", "railroad", "six", "smiley", "squidKnife", "tb", "TInsideA", "upsideDownQMark",
"worm", "xi"];

var buttonList = ["button1", "button2", "button3", "button4", "button5", "button6", "button7", "button8", "button9", "button10", "button11",
 "button12", "button13", "button14", "button15", "button16"];

var firstSymbol = possibleSymbols.splice(Math.floor(Math.random() * possibleSymbols.length), 1);
var secondSymbol = possibleSymbols.splice(Math.floor(Math.random() * possibleSymbols.length), 1);
var thirdSymbol = possibleSymbols.splice(Math.floor(Math.random() * possibleSymbols.length), 1);
var fourthSymbol = possibleSymbols.splice(Math.floor(Math.random() * possibleSymbols.length), 1);
var fifthSymbol = possibleSymbols.splice(Math.floor(Math.random() * possibleSymbols.length), 1);
var sixthSymbol = possibleSymbols.splice(Math.floor(Math.random() * possibleSymbols.length), 1);
var seventhSymbol = possibleSymbols.splice(Math.floor(Math.random() * possibleSymbols.length), 1);
var eighthSymbol = possibleSymbols.splice(Math.floor(Math.random() * possibleSymbols.length), 1);

var firstButtonPair1 = buttonList.splice(Math.floor(Math.random() * buttonList.length), 1);
var firstButtonPair2 = buttonList.splice(Math.floor(Math.random() * buttonList.length), 1);

var secondButtonPair1 = buttonList.splice(Math.floor(Math.random() * buttonList.length), 1);
var secondButtonPair2 = buttonList.splice(Math.floor(Math.random() * buttonList.length), 1);

var thirdButtonPair1 = buttonList.splice(Math.floor(Math.random() * buttonList.length), 1);
var thirdButtonPair2 = buttonList.splice(Math.floor(Math.random() * buttonList.length), 1);

var fourthButtonPair1 = buttonList.splice(Math.floor(Math.random() * buttonList.length), 1);
var fourthButtonPair2 = buttonList.splice(Math.floor(Math.random() * buttonList.length), 1);

var fifthButtonPair1 = buttonList.splice(Math.floor(Math.random() * buttonList.length), 1);
var fifthButtonPair2 = buttonList.splice(Math.floor(Math.random() * buttonList.length), 1);

var sixthButtonPair1 = buttonList.splice(Math.floor(Math.random() * buttonList.length), 1);
var sixthButtonPair2 = buttonList.splice(Math.floor(Math.random() * buttonList.length), 1);

var seventhButtonPair1 = buttonList.splice(Math.floor(Math.random() * buttonList.length), 1);
var seventhButtonPair2 = buttonList.splice(Math.floor(Math.random() * buttonList.length), 1);

var eighthButtonPair1 = buttonList[0];
var eighthButtonPair2 = buttonList[1];



var firstButton = document.getElementById(firstButtonPair1);
var firstImage = '<img src="./images/' + firstSymbol + '.png" class="buttons"/>';
firstButton.innerHTML = firstImage;

var secondButton = document.getElementById(firstButtonPair2);
secondButton.innerHTML = firstImage;



var thirdButton = document.getElementById(secondButtonPair1);
var secondImage = '<img src="./images/' + secondSymbol + '.png" class="buttons"/>';
thirdButton.innerHTML = secondImage;

var fourthButton = document.getElementById(secondButtonPair2);
fourthButton.innerHTML = secondImage;



var fifthButton = document.getElementById(thirdButtonPair1);
var thirdImage = '<img src="./images/' + thirdSymbol + '.png" class="buttons"/>';
fifthButton.innerHTML = thirdImage;

var sixthButton = document.getElementById(thirdButtonPair2);
sixthButton.innerHTML = thirdImage;



var seventhButton = document.getElementById(fourthButtonPair1);
var fourthImage = '<img src="./images/' + fourthSymbol + '.png" class="buttons"/>';
seventhButton.innerHTML = fourthImage;

var eighthButton = document.getElementById(fourthButtonPair2);
eighthButton.innerHTML = fourthImage;



var ninthButton = document.getElementById(fifthButtonPair1);
var fifthImage = '<img src="./images/' + fifthSymbol + '.png" class="buttons"/>';
ninthButton.innerHTML = fifthImage;

var tenthButton = document.getElementById(fifthButtonPair2);
tenthButton.innerHTML = fifthImage;



var eleventhButton = document.getElementById(sixthButtonPair1);
var sixthImage = '<img src="./images/' + sixthSymbol + '.png" class="buttons"/>';
eleventhButton.innerHTML = sixthImage;

var twelfthButton = document.getElementById(sixthButtonPair2);
twelfthButton.innerHTML = sixthImage;



var thirteenthButton = document.getElementById(seventhButtonPair1);
var seventhImage = '<img src="./images/' + seventhSymbol + '.png" class="buttons"/>';
thirteenthButton.innerHTML = seventhImage;

var fourteenthButton = document.getElementById(seventhButtonPair2);
fourteenthButton.innerHTML = seventhImage;



var fifteenthButton = document.getElementById(eighthButtonPair1);
var eighthImage = '<img src="./images/' + eighthSymbol + '.png" class="buttons"/>';
fifteenthButton.innerHTML = eighthImage;

var sixteenthButton = document.getElementById(eighthButtonPair2);
sixteenthButton.innerHTML = eighthImage;




var seconds = 0;
var minutes = 0;

function timer() {
	// Update the count every 1 second
	time = setInterval(function() {
		seconds++;
			if (seconds === 60) {
				minutes++;
				seconds = 0;
			}
		// Update the timer in HTML with the time it takes the user to play the game
		document.getElementById("clock").innerHTML = "<i class='fa fa-hourglass-start'></i>" + " Timer: " + minutes + " Mins " + seconds + " Secs" ;
	}, 1000);
}

timer();

