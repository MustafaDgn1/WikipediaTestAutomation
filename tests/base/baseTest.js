const DriverUtil = require('./driverUtil');

beforeScenario(async () => {
    await DriverUtil.restartDriver();
    await DriverUtil.driver.manage().window().maximize();
});

afterScenario(async () => {
    await DriverUtil.quitDriver();
});
