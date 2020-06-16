var DriverManager = require('./../lib/drivers/DriverManager');
var GooglePage = require('./../lib/pages/GooglePage');
var Assert = require('chai').assert;
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');

test.describe('Mocha Selenium Tests', function() {
    this.timeout(60000);
    var driver;
    var googlePage;
    var kibanaPage;

    test.before(function() {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        driverWindow = driver.manage().window();
        //driver.get('https://webmail.qainfotech.com/');
        googlePage = new GooglePage(driver);
        //kibanaPage = new KibanaPage(driver);
    });

    test.it('should Log in ', function() {
        googlePage.open(GooglePage.GOOGLE_URL_EN);
        googlePage.setusername("navedalam");
        googlePage.password("N@v3d!0000");
    });

    test.it('User Should be Naved Alam', function() {
        googlePage.UserNAme("Naved Alam")
    });



    /**
     * Clean up function after test ends
     */
    test.after(function(done) {
        driver.quit();
        done();
    });
});