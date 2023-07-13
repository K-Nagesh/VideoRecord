import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Video from 'react-native-video';

const VideoPlayer = ({route}) => {
  const {path = ''} = route?.params ?? {};
  return (
    <View style={{flex: 1}}>
      <Video
        source={{uri: path}}
        style={{flex: 1, padding: 20}}
        controls={true}
      />
    </View>
  );
};
export default VideoPlayer;
