function Interactions (coinCounter) {
	
	// must take a coinCounter object


	return {

		// intercept form submti and handle it with JS

    handleFormSubmit : function(){

    	var interactions = this;

	   	// interactions
	    function processForm(e) {
	      if (e.preventDefault) e.preventDefault();

	      var input = document.getElementById('coin-value').value;
	      var valid = coinCounter.validateInput(input);
	      var result;

				console.log(input);
				console.log(valid);

				if(valid){
					// populate results
					result = coinCounter.calculateNumberOfCoins( coinCounter.convertInput(input) );
					interactions.populateResults(result, input);

					console.log(result);
					// console.log(resultObj);
					// show results
					interactions.showResults();
				} else {
					// show error
					interactions.showErrorMessage();
				}
	      
	          
	      // return false to stop default form submission
	      return false;
	    }

	    var form = document.getElementById('calculate-coins-form');
	    form.addEventListener("submit", processForm);

    },

    showErrorMessage : function(){

    	document.getElementById('input-error').className = '';
    	document.getElementById('input-success').className = 'hidden';
    	document.getElementById('coin-results').className = 'hidden';

    },

    showResults: function(){
    	document.getElementById('input-error').className = 'hidden';
    	document.getElementById('input-success').className = '';
    	document.getElementById('coin-results').className = '';
    },

    populateResults: function(result, input){

    	document.getElementById('amount-entered').textContent = input;
    	document.getElementById('min-coins-needed').textContent = coinCounter.sumArray(result);

    	document.getElementById('two-pound-count').textContent = result[0];
    	document.getElementById('one-pound-count').textContent = result[1];
    	document.getElementById('fifty-pence-count').textContent = result[2];
    	document.getElementById('twenty-pence-count').textContent = result[3];
    	document.getElementById('ten-pence-count').textContent = result[4];
    	document.getElementById('five-pence-count').textContent = result[5];
    	document.getElementById('two-pence-count').textContent = result[6];
    	document.getElementById('one-pence-count').textContent = result[7];

    }

  }



}