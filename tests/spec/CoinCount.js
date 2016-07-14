describe("A valid input is provided.", function() {

  var coinCounter;

  beforeEach(function(){
    coinCounter = CoinCounter();
  });

  describe("The input is converted to a penny value", function(){

    it("£x.xp", function() {
      
      expect(coinCounter.convertInput('£16.23p')).toEqual(1623);

    });

    it("xxx", function() {
      
      expect(coinCounter.convertInput('432')).toEqual(432);

    });

    it("xxxp", function() {
      
      expect(coinCounter.convertInput('213p')).toEqual(213);

    });

    it("£xx", function() {
      
      expect(coinCounter.convertInput('£14')).toEqual(1400);

    });

    it("£xx.xx", function() {
      
      expect(coinCounter.convertInput('£54.04')).toEqual(5404);

    });

    it("£xx.xxxxx", function() {
      
      expect(coinCounter.convertInput('£23.33333')).toEqual(2333);

    });

    it("xxx.xxp", function() {
      
      expect(coinCounter.convertInput('001.41p')).toEqual(141);

    });
  
  });

  describe("The penny value is taken and an object of coins is returned", function(){

    it("101", function() {

      var coinObject = {
        twopound: 0,
        onepound: 1,
        fiftyp: 0,
        twentyp: 0,
        tenp: 0,
        fivep: 0,
        twop: 0,
        onep: 1,
      }

      expect( coinCounter.convertCoinCountArrToObj( coinCounter.calculateNumberOfCoins(101) )  ).toEqual(coinObject);

    });

    it("13", function() {

      var coinObject = {
        twopound: 0,
        onepound: 0,
        fiftyp: 0,
        twentyp: 0,
        tenp: 1,
        fivep: 0,
        twop: 1,
        onep: 1,
      }

      expect( coinCounter.convertCoinCountArrToObj( coinCounter.calculateNumberOfCoins(13) )  ).toEqual(coinObject);

    });

    it("0", function() {

      var coinObject = {
        twopound: 0,
        onepound: 0,
        fiftyp: 0,
        twentyp: 0,
        tenp: 0,
        fivep: 0,
        twop: 0,
        onep: 0,
      }

      expect( coinCounter.convertCoinCountArrToObj( coinCounter.calculateNumberOfCoins(0) )  ).toEqual(coinObject);

    });

    it("199", function() {

      var coinObject = {
        twopound: 0,
        onepound: 1,
        fiftyp: 1,
        twentyp: 2,
        tenp: 0,
        fivep: 1,
        twop: 2,
        onep: 0,
      }

      expect( coinCounter.convertCoinCountArrToObj( coinCounter.calculateNumberOfCoins(199) )  ).toEqual(coinObject);

    });
  
  });


});