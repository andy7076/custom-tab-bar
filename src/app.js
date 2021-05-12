import { Component, useReducer } from 'react'
import './app.less'
import {TabIndexContext,reducer,initState} from './store/tabIndex'

export default function (props){
  const [state, dispatch] = useReducer(reducer, initState)
  

return <TabIndexContext.Provider value={{tabIndex: state, dispatch}}>
  {props.children}
</TabIndexContext.Provider>
}
