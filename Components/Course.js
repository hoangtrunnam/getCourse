import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Alert, View, SafeAreaView, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import axios from 'axios';
import ChildCourse from './ChildCourse';
import {  useDispatch, useSelector } from 'react-redux';
import { deleteCourse } from '../action/DeleteCourse';



const Course = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [des, setDes] = useState('');

    const [dataPost, setDataPost] = useState([]);
    const [courseDelete, setCourseDelete] = useState([]);
    const [courseUpdate, setCourseUpdate] = useState([]);
    const [id, setId] = useState(0);
    const baseUrl = "http://10.0.2.2:3000/course";
    //10.0.2.2 là ip của máy ảo android

    // hàm lấy tất cả các khoá học về
    const getCourse = async () => {
        try {
            let response = await axios.get(baseUrl);
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
    // hàm post khoá học
    const handlerCreate = () => {
        let data = {
            name: name,
            description: des,
        }
        postCourses(data);
    }

    const postCourses = async (data) => {
        try {
            let response = await axios.post(baseUrl, data);
            let courses = response.data;
            setDataPost(courses);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            Alert.alert("Thêm mới thành công");
            setName('');// set lại giá trị thành rỗng ở ô input
            setDes('');
        }
    }


    // hàm xoá khoá học theo id: 
    const dispatch = useDispatch();
    
    const deleteCourseById = async (id) => {
        // clone obj sử dụng state theo id trước khi xoá
        let temp;
        data.forEach(course => {
            
            if (course.id === id) {
                setNameToPassParams(course.name);
                setDesToPassParams(course.description);
                temp ={
                    name: course.name,
                    des: course.description,
                }
            }
        })

        const ObjDataPassParams = temp;
        

        const action = deleteCourse(ObjDataPassParams);
        dispatch(action);
        

        // gửi method delete
        try {
            let response = await axios.delete(`${baseUrl}/${id}`);
            let course = response.data;
            setCourseDelete(course);

        }
        catch (err) {
            console.log(err);
        }
        finally {
            Alert.alert('xoá thành công khoá học ');
        }
    }
    
// hahaha


    // lấy name và des theo id và truyền nó vào trong 2 ô input
    const handlerFixCourseById = (id) => {
        data.forEach((currCourse) => {
            if (currCourse.id === id) {
                setDes(currCourse.description);
                setName(currCourse.name);
            }
        })
        setId(id)
    }
    // hàm update dữ liệu theo id:

    const handlerUpdateCourseById = async () => {
        let dataToUpdate = {
            name: name,
            description: des
        }
        // data.forEach(async (currCourse) => {

        // if (currCourse.id === id) {

        try {
            let response = await axios.put(`${baseUrl}/${id}`, dataToUpdate)
            let course = response.data;
            setCourseUpdate(course);
        }
        catch (err) {
            console.log("loi roi");
        }
        finally {
            Alert.alert("update thanh cong");
            setName('');// set lại giá trị thành rỗng ở ô input
            setDes('');
        }
        // }
        // })
    }


    useEffect(() => {
        getCourse();

    }, [dataPost, courseDelete, courseUpdate]);
 /*   
    // redux xoa
    
    
    // ket thuc redux xoa
*/


    return (
        <SafeAreaView style={styles.container}>
            {/* <TouchableOpacity style={styles.btn} activeOpacity={0.6}
                onPress={() => {
                    navigation.navigate("Details", { ObjDataPassParams })
                }}>
                <Text style={{ fontSize: 16, color: "#ffffff" }}>go to course deleted</Text>
            </TouchableOpacity> */}
            <View style={styles.viewData}>
                <TextInput
                    style={styles.input}
                    placeholder="Course !"
                    onChangeText={name => setName(name)}
                    value={name}
                />
                <TextInput
                    style={[styles.input, styles.inputDes]}
                    placeholder="Description"
                    onChangeText={des => setDes(des)}
                    value={des}

                />
                <View style={{ flexDirection: 'row', justifyContent: "space-around", paddingBottom: 16, paddingTop: 6 }}>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.6} onPress={handlerUpdateCourseById}>
                        <Text style={styles.textBtn}>Cập nhật</Text>
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
                                return <ChildCourse
                                    titleToRead={item}
                                    deleteCourse={deleteCourseById}
                                    updateCourse={handlerFixCourseById}
                                />
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
        // backgroundColor: "yellow"
    },
    input: {
        fontSize: 20,
        // backgroundColor: "red",
        height: 40,
        paddingHorizontal: 8,
        borderBottomWidth: 2,

    },
    inputDes: {
        marginVertical: 15,
    },
    btn: {
        backgroundColor: "#ba5154",
        // backgroundColor: "#ffffff",

        width: "40%",
        height: 30,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    textBtn: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffff",
    },
    viewFlatLists: {
        // backgroundColor:"pink",
        flex: 1,
        width: "100%",
    },


})
