import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

const HeaderWrapper = ({ children }) => {
    return (
        <View style={styles.header}>
            <View>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 58,
        backgroundColor: 'transparent'
    }
})

export default HeaderWrapper;