import { Image, StyleSheet, Platform, TextInput, Button, View, Text } from 'react-native';

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
      <View style={{backgroundColor: 'aquamarine', alignItems: 'flex-end', height: 500, flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{backgroundColor: 'tomato', flexBasis: 100, flexGrow: 1, height: 100}}><Text>Text</Text></View>
        <View style={{backgroundColor: 'purple', flexBasis: 100, height: 100}}><Text>Text</Text></View>
        <View style={{backgroundColor: 'green', flexBasis: 100, height: 100}}><Text>Text</Text></View>
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
