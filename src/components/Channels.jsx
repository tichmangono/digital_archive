import React, { useEffect, useState } from 'react'
import {Box, Stack, Typography} from "@mui/material"
import {Sidebar, ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { categories } from '../utils/constants'

const Channels = () => {

  const [selectedCategory, setSelectedCategory] = useState("New")
  const [videos, setVideos] = useState([])

  return (
    <Stack sx = {{   flexDirection: {sx: "column", md: "row"} }}>
    <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2} }}>
    
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

      </Box>
      <Box p={2} sx ={{overflowY: 'auto', flex: 2, backgroundColor: "white"}}>
        <Typography variant= "h4" fontWeight = "bold" mb={2} sx = {{color: "#0085a8"}}>
          Browse by
          <span style = {{    color: "#003F4F"      }}>
            {" Category:"}
          </span>
        </Typography>
        <Stack direction= {"row"} overflowY='auto' flexWrap="wrap" gap={4}>
        {
        categories.map((category) => ( 
        <ChannelCard key={category.name} channelDetail={category} marginTop = {1} />  
        ))
       }
        </Stack>

      </Box>
    </Stack>
  )
}

export default Channels