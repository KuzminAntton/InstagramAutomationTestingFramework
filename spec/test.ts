import { expect } from "chai";
import { InstagramLoginPage } from "../pages/instahram_login_page"
import {InstagramMainPage} from "../pages/instagram_main_page"

const BASE_URL: string = `https://instagram.com`;
const instagramLoginPage = new InstagramLoginPage();
const instagramMainPage = new InstagramMainPage();

describe("Instagram Tests", () => {
  before(() => {
    browser.url(BASE_URL);
  });

  it("Verify user can login", () => {
    login();
    closeAlert();
    expect(browser.getUrl).to.include(BASE_URL);
  });

  function login(): void {
    instagramLoginPage.userNameFieldXpath.setValue('kuzminnton')
    instagramLoginPage.passwordFieldXpath.setValue('AntonAnton1488')
    instagramLoginPage.submitButtonXpath.click();
  }

  function closeAlert(): void {
    instagramMainPage.turnOnNatificationsAlert.click();
  }
});