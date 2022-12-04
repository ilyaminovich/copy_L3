// const { BrowserNavigation } = require('../../core/src/helpers/browserNavigation');
// const { initEnv } = require('../../core/configs/envs.conf');
// const { LogInPage } = require('../../business/pageObjects/loginPage');
// const { LaunchPage } = require('../../business/pageObjects/launchPage');
// const { TestRunStorage } = require('../../core/src/dataStorage/testRunStorage');
//
// describe('verify that "Demo Api Tests #1" contains expected data', () => {
//   it('verify that "Demo Api Tests #1" contains expected data', async () => {
//     await BrowserNavigation.url(initEnv.rp_ui.baseUrl);
//     await LogInPage.logIn(initEnv.rp_ui.user, initEnv.rp_ui.password);
//     await browser.url('http://localhost:8080/ui/#hometask_project/launches/all/1');
//     const currentTestRunData = await LaunchPage.checkDataForCurrentTestRun();
//     const dataFromStorage = TestRunStorage.demoApiTests1;
//     await expect(dataFromStorage).toEqual(currentTestRunData);
//     await LogInPage.logOut();
//   });
// });
//
// describe('verify that "Demo Api Tests #2" contains expected data', () => {
//   it('verify that "Demo Api Tests #2" contains expected data', async () => {
//     await BrowserNavigation.url(initEnv.rp_ui.baseUrl);
//     await LogInPage.logIn(initEnv.rp_ui.user, initEnv.rp_ui.password);
//     await browser.url('http://localhost:8080/ui/#hometask_project/launches/all/2');
//     const currentTestRunData = await LaunchPage.checkDataForCurrentTestRun();
//     const dataFromStorage = TestRunStorage.demoApiTests2;
//     await expect(dataFromStorage).toEqual(currentTestRunData);
//     await LogInPage.logOut();
//   });
// });
//
// describe('verify that "Demo Api Tests #3" contains expected data', () => {
//   it('verify that "Demo Api Tests #3" contains expected data', async () => {
//     await BrowserNavigation.url(initEnv.rp_ui.baseUrl);
//     await LogInPage.logIn(initEnv.rp_ui.user, initEnv.rp_ui.password);
//     await browser.url('http://localhost:8080/ui/#hometask_project/launches/all/3');
//     const currentTestRunData = await LaunchPage.checkDataForCurrentTestRun();
//     const dataFromStorage = TestRunStorage.demoApiTests3;
//     await expect(dataFromStorage).toEqual(currentTestRunData);
//     await LogInPage.logOut();
//   });
// });
//
// describe('verify that "Demo Api Tests #4" contains expected data', () => {
//   it('verify that "Demo Api Tests #4" contains expected data', async () => {
//     await BrowserNavigation.url(initEnv.rp_ui.baseUrl);
//     await LogInPage.logIn(initEnv.rp_ui.user, initEnv.rp_ui.password);
//     await browser.url('http://localhost:8080/ui/#hometask_project/launches/all/4');
//     const currentTestRunData = await LaunchPage.checkDataForCurrentTestRun();
//     const dataFromStorage = TestRunStorage.demoApiTests4;
//     await expect(dataFromStorage).toEqual(currentTestRunData);
//     await LogInPage.logOut();
//   });
// });
//
// describe('verify that "Demo Api Tests #5" contains expected data', () => {
//   it('verify that "Demo Api Tests #5" contains expected data', async () => {
//     await BrowserNavigation.url(initEnv.rp_ui.baseUrl);
//     await LogInPage.logIn(initEnv.rp_ui.user, initEnv.rp_ui.password);
//     await browser.url('http://localhost:8080/ui/#hometask_project/launches/all/5');
//     const currentTestRunData = await LaunchPage.checkDataForCurrentTestRun();
//     const dataFromStorage = TestRunStorage.demoApiTests5;
//     await expect(dataFromStorage).toEqual(currentTestRunData);
//     await LogInPage.logOut();
//   });
// });
//
// describe('verify that "Demo Api Tests #6" contains expected data', () => {
//   it('verify that "Demo Api Tests #6" contains expected data', async () => {
//     await BrowserNavigation.url(initEnv.rp_ui.baseUrl);
//     await LogInPage.logIn(initEnv.rp_ui.user, initEnv.rp_ui.password);
//     await browser.url('http://localhost:8080/ui/#hometask_project/launches/all/6');
//     const currentTestRunData = await LaunchPage.checkDataForCurrentTestRun();
//     const dataFromStorage = TestRunStorage.demoApiTests6;
//     await expect(dataFromStorage).toEqual(currentTestRunData);
//     await LogInPage.logOut();
//   });
// });
//
// describe('verify that "Demo Api Tests #7" contains expected data', () => {
//   it('verify that "Demo Api Tests #7" contains expected data', async () => {
//     await BrowserNavigation.url(initEnv.rp_ui.baseUrl);
//     await LogInPage.logIn(initEnv.rp_ui.user, initEnv.rp_ui.password);
//     await browser.url('http://localhost:8080/ui/#hometask_project/launches/all/7');
//     const currentTestRunData = await LaunchPage.checkDataForCurrentTestRun();
//     const dataFromStorage = TestRunStorage.demoApiTests7;
//     await expect(dataFromStorage).toEqual(currentTestRunData);
//     await LogInPage.logOut();
//   });
// });
//
// describe('verify that "Demo Api Tests #8" contains expected data', () => {
//   it('verify that "Demo Api Tests #8" contains expected data', async () => {
//     await BrowserNavigation.url(initEnv.rp_ui.baseUrl);
//     await LogInPage.logIn(initEnv.rp_ui.user, initEnv.rp_ui.password);
//     await browser.url('http://localhost:8080/ui/#hometask_project/launches/all/8');
//     const currentTestRunData = await LaunchPage.checkDataForCurrentTestRun();
//     const dataFromStorage = TestRunStorage.demoApiTests8;
//     await expect(dataFromStorage).toEqual(currentTestRunData);
//     await LogInPage.logOut();
//   });
// });
//
// describe('verify that "Demo Api Tests #9" contains expected data', () => {
//   it('verify that "Demo Api Tests #9" contains expected data', async () => {
//     await BrowserNavigation.url(initEnv.rp_ui.baseUrl);
//     await LogInPage.logIn(initEnv.rp_ui.user, initEnv.rp_ui.password);
//     await browser.url('http://localhost:8080/ui/#hometask_project/launches/all/9');
//     const currentTestRunData = await LaunchPage.checkDataForCurrentTestRun();
//     const dataFromStorage = TestRunStorage.demoApiTests9;
//     await expect(dataFromStorage).toEqual(currentTestRunData);
//     await LogInPage.logOut();
//   });
// });
//
// describe('verify that "Demo Api Tests #10" contains expected data', () => {
//   it('verify that "Demo Api Tests #10" contains expected data', async () => {
//     await BrowserNavigation.url(initEnv.rp_ui.baseUrl);
//     await LogInPage.logIn(initEnv.rp_ui.user, initEnv.rp_ui.password);
//     await browser.url('http://localhost:8080/ui/#hometask_project/launches/all/10');
//     const currentTestRunData = await LaunchPage.checkDataForCurrentTestRun();
//     const dataFromStorage = TestRunStorage.demoApiTests10;
//     await expect(dataFromStorage).toEqual(currentTestRunData);
//     await LogInPage.logOut();
//   });
// });
