import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import { Header } from '../../components'

class ProfileScreen extends Component {
    render() {
        return (
            <>
                <Header />
                <View style={styles.container}>
                    <Text>ProfileScreen</Text>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    }
})

export default ProfileScreen