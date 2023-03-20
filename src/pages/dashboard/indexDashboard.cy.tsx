import Dashboard from './index'

describe('<Dashboard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    (cy as any).mount(<Dashboard />)
  })
})