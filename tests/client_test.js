const { I } = inject();
const loginPage = require("../pages/loginPage");
const loginData = require("../data/loginData.json");
const clientPage = require("../pages/clientPage");
const clientCreationData = require("../data/clientCreationData");

Feature("Client");

Scenario("Verify that user is able to create a new client", async ({ I }) => {
  await loginPage.verifyProceedtoLoginTextPresent();
  const login = loginData.validData;
  await loginPage.fillLoginFormAndSubmitKenya(login);
  await clientPage.createNewClient();
});
