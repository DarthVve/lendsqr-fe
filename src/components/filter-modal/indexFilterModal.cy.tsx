import React from 'react'
import FilterModal from './index'

describe('<FilterModal />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FilterModal />)
  })
})