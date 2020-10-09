import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TitleSection = ({title}) => {
    return(
        <View style={styles.titleWrp}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleWrp:{
        padding:16
    },
    title:{
        color:'#333333',
        fontWeight:'bold',
        fontSize: 24,
        letterSpacing:0.7
    }
})

export default TitleSection