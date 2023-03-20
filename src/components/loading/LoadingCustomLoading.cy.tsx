import React from 'react'
import CustomLoading from './Loading'

describe('<CustomLoading />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CustomLoading />)
  })
})