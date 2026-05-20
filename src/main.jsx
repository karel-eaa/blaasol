import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'

// Import of views
import { Artist } from './views/Artist.jsx'
import { Artists } from './views/Artists.jsx'
import { Contact } from './views/Contact.jsx'
import { Experience } from './views/Experience.jsx'
import { Gallery } from './views/Gallery.jsx'
import { GoodActs } from './views/GoodActs.jsx'
import { Home } from './views/Home.jsx'
import { Shop } from './views/Shop.jsx'
import { Sponsors } from './views/Sponsors.jsx'
import { Tickets } from './views/Tickets.jsx'
import { Volunteer } from './views/Volunteer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/blaasol/'>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/experience' element={ <Experience /> } />
        <Route path='/volunteer' element={ <Volunteer /> } />
        <Route path='/sponsors' element={ <Sponsors /> } />
        <Route path='/tickets' element={ <Tickets /> } />
        <Route path='/artists' element={ <Artists /> } />
        <Route path='/artists/:id' element={ <Artist /> } />
        <Route path='/good-acts' element={ <GoodActs /> } />
        <Route path='/gallery' element={ <Gallery /> } />
        <Route path='/shop' element={ <Shop /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
