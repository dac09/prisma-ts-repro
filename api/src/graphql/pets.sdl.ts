export const schema = gql`
  type Pet {
    id: Int!
    name: String!
    species: String!
  }

  type Query {
    pets: [Pet!]!
  }

  input CreatePetInput {
    name: String!
    species: String!
  }

  input UpdatePetInput {
    name: String
    species: String
  }
`
