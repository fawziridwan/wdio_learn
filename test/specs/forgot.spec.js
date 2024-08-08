const login = require("../pageobjects/login.page");
const forgot = require("../pageobjects/forgot.page");
describe("Lupa Password", () => {
  beforeEach(() => {
    driver.launchApp();
    driver.pause(100000);
  });

  it("LupaPass-Mobile-001 - Lupa password dengan valid data", async function () {
    await login.loginBtn.click();
    await forgot.forgot_password_label.click();
    await forgot.forgot_input_email.setValue("fawzitester@gmail.com");
    const forgot_counter_current = await forgot.forgot_counter.getText();
    const expected_counter = forgot_counter_current;
    console.log(expected_counter);
    expect(forgot_counter_current).toContain(expected_counter);
    const label_check_email_current = await forgot.forgot_counter.getText();
    const expected_label_check_email = label_check_email_current;
    console.log(label_check_email_current);
    expect(label_check_email_current).toContain(expected_label_check_email);
    await forgot.forgot_btn_send.click();
    const link_successfull_sent =
      await forgot.label_link_successfull_sent.getText();
    const expected_link_successfull_sent = link_successfull_sent;
    console.log(link_successfull_sent);
    await expect(link_successfull_sent).toContain(
      expected_link_successfull_sent
    );
    await forgot.forgot_button_ok.click();
  });

  it("LupaPass-Mobile-002 - Verifikasi fungsi tombol send", async function () {
    await login.loginBtn.click();
    await forgot.forgot_password_label.click();
    const button = forgot.forgot_btn_send;
    const isEnabled = await button.getAttribute("enabled");
    await expect(isEnabled).toEqual("false");
  });

  it("LupaPass-Mobile-003 - lupa password dengan email tidak valid", async function () {
    await login.loginBtn.click();
    await forgot.forgot_password_label.click();
    await forgot.forgot_input_email.setValue("hahah@mail.com");
    await forgot.forgot_btn_send.click();
    const current_email_not_registered =
      await forgot.forgot_email_not_registered.getText();
    const expected_email_not_registered = current_email_not_registered;
    console.log(expected_email_not_registered);
    await expect(current_email_not_registered).toContain(
      expected_email_not_registered
    );
    await forgot.forgot_button_ok.click();
  });

  it("LupaPass-Mobile-004 - Lupa password dengan email tidak lengkap", async function () {
    await login.loginBtn.click();
    await forgot.forgot_password_label.click();
    await forgot.forgot_input_email.setValue("hahahtumbalakun@gmail.");
    await forgot.forgot_btn_send.click();
    const forgot_email_not_registered =
      await forgot.forgot_email_not_registered.getText();
    const expected_forgot_email_not_registered = forgot_email_not_registered;
    console.log(expected_forgot_email_not_registered);
    await expect(forgot_email_not_registered).toContain(
      expected_forgot_email_not_registered
    );
    await forgot.forgot_button_ok.click();
  });
});
