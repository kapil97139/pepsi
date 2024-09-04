const { I } = inject();
const clientCreationData = require("../data/clientCreationData");

module.exports = {
  fields: {
    SandwichIcon: "//android.widget.ScrollView/android.view.View[1]",
    ClientMenu: "~Clients",
    Synchronize: "~Synchronize",
    NewClientButton: "~New Client",
    NewClientRegistrationHeaderText: "~New Client Registration",
    FirstNameTextField: '//android.view.View[@content-desc="First name"]/following-sibling::android.widget.EditText[1]',
    LastNameTextField: '//android.view.View[@content-desc="Last name"]/following-sibling::android.widget.EditText[1]',
    TotalFamilySizeTextField: '//android.view.View[@content-desc="Total family size"]/following-sibling::android.widget.EditText[1]',
    TotalChildrenUnder5TextField: '//android.view.View[@content-desc="Total children under 5"]/following-sibling::android.widget.EditText[1]',
    SaveAndContinueButton: "~Save and Continue",
    EmailAddress: '//android.view.View[@content-desc="Email Address"]/following-sibling::android.widget.EditText[1]',
    ClientTypeDropdown: "~clientTypeId, clientTypeId, clientTypeId",
    Individual: "~Individual",
    AdminLocationDropdown1: "~leafLocationAdministrativeId, leafLocationAdministrativeId, leafLocationAdministrativeId",
    HomaBay: "~HOMA BAY",
    AdminLocationDropdown2: '//android.view.View[@content-desc="leafLocationAdministrativeId, leafLocationAdministrativeId, leafLocationAdministrativeId"]/android.widget.Button[2]',
    Suba: "~SUBA",
    AdminLocationDropdown3: '//android.view.View[@content-desc="leafLocationAdministrativeId, leafLocationAdministrativeId, leafLocationAdministrativeId"]/android.widget.Button[3]',
    GwasiNorth: "~GWASSI NORTH",
    locationCustom: '//android.widget.EditText[@resource-id="_locationCustom"]',
    LocationCustom1TextField: '//android.view.View[contains(@content-desc, "_locationCustom")]/android.widget.EditText[1]',
    LocationCustom2TextField: '//android.view.View[contains(@content-desc, "_locationCustom")]/android.widget.EditText[2]',
    GPSLocation: '//android.view.View[@content-desc="gps, gps, gps"]',
    AllowGPS: '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_one_time_button"]',
    Step3HeaderText: "~Does this client have street address?",
    NoButton: "~No",
    FinishButton: "~Finish",
    ClientSavedTextMessage: "~Client saved!",
    ClientSearch: '//android.widget.EditText[@resource-id="client-search"]',
    ClientCount: '//android.view.View[@content-desc="2424 CLIENTS"]',
    dashboard: "~Dashboard",
  },

  async navigateToClientMenu() {
    I.tap(this.fields.SandwichIcon);
    I.waitForElement(this.fields.ClientMenu, 20);
    I.tap(this.fields.ClientMenu);
  },

  async startNewClientRegistration() {
    I.waitForElement(this.fields.Synchronize, 20);
    I.tap(this.fields.NewClientButton);
    I.waitForElement(this.fields.NewClientRegistrationHeaderText, 20);
  },

  async fillClientBasicInfo(randomFirstName) {
    I.tap(this.fields.FirstNameTextField);
    I.fillField(this.fields.FirstNameTextField, randomFirstName);
    I.hideDeviceKeyboard('tapOutside');
    I.waitForElement(this.fields.LastNameTextField, 10);
    I.tap(this.fields.LastNameTextField);
    I.fillField(this.fields.LastNameTextField, clientCreationData.lastName);
    I.hideDeviceKeyboard('tapOutside');
  },

  async fillFamilyDetails() {
    I.swipeUp(this.fields.EmailAddress, 1200, 1000);
    I.waitForElement(this.fields.TotalFamilySizeTextField, 20);
    I.tap(this.fields.TotalFamilySizeTextField);
    I.sendDeviceKeyEvent(11);
    I.hideDeviceKeyboard('tapOutside');
    I.swipeUp(this.fields.EmailAddress, 1200, 1000);
    I.tap(this.fields.TotalChildrenUnder5TextField);
    I.sendDeviceKeyEvent(9);
    I.hideDeviceKeyboard('tapOutside');
    I.swipeUp(this.fields.EmailAddress, 1200, 1000);
    I.waitForElement(this.fields.SaveAndContinueButton, 10);
    I.tap(this.fields.SaveAndContinueButton);
  },

  async selectClientTypeAndLocation() {
    I.waitForElement(this.fields.ClientTypeDropdown, 10);
    I.tap(this.fields.ClientTypeDropdown);
    I.waitForElement(this.fields.Individual, 5);
    I.tap(this.fields.Individual);

    I.waitForElement(this.fields.AdminLocationDropdown1, 10);
    I.tap(this.fields.AdminLocationDropdown1);
    I.waitForElement(this.fields.HomaBay, 10);
    I.tap(this.fields.HomaBay);

    I.waitForElement(this.fields.AdminLocationDropdown2, 5);
    I.tap(this.fields.AdminLocationDropdown2);
    I.waitForElement(this.fields.Suba, 10);
    I.tap(this.fields.Suba);

    I.waitForElement(this.fields.AdminLocationDropdown3, 5);
    I.tap(this.fields.AdminLocationDropdown3);
    I.waitForElement(this.fields.GwasiNorth, 10);
    I.tap(this.fields.GwasiNorth);
    I.swipeUp(this.fields.AdminLocationDropdown1, 1200, 1000);
    I.tap(this.fields.locationCustom);
    I.fillField(this.fields.locationCustom, clientCreationData.locationCustom);
    I.hideDeviceKeyboard('pressKey', 'Done');
  },

  async setGPSLocation() {
    I.waitForElement(this.fields.GPSLocation, 10);
    I.tap(this.fields.GPSLocation);
    I.waitForElement(this.fields.AllowGPS, 10);
    I.tap(this.fields.AllowGPS);
    I.wait(30);
    I.swipeUp(this.fields.GPSLocation, 500);
    I.waitForElement(this.fields.SaveAndContinueButton, 10);
    I.tap(this.fields.SaveAndContinueButton);
  },

  async finishClientRegistration() {
    I.waitForElement(this.fields.Step3HeaderText, 10);
    I.tap(this.fields.NoButton);
    I.waitForElement(this.fields.FinishButton, 10);
    I.tap(this.fields.FinishButton);
    I.waitForElement(this.fields.ClientSavedTextMessage, 10);
    I.seeElement(this.fields.ClientSavedTextMessage);
  },

  async searchClient(randomFirstName) {
    I.waitForElement(this.fields.dashboard, 15);
    I.tap(this.fields.SandwichIcon);
    I.waitForElement(this.fields.ClientMenu, 20);
    I.tap(this.fields.ClientMenu);
    I.waitForElement(this.fields.ClientSearch, 10);
    I.tap(this.fields.ClientSearch);
    I.fillField(this.fields.ClientSearch, randomFirstName);
    I.hideDeviceKeyboard('tapOutside');
    I.wait(5);
    I.see(randomFirstName);
  },

  async generateRandomText(prefix) {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'short' });
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    return `${prefix}${day}${month}${hour}:${minute}`;
  },

  async createNewClient() {
    const randomFirstName = await this.generateRandomText('auto');
    await this.navigateToClientMenu();
    await this.startNewClientRegistration(clientCreationData);
    await this.fillClientBasicInfo(randomFirstName);
    await this.fillFamilyDetails(clientCreationData);
    await this.selectClientTypeAndLocation(clientCreationData);
    await this.setGPSLocation();
    await this.finishClientRegistration();
    await this.searchClient(randomFirstName);
  }
};
