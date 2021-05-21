export const schema = gql`
  type Member {
    id: String!
    role: String!
    team: Team!
    teamId: String!
    user: User!
    userId: Int!
  }

  type Query {
    members: [Member!]!
    member(id: String): Member
  }

  input CreateMemberInput {
    role: String!
    teamId: String!
    userId: Int!
  }

  input UpdateMemberInput {
    role: String
    teamId: String
    userId: Int
  }
`
