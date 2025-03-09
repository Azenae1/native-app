import { TextInput, TextInputProps, StyleSheet } from "react-native";
import { Colors } from "../tokens";

export function Input(props: TextInputProps) {
    return (
        <TextInput {...props}
            style={styles.input}
            placeholderTextColor={Colors.gray}
        />
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