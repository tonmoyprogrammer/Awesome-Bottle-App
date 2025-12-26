const getCartFromLocalStorage = ()=>
{

    const getCart = localStorage.getItem('cart');
    if(getCart)
    {
        const getIdCart = JSON.parse(getCart);
        return getIdCart;
    }
    return[];
}

const saveCartToLocalstorage =(cart)=>
{
    const saveCart =JSON.stringify(cart);
    localStorage.setItem('cart',saveCart);
}


const removeItem =  (id)=>
{
    const getAllCart = getCartFromLocalStorage();
    const deleteCart = getAllCart.filter(cart =>cart !== id)
    saveCartToLocalstorage(deleteCart)
}
const addIdToLocalStorage = (id)=>
{
    const allCart = getCartFromLocalStorage();
    const newCartAdd = [...allCart,id];
    saveCartToLocalstorage(newCartAdd)
}
export{getCartFromLocalStorage as allGetCart,addIdToLocalStorage as addId,
    removeItem
}