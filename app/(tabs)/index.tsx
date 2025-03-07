import { Image, StyleSheet, Platform, TextInput, Button, View, Text, Dimensions } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';




const width = Dimensions.get('window').width;
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Login</Text>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder='email'/>
          <TextInput style={styles.input} placeholder='password'/>
      <Button title='login'/>
      </View>
      <Text>Forgot password?</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 55
  },
  content: {
    gap: 50,
    alignItems: 'center',
  },
  form: {
    alignSelf: 'stretch',
gap:16,
  },
  input: {
    backgroundColor: '#2E2D3D',
    
  },
  textStyle: {
    color: 'blue',
    fontSize: 32,
    borderWidth: 1,
    borderColor: 'red',
  }
});
