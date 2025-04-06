import { View, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButtom from '../../components/CircleButtom'
import Icon from "../../components/Icon"


const List = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>
            <CircleButtom>
                <Icon name='plus' size={20} color="#ffffff"/>
            </ CircleButtom>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    }
})

export default List


