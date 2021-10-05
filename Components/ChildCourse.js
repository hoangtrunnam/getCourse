import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import axios from 'axios';

// đây là hàm render ra các khoá học, và nó sẽ thay đổi liên tục tuỳ theo dữ liệu
const ChildCourse = (props) => {
    const { titleToRead } = props;

    // async function handlerDelete(titleToRead.id) {
    //     try {
    //         let response = await axios.delete('http://10.0.2.2:3000/course'+"/"+titleToRead.id);
    //         let courses = response.data;
    //         // setData(courses);
    //     }
    //     catch (err) {
    //         console.log("đã có lỗi xảy ra");
    //     }
    //     finally{
    //         Alert.alert("xoá thành công")
    //     }
    // }

    function handlerDelete() {
        Alert.alert("xoá thành công")
    }

    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.textTitle}>Tên khoá học: {titleToRead.name}</Text>
                <Text style={styles.textTitle}>Mô tả khoá học: {titleToRead.description} </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                <TouchableOpacity style={styles.btn} activeOpacity={0.6} onPress={handlerDelete}>
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
        backgroundColor: 'pink',
        marginVertical: 16,
        marginHorizontal: 16,
        height: 200,
        borderRadius: 16,
        justifyContent:"space-between",

    },
    
    textTitle: {
        fontSize: 20,
        marginHorizontal: 16,

    },
    btn: {
        // backgroundColor: "#f08080",
        backgroundColor: "#ba5154",
        width: 70,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,

    },
    textBtn: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#ffffff"
    }
})
