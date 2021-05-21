import type { PetsQuery } from 'types/gql-types'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query PetsQuery {
    pets {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = (result: CellSuccessProps<PetsQuery>) => {
  const { pets } = result

  return (
    <>
      <ul>
        {pets.map((item) => {
          return <li key={item.id}>{JSON.stringify(item)}</li>
        })}
      </ul>
      <button onClick={() => result.refetch()}>
        Click me to refetch pets!
      </button>
    </>
  )
}
