import { PetQuery } from 'types/gql-types'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query PetQuery {
    pets {
      id
    }
  }
`

export const Loading = () => {
  return <div>Loading...</div>
}

export const Empty = () => <div>Empty</div>

export const Failure = (props: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {props.error?.message}</div>
)

export const Success = (result: CellSuccessProps<PetQuery>) => {
  return <div>{JSON.stringify(result.pets)}</div>
}
