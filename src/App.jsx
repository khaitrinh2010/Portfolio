import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "@/pages/Home.jsx";
import NotFound from "@/pages/NotFound.jsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
