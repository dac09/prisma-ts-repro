import { Link, routes } from '@redwoodjs/router'

const ZeissPage = () => {
  return (
    <>
      <h1>ZeissPage</h1>
      <p>
        Find me in <code>./web/src/pages/ZeissPage/ZeissPage.tsx</code>
      </p>
      <p>
        My default route is named <code>zeiss</code>, link to me with `
        <Link to={routes.zeiss()}>Zeiss</Link>`
      </p>
    </>
  )
}

export default ZeissPage
