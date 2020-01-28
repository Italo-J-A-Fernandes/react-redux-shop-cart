import produce from 'immer';

const INITIAL_STATE_CART = {
    total:0,
    data:[],
}

function handleAddCart(state, product) {
    return produce(state, draft => {
        const productIndex = draft.data.findIndex(p => p.id === product.id); 

        if(productIndex >= 0){
            draft.data[productIndex].qnt += 1;
        }else{
            draft.data.push({
                ...product,
                qnt: 1,
            })
        }
    });
}

function handleRemoveCart(state, id){
    return produce(state, draft => {
        const productIndex = draft.data.findIndex(p => p.id === id); 

        if(productIndex >= 0){
            draft.data.splice(productIndex, 1);
        }
    });
}

function cartReduce(state = INITIAL_STATE_CART, action) {
    switch (action.type) {
        case 'ADD_CART':
            return handleAddCart(state, action.product);
        case 'REMOVE_FROM_CART':
            return handleRemoveCart(state, action.id);
        default:
            return state;
    }
}

export default cartReduce;