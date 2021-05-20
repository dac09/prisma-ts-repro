import { render } from '@redwoodjs/testing'

import IWantToUseMyOwnQuery from './IWantToUseMyOwnQuery'

describe('IWantToUseMyOwnQuery', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IWantToUseMyOwnQuery />)
    }).not.toThrow()
  })
})
