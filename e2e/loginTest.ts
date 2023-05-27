import { ClientFunction } from 'testcafe'
import LoginPage from './pages/LoginPage'
import { urls } from '../src/utils/urls'

fixture.only('Login User').page(urls.login)

test('User can log in and is redirected to dashboard', async (t) => {
  await LoginPage.loginUser('john.doe@email.com', 'Azerty1234')
  const getWindowLocation = ClientFunction(() => window.location)
  const location = await getWindowLocation()
  await t.expect(location.pathname).eql('/dashboard')
})
