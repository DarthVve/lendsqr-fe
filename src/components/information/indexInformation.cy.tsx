import React from 'react'
import Information from './index'

describe('<Information />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Information />)
  })
})