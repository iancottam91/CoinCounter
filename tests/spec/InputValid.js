describe("An input value must be valid.", function() {

	var coinCounter = CoinCounter();

  describe("A penny only value", function(){

    it("by creating a user with a specified name", function() {

      expect(coinCounter.validateInput('a')).toEqual('b');

    });
  
  });

  describe("Invalid inputs include:", function(){

    it("An empty value", function() {
			
			expect(coinCounter.validateInput('a')).toEqual('b');

    });
  
  });

});