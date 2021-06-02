import { members } from './members'
import { standard } from './members.scenarios'

interface MembersMock {
  member: {
    id: string
    role: string
  }
}

type StandardScenario = typeof standard

describe('members', () => {
  scenario('returns all members', async (scenario: StandardScenario) => {
    const result = await members()

    expect(result.length).toEqual(Object.keys(scenario.member).length)
    // expect({ ...scenario }).toMatchInlineSnapshot(`
    //   Object {
    //     "member": Object {
    //       "one": Object {
    //         "id": "ckp5qzr4f0000hx1ywun8oovp",
    //         "role": "String",
    //         "teamId": "ckp5qzr4f0001hx1y9t76p19c",
    //         "userId": 36,
    //       },
    //       "two": Object {
    //         "id": "ckp5qzr4q0010hx1ylyl7cc65",
    //         "role": "String",
    //         "teamId": "ckp5qzr4q0011hx1yq4aw52o1",
    //         "userId": 37,
    //       },
    //     },
    //   }
    // `)
  })

  scenario('crazyScenario', 'returns empty', async (scenario: MembersMock) => {
    const result = await members()

    expect(result.length).toEqual(Object.keys(scenario.member).length)
    // expect({ ...scenario }).toMatchInlineSnapshot(`
    //   Object {
    //     "member": Object {
    //       "danny": Object {
    //         "id": "ckp5qzr7k0022hx1yqy0qecmc",
    //         "role": "here",
    //         "teamId": "ckp5qzr7k0023hx1y9dy7dzao",
    //         "userId": 38,
    //       },
    //     },
    //   }
    // `)
  })
})
