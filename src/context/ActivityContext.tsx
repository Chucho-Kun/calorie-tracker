import { createContext, useMemo, useReducer, type Dispatch, type ReactNode } from "react";
import { activityReducer, initialState, type ActivityActions, type ActivityState } from "../reducers/activity-reducer";
import { categories } from "../data/categories";
import type { Activity } from "../types";

type ActivityProviderProps = {
    children: ReactNode
}

type ActivityContextProps = {
    state: ActivityState
    dispatch: Dispatch<ActivityActions>
    caloriesConsumed: number
    caloriesBurned: number
    netCalories: number
    categoyName: (category: Activity['category']) => string[]
    isEmptyActivities: boolean
}

export const ActivityContext =  createContext<ActivityContextProps>({} as ActivityContextProps)

export const ActivityProvider = ( { children } : ActivityProviderProps ) => {

    const [ state , dispatch ] = useReducer( activityReducer , initialState )
    const { activities } = state

     //Contadores
    const caloriesConsumed = useMemo( () => activities.reduce( (total,activity) => activity.category === 1 ? total + activity.calories : total , 0 ) , [activities] )
    const caloriesBurned = useMemo( () => activities.reduce( (total,activity) => activity.category === 2 ? total + activity.calories : total , 0 ) , [activities] )
    const netCalories = useMemo( () => caloriesConsumed - caloriesBurned , [ activities ] )

    const categoyName = useMemo( () => ( category : Activity['category'] ) => categories.map( cat => cat.id === category ? cat.name : '' ) , [ activities] )

    const isEmptyActivities = useMemo( () => activities.length === 0 , [ activities ] )

    return(
        <ActivityContext.Provider value={{
            state , dispatch , caloriesConsumed , caloriesBurned , netCalories , categoyName , isEmptyActivities
        }}>
            { children }
        </ActivityContext.Provider>
    )
} 