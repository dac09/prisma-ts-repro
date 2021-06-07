import { Link, routes } from '@redwoodjs/router'
// import PetCell from 'src/components/PetsCell'
// import MembersCell from 'src/components/MembersCell'

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
      {/* <PetCell /> */}
      {/* <MembersCell /> */}
    </>
  )
}

export default LandingPage
