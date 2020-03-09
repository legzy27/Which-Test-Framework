let {Given,When,Then,setDefaultTimeout} = require('cucumber');
setDefaultTimeout(100 * 1000);
var expect = require('expect');





Given('I navigate to the tv landing page {string}', function (string) {
  browser.manage().timeouts().implicitlyWait(50 * 8000);
  browser.ignoreSynchronization=true;
  browser.get('https://www.which.co.uk/reviews/televisions');
  browser.driver.sleep(5000);
  return console.log("@When -- I navigate to the tv landing page");
});


When('I am on landing page I should see the title', async function () {
  browser.driver.sleep(5 * 9000);
  var EC = protractor.ExpectedConditions;
  browser.wait(EC.visibilityOf(element(by.id("gn_which-logo-title"))),8000);
  await expect(element(by.id('gn_which-logo-title')).isDisplayed()).toBeTruthy();
  browser.driver.sleep(6 * 9000);
  return console.log("@Then -- I am on landing page I should see the title");
});