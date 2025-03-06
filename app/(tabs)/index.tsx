import { Image, StyleSheet, Platform, TextInput, Button, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';





export default function HomeScreen() {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.top}>
        <ThemedText style={styles.textStyle}>Welcome!</ThemedText>
      <Button title='Click me'/>
      </View>
      <View style={{backgroundColor: 'aquamarine', alignItems: 'flex-end', height: 500, alignContent: 'center', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        <View style={{backgroundColor: 'tomato', height: 100, width: 200}}></View>
        <View style={{backgroundColor: 'purple', height: 100, width: 200}}></View>
        <View style={{backgroundColor: 'green', height: 100, width: 200}}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 50,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  top: {
    flexDirection: 'row',
   alignSelf: 'center',
  },
  textStyle: {
    color: 'blue',
    fontSize: 32,
    borderWidth: 1,
    borderColor: 'red',
  }
});
