import { Image, StyleSheet, Platform, TextInput, View, Text, Dimensions } from 'react-native';

import { Input } from '@/shared/Input/Input';
import { Fonts, Gaps } from '@/shared/tokens';
import { Button } from '@/shared/Button/Button';



const width = Dimensions.get('window').width;
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        
        <Image 
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        />
        <View style={styles.form}>
          <Input placeholder='Email'/>
          <Input isPassword placeholder='Password'/>
      <Button text='Sign In'/>
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
    gap: Gaps.g50,
    alignItems: 'center',
    
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 20
  },
  form: {
    alignSelf: 'stretch',
    gap: Gaps.g16,
    
  },
  input: {
    
    borderRadius: 10,
  },
  
  textStyle: {
    color: 'white',
    fontSize: Fonts.f18,
  }
});
