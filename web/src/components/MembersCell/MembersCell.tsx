import type { MembersQuery } from 'types/gql-types'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query MembersQuery {
    members {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Member Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = (props: CellSuccessProps<MembersQuery>) => {
  const { members } = props
  console.log(props.client.cache)
  return (
    <ul>
      {members.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
