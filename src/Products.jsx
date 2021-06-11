import React, { useState } from "react"

export default function products({addToCart}){
 // eslint-disable-next-line react-hooks/rules-of-hooks
 const [products] = useState([
   {
     name: `AA Battery`,
     cost: `$2.99`,
     image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJFfVhd0dRyhRXd6SQEP-L-Xp7afnHncpZHZ_LREX4pw4WKI5HYTQiZTiagkvmJO5rmIxU7lB&usqp=CAc`,
   },
   {
     name: `AA Battery`,
     cost: `$2.99`,
     image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Bd0Qt8kNtgAB0DAvR_X35pVQZbw3ry1jWIs2nQVmTpIHGzfNjDz0xWgBo8rZFEnKfq2C3FNO&usqp=CAc`,
   },
 ]);
 
  return  (<>
      <h1>Products</h1>
      <div className="products">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>)
}
