import {
    View, TextInput, StyleSheet, KeyboardAvoidingView
} from "react-native"

import Header from "../../components/Header"
import CircleButtom from "../../components/CircleButtom"
import Icon from "../../components/Icon"

const Edit = (): JSX.Element => {
    return (
        <KeyboardAvoidingView behavior="height"  style={styles.container}>
            <Header />
            <View style={styles.inputContainer}>
                <TextInput multiline style={styles.input} value={"買い物\nリスト"} />
            </View>
            <CircleButtom>
                <Icon name="check" size={20} color="#ffffff" />
            </CircleButtom>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    inputContainer: {
        paddingHorizontal: 27,
        paddingVertical: 32,
        flex: 1
    },
    input: {
        flex: 1,
        textAlignVertical: "top", //Andorodの設定
        fontSize: 16,
        lineHeight: 24
    }
})

export default Edit