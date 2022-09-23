import { useContext } from "react";
import { useDidShow } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { TabIndexContext } from "../../store/tabIndex";

export default () => {
  const { dispatch } = useContext(TabIndexContext);

  useDidShow(() => {
    dispatch({
      type: "change",
      payload: "mine",
    });
  });

  return (
    <View>
      <Text>Mine</Text>
    </View>
  );
};
