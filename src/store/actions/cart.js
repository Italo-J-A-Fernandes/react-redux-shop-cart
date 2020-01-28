export function valorTotoal(products){
  const total = products.reduce((acc,cur) => acc+cur.value,0);
  return total;
}


export function addProductCart(product) {
  return{
    type: 'ADD_CART',
    product
  }
}

export function removeItemCart(id){
  return {
    type: 'REMOVE_FROM_CART', 
    id
  }
}