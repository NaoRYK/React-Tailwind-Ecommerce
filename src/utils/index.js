export const totalPrice = (productList) =>{
    let sum = 0;
    productList.forEach(product => {
        sum += product.price
        
        
    });
    return(sum)
};