import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
import {useSelector} from "react-redux"

const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})}
`
const Wrapper= styled.div`
padding:10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({padding: "10px"})}
`
const Left= styled.div`
flex:1;
display: flex;
align-items: center;
`
const Language= styled.div`
font-size:14px;
cursor: pointer;
${mobile({display: "none"})}
`
const SearchContainer= styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input= styled.input`
border: none;
${mobile({width: "50px"})}
`
const Center= styled.div`
flex:1;
text-align: center;
`
const Logo= styled.h1`
 font-weight: bold;
 ${mobile({fontsize: "24px"})}
`
const Right= styled.div`
flex:1;
display: flex;
align-itens:center;
justify-content: flex-end;
${mobile({flex:2 ,justifyContent: "center"})}
`
const MenuItem = styled.div`
font-size:14px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize: "12px", marginLeft:"10px"})}
`
const NavBar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
     <Wrapper>
     <Left>
       <Language>EN</Language>
       <SearchContainer>
         <Input placeholder="search"/>
         <Search style={{color:"gray", fontsize:16}} />
       </SearchContainer>
     </Left>
     <Center><Logo>DealMate</Logo></Center>
     <Right>

       <MenuItem>REGISTER</MenuItem>
       <MenuItem>SIGN IN</MenuItem>
       <MenuItem>
       <Badge color="secondary" badgeContent={quantity}>
        <ShoppingCartOutlined />
      </Badge>
       </MenuItem>
       
      </Right>
     
     </Wrapper>
      </Container>
  )
}

export default NavBar