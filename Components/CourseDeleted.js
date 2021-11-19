import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList, Math } from 'react-native'

const coursesDeleted = [
    { name: "1", des: 'thuốc cảm cúm' },
    { name: "2", des: 'Dầu Gội Đầu' },
    { name: "3", des: 'thuốc hạ sốt' },
    { name: "4", des: 'thuốc đau đầu' },
    { name: "5", des: 'thuoc giam can' },
    { name: "6", des: 'thuoc ho' }
]



const ListCourseDeleted = (props) => {
    const { data } = props

    return (
        <View style={styles.viewNameAndDes}>
            <Text style={styles.textTitle}>Tên khoá học: {data.name} </Text>
            <Text style={styles.textTitle}>Mô tả khoá học: {data.des} </Text>
        </View>
    )
}


const renderDeletedCourse = (props) => {
    const { courseDelete } = props
    //console.log('khoa hoc da xoa:',courseDelete);
    //if (!Array.isArray(coursesDeleted) || coursesDeleted.length === 0) return;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textDetails}>Những khoá học đã xoá </Text>

            <FlatList
                data={courseDelete}
                renderItem={({ item }) => {
                    return (<ListCourseDeleted data={item} />)
                }}
                keyExtractor={(item) => `${item.name}`}
            />
        </SafeAreaView>
    )
}

export default renderDeletedCourse

const styles = StyleSheet.create({
    container: {
        //flex: 1,
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
