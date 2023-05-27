import { Selector, t } from 'testcafe'

class LoginPage {
  emailInput = Selector('#email')
  passwordInput = Selector('#password')
  submitButton = Selector('[data-testid= "submit-button"]')

  async loginUser(emailAdress: string, password: string) {
    await t
      .typeText(this.emailInput, emailAdress, { replace: true })
      .typeText(this.passwordInput, password, { replace: true })
      .click(this.submitButton)
  }
}

export default new LoginPage()
