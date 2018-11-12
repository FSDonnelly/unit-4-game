// CrystalsCollector Game

// Game has 4 Crystals and Random Result
var randomResult;
var wins = 0;
var losses = 0;
var previous = 0;



// Reset and start game
var resetAndStartGame = function () {
    //resets crystal values
    $(".crystals").empty();

    var images = [
        '../images/crystal1.jpeg',
        '../images/crystal2.jpeg',
        '../images/crystal3.jpeg',
        '../images/crystal4.jpeg',
    ];
    // Generates random "goal" number between 1 - 99
    randomResult = Math.floor(Math.random() * 69) + 30;
    // console.log(randomResult);
    // Show random "goal" number
    $("#result").html('Random Number: ' + randomResult);

    for (var i = 0; i < 4; i++) {
        // Every crystal needs to have a random number between 1 - 15
        var random = Math.floor(Math.random() * 14) + 1;

        console.log(random);
        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "randomNumber": random
        });
        crystal.css({
            "background-image":"url('" + images[i] + "')"
        });
        $(".crystals").append(crystal);


    }

    $("#yourTotal").html(previous);
}

resetAndStartGame();

// When CLICKING any crystal, it should add to the previous result

$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('randomNumber'));

    previous += num;
    // show your total (increasing everytime you click on crystal)
    $("#yourTotal").html(previous);

    console.log(previous); //checking my work

    if (previous > randomResult) {
        losses++;
        $("#losses").html(losses);
        alert('You Lost!!')
        previous = 0;
        resetAndStartGame();
    }
    else if (previous === randomResult) {
        wins++;
        $("#wins").html(wins);
        alert('You Win!!');
        previous = 0;
        resetAndStartGame();
    }

});






// Until it equals the randomResult
// If it is greater than randomResult, then increase lostCounter,then start over
// If it is equal, then increas the winCounter 
