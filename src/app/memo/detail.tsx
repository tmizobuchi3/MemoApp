import { View, Text, ScrollView, StyleSheet } from "react-native"

import Header from "../../components/Header"
import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"

const Detail = ():JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2023年10月1日 10:00</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    買い物リスト
                    書体やレイアウトなどを確認するために使います。
                    本文用なので使い方を間違えると不自然に見えることがあるので要注意。
                </Text>
            </ScrollView>
            <CircleButton style={{ top: 160, bottom: "auto" }}>
                <Icon name="pencil" size={20} color="#ffffff"/>
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    memoHeader: {
        backgroundColor: "#467FD3",
        height: 96,
        justifyContent: "center",
        paddingVertical: 24,
        paddingHorizontal: 19 
    },
    memoTitle: {
        color: "#ffffff",
        fontSize: 22,
        fontWeight: "bold",
        lineHeight: 32
    },
    memoDate: {
        color: "#ffffff",
        lineHeight: 16
    },
    memoBody: {
        paddingHorizontal: 27,
        paddingVertical: 32
    },
    memoBodyText: {
        fontSize: 16,
        lineHeight: 24,
        color: "#000000"
    }

})


export default Detail