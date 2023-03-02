import React from 'react'
import {Stack} from "@mui/material"
import {categories} from "../utils/constants"

const Sidebar = ({selectedCategory, setSelectedCategory}) => (

<Stack direction="row" marginTop="5%"  width="100%" sx = {{overflowY: "auto", height: {sx: 'auto', md: '95%'}, 
flexDirection: {md:"column"}, backgroundColor:"#FFF"}}>
 {categories.map((category) => (
  <button className='category-btn'
     onClick = {()=> setSelectedCategory(category.name)}
     // hightlight category button with blue color when hovered
     style={{
      background: category.name === selectedCategory && '#0085a8',
      color: "white" 
     }}
     key= {category.name}
  >
   <span style ={{color: category.name === selectedCategory ? "white" : "#5dacbd", marginRight: "15px"}}
   >{category.icon}</span>
   <span style = {{
    opacity: category.name === selectedCategory ? '1' : '0.8'
    , color: category.name === selectedCategory? "#FFF": "#003F4F"
   
   }}
   >{category.name}</span>
  </button>
 ))}
</Stack>
)

export default Sidebar