import { Role, Selector } from 'testcafe'
import LoginPage from '../pages/LoginPage'

const loginUrl = 'http://localhost:3000/login'

const registeredUser = Role(loginUrl, async (t) => {
  await LoginPage.loginUser('john.doe@email.com', 'Azerty1234')
})

export default registeredUser
