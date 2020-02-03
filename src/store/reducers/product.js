import produce from 'immer';

const INITIAL_STATE_PRODUCT = {
    data:[
        {
            id:1,
            name:'Furadeira Still',
            photo: 'https://www.ilos.com.br/web/wp-content/uploads/Caixas_fig1.png',
            value:10.05,
        },
        {
            id:2,
            name:'TechPix',
            photo: 'https://www.ilos.com.br/web/wp-content/uploads/Caixas_fig1.png',
            value:15.05,
        },
        {
            id:3,
            name:'Margarina Delicia',
            photo: 'https://www.ilos.com.br/web/wp-content/uploads/Caixas_fig1.png',
            value:20.78,
        },
        {
            id:4,
            name:'Baygon',
            photo: 'https://www.ilos.com.br/web/wp-content/uploads/Caixas_fig1.png',
            value:19.70,
        },
        {
            id:5,
            name:'PC GAMER',
            photo: 'https://www.ilos.com.br/web/wp-content/uploads/Caixas_fig1.png',
            value:10.89,
        },
        {
            id:6,
            name:'POLISTATION',
            photo: 'https://www.ilos.com.br/web/wp-content/uploads/Caixas_fig1.png',
            value:100.05,
        },
    ]
};

function handleOrdemProduct(state, valor){
    if(valor === "1"){
        return produce(state, draft => {
            draft.data.sort(function(a,b){
                return a.value - b.value;
            });
        })
    }else if(valor === "2"){
        return produce(state, draft => {
            draft.data.sort(function(a,b){
                return b.value - a.value;
            });
        })
    }
    
    return produce(state, draft => {
        draft.data.sort(function(a,b){
            return a.id - b.id;
        });
    })
}

function productReduce(state = INITIAL_STATE_PRODUCT, action){
    switch (action.type) {
        case 'ADD_PRODCUT':
            return {...state,product:[...state.product,action.payload]};
        case 'REMOVE_PRODUCT':

            break;
        case 'FILTER_PRODUCTS':
            return handleOrdemProduct(state, action.value);
        default:
            return state;
    }
}

export default productReduce;