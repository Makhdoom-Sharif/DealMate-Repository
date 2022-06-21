import { Email, EmailOutlined, Facebook, Instagram, LocalPhone, LocalPhoneOutlined, LocationOn, LocationOnOutlined, Pinterest, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
const Container = styled.div `
display:flex;
${mobile({flexDirection: "column"})}
`
const Left = styled.div `
flex:1;
display: flex;
flex-direction: column;
padding: 20px
`
const Logo= styled.h1`
`
const Description= styled.p`
margin: 20px 0px;
`
const SocialContainer= styled.div`
display: flex;
`
const SocialIcon= styled.div`
width: 40px;
height: 40px;
border-radius:50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`
const Right = styled.div `
flex:1;
padding: 20px;
${mobile({backgroundColor: "#fff8f8"})}
`
const ContactItem= styled.div `
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment = styled.img`
width: 50%` 

const Center = styled.div `
flex:1;
padding: 20px;
${mobile({display: "none"})}
`
const Title= styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>MAK'S</Logo>
            <Description>
            MAK's has been in the fashion industry since 1990. We believe in satisfying customers through our quality and brilliant customer service.

MAK's is one of the most reliable manufacturer and retailer of complete men's, women's, kids' garments and footwear which are being used in all over the World. We struggled hard to set high standards and has acquired a high growth rate.

The constant research into quality raw materials, the introduction of new yarns and new dyeing and weaving techniques, finishing and extraordinary performance are the foundation on which the collections are created.

Moreover still we are working hard to satisfy the people around the globe.

            </Description>
            <SocialContainer>
                <SocialIcon color = "385999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color = "E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color = "55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color = "E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>USEFUL LINKS</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishtlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><LocationOnOutlined style={{marginRight:"10px"}}/>H.No#3/25 Govvt. Quarter Shah Faisal Colony No.3, KARACHi</ContactItem>
            <ContactItem><LocalPhoneOutlined style={{marginRight:"10px"}} />+92 330 3170813</ContactItem>
            <ContactItem><EmailOutlined style={{marginRight:"10px"}} />makhdomsharif@gmail.com</ContactItem>
            <Payment src= "https://i.ibb.co/3hHrDtB/Payment-Method-Transparent.png"/>
        </Right>
    </Container>
  )
}

export default Footer