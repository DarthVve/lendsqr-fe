import React from 'react'
import Status from './index'

describe('<Status />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Status />)
  })
})