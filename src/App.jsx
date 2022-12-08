import './App.css'
import Banner from './components/Banner'
import Battery from './components/Battery'
import Design from './components/Design'
import Footer from './components/Footer'
import Overview from './components/Overview'
import Products from './components/Products'
import SignUp from './components/SignUp'
import Sliders from './components/Sliders'

import Aos from 'aos'
import 'aos/dist/aos.css'



function App() {
    Aos.init({
      duration: 2500,
      delay: 400,
    })
  return (
    <div className='App'>
      <Banner />
      <Sliders />
      <Overview />
      <Design />
      <Battery />
      <Products />
      <SignUp />
      <Footer />
    </div>
  )
}

export default App
