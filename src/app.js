import { useReducer } from 'react'
import { TabIndexContext, reducer, initState } from './store/tabIndex'
import './app.less'

export default function (props) {
  const [state, dispatch] = useReducer(reducer, initState)


  return <TabIndexContext.Provider value={{ tabIndex: state, dispatch }}>
    {props.children}
  </TabIndexContext.Provider>
}
