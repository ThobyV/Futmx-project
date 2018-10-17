import { location } from "@hyperapp/router"


export const actions = {
location: location.actions,
setName: val => state => ({ name: state.name = val }),
}
 