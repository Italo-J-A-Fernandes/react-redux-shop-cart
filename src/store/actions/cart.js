export function valorTotoal(products){
  const total = products.reduce((acc,cur) => acc+cur.value,0);
  return total;
}