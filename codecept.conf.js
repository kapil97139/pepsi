const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
require('dotenv').config();

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: 'android',
      "appium:device": "emulator-5554",
      appiumV2: true,
      desiredCapabilities: {
        "appium:app": "/home/kapil/04June/app-uat-release-2.1.7.apk",
        "appium:appPackage": "com.cquestcapital.disco.uat",
        "appium:appActivity": "com.cquestcapital.disco.MainActivity",
        "appium:autoGrantPermissions": true,
        "appium:automationName": "uiautomator2",
        "appium:fullReset":false,
        "appium:noReset": true,
      }
    }
  },
  

  include: {
    I: './steps_file.js',
   
  },
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    autoDelay: {
      enabled: true,
      delayAfter: 5000
    }
  }
};
