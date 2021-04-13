import { pets } from './pets'

describe('pets', () => {
  scenario('returns all pets', async (scenario) => {
    const result = await pets()

    expect(result.length).toEqual(Object.keys(scenario.pet).length)
  })
})
