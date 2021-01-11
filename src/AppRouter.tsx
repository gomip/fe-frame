import * as React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Test} from './Test/Test'
/**
 * 2021.01.11 | gomip | created
 * @constructor
 */

export const AppRouter: React.FC = () => {
  // State -------------------------------------------------------------------------------------------------------------

  // Function ----------------------------------------------------------------------------------------------------------

  // Dom ---------------------------------------------------------------------------------------------------------------
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Test /></Route>
      </Switch>
    </Router>
  )
}
