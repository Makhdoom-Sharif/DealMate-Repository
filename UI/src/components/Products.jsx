import { LineAxisOutlined } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'
const Container= styled.div `
padding: 20px;
display:flex;
flex-wrap:wrap;
justify-content: space-between;
`
const Products = ({ctg, filters, sort}) => {
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])
  useEffect(()=>
  {
    const getProducts = async ()=>{
      try{
        const res = await axios.get(ctg
          ? `http://localhost:5000/api/products?category=${ctg}`
          : "http://localhost:5000/api/products");
          setProducts(res.data);
          
          console.log(res)
      } catch(err){

      }
    }; getProducts()  
  }, [ctg]);


  useEffect(() => {
    ctg &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, ctg, filters]);

  useEffect(()=>{
    if(sort === "newest"){
      setFilteredProducts((prev)=>
      [...prev].sort((a,b)=> a.createdAt - b.createdAt)
      )
       } else if(sort === "asc"){
      setFilteredProducts((prev)=>
      [...prev].sort((a,b)=> a.price - b.price)
      )}
      else {
        setFilteredProducts((prev)=>
        [...prev].sort((a,b)=> b.price - a.price)
        )
      }
    
  }, [sort])
  console.log(sort)
 
  return (
    <Container>
        {ctg
          ? filteredProducts.map((item)=><Product item ={item} key ={item.id}/>)
          : products.slice(0,8).map((item)=><Product item={item} key={item.id}/>)
        }
    </Container>
  )
}

export default Products