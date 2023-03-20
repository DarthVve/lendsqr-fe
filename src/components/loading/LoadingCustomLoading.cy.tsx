/// <reference types="cypress" />
import CustomLoading from './Loading'

describe('<CustomLoading />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    (cy as any).mount(<CustomLoading />)
  })
})