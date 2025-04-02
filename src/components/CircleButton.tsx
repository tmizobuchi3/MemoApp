import { View, Text, StyleSheet } from "react-native"

interface Props {
    children: string
}

const CircleButtom = (props: Props): JSX.Element => {
    const { children } = props
    return(
        <View style={styles.circleButtom}>
            <Text style={styles.circleButtomLable}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    circleButtom: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: "#467FD3",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 40,
        bottom: 40,
        
        shadowColor: "#000000",
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 8 }
    },
        circleButtomLable: {
        color: "#ffffff",
        fontSize: 40,
        lineHeight: 48
    }
})

export default CircleButtom