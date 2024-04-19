import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import IntroScreen from './src/IntroScreen';
import { useState } from 'react';
import MainScreen from './src/MainScreen';
import CustomButton from './src/CustomButton';

export default function App() {
  const [isLoad, setLoad] = useState(false);
  setTimeout(() => {
    setLoad(true)
  }, 2000);
  return (
    <View style={styles.container}>
      {isLoad ? <MainScreen/> : <IntroScreen/>}
      {/* <IntroScreen/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
