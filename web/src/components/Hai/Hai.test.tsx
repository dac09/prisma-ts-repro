import { render } from '@redwoodjs/testing'

import Hai from './Hai'

describe('Hai', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Hai />)
    }).not.toThrow()
  })
})
