import HomeScreen from './app/home';
import RecordScreen from './app/recordScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VideoPlayer from './app/videoPlayer';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Record"
          component={RecordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="player"
          component={VideoPlayer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
