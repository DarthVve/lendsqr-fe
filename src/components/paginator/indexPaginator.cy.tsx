import React from 'react'
import Paginator from './index'

describe('<Paginator />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Paginator />)
  })
})