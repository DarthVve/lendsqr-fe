/// <reference types="cypress" />
import FilterModal from './index'

describe('<FilterModal />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    (cy as any).mount(<FilterModal />)
  })
})