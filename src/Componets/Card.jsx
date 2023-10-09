import {React,useState,useEffect} from 'react'
import './Style/Card.css'

import axios from 'axios'

const Card = () => {
    const [product,setProduct]=useState([])
  useEffect(()=>{
    axios.get('/api/products').then((data)=>{
     setProduct(data.data)
    }).catch(err=>console.log(err))
  },[])
  return (
    <div>
      <h1>Products</h1>
      <h3>Products:{product.length}</h3>
      {console.log(product)}
      {
          product.map((product,index)=>(
            <div className="product-card">
            <img src={product.images[1]} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <span className="price">${product.price}</span>
            <button className="buy-button">Buy Now</button>
          </div>
          ))
      }
    </div>
  )
}

export default Card
