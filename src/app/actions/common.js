import { Children } from 'react';
import * as CONF from '../configs/constant';

export const cartService = () => {
    return dispatch => {
        const data = {
            idProduct: '213213343',
            productName: 'sdffdsfdsf',
            price: 200000
        }
        dispatch({type: CONF.CART_ADD_ITEM, data})
    }
}