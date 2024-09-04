const { I } = inject();

module.exports = {
  // Insert your locators and methods here
  fields: {
    signInText: "Sign in with your username and password",
    ProceedtoLogin : '//android.view.View[@content-desc="Proceed to Login"]',
    signinUsername:'//android.widget.TextView[@text="Sign in with your username and password"]',
    usernameTextbox: '//android.view.View[@text="Username"]/following-sibling::android.widget.EditText[1]',
    passwordTextbox: '//android.view.View[@text="Password"]/following-sibling::android.widget.EditText',
    signInButton: '//android.widget.Button[@text="submit"]',
    dashboard:"~Dashboard",
    Synchronize:"~Synchronize",
    Kenya:"~Kenya",
    Uganda: "~Uganda",
    incorrectPassword:'//android.widget.TextView[@text="Incorrect username or password."]'
  },

  async verifyProceedtoLoginTextPresent() {
    I.waitForElement(this.fields.ProceedtoLogin, 20);
    I.click(this.fields.ProceedtoLogin);
    I.waitForElement('//android.webkit.WebView[@text="Signin"]', 30);
    I.waitForElement(this.fields.signInText, 50);
  },

  async fillLoginFormAndSubmitKenya(loginData) {
    I.click(this.fields.signInButton);
    I.waitForElement("//android.widget.EditText[1]", 30);
    I.fillField("//android.widget.EditText[1]", loginData.usernameKenya);
    I.fillField("//android.widget.EditText[2]", loginData.passwordKenya);
    I.click(this.fields.signInButton);
    I.switchToNative();
    I.waitForElement(this.fields.Synchronize,80);
    I.seeElement(this.fields.Kenya);
    
  },

  async fillLoginFormAndSubmitUganda(loginData) {
    I.fillField(this.fields.usernameTextbox, loginData.usernameUganda);
    I.fillField(this.fields.passwordTextbox, loginData.passwordUganda);
    I.click(this.fields.signInButton);
    I.waitForElement(this.fields.Synchronize,10);
    I.seeElement(this.fields.Uganda);
    
  },

  async fillLoginFormAndSubmit1(loginData) {
    I.fillField(this.fields.usernameTextbox, loginData.username);
    I.fillField(this.fields.passwordTextbox, loginData.password);
    I.click(this.fields.signInButton);
    I.waitForElement(this.fields.incorrectPassword,10);
    I.seeElement(this.fields.incorrectPassword);
}};
