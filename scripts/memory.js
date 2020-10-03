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

var buttonList = [
    "button1",
    "button2",
    "button3",
    "button4",
    "button5",
    "button6",
    "button7",
    "button8",
    "button9",
    "button10",
    "button11",
    "button12",
    "button13",
    "button14",
    "button15",
    "button16"
];

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


var usedButtons = [
    firstButtonPair1,
    firstButtonPair2,
    secondButtonPair1,
    secondButtonPair2,
    thirdButtonPair1,
    thirdButtonPair2,
    fourthButtonPair1,
    fourthButtonPair2,
    fifthButtonPair1,
    fifthButtonPair2,
    sixthButtonPair1,
    sixthButtonPair2,
    seventhButtonPair1,
    seventhButtonPair2,
    eighthButtonPair1,
    eighthButtonPair2
];


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


var buttonsFinalized = [
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

var imageStorage = [];

for (var i = 0; i < buttonsFinalized.length; i++) {
    buttonsFinalized[i].disabled = true;
    imageStorage[i] = buttonsFinalized[i].innerHTML;
    buttonsFinalized[i].innerHTML = '<img src="./images/js.png" class="buttons"/>';
}

var seconds = 0;
var minutes = 0;
var score = 0;
var time;

function timer() { // Update the count every 1 second
    time = setInterval(function () {
        seconds++;
        score++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        // Update the timer in HTML with the time it takes the user to play the game
        document.getElementById("clock").innerHTML = "<i class='fa fa-hourglass-start'></i>" + " Timer: " + minutes + " Mins " + seconds + " Secs";
    }, 1000);
}

document.getElementById("start").addEventListener(("click"), function () {
    this.disabled = true;
    for (var j = 0; j < buttonsFinalized.length; j++) {
        buttonsFinalized[j].disabled = false;
    }
    timer();
});


var clickedButtons = [];
var completedButtons = [];


let incorrectGuess = function (i, start, clickedButton) {
    for(var k = 0; k < usedButtons.length; k++){
        document.getElementById(usedButtons[k]).disabled = true;
    }
    let x = setInterval(function () {
        let timePassed = Date.now() - start;
        if (timePassed >= 2000) {
            clearInterval(x);
            document.getElementById(usedButtons[i]).innerHTML = '<img src="./images/js.png" class="buttons"/>';
            clickedButton.innerHTML = '<img src="./images/js.png" class="buttons"/>';
            document.getElementById(usedButtons[i]).style.backgroundColor = "";
            clickedButton.style.backgroundColor = "";
            clickedButtons = [];
            document.getElementById(usedButtons[i]).disabled = false;
            clickedButton.disabled = false;
            for(var t = 0; t < usedButtons.length; t++){
                if(document.getElementById(usedButtons[t]).style.backgroundColor == "green"){
                    document.getElementById(usedButtons[t]).disabled = true;
                }
                else{
                    document.getElementById(usedButtons[t]).disabled = false
                }
            }
            return;
        }
        document.getElementById(usedButtons[i]).style.backgroundColor = "red";
        clickedButton.style.backgroundColor = "red";
        document.getElementById(usedButtons[i]).disabled = false;
        clickedButton.disabled = false;
    }, 100);
};


let youWin = function (){
    clearInterval(time);
    var username = document.createElement("input");
    var usernameEnter = document.createElement("button");
    var label = document.createElement("Label");
    label.innerHTML = "Enter your username to add to high score list:";
    username.setAttribute("type", "text");
    username.setAttribute("id", "username");
    usernameEnter.setAttribute("id", "usernameEnter");
    usernameEnter.innerHTML = "Enter";
    var game = document.getElementById("game");
    game.innerHTML = "";
    game.appendChild(label);
    game.appendChild(username);
    game.appendChild(usernameEnter);
    document.getElementById("usernameEnter").addEventListener("click", function(){
        let highScoreUsername = document.getElementById("username").value;
        let key = firebase.database().ref('High Scores').push();
        key.set({highScoreUsername, score});
        var dbRef = firebase.database().ref('High Scores').orderByChild('score').limitToLast(20);
        game.innerHTML = "";
        game.append(document.createElement("br"));
        var title = document.createElement("h1");
        title.innerHTML = "High Scores";
        game.append(title);
        dbRef.on("value", function(snapshot) {
            snapshot.forEach(function(child){
                game.appendChild(document.createTextNode(child.val().highScoreUsername + ": " + child.val().score + " seconds" ));
                game.appendChild(document.createElement("br"));
            });
            var replay = document.createElement("button");
            replay.setAttribute("id", "replayButton");
            replay.setAttribute("onClick", "window.location.reload();");
            replay.innerHTML = "Click to replay";
            game.appendChild(replay);
        });
    });
};

document.getElementById(usedButtons[0]).addEventListener("click", function () {
    this.disabled = true;
    this.innerHTML = imageStorage[0];
    if (clickedButtons.length == 0) {
        clickedButtons[0] = this;
        this.disabled = true;
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
            incorrectGuess(0, Date.now(), clickedButtons[0]);
        }
    }
});

document.getElementById(usedButtons[1]).addEventListener("click", function () {
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

document.getElementById(usedButtons[2]).addEventListener("click", function () {
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

document.getElementById(usedButtons[3]).addEventListener("click", function () {
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

document.getElementById(usedButtons[4]).addEventListener("click", function () {
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

document.getElementById(usedButtons[5]).addEventListener("click", function () {
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

document.getElementById(usedButtons[6]).addEventListener("click", function () {
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

document.getElementById(usedButtons[7]).addEventListener("click", function () {
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

document.getElementById(usedButtons[8]).addEventListener("click", function () {
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

document.getElementById(usedButtons[9]).addEventListener("click", function () {
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

document.getElementById(usedButtons[10]).addEventListener("click", function () {
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

document.getElementById(usedButtons[11]).addEventListener("click", function () {
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

document.getElementById(usedButtons[12]).addEventListener("click", function () {
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

document.getElementById(usedButtons[13]).addEventListener("click", function () {
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

document.getElementById(usedButtons[14]).addEventListener("click", function () {
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

document.getElementById(usedButtons[15]).addEventListener("click", function () {
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