//start button
function start(){
    console.log("start button pushed");
    //turns off start
    document.getElementById("startButton").disabled = true;
    //turns on start
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    console.log("stop button pushed");
    //turns on
    document.getElementById("stopButton").disabled = true;
    //turns off
    document.getElementById("startButton").disabled = false;
}

function playStation(){
    console.log("playStation() started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function sound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);

    this.play = function(){
        this.sound.play();
    }

    this.stop = function(){
        this.sound.pause();
    }
}

//better countdown with loops
function btrCountdownTimer() {
    var count = 10;

    for(var i = 0; i < 10; i++){
        setTimeout(function(){
            document.getElementById("countdownTimer").innerHTML = count;
            count--; //count = count - 1; means the same thing
        }, 1000 * i);
    }

    setTimeout(function(){
        document.getElementById("countdownTimer").innerHTML = "Blastoff!";
    }, 10000);
}
// for asssignment 3-1 "Fleet Admiral" 1/2 way at 5 seconds
function evenBtrCountdownTimer() {
    var count = 10;
//count = count - 1; means the same thing
    for(var i = 0; i < 11; i++){
            if (i == 10){
                setTimeout(function(){
                    document.getElementById("countdownTimer").innerHTML = "Blastoff!";
                }, i* 1000);
            }else if (i > 4){
                setTimeout(function(){
                    document.getElementById("countdownTimer").innerHTML = "“Warning Less than ½ way to launch, time left = " + count;
                    count--;
                }, i* 1000);
            } else {
                setTimeout(function(){
                    document.getElementById("countdownTimer").innerHTML = count;
                    count--;
                }, i* 1000);
            }
        }
    }

//week1-2 countdown timer 10-1 , Blastoff.
function startCountdown() {
    var count = 10;

    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;

    setTimeout(function () {
        //after 1 second it will run the code here
        //countdown should say 10 here
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 1000);
    //countdown 9
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 2000);
    //countdown 8
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 3000);
    //countdown 7
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 4000);
    //countdown 6
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 5000);
    //countdown 5
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 6000);
    //countdown 4
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 7000);
    //countdown 3
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 8000);
    //countdown 2
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 9000);
    //countdown finishing...
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = "Blastoff!";
    }, 10000);
}   //Countdown says "blastoff!""

//Funtion for craps
function playCraps() {
    console.log("playCraps has started"); //semicolon ends line 
    var die1;
    die1 = Math.ceil(Math.random() * 6);
    document.getElementById("die1Results").innerHTML = "The value of die1 is: " + die1;
    var die2;
    die2 = Math.ceil(Math.random() * 6);
    document.getElementById("die2Results").innerHTML = "The value of die2 is: " + die2;
    var dieSum = die1 + die2;
    document.getElementById("sumResults").innerHTML = "The sum of die1 + die2 is: " + dieSum;
    //sums at the bottom text. 
    if (dieSum == 7 || dieSum == 11) {
        //
        document.getElementById("crapsResults").innerHTML = "Craps! You lose!";
        //tests for doubles and evens with this
    }   else if (die1 == die2 && die2 % 2 == 0) {
            document.getElementById("crapsResults").innerHTML = "Doubles! You win!";
        } else {
            document.getElementById("crapsResults").innerHTML = "Please try again.";
        }

    }

    function sandboxTest() {
        console.log("Sandbox test started");
        var i = 0;
        while (i < 10){
            setTimeout(function () {
            document.getElementById("sandRes").innerHTML = i;
            i++;     //can write i = i + 1; (means the same thing)
        }, 1000 * i);
            
        }
    }