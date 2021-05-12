import { View, Text } from "@tarojs/components"
import { useDidShow } from '@tarojs/taro'
import {TabIndexContext} from '../../store/tabIndex'
import { useContext } from "react";

export default () => {
    const {tabIndex, dispatch} = useContext(TabIndexContext)

    useDidShow(() => {
       dispatch({
           type:'change',
           payload: 'message'
       })
    })

    return <View>
        <Text>Message</Text>
    </View>
}