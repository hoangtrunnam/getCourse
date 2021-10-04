import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

// đây là hàm render ra các khoá học, và nó sẽ thay đổi liên tục tuỳ theo dữ liệu
const ChildCourse = (props) => {
    const {titleToRead} = props;

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Tên khoá học: {titleToRead.name}</Text>
            <Text style={styles.textTitle}>Mô tả khoá học: {titleToRead.description} </Text>
            <View style={{flexDirection: 'row', justifyContent: "space-around" }}>
                <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
                    <Text style={styles.textBtn}>XOÁ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
                    <Text style={styles.textBtn}>SỬA</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChildCourse

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9c2ff',
        marginVertical: 16,
        marginHorizontal: 16,
        // alignItems: 'center',
        // justifyContent: 'center',
        height: 150,

    },
    textTitle: {
        fontSize: 20,
    },
    btn:{
        backgroundColor:"orange",
        width:70,
        height:30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:30,
    },
    textBtn:{
        fontSize:16,
    }
})
