import type { MembersQuery, MembersQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query MembersQuery {
    members {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export interface CellProps extends MembersQueryVariables {
  // add your own props here
}

export const Success = ({
  members,
}: CellSuccessProps<MembersQuery, CellProps>) => {
  return (
    <ul>
      {members.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
