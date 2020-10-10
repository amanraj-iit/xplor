import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import theme from '../theme.json';

export default function SatelliteComponent(props) {
  return (
    <View
      style={{
        height: 100,
        width: Dimensions.get('screen').width * 0.8,
        borderRadius: 4,
        backgroundColor: theme.white,
        marginVertical: 20,
      }}>
      <View
        style={{
          height: 20,
          width: 20,
          borderRadius: 10,
          backgroundColor: props.statusColor,
          position: 'absolute',
          bottom: -10,
          right: -10,
        }}></View>
    </View>
  );
}
