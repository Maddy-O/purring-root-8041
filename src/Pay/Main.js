import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Bank } from './Bank'
import { Credit } from './Credit'
import Home from './Home'
import Mobile from './Mobile'
import { Pay } from './Pay'

const Main = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Pay />} />
            <Route path='/credit' element={<Credit />} />
            <Route path='/bank' element={<Bank />} />
            <Route path='/mobile' element={<Mobile />} />
            <Route path='/home' element={<Home />} />
        </Routes>
    </div>
  )
}

export default Main