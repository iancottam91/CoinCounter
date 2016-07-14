describe("An input value must be valid.", function() {

	var coinCounter = CoinCounter();

  describe("Valid Inputs Include", function(){

    it("£x.xp", function() {
      
      expect(coinCounter.validateInput('£16.23p')).toBeTruthy();

    });

    it("xxx", function() {
      
      expect(coinCounter.validateInput('432')).toBeTruthy();

    });

    it("xxxp", function() {
      
      expect(coinCounter.validateInput('213p')).toBeTruthy();

    });

    it("£xx", function() {
      
      expect(coinCounter.validateInput('£14')).toBeTruthy();

    });

    it("£xx.xx", function() {
      
      expect(coinCounter.validateInput('£54.04')).toBeTruthy();

    });

    it("£xx.xxxxx", function() {
      
      expect(coinCounter.validateInput('£23.33333')).toBeTruthy();

    });

    it("xxx.xxp", function() {
      
      expect(coinCounter.validateInput('001.41p')).toBeTruthy();

    });

    it("xx.xx", function() {
			
			expect(coinCounter.validateInput('13.02')).toBeTruthy();

    });

    it("£x", function() {
			
			expect(coinCounter.validateInput('£1')).toBeTruthy();

    });

    it("x", function() {
			
			expect(coinCounter.validateInput('1')).toBeTruthy();

    });

    it("xp", function() {
			
			expect(coinCounter.validateInput('1p')).toBeTruthy();

    });
  
  });

  describe("Invalid inputs include:", function(){

    it("££xx", function() {
			
			expect(coinCounter.validateInput('££00')).toBeFalsy();

    });

    it("£11p", function() {
			
			console.log('£11p');
			expect(coinCounter.validateInput('£11p')).toBeFalsy();

    });

    it("£p", function() {
			
			expect(coinCounter.validateInput('£p')).toBeFalsy();

    });

    it("13x", function() {
			
			expect(coinCounter.validateInput('13x')).toBeFalsy();

    });

    it("13p.02", function() {
			
			expect(coinCounter.validateInput('13p.02')).toBeFalsy();

    });

    
  
  });

});