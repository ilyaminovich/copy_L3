import { HomePage } from '../pageObjects/homePage';
import { DashboardPage } from '../pageObjects/dashboardPage';
import { Data } from '../fixtures/data';

describe('Verify dashboard widgets can be resized', () => {
  it('Log in', () => {
    HomePage.logIn('superadmin', 'erebus');
  });
  it('Open Hometask project', () => {
    DashboardPage.openProject();
  });
  it('Open cypress dashboard', () => {
    DashboardPage.openDashboard();
  });
  it('Check widget size', () => {
    DashboardPage.checkWidgetBaseSize();
    DashboardPage.checkWidgetContentBaseSize();
  });
  it('Check first widget position', () => {
    DashboardPage.checkWidgetPosition(Data.first, Data.firstWidgetBasicCoordinates);
  });
  it('Check second widget position', () => {
    DashboardPage.checkWidgetPosition(Data.second, Data.secondWidgetBasicCoordinates);
  });
  it('Change first widget size', () => {
    DashboardPage.moveWidgetChangeSize();
  });
  it('Check first widget size after change', () => {
    DashboardPage.checkWidgetChangedSize();
  });
  it('Check first widget content size after change', () => {
    DashboardPage.checkWidgetContentChangedSize();
  });
  it('Check first widget positions were changed', () => {
    DashboardPage.checkWidgetPosition(Data.first, Data.firstWidgetChangedCoordinates);
  });
  it('Check second widget positions were changed', () => {
    DashboardPage.checkWidgetPosition(Data.second, Data.secondWidgetChangedCoordinates);
  });
  it('Move first widget to previous size', () => {
    DashboardPage.moveWidgetReturnSize();
  });
  it('Check first widget size changed to previous value', () => {
    DashboardPage.checkWidgetBaseSize();
  });
  it('Check first widget position is changed to previous value', () => {
    DashboardPage.checkWidgetPosition(Data.first, Data.firstWidgetBasicCoordinates);
  });
  it('Check second widget position is changed to previous value', () => {
    DashboardPage.checkWidgetPosition(Data.second, Data.secondWidgetBasicCoordinates);
  });
});
