import React from 'react'
import {Stack, Typography, Box} from '@mui/material'
import {Facebook,  Twitter, LinkedIn} from '@mui/icons-material'
import {Link} from "react-router-dom"
import {logo} from "../utils/constants"
import {SearchBar} from "../components"

const Navbar = () => (
  <Stack 
      direction="row"
      alignItems="center"
        p={2} sx ={{position: "sticky", background: "#003F4F", top: 0, justifyContent: "space-between"}}
        flexWrap="wrap" gap={2}
        >
    <Link to ="/" style={{display: "flex", alignItems: "center"}}>
      <img  src={logo} alt="logo" height={45}/>
    </Link>

    <Link to ="/" style={{display: "flex", alignItems: "center"}}>
    <Typography variant="h5" sx = {{color: "#cdd8e0", alignItems: "left"}}>
      Humanitarian
      <span style = {{color: "#fff"}}> Rapid Research </span>
      Initiative (HRRI) 
      <span style = {{color: "#fff"}}> Digital Archive</span>    
      </Typography>
    </Link>
    
    <SearchBar/>

     <Box style={{display: "flex", alignItems: "left"}}>
      <Link to="https://www.facebook.com/HumanitarianOutcomes/" target="_blank" >
        <Facebook sx = {{color: "#fff", mr: 1}}/>
      </Link>
      <Link to="https://twitter.com/humoutcomes" target="_blank">
      <Twitter sx = {{color: "#fff", mr: 1}}/>
      </Link>      
      <Link to="https://www.linkedin.com/company/humanitarian-outcomes/" target="_blank">
         <LinkedIn sx = {{color: "#fff", mr: 1}}/>
      </Link>
     
    </Box>
  </Stack>
)

export default Navbar