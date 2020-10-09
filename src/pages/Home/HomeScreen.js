import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import { Header, TitleSection } from '../../components';
import { connect } from 'react-redux';
import { cartService } from '../../app/actions';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

class HomeScreen extends Component {
    constructor(props) {
        super(props)
    }
    cartHandler() {
        this.props.addcart()
    }
    render() {
        return (
            <>
                <Header />
                <View style={styles.container}>
                    <TitleSection title="Nike Product" />
                    <Card>
                        <Card.Cover source={{ uri: 'https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/8b38ce72-f9ef-463e-8475-0005a0626215/womens-dunk-low-disrupt-platinum-violet-release-date.jpg' }} />
                        <Card.Actions>
                            <Button onPress={this.cartHandler.bind(this)}><Icon size={30} name={'add-circle'} onPress={() => console.log('go to cart page')} /></Button>
                        </Card.Actions>
                    </Card>
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

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addcart: () => dispatch(cartService())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)