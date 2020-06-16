var Promise = require('selenium-webdriver').promise;
var Until = require('selenium-webdriver').until;

// Default wait for UI object is 30 seconds
var WAIT_TIME_PRESENT = 30000;

// Default wait before attempting any retries
var WAIT_TIME_BEFORE_RETRY = 500;

// Webdriver holder for the base page
var driver;

// Internal debug
var debug = false;

/**
 * @param webdriver
 * @constructor
 */
function BasePage(webdriver) {
    this.driver = webdriver;
}

/**
 * Opens the specified url
 * @param url
 * @returns {BasePage}
 */
BasePage.prototype.open = function(url) {
    this.driver.get(url);
    return this;
};
module.exports = BasePage;