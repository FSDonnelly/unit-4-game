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

    var images = [ //can't get these images to link to buttons!!!
        'assets/images/crystal1.jpg',/// tried something different
        'assets/images/crystal2.jpg',
        'assets/images/crystal3.jpg',
        'assets/images/crystal4.jpg',
    ];
    // Generates random "goal" number between 19 - 120
    randomResult = Math.floor(Math.random() * 101) + 19;
    // console.log(randomResult);
    // Show random "goal" number
    $("#result").html('Random Number: ' + randomResult);

    for (var i = 0; i < 4; i++) {
        // Every crystal needs to have a random number between 1 - 12
        var random = Math.floor(Math.random() * 11) + 1;

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
// Until it equals the randomResult
    if (previous > randomResult) {
        losses++;
        $("#losses").html(losses);
        alert('You Lost!!')
        previous = 0;
        resetAndStartGame();
    }// If it is greater than randomResult, then increase lostCounter,then start over
// If it is equal, then increas the winCounter 
    else if (previous === randomResult) {
        wins++;
        $("#wins").html(wins);
        alert('You Win!!');
        previous = 0;
        resetAndStartGame();
    }

});








