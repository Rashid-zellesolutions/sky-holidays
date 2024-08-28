import { useState } from 'react'
import { Routes, Route } from 'react-router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderBar from './components/header'
import MainSlider from './components/mainSlider'
import SecondSection from './components/SecondCard'
import MainSearchBar from './utils/mainSearchBar'
import PackageDetails from './Pages/PackageDetails/PackageDetails'
import { IoIosArrowUp } from "react-icons/io";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HeaderBar/>
      <Routes>
      <Route path='/package-details' element={<PackageDetails />} />
      </Routes>
      <p className='take-to-top-btn'>
          <IoIosArrowUp size={30} />
      </p>
    </div>
  )
}

export default App
