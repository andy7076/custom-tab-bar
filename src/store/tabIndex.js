import {createContext} from 'react'

export const initState = 'home'

export const reducer = (_, action) => {
    switch(action.type){
        case 'change':
            return action.payload
        default:
            throw new Error()
    }
}

export const TabIndexContext = createContext(initState)