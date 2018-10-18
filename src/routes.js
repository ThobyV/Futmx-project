import { h } from 'hyperapp'
import { Link, Route,location, Switch } from "@hyperapp/router"


import { App } from './views/containers/App'
import { Home } from './components/Home'
import { Message } from './components/Message'

export const view = ( state, actions ) => 

<div>

<Switch>    
    <Route path="/Futmx-project/" render={ App } />   
    <Route path="/Futmx-project/home" render={ Home } /> 
    <Route path="/Futmx-project/message" render={ Message } />        
  </Switch>

</div>

