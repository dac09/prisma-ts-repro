import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PetCreateArgs>({
  pet: {
    one: { name: 'String', species: 'String' },
    two: { name: 'String', species: 'String' },
    something: { name: 'danny', species: 'hooman', error: 'yes' },
  },
})

export type StandardScenario = typeof standard
