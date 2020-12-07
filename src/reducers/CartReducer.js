import { CartAction } from '../actions';

const initialState = {
    cartList: [],
    cartCount: 0
}

const CartReducer = (state = initialState, action) => {
    switch(action.type){
        case CartAction.ADDCART: {
            return {
                ...state,
                cartList: [...cartList, action.name],
                cartCount: cartCount + 1
            };
        }
        case CartAction.DELETECART: {
            if(cartList.filter(item => (item === action.name))){
                return {
                    ...state
                };
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default CartReducer;