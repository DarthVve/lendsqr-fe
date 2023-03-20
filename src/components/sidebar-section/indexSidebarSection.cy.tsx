import React from 'react'
import SidebarSection from './index'

describe('<SidebarSection />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SidebarSection />)
  })
})