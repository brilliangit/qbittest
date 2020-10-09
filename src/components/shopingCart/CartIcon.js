import React from 'react';
import { Appbar, Badge } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    View,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

const CartIcon = (props) => {
    return (
        <View style={styles.wrp}>
            <Badge size={15} style={styles.badge}>{props.cartList.length}</Badge>
            <Appbar.Action
                icon={() => (
                    <Icon size={25} name={'cart'} onPress={() => console.log('go to cart page')} />
                )} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrp: {
        position: 'relative',
        fontSize: 16
    },
    badge: {
        position: 'absolute',
        top: 5,
        right: 5
    }
})

const mapStateToProps = (state) => {
    return {
        cartList: state.Cart ? state.Cart : []
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);