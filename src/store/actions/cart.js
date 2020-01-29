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