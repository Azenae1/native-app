import { Image, StyleSheet, Platform, TextInput, Button, View, Text, Dimensions } from 'react-native';

import { Input } from '@/shared/Input/Input';




const width = Dimensions.get('window').width;
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textStyle}>Login</Text>
        <Image 
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        />
        <View style={styles.form}>
          <Input placeholder='Email'/>
          <Input placeholder='Password'/>
      <Button title='login'/>
      </View>
      <Text style={styles.textStyle}>Forgot password?</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 55,
    backgroundColor: '#16171D',
  },
  content: {
    gap: 50,
    alignItems: 'center',
    
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 20
  },
  form: {
    alignSelf: 'stretch',
    gap:16,
    
  },
  input: {
    
    borderRadius: 10,
  },
  
  textStyle: {
    color: 'white',
    fontSize: 24
  }
});
