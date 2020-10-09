import * as CONF from '../../configs/constant';

const Cart = (state= [], action) => {
    switch (action.type) {
        case CONF.CART_ADD_ITEM:
            return [...state, action.data];
        default:
            return state;
    }
}

export default Cart