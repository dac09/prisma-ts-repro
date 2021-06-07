import { render } from '@redwoodjs/testing'

import ZeissPage from './ZeissPage'

describe('ZeissPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ZeissPage />)
    }).not.toThrow()
  })
})
