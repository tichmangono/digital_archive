
import React from 'react'
import { Box, CardContent, CardMedia, Typography} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import {Link} from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({channelDetail, marginTop}) => (
   channelDetail.length === 2 ? 
   <Box 
   sx = {{
    boxShadow: 'none', 
    borderRadius: '10px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: {xs: '356px', md: '320px'}, 
    height: '326px', 
    margin: 'auto',
    marginTop,
    border: '2px solid #e3e3e3',
    backgroundColor: "#003F4F"
   }}
   >
   <Link to= {`/channel/${channelDetail?.name}`}>
      <CardContent 
      
         sx= {{
          display: "flex", 
          flexDirection: 'column',
           justifyContent: 'center',
       textAlign: "center",
        color: '#fff',
        
     }}
     >
           <CardMedia 
              image= {channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture }
              alt = {channelDetail?.name}
              sx = {{borderRadius: "50%", height: "180px", width: "180px", mb: 2, 
              border: '1px solid #e3e3e3'}}
           />
           <Typography  variant = "h6" >
              {channelDetail?.name}{' '}
               <CheckCircle sx= {{fontSize: 14, color: "gray", ml: '5px'}}></CheckCircle> 
           </Typography>
           {channelDetail?.statistics?.subscriberCount && 
           (
            <Typography fontColor="white">
               {parseInt(channelDetail?.statistics?.subscriberCount.toLocaleString())} Subscribers
            </Typography>
           )
           
           }
      </CardContent>
   </Link>
  </Box>
  :
  <Box 
   sx = {{
    boxShadow: 'none', 
    borderRadius: '10px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: {xs: '356px', md: '320px'}, 
    height: '326px', 
    margin: 'auto',
    marginTop,
    border: '2px solid #e3e3e3',
    backgroundColor: "#003F4F"
   }}
   >
   <Link to= {`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent 
      
         sx= {{
          display: "flex", 
          flexDirection: 'column',
           justifyContent: 'center',
       textAlign: "center",
        color: '#fff',
        
     }}
     >
           <CardMedia 
              image= {channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture }
              alt = {channelDetail?.snippet?.title}
              sx = {{borderRadius: "50%", height: "180px", width: "180px", mb: 2, 
              border: '1px solid #e3e3e3'}}
           />
           <Typography  variant = "h6" >
              {channelDetail?.snippet?.title}{' '}
               <CheckCircle sx= {{fontSize: 14, color: "gray", ml: '5px'}}></CheckCircle> 
           </Typography>
           {channelDetail?.statistics?.subscriberCount && 
           (
            <Typography fontColor="white">
               {parseInt(channelDetail?.statistics?.subscriberCount.toLocaleString())} Subscribers
            </Typography>
           )
           
           }
      </CardContent>
   </Link>
  </Box>
)

export default ChannelCard
