// courseDeleted sẽ được gọi ở đây
// đây là component xử ý logic ở bottom tab

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import CourseDeleted from '../Components/CourseDeleted'



const HomePageDelete = () => {

    const courseList = useSelector(state => state.courseDelete.list);
   

    return (
        <View>
            <CourseDeleted courseDelete={courseList} />
        </View>
    )
}

export default HomePageDelete

const styles = StyleSheet.create({

})
