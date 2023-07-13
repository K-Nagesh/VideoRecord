import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {StyleComponents} from './styles';

let styles = StyleComponents;

const HomeScreen = ({navigation}) => {
  const navigateToRecordScreen = () => {
    navigation.navigate('Record');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToRecordScreen} style={styles.button}>
        <Text style={styles.buttonText}>Start Recording</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
