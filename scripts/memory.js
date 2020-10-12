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

// used throughout program to see if game is complete, or to check if buttons match
var clickedButtons = [];
var completedButtons = [];

// timer function
var seconds = 0;
var minutes = 0;
var score = 0;
var time;

function timer() { // Update every 1 second
    time = setInterval(function () {
        seconds++;
        score++;
        // loop to next minute
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        // update onscreen timer
        document.getElementById("clock").innerHTML = " Timer: " + minutes + " Mins " + seconds + " Secs";
    }, 1000);
};


// start button enables game to be played and starts clock
document.getElementById("start").addEventListener(("click"), function () {
    this.outerHTML = "";
    for (var j = 0; j < buttonsFinalized.length; j++) {
        buttonsFinalized[j].disabled = false;
    }
    timer();
});

// when you make a mistake and miss a match

let incorrectGuess = function (i, start, clickedButton) {

    // disable all of the buttons
    for(var k = 0; k < buttonsFinalized.length; k++){
        buttonsFinalized[k].disabled = true;
    }

    // play an animation for one second where buttons are red
    let animation = setInterval(function () {
        let timePassed = Date.now() - start;

        // after the second is done return to normal
        if (timePassed >= 1000) {
            clearInterval(animation);
            buttonsFinalized[i].innerHTML = '<img src="./images/happy.png" class="buttonImages"/>';
            clickedButton.innerHTML = '<img src="./images/happy.png" class="buttonImages"/>';
            buttonsFinalized[i].style.backgroundColor = "";
            clickedButton.style.backgroundColor = "";
            clickedButtons = [];
            buttonsFinalized[i].disabled = false;
            clickedButton.disabled = false;
            for(var t = 0; t < buttonsFinalized.length; t++){
                if(buttonsFinalized[t].style.backgroundColor == "green"){
                    buttonsFinalized[t].disabled = true;
                }
                else{
                    buttonsFinalized[t].disabled = false
                }
            }
            return;
        }
        // make the buttons red and unclickable
        buttonsFinalized[i].style.backgroundColor = "red";
        clickedButton.style.backgroundColor = "red";
        buttonsFinalized[i].disabled = false;
        clickedButton.disabled = false;
    }, 100);
};


// after you win the game you add your name to the high score list to see if you make it
let youWin = function (){
    // stop timer
    clearInterval(time);

    // create high score screen
    var username = document.createElement("input");
    var usernameEnter = document.createElement("button");
    var label = document.createElement("Label");
    label.innerHTML = "Enter your username to add to high score list: ";
    username.setAttribute("type", "text");
    username.setAttribute("id", "username");
    usernameEnter.setAttribute("id", "usernameEnter");
    usernameEnter.innerHTML = "Enter";
    var game = document.getElementById("game");
    game.innerHTML = "";
    game.appendChild(label);
    game.appendChild(username);
    game.appendChild(usernameEnter);


    // access database on click
    document.getElementById("usernameEnter").addEventListener("click", function(){
        // push high score to database
        let highScoreUsername = document.getElementById("username").value;
        let key = firebase.database().ref('High Scores').push();
        key.set({highScoreUsername, score});

        // get top 20 scores
        var dbRef = firebase.database().ref('High Scores').orderByChild('score').limitToLast(20);
        game.innerHTML = "";
        game.append(document.createElement("br"));
        var title = document.createElement("h1");
        title.innerHTML = "High Scores";
        game.append(title);

        // for each high score
        dbRef.on("value", function(snapshot) {
            // add high score to screen
            snapshot.forEach(function(child){
                game.appendChild(document.createTextNode(child.val().highScoreUsername + ": " + child.val().score + " seconds" ));
                game.appendChild(document.createElement("br"));
            });

            // button to replay game
            var replay = document.createElement("button");
            replay.setAttribute("id", "replayButton");
            replay.setAttribute("onClick", "window.location.reload();");
            replay.innerHTML = "Click to replay";
            game.appendChild(replay);
        });
    });
};

// list of all possible symbols that can enter the game
var possibleSymbols = [
    "ae",
    "awkwardH",
    "backwardsC",
    "backwardsE2D",
    "backwardsP",
    "blankStar",
    "broken3",
    "C",
    "candles",
    "copyright",
    "fancyH",
    "hSmiley",
    "lambda",
    "looper",
    "noseEye",
    "omega",
    "railroad",
    "six",
    "smiley",
    "squidKnife",
    "tb",
    "TInsideA",
    "upsideDownQMark",
    "worm",
    "xi"
];


// list of buttons in our first game
var buttonListGame1 = [
    "button1", "button2", "button3", "button4"
];

// second game
var buttonListGame2 = [
    "game2Button1", "game2Button2", "game2Button3", "game2Button4", "game2Button5", "game2Button6", "game2Button7", "game2Button8"
];

// third game
var buttonListGame3 = [
    "game3Button1",
    "game3Button2",
    "game3Button3",
    "game3Button4",
    "game3Button5",
    "game3Button6",
    "game3Button7",
    "game3Button8",
    "game3Button9",
    "game3Button10",
    "game3Button11",
    "game3Button12",
    "game3Button13",
    "game3Button14",
    "game3Button15",
    "game3Button16"
];


// get the symbols that will be in our first game
var firstSymbol = possibleSymbols.splice(Math.floor(Math.random() * possibleSymbols.length), 1);
var secondSymbol = possibleSymbols.splice(Math.floor(Math.random() * possibleSymbols.length), 1);


// decide on buttons randomly
var firstButtonPair1 = buttonListGame1.splice(Math.floor(Math.random() * buttonListGame1.length), 1);
var firstButtonPair2 = buttonListGame1.splice(Math.floor(Math.random() * buttonListGame1.length), 1);

var secondButtonPair1 = buttonListGame1[0];
var secondButtonPair2 = buttonListGame1[1];


// assign the symbols to each button
var firstButton = document.getElementById(firstButtonPair1);
var firstImage = '<img src="./images/' + firstSymbol + '.png" class="buttonImages"/>';
firstButton.innerHTML = firstImage;

var secondButton = document.getElementById(firstButtonPair2);
secondButton.innerHTML = firstImage;


var thirdButton = document.getElementById(secondButtonPair1);
var secondImage = '<img src="./images/' + secondSymbol + '.png" class="buttonImages"/>';
thirdButton.innerHTML = secondImage;

var fourthButton = document.getElementById(secondButtonPair2);
fourthButton.innerHTML = secondImage;

// the buttons have everything they need
var buttonsFinalized = [
    firstButton,
    secondButton,
    thirdButton,
    fourthButton,
];

// this will serve as temporary storage for each button
// will help display image when clicked
var imageStorage = [];

// for every button
for (var i = 0; i < buttonsFinalized.length; i++) {
    // disable (at start)
    buttonsFinalized[i].disabled = true;
    // store its image at the appropriate index
    imageStorage[i] = buttonsFinalized[i].innerHTML;
    //now that image is stored, change to generic image
    buttonsFinalized[i].innerHTML = '<img src="./images/happy.png" class="buttonImages"/>';
};

buttonsFinalized[0].addEventListener("click", function () {
    // after being clicked, it can't be clicked anymore
    this.disabled = true;
    // change the image from generic to symbol
    this.innerHTML = imageStorage[0];

    // if nothing else has been clicked
    if (clickedButtons.length == 0) {
        clickedButtons[0] = this;
    } else {
        // if it matches the button that has been clicked
        if (clickedButtons[0].innerHTML == this.innerHTML) {
            // change the background to green
            // disable both buttons and add
            // them to the completed list
            this.style.backgroundColor = "green";
            clickedButtons[0].style.backgroundColor = "green";
            clickedButtons[0].disabled = true;
            completedButtons.push(clickedButtons[0]);
            completedButtons.push(this);
            clickedButtons = [];

            // if all of the matches have been made
            // start next game
            if (completedButtons.length == 4) {
                game2Start();
            }
        } else {
            // call incorrect guess function if buttons don't match
            incorrectGuess(0, Date.now(), clickedButtons[0]);
        }
    }
});

buttonsFinalized[1].addEventListener("click", function () {
    this.disabled = true;
    this.innerHTML = imageStorage[1];
    if (clickedButtons.length == 0) {
        clickedButtons[0] = this;
    } else {
        if (clickedButtons[0].innerHTML == this.innerHTML) {
            this.style.backgroundColor = "green";
            clickedButtons[0].style.backgroundColor = "green";
            clickedButtons[0].disabled = true;
            completedButtons.push(clickedButtons[0]);
            completedButtons.push(this);
            clickedButtons = [];
            if (completedButtons.length == 4) {
                game2Start();
            }
        } else {
            incorrectGuess(1, Date.now(), clickedButtons[0]);
        }
    }
});

buttonsFinalized[2].addEventListener("click", function () {
    this.disabled = true;
    this.innerHTML = imageStorage[2];
    if (clickedButtons.length == 0) {
        clickedButtons[0] = this;
    } else {
        if (clickedButtons[0].innerHTML == this.innerHTML) {
            this.style.backgroundColor = "green";
            clickedButtons[0].style.backgroundColor = "green";
            clickedButtons[0].disabled = true;
            completedButtons.push(clickedButtons[0]);
            completedButtons.push(this);
            clickedButtons = [];
            if (completedButtons.length == 4) {
                game2Start();
            }
        } else {
            incorrectGuess(2, Date.now(), clickedButtons[0]);
        }
    }
});

buttonsFinalized[3].addEventListener("click", function () {
    this.disabled = true;
    this.innerHTML = imageStorage[3];
    if (clickedButtons.length == 0) {
        clickedButtons[0] = this;
    } else {
        if (clickedButtons[0].innerHTML == this.innerHTML) {
            this.style.backgroundColor = "green";
            clickedButtons[0].style.backgroundColor = "green";
            clickedButtons[0].disabled = true;
            completedButtons.push(clickedButtons[0]);
            completedButtons.push(this);
            clickedButtons = [];
            if (completedButtons.length == 4) {
                game2Start();
            }
        } else {
            incorrectGuess(3, Date.now(), clickedButtons[0]);
        }
    }
});


let game2Start = function(){
    // clear out all arrays
    clickedButtons = [];
    completedButtons = [];
    buttonsFinalized = [];

    // hide previous game, show current game
    document.getElementById("game1").classList.remove("showing");
    document.getElementById("game1").classList.add("hidden");

    document.getElementById("game2").classList.remove("hidden");
    document.getElementById("game2").classList.add("showing");

    // get new symbols
    var firstSymbol = possibleSymbols.splice(Math.floor(Math.random() * possibleSymbols.length), 1);
    var secondSymbol = possibleSymbols.splice(Math.floor(Math.random() * possibleSymbols.length), 1);
    var thirdSymbol = possibleSymbols.splice(Math.floor(Math.random() * possibleSymbols.length), 1);
    var fourthSymbol = possibleSymbols.splice(Math.floor(Math.random() * possibleSymbols.length), 1);

    // get new buttons randomly
    var firstButtonPair1 = buttonListGame2.splice(Math.floor(Math.random() * buttonListGame2.length), 1);
    var firstButtonPair2 = buttonListGame2.splice(Math.floor(Math.random() * buttonListGame2.length), 1);

    var secondButtonPair1 = buttonListGame2.splice(Math.floor(Math.random() * buttonListGame2.length), 1);
    var secondButtonPair2 = buttonListGame2.splice(Math.floor(Math.random() * buttonListGame2.length), 1);

    var thirdButtonPair1 = buttonListGame2.splice(Math.floor(Math.random() * buttonListGame2.length), 1);
    var thirdButtonPair2 = buttonListGame2.splice(Math.floor(Math.random() * buttonListGame2.length), 1);

    var fourthButtonPair1 = buttonListGame2[0];
    var fourthButtonPair2 = buttonListGame2[1];


    // match up symbols to buttons
    var firstButton = document.getElementById(firstButtonPair1);
    var firstImage = '<img src="./images/' + firstSymbol + '.png" class="buttonImages"/>';
    firstButton.innerHTML = firstImage;

    var secondButton = document.getElementById(firstButtonPair2);
    secondButton.innerHTML = firstImage;


    var thirdButton = document.getElementById(secondButtonPair1);
    var secondImage = '<img src="./images/' + secondSymbol + '.png" class="buttonImages"/>';
    thirdButton.innerHTML = secondImage;

    var fourthButton = document.getElementById(secondButtonPair2);
    fourthButton.innerHTML = secondImage;


    var fifthButton = document.getElementById(thirdButtonPair1);
    var thirdImage = '<img src="./images/' + thirdSymbol + '.png" class="buttonImages"/>';
    fifthButton.innerHTML = thirdImage;

    var sixthButton = document.getElementById(thirdButtonPair2);
    sixthButton.innerHTML = thirdImage;


    var seventhButton = document.getElementById(fourthButtonPair1);
    var fourthImage = '<img src="./images/' + fourthSymbol + '.png" class="buttonImages"/>';
    seventhButton.innerHTML = fourthImage;

    var eighthButton = document.getElementById(fourthButtonPair2);
    eighthButton.innerHTML = fourthImage;


    // get finalized buttons
    buttonsFinalized = [firstButton,
        secondButton,
        thirdButton,
        fourthButton,
        fifthButton,
        sixthButton,
        seventhButton,
        eighthButton];

    // clear image storage
    imageStorage = [];

    // for all buttons
    for (var i = 0; i < buttonsFinalized.length; i++) {
        // store symbol, in order to change image to generic image until clicked
        imageStorage[i] = buttonsFinalized[i].innerHTML;
        buttonsFinalized[i].innerHTML = '<img src="./images/happy.png" class="buttonImages"/>';
    };

    // create the buttons for game 2
    createGame2Buttons();

};


// button creation for game 2. buttons behave in same way as game1
let createGame2Buttons = function(){

    buttonsFinalized[0].addEventListener("click", function () {
        // disable button when clicked and draw its symbol
        this.disabled = true;
        this.innerHTML = imageStorage[0];
        
        // if only button clicked add it to list of clicked buttons
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            // does it match other clicked button
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                // it does, change style to green, disable both buttons
                // and add to completed buttons list
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                // if all symbols have been matched move to game 3
                if (completedButtons.length == 8) {
                    createGame3();
                }
            } else {
                incorrectGuess(0, Date.now(), clickedButtons[0]);
            }
        }
    });
    
    buttonsFinalized[1].addEventListener("click", function () {
        this.disabled = true;
        this.innerHTML = imageStorage[1];
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                if (completedButtons.length == 8) {
                    createGame3();
                }
            } else {
                incorrectGuess(1, Date.now(), clickedButtons[0]);
            }
        }
    });
    
    buttonsFinalized[2].addEventListener("click", function () {
        this.disabled = true;
        this.innerHTML = imageStorage[2];
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                if (completedButtons.length == 8) {
                    createGame3();
                }
            } else {
                incorrectGuess(2, Date.now(), clickedButtons[0]);
            }
        }
    });
    
    buttonsFinalized[3].addEventListener("click", function () {
        this.disabled = true;
        this.innerHTML = imageStorage[3];
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                if (completedButtons.length == 8) {
                    createGame3();
                }
            } else {
                incorrectGuess(3, Date.now(), clickedButtons[0]);
            }
        }
    });
    
    buttonsFinalized[4].addEventListener("click", function () {
        this.disabled = true;
        this.innerHTML = imageStorage[4];
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                if (completedButtons.length == 8) {
                    createGame3();
                }
            } else {
                incorrectGuess(4, Date.now(), clickedButtons[0]);
            }
        }
    });
    
    buttonsFinalized[5].addEventListener("click", function () {
        this.disabled = true;
        this.innerHTML = imageStorage[5];
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                if (completedButtons.length == 8) {
                    createGame3();
                }
            } else {
                incorrectGuess(5, Date.now(), clickedButtons[0]);
            }
        }
    });
    
    buttonsFinalized[6].addEventListener("click", function () {
        this.disabled = true;
        this.innerHTML = imageStorage[6];
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                if (completedButtons.length == 8) {
                    createGame3();
                }
            } else {
                incorrectGuess(6, Date.now(), clickedButtons[0]);
            }
        }
    });
    
    buttonsFinalized[7].addEventListener("click", function () {
        this.disabled = true;
        this.innerHTML = imageStorage[7];
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                if (completedButtons.length == 8) {
                    createGame3();
                }
            } else {
                incorrectGuess(7, Date.now(), clickedButtons[0]);
            }
        }
    });
};

// function to handle third and final game
let createGame3 = function(){
    // clear out arrays
    clickedButtons = [];
    completedButtons = [];
    buttonsFinalized = [];

    // hide second game and show third game
    document.getElementById("game2").classList.remove("showing");
    document.getElementById("game2").classList.add("hidden");

    document.getElementById("game3").classList.remove("hidden");
    document.getElementById("game3").classList.add("showing");

    // get the symbols to use
    var firstSymbol = possibleSymbols.splice(Math.floor(Math.random() * possibleSymbols.length), 1);
    var secondSymbol = possibleSymbols.splice(Math.floor(Math.random() * possibleSymbols.length), 1);
    var thirdSymbol = possibleSymbols.splice(Math.floor(Math.random() * possibleSymbols.length), 1);
    var fourthSymbol = possibleSymbols.splice(Math.floor(Math.random() * possibleSymbols.length), 1);
    var fifthSymbol = possibleSymbols.splice(Math.floor(Math.random() * possibleSymbols.length), 1);
    var sixthSymbol = possibleSymbols.splice(Math.floor(Math.random() * possibleSymbols.length), 1);
    var seventhSymbol = possibleSymbols.splice(Math.floor(Math.random() * possibleSymbols.length), 1);
    var eighthSymbol = possibleSymbols.splice(Math.floor(Math.random() * possibleSymbols.length), 1);

    // select buttons to pair at random
    var firstButtonPair1 = buttonListGame3.splice(Math.floor(Math.random() * buttonListGame3.length), 1);
    var firstButtonPair2 = buttonListGame3.splice(Math.floor(Math.random() * buttonListGame3.length), 1);

    var secondButtonPair1 = buttonListGame3.splice(Math.floor(Math.random() * buttonListGame3.length), 1);
    var secondButtonPair2 = buttonListGame3.splice(Math.floor(Math.random() * buttonListGame3.length), 1);

    var thirdButtonPair1 = buttonListGame3.splice(Math.floor(Math.random() * buttonListGame3.length), 1);
    var thirdButtonPair2 = buttonListGame3.splice(Math.floor(Math.random() * buttonListGame3.length), 1);

    var fourthButtonPair1 = buttonListGame3.splice(Math.floor(Math.random() * buttonListGame3.length), 1);
    var fourthButtonPair2 = buttonListGame3.splice(Math.floor(Math.random() * buttonListGame3.length), 1);

    var fifthButtonPair1 = buttonListGame3.splice(Math.floor(Math.random() * buttonListGame3.length), 1);
    var fifthButtonPair2 = buttonListGame3.splice(Math.floor(Math.random() * buttonListGame3.length), 1);

    var sixthButtonPair1 = buttonListGame3.splice(Math.floor(Math.random() * buttonListGame3.length), 1);
    var sixthButtonPair2 = buttonListGame3.splice(Math.floor(Math.random() * buttonListGame3.length), 1);

    var seventhButtonPair1 = buttonListGame3.splice(Math.floor(Math.random() * buttonListGame3.length), 1);
    var seventhButtonPair2 = buttonListGame3.splice(Math.floor(Math.random() * buttonListGame3.length), 1);

    var eighthButtonPair1 = buttonListGame3[0];
    var eighthButtonPair2 = buttonListGame3[1];

    // match each button to a symbol
    var firstButton = document.getElementById(firstButtonPair1);
    var firstImage = '<img src="./images/' + firstSymbol + '.png" class="buttonImages"/>';
    firstButton.innerHTML = firstImage;

    var secondButton = document.getElementById(firstButtonPair2);
    secondButton.innerHTML = firstImage;


    var thirdButton = document.getElementById(secondButtonPair1);
    var secondImage = '<img src="./images/' + secondSymbol + '.png" class="buttonImages"/>';
    thirdButton.innerHTML = secondImage;

    var fourthButton = document.getElementById(secondButtonPair2);
    fourthButton.innerHTML = secondImage;


    var fifthButton = document.getElementById(thirdButtonPair1);
    var thirdImage = '<img src="./images/' + thirdSymbol + '.png" class="buttonImages"/>';
    fifthButton.innerHTML = thirdImage;

    var sixthButton = document.getElementById(thirdButtonPair2);
    sixthButton.innerHTML = thirdImage;


    var seventhButton = document.getElementById(fourthButtonPair1);
    var fourthImage = '<img src="./images/' + fourthSymbol + '.png" class="buttonImages"/>';
    seventhButton.innerHTML = fourthImage;

    var eighthButton = document.getElementById(fourthButtonPair2);
    eighthButton.innerHTML = fourthImage;


    var ninthButton = document.getElementById(fifthButtonPair1);
    var fifthImage = '<img src="./images/' + fifthSymbol + '.png" class="buttonImages"/>';
    ninthButton.innerHTML = fifthImage;

    var tenthButton = document.getElementById(fifthButtonPair2);
    tenthButton.innerHTML = fifthImage;


    var eleventhButton = document.getElementById(sixthButtonPair1);
    var sixthImage = '<img src="./images/' + sixthSymbol + '.png" class="buttonImages"/>';
    eleventhButton.innerHTML = sixthImage;

    var twelfthButton = document.getElementById(sixthButtonPair2);
    twelfthButton.innerHTML = sixthImage;


    var thirteenthButton = document.getElementById(seventhButtonPair1);
    var seventhImage = '<img src="./images/' + seventhSymbol + '.png" class="buttonImages"/>';
    thirteenthButton.innerHTML = seventhImage;

    var fourteenthButton = document.getElementById(seventhButtonPair2);
    fourteenthButton.innerHTML = seventhImage;


    var fifteenthButton = document.getElementById(eighthButtonPair1);
    var eighthImage = '<img src="./images/' + eighthSymbol + '.png" class="buttonImages"/>';
    fifteenthButton.innerHTML = eighthImage;

    var sixteenthButton = document.getElementById(eighthButtonPair2);
    sixteenthButton.innerHTML = eighthImage;

    // list of the final buttons
    buttonsFinalized = [
        firstButton,
        secondButton,
        thirdButton,
        fourthButton,
        fifthButton,
        sixthButton,
        seventhButton,
        eighthButton,
        ninthButton,
        tenthButton,
        eleventhButton,
        twelfthButton,
        thirteenthButton,
        fourteenthButton,
        fifteenthButton,
        sixteenthButton
    ];

    // clear out image storage
    imageStorage = [];

    // for each button
    for (var i = 0; i < buttonsFinalized.length; i++) {
        // store each image so that generic image can be used until
        // button is clicked
        imageStorage[i] = buttonsFinalized[i].innerHTML;
        buttonsFinalized[i].innerHTML = '<img src="./images/happy.png" class="buttonImages"/>';
    }

    // create the buttons to be used
    createGame3Buttons();
}

// buttons for the third game, behave in same way as first and second
function createGame3Buttons(){
    
    buttonsFinalized[0].addEventListener("click", function () {
        // disable button when clicked, draw symbol associated with button
        this.disabled = true;
        this.innerHTML = imageStorage[0];

        // if button is the only one clicked add it to clicked list
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            // if clicked buttons match
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                // change background to green, make them unclickable, 
                // and push buttons to completed list
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                // if all buttons have been matched
                // you win
                if (completedButtons.length == 16) {
                    youWin();
                }
            } else {
                // call incorrect guess function
                incorrectGuess(0, Date.now(), clickedButtons[0]);
            }
        }
    });

    buttonsFinalized[1].addEventListener("click", function () {
        this.disabled = true;
        this.innerHTML = imageStorage[1];
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                if (completedButtons.length == 16) {
                    youWin();
                }
            } else {
                incorrectGuess(1, Date.now(), clickedButtons[0]);
            }
        }
    });

    buttonsFinalized[2].addEventListener("click", function () {
        this.disabled = true;
        this.innerHTML = imageStorage[2];
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                if (completedButtons.length == 16) {
                    youWin();
                }
            } else {
                incorrectGuess(2, Date.now(), clickedButtons[0]);
            }
        }
    });

    buttonsFinalized[3].addEventListener("click", function () {
        this.disabled = true;
        this.innerHTML = imageStorage[3];
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                if (completedButtons.length == 16) {
                    youWin();
                }
            } else {
                incorrectGuess(3, Date.now(), clickedButtons[0]);
            }
        }
    });

    buttonsFinalized[4].addEventListener("click", function () {
        this.disabled = true;
        this.innerHTML = imageStorage[4];
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                if (completedButtons.length == 16) {
                    youWin();
                }
            } else {
                incorrectGuess(4, Date.now(), clickedButtons[0]);
            }
        }
    });

    buttonsFinalized[5].addEventListener("click", function () {
        this.disabled = true;
        this.innerHTML = imageStorage[5];
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                if (completedButtons.length == 16) {
                    youWin();
                }
            } else {
                incorrectGuess(5, Date.now(), clickedButtons[0]);
            }
        }
    });

    buttonsFinalized[6].addEventListener("click", function () {
        this.disabled = true;
        this.innerHTML = imageStorage[6];
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                if (completedButtons.length == 16) {
                    youWin();
                }
            } else {
                incorrectGuess(6, Date.now(), clickedButtons[0]);
            }
        }
    });

    buttonsFinalized[7].addEventListener("click", function () {
        this.disabled = true;
        this.innerHTML = imageStorage[7];
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                if (completedButtons.length == 16) {
                    youWin();
                }
            } else {
                incorrectGuess(7, Date.now(), clickedButtons[0]);
            }
        }
    });

    buttonsFinalized[8].addEventListener("click", function () {
        this.disabled = true;
        this.innerHTML = imageStorage[8];
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                if (completedButtons.length == 16) {
                    youWin();
                }
            } else {
                incorrectGuess(8, Date.now(), clickedButtons[0]);
            }
        }
    });

    buttonsFinalized[9].addEventListener("click", function () {
        this.disabled = true;
        this.innerHTML = imageStorage[9];
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                if (completedButtons.length == 16) {
                    youWin();
                }
            } else {
                incorrectGuess(9, Date.now(), clickedButtons[0]);
            }
        }
    });

    buttonsFinalized[10].addEventListener("click", function () {
        this.disabled = true;
        this.innerHTML = imageStorage[10];
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                if (completedButtons.length == 16) {
                    youWin();
                }
            } else {
                incorrectGuess(10, Date.now(), clickedButtons[0]);
            }
        }
    });

    buttonsFinalized[11].addEventListener("click", function () {
        this.disabled = true;
        this.innerHTML = imageStorage[11];
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                if (completedButtons.length == 16) {
                    youWin();
                }
            } else {
                incorrectGuess(11, Date.now(), clickedButtons[0]);
            }
        }
    });

    buttonsFinalized[12].addEventListener("click", function () {
        this.disabled = true;
        this.innerHTML = imageStorage[12];
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                if (completedButtons.length == 16) {
                    youWin();
                }
            } else {
                incorrectGuess(12, Date.now(), clickedButtons[0]);
            }
        }
    });

    buttonsFinalized[13].addEventListener("click", function () {
        this.disabled = true;
        this.innerHTML = imageStorage[13];
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                if (completedButtons.length == 16) {
                    youWin();
                }
            } else {
                incorrectGuess(13, Date.now(), clickedButtons[0]);
            }
        }
    });

    buttonsFinalized[14].addEventListener("click", function () {
        this.disabled = true;
        this.innerHTML = imageStorage[14];
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                if (completedButtons.length == 16) {
                    youWin();
                }
            } else {
                incorrectGuess(14, Date.now(), clickedButtons[0]);
            }
        }
    });

    buttonsFinalized[15].addEventListener("click", function () {
        this.disabled = true;
        this.innerHTML = imageStorage[15];
        if (clickedButtons.length == 0) {
            clickedButtons[0] = this;
        } else {
            if (clickedButtons[0].innerHTML == this.innerHTML) {
                this.style.backgroundColor = "green";
                clickedButtons[0].style.backgroundColor = "green";
                clickedButtons[0].disabled = true;
                completedButtons.push(clickedButtons[0]);
                completedButtons.push(this);
                clickedButtons = [];
                if (completedButtons.length == 16) {
                    youWin();
                }
            } else {
                incorrectGuess(15, Date.now(), clickedButtons[0]);
            }
        }
    });
};