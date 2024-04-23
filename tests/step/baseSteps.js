const { By,until } = require('selenium-webdriver');

const DriverUtil = require('../base/driverUtil');

const assert = require('assert');


step("Open <pageUrl> Page", async function (pageUrl) {
    driver = DriverUtil.driver;
    await driver.get(pageUrl);
});

step("Click navbar Log in button", async function () {
  const login = await driver.wait(until.elementLocated(By.xpath('//*[@id="pt-login-2"]/a/span')), 20000);
  await login.click();
});

step("Enter username <username>", async function (username) {
  const usernameInput = await driver.wait(until.elementLocated(By.xpath('//*[@id="wpName1"]')), 20000);
  await usernameInput.sendKeys(username);
});

step("Enter password <password>", async function (password) {
  const passwordInput = await driver.wait(until.elementLocated(By.id('wpPassword1')), 20000);
  await passwordInput.sendKeys(password);
});

step("Click Log in button", async function () {
  const loginButton = await driver.wait(until.elementLocated(By.id('wpLoginAttempt')), 20000);
  await loginButton.click();
});

step("Verifying homepage loading after login", async function () {
  await driver.wait(until.elementLocated(By.id('vector-user-links-dropdown-checkbox')), 20000);
  
});

//---------------------------------------------------------------------------------------------------------------

step("Click on the search bar and typing <keyword>", async function (keyword) {
  const searchboxInput = await driver.wait(until.elementLocated(By.css("input[title='Search Wikipedia [alt-shift-f]']")), 20000);
    await searchboxInput.click();
    await searchboxInput.sendKeys(keyword);
});

step("Click on the search button", async function () {
  const searchButton = await driver.wait(until.elementLocated(By.xpath("//*[@id='searchform']/div/button")), 20000);
    await searchButton.click();
});

step("Verifying the Atatürk search results", async function () {
  await driver.wait(until.elementLocated(By.xpath("//span[text()='Mustafa Kemal Atatürk']")), 20000);
});

step("Clicking on the languages button", async function () {
  const languagesButton = await driver.wait(until.elementLocated(By.id('p-lang-btn-checkbox')), 20000);
    await languagesButton.click();
});

step("Selecting Turkish language", async function () {
  const buttonTurkish = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div[2]/div[1]/div/ul[2]/li[6]/a")), 20000);
    await buttonTurkish.click();
});

step("Verify Turkish language selection", async function () {
  const expectedText = "Vikipedi üzerinde ara";
  const searchInput = await driver.wait(until.elementLocated(By.css('input[placeholder="Vikipedi üzerinde ara"]')), 20000);
  const actualPlaceholder = await searchInput.getAttribute('placeholder');
  assert.equal(actualPlaceholder, expectedText);
});