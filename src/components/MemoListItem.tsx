import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

import Icon from "./Icon"

const MemoListItem = () => {
    return (
    <View style={styles.memoListItem}>
        <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
        </View>
        <TouchableOpacity>
            <Icon name="delete" size={16} color="#b0b0b0" />
        </TouchableOpacity>
    </View>
    )
} 

const styles = StyleSheet.create({
    memoListItem: {
        backgroundColor: "#ffffff",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "rgba(0,0,0,0.15)"
    },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32
    },
    memoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: "#848484"
        
    }
})

export default MemoListItem