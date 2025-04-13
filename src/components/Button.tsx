import { Text, TouchableOpacity, StyleSheet } from "react-native"

interface Props {
    label: string
    onPress?: () => void
} 


const Button = (props: Props): JSX.Element => {
    const { label, onPress} = props
    return (
        <TouchableOpacity onPress={onPress} style={Styles.button}>
            <Text style={Styles.buttonLable}>{label}</Text>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    button: {
        backgroundColor: "#467FD3",
        borderRadius: 4,
        alignSelf: "flex-start",
        marginBottom: 24
    },
    buttonLable: {
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 32,
        paddingVertical: 8,
        paddingHorizontal: 24
    }
})

export default Button