 
import { useEffect, useState } from 'react'
import './App.css'
import About from './Components/About'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import Projects from './Components/Projects'
import Services from './Components/Services'
import Loader from './Components/Loader'
import Contact from './Components/Contact'


function App() {

  
const [loading, setLoading] = useState(false)

useEffect(() => {
setLoading(true)
setTimeout(() => {
  setLoading(false)
},1000)
},[])


  return (
    <>
   {
    loading ? 
<Loader/>
    :

    <div className="bg-slate-950">
      
    <Nav/>
    <Banner/>
    <About/>
    <Services/>
    <Projects/>
   <Contact/>
    <Footer/>
 
    </div>
    
   }


          </>
  )
}

export default App
