import React, {useState} from 'react';
import {View, Button, FlatList, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const RecordScreen = ({navigation}) => {
  const [videoUri, setVideoUri] = useState(null);
  const [videoList, setVideoList] = useState([]);

  const navigateToPlayer = videoUri => {
    navigation.navigate('player', {path: videoUri});
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      mediaType: 'video',
    })
      .then(response => {
        console.log('response', response);
        if (response.path) {
          setVideoUri(response.path);
          setVideoList(prevList => [...prevList, response.path]);
        }
      })
      .catch(error => {
        console.log('Video recording error:', error);
      });
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        navigateToPlayer(item);
      }}>
      <View
        style={{
          height: 50,
          marginVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          title={item}
          onPress={() => {
            console.log('item', item);
            navigateToPlayer(item);
          }}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Button title="Open Camera" onPress={openCamera} />
        <FlatList
          data={videoList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default RecordScreen;
