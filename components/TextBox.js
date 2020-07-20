import React from 'react';
import {View, Text} from 'react-native';

export const TextBox = (props) => {
  return (
    <View>
      <Text style={{color:props.color, fontSize:props.size}}>{props.text}</Text>
    </View>
  )

}
