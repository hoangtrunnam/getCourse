import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import ChildCourse from './ChildCourse';

const DATA = [
    {
        id: 1,
        title: 'First Item',
    },
    {
        id: 2,
        title: 'Second Item',
    },
    {
        id: 3,
        title: 'Third Item',
    },
    {
        id: 4,
        title: 'Fourth Item',
    },


];


const Course = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewData}>
                <TextInput
                    style={styles.input}
                    placeholder="input name's course!"
                />
                <TextInput
                    style={[styles.input, styles.inputDes]}
                    placeholder="input description"
                />
                <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
                        <Text style={styles.textBtn}>Cập Nhật</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.btn, styles.btnCreate]} activeOpacity={0.6}>
                        <Text style={styles.textBtn}>Thêm mới</Text>
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.viewFlatLists}>
                <FlatList
                    data={DATA}
                    renderItem={({item})=>{
                        <ChildCourse titleToRead={item.title}/>
                    }}
                    keyExtractor={item=>`${item.id}`}

                />
            </View>
            <ChildCourse titleToRead="hoang nam"/>
        </SafeAreaView>
    )
}

export default Course

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        zIndex: 1000
    },
    viewData: {
        width: "80%",
        backgroundColor: "yellow"
    },
    input: {
        fontSize: 20,
        backgroundColor: "red",
        height: 50,
        borderRadius: 25,
        paddingHorizontal: 16,

    },
    inputDes: {
        marginVertical: 15,
    },
    btn: {
        backgroundColor: "green",
        width: "40%",
        height: 30,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    textBtn: {
        fontSize: 16
    },
    viewFlatLists:{
        backgroundColor:"pink"
    },


})
