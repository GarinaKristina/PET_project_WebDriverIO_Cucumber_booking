export const config = {
  runner: 'local',

  specs: ['./features/**/OpenWebSite.feature'],

  // exclude: [''],

  maxInstances: 10,

  capabilities: [
    {
      maxInstances: 5,
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--headless', '--no-sandbox'],
      },
      acceptInsecureCerts: true,
    },
  ],

  logLevel: 'warn',
  timeouts: {
    default: 15000,
  },

  bail: 0,

  baseUrl: 'http://www.booking.com',

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: ['chromedriver'],

  framework: 'cucumber',

  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],
  cucumberOpts: {
    require: ['./src/step-definitions/**/*.js'],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    strict: false,
    tagExpression: '',
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },

  before: async function (test, context) {
    await browser.maximizeWindow();
  },

  afterStep: async function (step, scenario, { error, duration, passed }, context) {
    if (error) {
      await browser.takeScreenshot();
    }
  },
};

