import React, { useState } from "react";
import { TextInput, TextInputProps, StyleSheet, Pressable, View } from "react-native";
import { Colors, Fonts } from "../tokens";
import EyeOpen from "@/assets/icons/EyeOpen";
import EyeClosed from "@/assets/icons/EyeClosed";

export function Input({isPassword, ...props}: TextInputProps & {isPassword?: boolean}) {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    return (
        <View>
        <TextInput {...props}
            style={styles.input}
            secureTextEntry={isPassword && !isPasswordVisible}
            placeholderTextColor={Colors.gray}
        />
        {isPassword && <Pressable onPress={() => setIsPasswordVisible(state => !state)} style={styles.eyeIcon}>{isPasswordVisible? <EyeOpen/> : <EyeClosed/>}</Pressable>}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
    backgroundColor: Colors.violetDark,
    borderRadius: 10,
    height: 58,
    paddingHorizontal: 26,
    fontSize: Fonts.f16,
    color: Colors.gray,
    },
    eyeIcon: {
        position: 'absolute',
        right: 24,
        top: 17,
    },
});