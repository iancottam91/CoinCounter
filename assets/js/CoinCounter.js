function CoinCounter () {
	
	var coinValues = [200,100,50,20,10,5,2,1];
	var coinCountArr = [0,0,0,0,0,0,0,0];

	var coinObj = {
	  twopound: 0,
	  onepound: 0,
	  fiftyp: 0,
	  twentyp: 0,
	  tenp: 0,
	  fivep: 0,
	  twop: 0,
	  onep: 0,
	}

  return {

    validateInput : function(input){

    	var valid;

    	// 0 or 1 £ at the start £{0,1}
    	// follow by 1 or more of 0 to 9 [0-9]+
    	// follow by 0 or 1 of \.{0,1}
    	
    	// followed by 1 or more of 0 to 9 [0-9]+ ((NEED TO SPECIFY THIS IS ONLY IF THERE IS A DOT))
    	// followed by 0 or 1 of p p{0,1} ((THIS IS NOT ALLOW IF THERE IS A £ AND NO .))

    	var re = /^£{0,1}[0-9]+\.{0,1}[0-9]+p{0,1}$/i;
      // test the above first
    	// - if it's false - check if it's £1, 1 or 1p and if it is pass it
    	// - if it's true and it has a £ and a p it needs a NO . fail it
    	var regexTest = re.test(input);

    	valid = regexTest;

    	// - if it's false - check if it's £x, x or xp and if it is, pass it
    	if(!valid){
    		var reOneDigit = /^£{0,1}[0-9]p{0,1}$/;
    		valid = reOneDigit.test(input);
    	}

    	// - if it's true and it has a £ and a p and NO . fail it
    	if(valid){
    		var rePoundPNoDot = /^£{1}[0-9]+p{1}$/;
    		if(rePoundPNoDot.test(input)){
    			valid = false;
    		}
    	}

      return valid;

    },

    convertInput : function(validInput){

        // check if there is a £ - if so remove it and multiply by 100
        if(validInput.indexOf('£') >= 0){
            validInput = validInput.replace('£', '').replace('p', '');
            validInput = validInput * 100;            
        } else if(validInput.indexOf('.') >= 0) {
        // check if there is a . - if so remove p and multiply by 100
            validInput =  validInput.replace('p', '');
            validInput = validInput * 100;
        } else {
        // it's a penny only value
            validInput =  validInput.replace('p', '');
            
        }

        // if it still has a '.' just change it to an integer
        validInput = parseInt(validInput);
    	return validInput;

    },

    calculateNumberOfCoins : function(pennyValue){

    	var coinValueIndex = 0;
    	var pennyValueLocal = pennyValue;

    	function checkNumberOfCoins(pennyValue, coinIndex){

    		while ( pennyValueLocal >= coinValues[coinIndex] && pennyValueLocal !== 0) {
				  coinCountArr[coinIndex]++;
				  pennyValueLocal = pennyValueLocal - coinValues[coinIndex];
				}
				coinValueIndex++;

    	}

    	for(var i=0; i<coinValues.length; i++){
    		checkNumberOfCoins(pennyValueLocal, coinValueIndex);
    	}


    	return coinCountArr;

    },

    convertCoinCountArrToObj: function(coinCountArray){

    	coinObj.twopound = coinCountArray[0];
    	coinObj.onepound = coinCountArray[1];
    	coinObj.fiftyp = coinCountArray[2];
    	coinObj.twentyp = coinCountArray[3];
    	coinObj.tenp = coinCountArray[4];
    	coinObj.fivep = coinCountArray[5];
    	coinObj.twop = coinCountArray[6];
    	coinObj.onep = coinCountArray[7];

    	return coinObj;

    }


  }

}