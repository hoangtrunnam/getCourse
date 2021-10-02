import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'

// đây là hàm render ra các khoá học, và nó sẽ thay đổi liên tục tuỳ theo dữ liệu
const ChildCourse = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>{props.titleToRead}</Text>
            <Text>hello world</Text>
        </View>
    )
}

export default ChildCourse

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    textTitle: {
        fontSize: 20,
    }
})
