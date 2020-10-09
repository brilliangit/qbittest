import { combineReducers } from 'redux';
import Cart from './cart'

const rootReducer = combineReducers({
    Cart: Cart,
});

export default rootReducer;