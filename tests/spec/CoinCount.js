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

    it("xx.xx", function() {
      
      expect(coinCounter.convertInput('13.02')).toEqual(1302);

    });

    it("£x", function() {
      
      expect(coinCounter.convertInput('£1')).toEqual(100);

    });

    it("x", function() {
      
      expect(coinCounter.convertInput('1')).toEqual(1);

    });

    it("xp", function() {
      
      expect(coinCounter.convertInput('1p')).toEqual(1);

    });
  
  });

  it("can all the values in an array", function(){

    var result = [19, 1, 1, 0, 0, 0, 0, 1];
    expect( coinCounter.sumArray(result) ).toBe(22);

  });


});