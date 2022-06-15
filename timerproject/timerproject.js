function countdown(count) {
    let counter = setInterval(function() {

        count--;

        if (count <= 0) {
            console.log("DONE!");
            clearInterval(counter);
        }

        console.log(count);
    
    },1000);

}

function randomGame() {
    roundCount = 0
    let gamePlayer = setInterval(function(){

        roundCount++
        
        if (Math.random() > 0.75) {

            console.log("It took ",roundCount," rounds to get a high enough number.");
            clearInterval(gamePlayer);

        }

    },1000);
}
