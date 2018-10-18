import { h } from 'hyperapp'

import { Link, Route, location, Switch } from "@hyperapp/router"

export const Auth =  () => (state, actions) => 

<div>

 <h1> Login </h1>

 <br/>

      <input type="text" placeholder="Email or Username" class="input" 
       oninput={e => actions.setName(e.target.value)}  />
 
      <br />

      <input type="password" placeholder="Password" class="input"
     
      />
      <br />

        <Link to="/Futmx-project/home"> <div class="btn">log in</div> </Link>

</div>