function getMinCoins() {
    var validChars = ["1","2","3","4","5","6","7","8","9","0","."];
    var output = document.getElementById("output");

    // GET INPUT MONETARY VALUE
    var dollarAmount = document.getElementById("dollarAmount").value;
    var dollarAmountStr = dollarAmount;

    for (var i = 0; i < dollarAmount.length; i++) {
        if ( validChars.indexOf(dollarAmount.charAt(i)) == -1 ) {
            alert("Invalid Dollar Amount");
            document.getElementById("dollarAmount").value = "";
            return;
        }

        if ( dollarAmount.charAt(i) === ".") {
            dollarAmount = dollarAmount.substring(0,i) + dollarAmount.substring(i+1, i+3);
        }
    }

    dollarAmount = parseInt(dollarAmount);
    
    // GET INPUT COIN DENOMINATIONS
    var coinDenominations = document.getElementById("coinDenominations").value.split(",");

    for (var i = 0; i < coinDenominations.length; i++) {

        if ( isNaN(Number(coinDenominations[i])) || Number(coinDenominations[i]) <= 0 )  {
            alert("Invalid Coin Denomination");
            document.getElementById("coinDenominations").value = "";
            return;
        }
        else {
            coinDenominations[i] = parseInt(coinDenominations[i]);
        }
        
    } 

    coinDenominations = coinDenominations.sort(function(a, b){return b - a});

    alert(coinDenominations);
    // GET COIN AMOUNTS
    output.innerHTML = "You need these coins to make $" + dollarAmountStr + ": </br>";
    for (index in coinDenominations) {
        var numCoins = Math.floor(dollarAmount / coinDenominations[index]);
        dollarAmount -= (coinDenominations[index] * numCoins);
        output.innerHTML += numCoins + " " + coinDenominations[index].toString() + "&#162; </br>";
    }

    if ( dollarAmount > 0) {
        output.innerHTML = "IMPOSSIBLE";
    }
}