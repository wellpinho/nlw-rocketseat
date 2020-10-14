import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './../components/Landing'
import OrphanagesMap from './../components/OrphanagesMaps'
import Orphanage from './../components/Orphanage'
import CreateOrphanage from './../components/CreateOrphanage'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes