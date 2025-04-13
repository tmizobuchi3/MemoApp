import { TextInput, StyleSheet } from "react-native"

interface InputLabelProps {
    label: string
}

const TextInputBox = (props: InputLabelProps) : JSX.Element => {
    const { label } = props
    return (
        <TextInput style={Styles.input} value={label} />
    )
} 

const Styles = StyleSheet.create ({
    input: {
        borderWidth: 1,
        borderColor: "#dddddd" ,
        backgroundColor: "#ffffff",
        height: 48,
        padding: 8,
        fontSize: 16,
        marginBottom: 16,
        color: "#DDDDDD"
    }
})

export default TextInputBox