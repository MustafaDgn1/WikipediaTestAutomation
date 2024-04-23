const { Builder } = require('selenium-webdriver');

class DriverUtil {
    static driver;

    static async restartDriver() {
        if (this.driver) {
            await this.driver.quit();
        }
        this.driver = new Builder().forBrowser('chrome').build();
    }

    static async quitDriver() {
        if (this.driver) {
            await this.driver.quit();
            this.driver = null;
        }
    }
}

module.exports = DriverUtil;