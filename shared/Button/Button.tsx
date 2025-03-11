import { Pressable, PressableProps, Text, View, StyleSheet } from "react-native";
import { Colors, Fonts } from "../tokens";

export function Button({text, ...props}: PressableProps & {text: string}) {
    return (<Pressable {...props} style={({ pressed }) => [
        styles.button, 
        pressed && styles.buttonPressed
    ]}>
        <View >
            <Text style={styles.text}>{text}</Text>
            </View>
            </Pressable>);
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 10,
height: 58,},
buttonPressed: {
    backgroundColor: Colors.primaryHover,
},
        text: {
            color: Colors.buttonText,
            fontSize: Fonts.f18,
        
        },
});