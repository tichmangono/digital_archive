import React, { useEffect, useState } from 'react'
import {Box, Stack, Typography} from "@mui/material"
import { Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { fontWeight } from '@mui/system'
import { Link } from 'react-router-dom'

const Home = () => {

  const [selectedCategory, setSelectedCategory] = useState("New")
  const [videos, setVideos] = useState([])

  useEffect(()=> {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}` )
    .then((data) => setVideos(data.items))
  }, [selectedCategory])

  return (
    <Stack sx = {{   flexDirection: {sx: "column", md: "row"} }}>
      <Box p={2}  mt={3} ml={4} mr = {4} sx ={{overflowY: 'auto', flex: 2, backgroundColor: "white"}}>
        <Typography variant= "h4" fontWeight = "bold" mb={2} sx = {{color: "#0085a8"}}>
         Welcome to the HHRI Digital Archive
        </Typography>
        <Typography>
          This digital archive is a <span style={{fontWeight:"bold"}}>comprehensive collection of documents</span>, interviews, research and other materials related to the <span style={{fontWeight:"bold"}}> Humanitarian Rapid Research Initiative (HRRI)</span> project which conducts rapid reviews of emergent crises as a partnership between <span style={{fontWeight:"bold"}}>Humanitarian Outcomes</span> and the <span style={{fontWeight:"bold"}}>UK Humanitarian Innovation Hub (UKHIH)</span>. 
        </Typography>        
          <Typography variant="h4" mt={3} mb={2}>
          Project summary  
        </Typography>
         <Typography>
            In collaboration with the UK Humanitarian Innovation Hub (UKHIH), with support from the UK Foreign, Commonwealth & Development Office (FCDO), Humanitarian Outcomes is leading a program to conduct rapid analytical reviews to help inform and steer humanitarian responses in new or newly exacerbated crises. The analyses produced focus on one or two critical issue areas where research efforts have the potential to make the greatest policy or operational impact.
        </Typography>
         <Typography variant="h4"  mt={3} mb={2}>
         Methodology
        </Typography>
          <Typography>
        For each review, a team led by HO and including various international experts and institutional partners conducts key informant interviews, reviews relevant literature and data, and, as appropriate, implements surveys of affected populations and/or aid providers. HO data assets and tools provide quantitative data as relevant on operational presence and coverage (GDHO), affected population perspectives (CORE), and operational security (AWSD). 
        </Typography>

      </Box>
        {/*
    <Box sx={{ height: { sx: "auto", md: "92vh" }, px: { sx: 0, md: 2} }}>
    
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <Typography className= "copyright" variant="body2" sx ={{mt:1.5, color:'#fff'}}>
        Copyright 2023 @Mukandi Group
      </Typography>
      
      </Box>
      */}
      <Box p={2} mt={3} sx ={{  flex: 2, backgroundColor: "white"}}>
        <Typography variant= "h4" fontWeight = "bold" mb={2} sx = {{color: "#0085a8"}}>
          Explore
          <span style = {{
            color: "#003F4F"
          }}>
            {" the digital archive"}
          </span>
        </Typography>
        
        <Stack direction="row" flex = "wrap"  spacing={2} mb={2}> 
          <Box>
           
            <Typography variant="h6" fontWeight = "bold" sx = {{color: "#003F4F"}}>
             Click to Explore!
            </Typography>
           

            <Link to ="/channels">
            <Typography variant="h6" fontWeight = "bold" sx = {{color: "#003F4F"}}>
             Browse by Category
            </Typography>
           </Link>

            <Link to ="/feed">
            <Typography variant="h6" fontWeight = "bold" sx = {{color: "#003F4F"}}>
             Browse the whole Archive
            </Typography>
           </Link>


          </Box>
        
        </Stack>
         
      </Box>
    </Stack>
  )
}

export default Home