import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Box} from '@mui/material'

import {Navbar, Home, Feed, VideoDetail, SearchFeed, ChannelDetail, Channels} from "./components"


const App = () => (

    <BrowserRouter>
     <Box sx={{backgroundColor: 'white'}}>
       <Navbar/>
       <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/channels" element = {<Channels/>}></Route>
        <Route path="/feed" element = {<Feed/>}></Route>
        <Route path="/video/:id" element = {<VideoDetail/>}></Route>
        <Route path="/channel/:id" element = {<ChannelDetail/>}></Route>
        <Route path="/search/:searchTerm" element = {<SearchFeed/>}></Route>
       </Routes>
     </Box>
    </BrowserRouter>

  )


export default App