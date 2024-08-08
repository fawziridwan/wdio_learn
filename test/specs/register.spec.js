const login = require("../pageobjects/login.page");
const register = require("../pageobjects/register.page");

describe("Register", () => {
  beforeEach(() => {
    driver.launchApp();
    driver.pause(100000);
  });

  it("Register dengan valid data", async function () {
    await login.loginBtn.click();
    await register.registerLabel.doubleClick();
  });
});
