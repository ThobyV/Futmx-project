import { h } from 'hyperapp'

import { Link, Route, location, Switch } from "@hyperapp/router"

export const Home =  () => (state, actions) =>

<div>

 <h1><i> welcome,  {state.name} </i></h1>

<form>
<textarea name="message" rows="10" cols="30" class="form-field__textarea">Please type your message eg (FUTMinna)</textarea>
</form>
        <Link to="/message"> <div class="btn">submit</div> </Link>

</div>