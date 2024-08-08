class ForgotPasswordPage {
  get forgot_password_label() {
    return $("//android.widget.TextView[@text='Forgot Password?']");
  }
  get forgot_input_email() {
    return $(
      "//android.widget.FrameLayout[@resource-id='android:id/content']/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.EditText[1]"
    );
  }
  get forgot_counter() {
    return $("//android.widget.TextView[@text='You can resend in : 00:00:00']");
  }

  get forgot_check_email() {
    return $("//android.widget.TextView[@text='Please, also check spam']");
  }

  get forgot_btn_send() {
    return $(
      "//android.widget.FrameLayout[@resource-id='android:id/content']/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.Button"
    );
  }

  get label_link_successfull_sent() {
    return $("//android.widget.TextView[@text='Link berhasil dikirim']");
  }

  get forgot_button_ok() {
    return $("//android.widget.TextView[@text='Ok']");
  }

  get forgot_email_not_registered() {
    return $("//android.widget.TextView[@text='Email belum terdaftar']");
  }
}

module.exports = new ForgotPasswordPage();
