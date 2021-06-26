import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const MealDetailScreen = () => {
    return <View style={styles.screen}><Text>The Meals Details Screen</Text></View>;
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}) 

export default MealDetailsScreen