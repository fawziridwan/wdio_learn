class LoginPage {
  get loginBtn() {
    return $("//android.widget.TextView[@text='Login Here']");
  }
}

module.exports = new LoginPage();
