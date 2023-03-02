import React from 'react'
import {Link} from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoTitle,
  demoChannelTitle, demoVideoUrl, demoProfilePicture, demoChannelUrl } from '../utils/constants'


const VideoCard = ({video : {id: {videoId}, snippet}}) => {
 console.log(videoId, snippet) 
 return (

    <Card sx = {{width: {xs: '100%', sm: '358px', md: '320px'}, 
     boxShadow: 'none', borderRadius: 0, border: '2px solid #e3e3e3',
    }}>
     <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
     <CardMedia  
      image= {snippet?.thumbnails?.high?.url}
      alt = {snippet?.title}
      sx = {{width: {xs:'100%', sm:'358px', md: '320px'}, height: 180}}
      />
     </Link>
      <CardContent sx= {{backgroundColor: "##fff", height: "106px"}}>
       <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color = "#003F4F" >
          {snippet?.title.slice(0,60) || demoVideoTitle.slice(0, 60)} 
        </Typography>
       </Link>
       <Link to={snippet?.channedlId? `/channel/${snippet.channelId}` : demoChannelUrl}>
        <Typography variant="subtitle2" fontWeight="bold" color = "gray" >
          {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0, 60)}
          <CheckCircle sx= {{fontSize: 12, color: "gray", ml: '5px'}}></CheckCircle> 
        </Typography>
       </Link>
       </CardContent>
    </Card>
  )
}

export default VideoCard