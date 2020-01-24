const INITIAL_STATE_CART = {
    total:0,
    data:[],
}

function handleAddCart(state, product) {
    const dat = state.data;
    return {
        ...state,
        data: [...dat, {...product, qnt:1}],
    }

}

function cartReduce(state = INITIAL_STATE_CART, action) {
    switch (action.type) {
        case 'ADD_CART':
            return handleAddCart(state, action.product);
        default:
            return state;
    }
}

export default cartReduce;