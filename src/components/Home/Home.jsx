import React from 'react'
import ResponsiveAppBar from '../Navbar/Navbar'
import Hero from "../Hero/Hero"
import Carousel from '../Carousel/Carousel1'
import Section1 from '../Section/Section1'
import Section2 from '../Section/Section2'
import Section3 from '../Section/Section3'
import Carousel2 from '../Carousel/Carousel2'
import Carouse3 from '../Carousel/Carousel3'
import Footer from '../Footer/Footer'
import EndSEction from '../EndSection/EndSEction'
import { IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import "./Home.css"
import TopBar from '../Navbar/TopBar'
import SecondTopBar from '../Navbar/SecondTopBar'


const Home = () => {
  return (
    <div className="home-page">
      <div><TopBar/></div>
      <div><SecondTopBar/></div>
    <div><ResponsiveAppBar/></div>
    <div><Hero /></div>
    <div><Carousel/></div>
    <div><Section1 /></div>
    <div><Carousel2/></div>
    <div><Section2/></div>
    <div><Carouse3/></div>
    <div><Section3/></div>
    <div><EndSEction/></div>
        <div className="sticky-message-icon">
        <IconButton style={{ color: 'white' }}>
          <ChatIcon />
        </IconButton>
      </div>
    <div><Footer/></div>
    
    </div>
  )
}

export default Home