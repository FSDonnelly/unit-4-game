// CrystalsCollector Game

// Game has 4 Crystals and Random Result
var randomResult;
var wins;
var losses;


// Setters
// Getters


randomResult = Math.floor(Math.random() * 99) + 30;
// console.log(randomResult);

$("#result").html('Random Number: ' + randomResult);

for(var i = 0; i < 4; i++){
// Every needs to have a random number between 1 - 12
    var random = Math.floor(Math.random() * 11) + 1;
    // A new random should be generated everytime we win or loose to the crystals
    // console.log(random);
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "randomNumber": random
        });

    $(".crystals").append(crystal);
        
       
}


$(".crystal").on('click', function () {

    console.log($(this).attr('randomNumber'));
});





// When CLICKING any crystal, it should add to the previous result
// Until it equals the randomResult
// If it is greater than randomResult, then increase lostCounter,then start over
// If it is equal, then increas the winCounter 
