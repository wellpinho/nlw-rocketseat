import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './../components/Landing'
import OrphanagesMap from './../components/OrphanagesMaps'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes