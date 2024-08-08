class RegisterPage {
  get profileMenu() {
    return $(`//android.widget.TextView[@text="Profile"]`);
  }
  get registerLabel() {
    // return $("//android.widget.TextView[contains(@text, 'Register, now!')]");
    return $(
      "//hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ScrollView[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.TextView[3]"
    );
  }

  async register_normal_flow() {
    // await this.inputUsername.setValue(username);
    // await this.inputPassword.setValue(password);
    // await this.btnSubmit.click();
  }
}

module.exports = new RegisterPage();
