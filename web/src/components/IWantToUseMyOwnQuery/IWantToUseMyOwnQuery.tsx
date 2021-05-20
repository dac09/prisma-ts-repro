import { useMutation, useQuery } from '@redwoodjs/web'
import { PetQuery } from 'types/gql-types'

const QUERY = gql`
  query PetQuery {
    pets {
      id
      name
    }
  }
`

const IWantToUseMyOwnQuery = () => {
  const out = useQuery<PetQuery>(QUERY)

  // This is not actually a mutation
  out.const[(fetchResult, mutationResult)] = useMutation<PetQuery>(QUERY)

  const asyncStuff = async () => {
    const result = await fetchResult()
  }

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
