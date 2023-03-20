import React from 'react'
import UserInfo from './index'

describe('<UserInfo />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<UserInfo />)
  })
})