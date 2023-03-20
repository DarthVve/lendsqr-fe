import React from 'react'
import Users from './index'

describe('<Users />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Users />)
  })
})