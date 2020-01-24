const INITIAL_STATE_CART = {
    total:0,
    data:[],
}

function handleAddCart(state, product) {
    const dat = state.data;
    const productIndex = dat.findIndex(p => p.id === product.id);
    
    if(productIndex >= 0){
        dat[productIndex].qnt += 1;
        return {
            ...state,
            data: [...dat]
        };
    }else{
        return {
            ...state,
            data: [...dat, {...product, qnt:1}],
        }
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