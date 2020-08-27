import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    
   
     // format number

   const formatNumber = num =>{
    const precision = num.toFixed(2);
    return  Number(precision);
}

    //total price
    const totalPrice=cart.reduce((total,prd)=>total+prd.price,0);
 
   // Tax
   const tax =(total/10).toFixed(2);

   // Grand total cost

   const grandTotal =(totalPrice+ Number(tax)).toFixed(2);

   console.log(grandTotal)

 
    return (
        <div>
          <h4 className="text-info">Order Summary</h4>
            <p className="text-secondary">Course Enrolled: {cart.length}</p>
            <p className="text-secondary">Course Price: { formatNumber(total)}</p>
            
            <p className="text-secondary">TAX: {tax}</p>
            <h6 className="text-primary"> <strong>Total Price:</strong>  {grandTotal}</h6>
      </div>
    );
};

export default Cart;