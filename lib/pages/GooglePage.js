var BasePage = require('./BasePage');
var By = require('selenium-webdriver').By;
var Promise = require('selenium-webdriver').promise;

/**
 * Locators for the elements in this page
 * @type {string}
 */
var USER = "//*[@id='username']";
var PASS = "//*[@id='password']";
var NAME = "//*[@id='z_userName']";

/**
 * Constructor for Google Page
 * @param webdriver
 * @constructor
 */
function GooglePage(webdriver) {
    BasePage.call(this, webdriver);
}

/**
 * BasePage and Constructor wiring
 * @type {BasePage}
 */
GooglePage.prototype = Object.create(BasePage.prototype);
GooglePage.prototype.constructor = GooglePage;

/**
 * Page loaded defined by expected element loaded
 * @returns {GooglePage}
 */
GooglePage.prototype.isLoaded = function() {
    this.waitForDisplayed(By.xpath());
    return this;
};

/**
 * Search for given query and submit
 */
GooglePage.prototype.setusername = function(query) {
    this.getUsername().sendKeys(query);
};

/**
 * Search for given query and submit
 */
GooglePage.prototype.password = function(query) {
    this.getPassword().sendKeys(query);
    this.getPassword().submit();
};

GooglePage.prototype.UserNAme = function(name) {
    var defer = Promise.defer();
    var login_name = this.getName().getText();
    if (name == login_name) {
        defer.fulfill(true);
    }
    return defer.promise;

};



GooglePage.prototype.getUsername = function() {
    return this.driver.findElement(By.xpath(USER));
};
GooglePage.prototype.getPassword = function() {
    return this.driver.findElement(By.xpath(PASS));
};

GooglePage.prototype.getName = function() {
    return this.driver.findElement(By.xpath(NAME));
};

module.exports = GooglePage;
module.exports.GOOGLE_URL_EN = "https://webmail.qainfotech.com/";