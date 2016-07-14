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

      return false;

    },

    convertInput : function(validInput){

    	return 0;

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