import React from 'react'
import UserDetailsModal from './index'

describe('<UserDetailsModal />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<UserDetailsModal />)
  })
})