import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Box} from '@mui/material'

import {Navbar, Feed, VideoDetail, SearchFeed, ChannelDetail} from "./components"


const App = () => (

    <BrowserRouter>
     <Box sx={{backgroundColor: 'white'}}>
       <Navbar/>
       <Routes>
        <Route path="/" element = {<Feed/>}></Route>
        <Route path="/video/:id" element = {<VideoDetail/>}></Route>
        <Route path="/channel/:id" element = {<ChannelDetail/>}></Route>
        <Route path="/search/:searchTerm" element = {<SearchFeed/>}></Route>
       </Routes>
     </Box>
    </BrowserRouter>

  )


export default App