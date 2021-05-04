export const schema = gql`
  type Team {
    id: String!
    name: String!
    Member: [Member]!
  }

  type Query {
    teams: [Team!]!
    team(id: String!): Team
  }

  input CreateTeamInput {
    name: String!
  }

  input UpdateTeamInput {
    name: String
  }

  type Mutation {
    createTeam(input: CreateTeamInput!): Team!
    updateTeam(id: String!, input: UpdateTeamInput!): Team!
    deleteTeam(id: String!): Team!
  }
`
