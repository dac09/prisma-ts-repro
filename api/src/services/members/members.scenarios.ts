export const standard = defineScenario({
  member: {
    one: {
      role: 'String',
      team: { create: { name: 'String' } },
      user: { create: { email: 'String2955632' } },
    },
    two: {
      role: 'String',
      team: { create: { name: 'String' } },
      user: { create: { email: 'String4683794' } },
    },
  },
})

export const crazyScenario = defineScenario({
  member: {
    danny: {
      role: 'here',
      team: { create: { name: 'TypeScript Squad' } },
      user: { create: { email: 'String2955632' } },
    },
  },
})
