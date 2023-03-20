import React from 'react'
import Sidebar from './index'

describe('<Sidebar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Sidebar />)
  })
})