import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import { Header } from '../../components'

class InterestScreen extends Component {
    render() {
        return (
            <>
                <Header />
                <View style={styles.container}>
                    <Text>InterestScreen</Text>
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

export default InterestScreen