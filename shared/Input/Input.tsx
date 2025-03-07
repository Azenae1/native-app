import { TextInput, TextInputProps, StyleSheet } from "react-native";

export function Input(props: TextInputProps) {
    return (
        <TextInput {...props}
            style={styles.input}
            placeholderTextColor={'#AFB2BF'}
        />
    );
}

const styles = StyleSheet.create({
    input: {
    backgroundColor: '#2E2D3D',
    borderRadius: 10,
    height: 58,
    paddingHorizontal: 26,
    fontSize: 16,
    },
});