describe("User Interactions:", function() {

  jasmine.getFixtures().fixturesPath = 'src/fixtures';

  var coinCounter = CoinCounter();
  var interactions = Interactions(coinCounter);

  // beforeEach("", function(){

  // });


  it("Intercept form submit and call relevant functions.", function() {

    loadFixtures('index.html');
    spyOn(coinCounter, 'validateInput');
    interactions.handleFormSubmit();
    
    // type a value

    // submit the form
    $("#form-btn").click();

    // Expect it to call all the relevant functions
    expect(coinCounter.validateInput).toHaveBeenCalled();

  });


  it("Display error message when an invalid input is provided.", function() {

    loadFixtures('index.html');
    interactions.handleFormSubmit();
    $("#form-btn").click();

    // expect error message to be shon
    expect($("#input-error")).not.toHaveClass('hidden');
    expect($("#input-success")).toHaveClass('hidden');
    expect($("#coin-results")).toHaveClass('hidden');


  });

  it("Display results when a valid input is provided.", function() {

    loadFixtures('index.html');
    interactions.handleFormSubmit();
    $("#coin-value").val('£39.51');
    $("#form-btn").click();

    // expect error message to be shon
    expect($("#input-error")).toHaveClass('hidden');
    expect($("#input-success")).not.toHaveClass('hidden');
    expect($("#coin-results")).not.toHaveClass('hidden');


  });

  it("Populate results when a valid input is provided.", function() {

    loadFixtures('index.html');
    interactions.handleFormSubmit();
    $("#coin-value").val('£39.51');
    $("#form-btn").click();

    // expect error message to be shown
    expect($("#amount-entered").text()).toBe('£39.51');
    expect($("#min-coins-needed").text()).toBe('22');
    expect($("#two-pound-count").text()).toBe('19');
    expect($("#one-pound-count").text()).toBe('1');
    expect($("#fifty-pence-count").text()).toBe('1');
    expect($("#twenty-pence-count").text()).toBe('0');
    expect($("#ten-pence-count").text()).toBe('0');
    expect($("#five-pence-count").text()).toBe('0');
    expect($("#two-pence-count").text()).toBe('0');
    expect($("#one-pence-count").text()).toBe('1');


  });

});


























