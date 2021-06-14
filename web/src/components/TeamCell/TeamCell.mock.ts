import { FindTeamQuery } from 'types/graphql'

// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */): FindTeamQuery => ({
  team: {
    id: 'ddd',
  },
})
