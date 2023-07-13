import {StyleSheet} from 'react-native';

export const StyleComponents = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  buttonText: {
    color: 'red',
    fontSize: 18,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  controls: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  recordButton: {
    padding: 15,
    backgroundColor: '#f44336',
    borderRadius: 50,
    marginBottom: 20,
  },
  recordButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  videoContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  video: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  videoControls: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 10,
  },
  playButton: {
    padding: 15,
  },
  playButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
