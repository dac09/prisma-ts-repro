import { AuthProvider } from '@redwoodjs/auth'
import { createClient } from '@supabase/supabase-js'
import { FatalErrorBoundary } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'
// import { RedwoodReactQueryProvider } from './components/ReactQueryProvider'

const supabaseClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={supabaseClient} type="supabase">
      <RedwoodApolloProvider>
        <Routes />
      </RedwoodApolloProvider>

      {/* <RedwoodReactQueryProvider>
        <Routes />
      </RedwoodReactQueryProvider> */}
    </AuthProvider>
  </FatalErrorBoundary>
)

export default App
