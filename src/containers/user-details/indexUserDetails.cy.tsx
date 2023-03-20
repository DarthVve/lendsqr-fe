import React from 'react'
import UserDetails from './index'

describe('<UserDetails />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<UserDetails />)
  })
})