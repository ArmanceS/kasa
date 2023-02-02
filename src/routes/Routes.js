import React from "react"
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from "../pages/Home/Home"
import Housing from "../pages/Housing/Housing"
import Error from "../pages/Error/Error"
import About from "../pages/About/About"
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function RoutesAndPaths() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/housing/:id' element={<Housing />}/>
                <Route path='*' element={<Error />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )

}