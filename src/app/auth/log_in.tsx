import { View, Text, TextInput, StyleSheet } from "react-native"

import Header from "../../components/Header"
import Button from "../../components/Button"

const LogIn = ():JSX.Element => {
    return(
        <View style={Styles.container}>
            <Header />
            <View style={Styles.inner}>
                <Text style={Styles.title}>Log In</Text>
                <TextInput style={Styles.input} value="Email address" />
                <TextInput style={Styles.input} value="Password" />
                <Button label="Submit" />
                <View style={Styles.footer}>
                    <Text style={Styles.footerText}>Not registared?</Text>
                    <Text style={Styles.footerLink}>Sign up here!</Text>
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
    input: {
        borderWidth: 1,
        borderColor: "#dddddd" ,
        backgroundColor: "#ffffff",
        height: 48,
        padding: 8,
        fontSize: 16,
        marginBottom: 16,
        color: "#DDDDDD"
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

export default LogIn