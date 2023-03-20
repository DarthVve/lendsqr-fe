/// <reference types="cypress" />
import Information from './index'

describe('<Information />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    (cy as any).mount(<Information />)
  })
})