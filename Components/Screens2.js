import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Details = () => {
    return (
        <View>
            <Text style ={styles.textDetails}>hello world</Text>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    textDetails: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:30,
    }
})
