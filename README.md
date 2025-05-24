# Calculator in React with useReducer()
The website allows you to calculate the difference in calories between exercises and foods entered in the form.
## Technologies
React + Typescript + TailwindCSS
## Deploy on Netlify
Website hosted on netlify.app server
[calorie-tracker](https://calorie-tracker-react-ts.netlify.app/)
## Developer Notes
### Typescript compilation without errors
```
useEffect()
useState()
useMemo()
useReducer()
```

### activity-reducer.ts archive useReducer()

```
import type { Activity } from "../types"

export type ActivityActions = {

}

type ActivityState = {
    activities : Activity[]
}

export const initialState : ActivityState = {
    activities : []
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {

}
```
