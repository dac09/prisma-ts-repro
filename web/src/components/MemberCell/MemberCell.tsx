import type { MemberQuery } from 'types/gql-types'
export const QUERY = gql`
  query MemberQuery {
    members {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ members }: MemberQuery) => {
  return <div>{JSON.stringify(members)}</div>
}
