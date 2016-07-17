describe("User Interactions:", function() {

  jasmine.getFixtures().fixturesPath = 'src/fixtures';

  var coinCounter = CoinCounter();
  var interactions = Interactions(coinCounter);

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


  // test when handleFormSubmit is called and valid = false
  it("Display error message when an invalid input is provided.", function() {

    loadFixtures('index.html');
    interactions.handleFormSubmit();
    $("#form-btn").click();

    // expect error message to be shon
    expect($("#input-error")).not.toHaveClass('hidden');
    expect($("#input-success")).toHaveClass('hidden');
    expect($("#coin-results")).toHaveClass('hidden');


  });

  // test when handleFormSubmit is called and valid = true
  it("Sets location.search if the value is valid.", function() {

    loadFixtures('index.html');
    interactions.handleFormSubmit();
    spyOn(interactions, 'redirect');

    $("#coin-value").val('£39.51');
    $("#form-btn").click();

    expect(interactions.redirect).toHaveBeenCalled();
    // perhaps spy on location.search


  });


  it("Display results when a valid input is provided.", function() {

    loadFixtures('index.html');
    interactions.readUrlValue('?value=£39.51');

    // load fixture with ?value=£39.51

    // expect error message to be shon
    expect($("#input-error")).toHaveClass('hidden');
    expect($("#input-success")).not.toHaveClass('hidden');
    expect($("#coin-results")).not.toHaveClass('hidden');


  });

  it("Populate results when a valid input is provided.", function() {

    loadFixtures('index.html');
    interactions.readUrlValue('?value=£39.51');

    // load fixture with ?value=£39.51


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


























