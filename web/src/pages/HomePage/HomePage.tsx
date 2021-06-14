import { Link, routes } from '@redwoodjs/router'
import TeamsLayout from 'src/layouts/TeamsLayout'

const HomePage = () => {
  return (
    <TeamsLayout>
      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </TeamsLayout>
  )
}

export default HomePage
