import { View, Text } from "@tarojs/components"
import Taro,{useDidShow} from '@tarojs/taro'
import { useEffect ,useContext} from "react"
import './index.less'
import { TabIndexContext } from '../../store/tabIndex'

export default () => {

    const {tabIndex, dispatch} = useContext(TabIndexContext)

    useDidShow(() => {
       dispatch({
           type:'change',
           payload: 'home'
       })
    })


    return <View className="home-container">
        <Text className="box">Home</Text>
        <Text className="box">Home</Text>
        <Text className="box">Home</Text>
        <Text className="box">Home</Text>
        <Text className="box">Home</Text>
        <Text className="box">Home</Text>
        <Text className="box">Home</Text>
        <Text className="box">Home</Text>
    </View>
}