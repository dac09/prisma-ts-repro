import { Link, routes } from '@redwoodjs/router'
// @ts-expect-error: Cell Types not handled yet
import PetCell from 'src/components/PetCell/PetCell'

const LandingPage = () => {
  return (
    <>
      <h1>LandingPage</h1>
      <p>
        Find me in <code>./web/src/pages/LandingPage/LandingPage.js</code>
      </p>
      <p>
        My default route is named <code>landing</code>, link to me with `
        <Link to={routes.landing()}>Landing</Link>`
      </p>
      <PetCell />
    </>
  )
}

export default LandingPage
