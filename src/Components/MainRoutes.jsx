import React from 'react'
import {Route,Routes} from "react-router-dom";
import { CheckoutPage } from '../Pages/CheckoutPage';
import {FilterPage} from '../Pages/FilterPage';

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/filterpage" element={<FilterPage/>}></Route>
        <Route path='/checkoutpage' element={<CheckoutPage/>}></Route>
    </Routes>
  )
}
