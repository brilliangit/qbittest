import React, { useState } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import { HeaderWrapper, CartIcon } from '../../components'
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = (props) => {
    const [menu, setMenu] = useState(false)
    const _handleMenu = () => {
        setMenu(!menu)
    };
    return (
        <HeaderWrapper>
            <View style={styles.contentHeader}>
                <Appbar.Header style={styles.app}>
                    <Appbar.Action 
                    icon={() => (
                            <Icon size={25} name={menu ?'close': 'menu'} />
                    )} 
                    onPress={_handleMenu} />
                    <Appbar.Content title="" />
                    <CartIcon />
                </Appbar.Header>
            </View>
        </HeaderWrapper>
    )
}

const styles = StyleSheet.create({
    contentHeader: {
        height: 58,
        backgroundColor: 'transparent'
    },
    app:{
        backgroundColor: 'transparent',
        shadowColor:'transparent'
    }
})

export default Header;