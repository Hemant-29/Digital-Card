import { useState } from 'react'
import './App.css'
import Image from "./components/image.jsx";
import MainBody from "./components/mainBody.jsx";
import FooterSection from "./components/footer.jsx";

function App() {
  return (
  <div className='app-root'>
    <Image />
    <MainBody />
    <FooterSection />
  </div>)
}

export default App
