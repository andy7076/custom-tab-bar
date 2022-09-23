import { useContext } from "react";
import { useDidShow } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { TabIndexContext } from "../../store/tabIndex";
import "./index.less";

export default () => {
  const { dispatch } = useContext(TabIndexContext);

  useDidShow(() => {
    dispatch({
      type: "change",
      payload: "home",
    });
  });

  return (
    <View className='home-container'>
      <Text className='box'>Home</Text>
      <Text className='box'>Home</Text>
      <Text className='box'>Home</Text>
      <Text className='box'>Home</Text>
      <Text className='box'>Home</Text>
      <Text className='box'>Home</Text>
      <Text className='box'>Home</Text>
      <Text className='box'>Home</Text>
    </View>
  );
};
