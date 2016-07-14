describe("A valid input is provided.", function() {

  describe("The input is converted to a penny value", function(){

    it("£x.xp", function() {
      
      expect(convert('£16.23p')).toEqual(1623);

    });

    it("xxx", function() {
      
      expect(convert('432')).toEqual(432);

    });

    it("xxxp", function() {
      
      expect(convert('213p')).toEqual(213);

    });

    it("£xx", function() {
      
      expect(convert('£14')).toEqual(1400);

    });

    it("£xx.xx", function() {
      
      expect(convert('£54.04')).toEqual(5404);

    });

    it("£xx.xxxxx", function() {
      
      expect(convert('£23.33333')).toEqual(2333);

    });

    it("xxx.xxp", function() {
      
      expect(convert('001.41p')).toEqual(141);

    });
  
  });

  describe("The penny value is taken and an object of coins is returned", function(){

    it("101", function() {

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

      expect(calculate(101)).toEqual(coinObject);

    });
  
  });


});