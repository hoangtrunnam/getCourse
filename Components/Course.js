import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Alert, View, SafeAreaView, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import axios from 'axios';
import ChildCourse from './ChildCourse';



const Course = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [des, setDes] = useState('');

    //10.0.2.2 là ip của máy ảo android
    const getCourse = async () => {
        try {
            let response = await axios.get('http://10.0.2.2:3000/course');
            let courses = response.data;
            setData(courses);
        }
        catch (err) {
            console.error(err);
        }
        finally {
            setLoading(false);
        }
    }

    const handlerCreate = () => {
        
        let data = {
            name: name,
            description: des,
        }
        postCourses(data);
    }

    const postCourses = async (data) => {
        try {
            let response = await axios.post('http://10.0.2.2:3000/course', data);
            let courses = response.data;
            setData(courses);
        }
        catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        getCourse();
        
    },[]);

    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewData}>
                <TextInput
                    style={styles.input}
                    placeholder="input name's course!"
                    onChangeText={name => setName(name)}
                    value={name}
                />
                <TextInput
                    style={[styles.input, styles.inputDes]}
                    placeholder="input description"
                    onChangeText={des => setDes(des)}
                    value={des}

                />
                <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
                        <Text style={styles.textBtn}>Cập Nhật</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.btn, styles.btnCreate]} activeOpacity={0.6} onPress={handlerCreate}>
                        <Text style={styles.textBtn}>Thêm mới</Text>
                    </TouchableOpacity>

                </View>
            </View>
            {
                isLoading ? <ActivityIndicator size="large" /> :
                    <View style={styles.viewFlatLists}>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => {
                                return <ChildCourse titleToRead={item} />
                            }}
                            keyExtractor={item => `${item.id}`}

                        />
                    </View>
            }


        </SafeAreaView>
    )
}

export default Course

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
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
    viewFlatLists: {
        // backgroundColor:"pink",
        flex: 1,
        width: "100%",
    },


})
