import React from 'react'
import UserStats from './index'

describe('<UserStats />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<UserStats />)
  })
})