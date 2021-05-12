import { View ,Text} from "@tarojs/components"
import Taro,{useDidShow} from '@tarojs/taro'
import { useEffect ,useContext} from "react"
import { TabIndexContext } from '../../store/tabIndex'

export default () => {

    const {tabIndex, dispatch} = useContext(TabIndexContext)

    useDidShow(() => {
       dispatch({
           type:'change',
           payload: 'mine'
       })
    })

    return <View>
        <Text>Mine</Text>
    </View>
}