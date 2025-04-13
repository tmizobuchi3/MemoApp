import { View, Text, StyleSheet } from "react-native"

import Header from "../../components/Header"
import Button from "../../components/Button"
import TextInputBox from "../../components/TextInputBox"

const SignUp = ():JSX.Element => {
    return(
        <View style={Styles.container}>
            <Header />
            <View style={Styles.inner}>
                <Text style={Styles.title}>Sign Up</Text>
                <TextInputBox label="Email address" />
                <TextInputBox label="Password" />
                <Button label="Submit" />
                <View style={Styles.footer}>
                    <Text style={Styles.footerText}>Already registered?</Text>
                    <Text style={Styles.footerLink}>Log In</Text>
                </View>
            </View>
        </View>
    )
} 

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F4F8"
    },
    inner: {
        paddingHorizontal: 27,
        paddingVertical: 24
    },
    title:{
        fontSize: 24,
        lineHeight: 32,
        fontWeight: "bold",
        marginBottom: 24
    },
    footer: {
        flexDirection: "row"
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color: "#000000"
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: "#467FD3"
    }
})

export default SignUp