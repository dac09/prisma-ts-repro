import type { FindMemberQuery2 } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindMemberQuery2($id: String!) {
    member: member(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ member }: CellSuccessProps<FindMemberQuery2>) => {
  return <div>{JSON.stringify(member)}</div>
}
