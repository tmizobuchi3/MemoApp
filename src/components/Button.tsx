import { View, Text, StyleSheet } from "react-native"

interface Props {
    label: string
} 


const Button = (props: Props): JSX.Element => {
    const { label} = props
    return (
        <View style={Styles.button}>
            <Text style={Styles.buttonLable}>{label}</Text>
        </View>
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