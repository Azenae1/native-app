import React, { useState } from "react";
import { TextInput, TextInputProps, StyleSheet, Pressable } from "react-native";
import { Colors } from "../tokens";
import EyeOpen from "@/assets/icons/EyeOpen";
import EyeClosed from "@/assets/icons/EyeClosed";

export function Input(props: TextInputProps & {isPassword?: boolean}) {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    return (
        <>
        <TextInput {...props}
            style={styles.input}
            secureTextEntry={!isPasswordVisible}
            placeholderTextColor={Colors.gray}
        />
        {props.isPassword && <Pressable>{isPasswordVisible? <EyeOpen/> : <EyeClosed/>}</Pressable>}
        </>
    );
}

const styles = StyleSheet.create({
    input: {
    backgroundColor: Colors.violetDark,
    borderRadius: 10,
    height: 58,
    paddingHorizontal: 26,
    fontSize: 16,
    },
});