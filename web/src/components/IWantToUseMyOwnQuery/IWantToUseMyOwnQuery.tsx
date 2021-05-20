import { useMutation, useQuery } from '@redwoodjs/web'
import type { PetQueryTwo } from 'types/gql-types'

const QUERY = gql`
  query PetQueryTwo {
    pets {
      id
      name
    }
  }
`

const IWantToUseMyOwnQuery = () => {
  const out = useQuery<PetQueryTwo>(QUERY)

  return (
    <div>
      <h2>{'IWantToUseMyOwnQuery'}</h2>
      <p>
        {
          'Find me in ./web/src/components/IWantToUseMyOwnQuery/IWantToUseMyOwnQuery.tsx'
        }
      </p>
    </div>
  )
}

export default IWantToUseMyOwnQuery
