const root =
  process.env.REACT_APP_DB === 'dbtest'
    ? 'http://front:3000'
    : 'http://localhost:3000'

export const urls = {
  login: `${root}/login`,
}
