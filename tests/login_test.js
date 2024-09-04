const loginPage = require("../pages/loginPage");
const loginData = require("../data/loginData.json");

Feature("Login");

Scenario("Verify that user is logged in successfully with Kenya Enumerator", async ({ I }) => {
  await loginPage.verifyProceedtoLoginTextPresent();
  const login = loginData.validData;
  await loginPage.fillLoginFormAndSubmitKenya(login);
});

Scenario("Verify that user is logged in successfully with Uganda Enumerator", async ({ I }) => {
  await loginPage.verifyProceedtoLoginTextPresent();
  const login = loginData.validData;
  await loginPage.fillLoginFormAndSubmitUganda(login);
});


Scenario("Verify that user is not able to log in with invalid data", async ({ I }) => {
  await loginPage.verifyProceedtoLoginTextPresent();
  const login = loginData.invalidData;
  await loginPage.fillLoginFormAndSubmit1(login); 
});
