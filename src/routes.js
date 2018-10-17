import { h } from 'hyperapp'
import { Link, Route,location, Switch } from "@hyperapp/router"


import { App } from './views/containers/App'
import { Home } from './components/Home'
import { Message } from './components/Message'

export const view = ( state, actions ) => 

<div>

<Switch>    
    <Route path="thobyv.github.io/Futmx-project/" render={ App } />   
    <Route path="thobyv.github.io/Futmx-project/home" render={ Home } /> 
    <Route path="thobyv.github.io/Futmx-project/message" render={ Message } />        
  </Switch>

</div>
