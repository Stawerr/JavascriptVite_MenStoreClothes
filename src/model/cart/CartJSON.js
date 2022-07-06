class CartJSON{

    static convert(cart){
        try{
            const products = [];
            cart.products.forEach(product => 
                products.push({
                id: product.id,
                quantidade: product.quantidade
            }));
            const cartObj = {};
            if(cart.coupon)
                cartObj.coupon = {
                    name: cart.coupon.code,
                    discount: cart.coupon.discount
            }
            cartObj.amount = cart.amount,
            cartObj.products = products

            return cartObj;
        } catch (e){
            throw e;
        }
    }
}

export default CartJSON;