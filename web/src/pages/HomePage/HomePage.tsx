import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  //@MARK: Let's check if current user type comes through from prisma
  const { currentUser } = useAuth()

  // Should have no TS errors here
  console.log(currentUser.name)

  return (
    <>
      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
