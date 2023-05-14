import React, { createContext, useState } from 'react';

export const CartContext = createContext({});

export default function CartProvider({ children }) {

    const [ cart, setCart ] = useState([]);
    const [ total, setTotal ] = useState(0);

    function addItemCard(newItem){
        // ver se o item ja esta no carrinho e adicionamos mais uma quantidade
        // senao estiver adicionamos no carrinho
        const indexItem = cart.findIndex(item =>item.id === newItem.id);

        //diferente de -1 existe na lista
        if (indexItem !== -1) {
            // adicionbar uma quantidade
            //console.log("este item ja existe")
            let cartList = cart;

            cartList[indexItem].amount =  cartList[indexItem].amount + 1;

            cartList[indexItem].total =  cartList[indexItem].amount * cartList[indexItem].preco;

            setCart(cartList);
            totalResultCart(cartList);
            console.log(cartList);
            return;
        }

        let data = {
            ...newItem,
            amount: 1, //qantidade
            total: newItem.preco
        }

        setCart(products => [...products, data ]);
        totalResultCart([...cart, data]);
        console.log([...cart, data]);
       /*  console.log('Teste unico:' + cart[0].nome) */
    }

    function removeItemCart(product){
        const indexItem = cart.findIndex(item => item.id === product.id)
    
        if(cart[indexItem]?.amount > 1){
          let cartList = cart;
    
          cartList[indexItem].amount = cartList[indexItem].amount - 1;
    
          cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].preco;
    
          setCart(cartList);
          totalResultCart(cartList);
          return;
        }
    
        const removeItem = cart.filter(item => item.id !== product.id)
        setCart(removeItem);
        totalResultCart(removeItem);
    
    }

    // items - list de carrinhos
    function totalResultCart(items) {

        let myCart = items;

        let result = myCart.reduce( (total, item) => {
            return total + item.total;
        }, 0)

        setTotal(result);
    }

    // limpeza do carrinho
    function clearCart(){
        setCart([]);
    }

    return(
        <CartContext.Provider value={{ cart, addItemCard, removeItemCart, total, clearCart }}>
            { children }
        </CartContext.Provider>
    )
}