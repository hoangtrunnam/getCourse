import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'


const ListCourseDeleted = (props) => {
    const {data} = props;
    return (
        <View style={styles.viewNameAndDes}>
            <Text style={styles.textTitle}>Tên khoá học: {data.name} </Text>
            <Text style={styles.textTitle}>Mô tả khoá học: {data.des} </Text>  
        </View>
    )
}


const Details = ({ route }) => {
    const { ObjDataPassParams } = route.params;
    // push dữ liệu mới này vào 1 mảng, rồi bên dưới dùng flatList render ra màn hình cái mảng đó

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textDetails}>Những khoá học đã xoá </Text>
            <ListCourseDeleted data={ObjDataPassParams} />

        </SafeAreaView>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#ffcded",
        padding: 16,
    },
    viewNameAndDes: {
        backgroundColor: "#fff",
        width: "100%",
        marginVertical: 16,
        marginHorizontal: 16,
        height: 200,
        borderRadius: 16,
    },
    textDetails: {
        fontSize: 30,
    },
    textTitle: {
        fontSize: 20,
        marginHorizontal: 16,

    },

})
