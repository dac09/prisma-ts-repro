import type { FindTeamQuery, FindTeamQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindTeamQuery($id: String!) {
    team: team(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export interface CellProps extends FindTeamQueryVariables {
  // add your own props here
}

export const Success = ({
  team,
}: CellSuccessProps<FindTeamQuery, CellProps>) => {
  return <div>{JSON.stringify(team)}</div>
}
