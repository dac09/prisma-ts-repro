// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/teams/new" page={NewTeamPage} name="newTeam" />
      <Route path="/teams/{id}/edit" page={EditTeamPage} name="editTeam" />
      <Route path="/teams/{id}" page={TeamPage} name="team" />
      <Set>
        <Route path="/teams" page={TeamsPage} name="teams" />
        <Route path="/" page={LandingPage} name="landing" />
        <Route path="/home" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
