import React from 'react';
import { CartAction } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';

const AddList = ({item}) => {
    // const { cartList, cartCount } = useSelector(({CartReducer}) => CartReducer);
    const { cartList, cartCount } = useSelector(({CartReducer}) => CartReducer);
    const dispatch = useDispatch();

    const addCart = () => {
        dispatch(CartAction.onAddCart(item.name));
    }

    return (
        <div id={item.id}>
            <div className="name">{item.name}</div>
            <div className="price">{item.price}</div>
            <button className="btn" onClick={addCart}>장바구니</button>
        </div>
    );
}

export default AddList;