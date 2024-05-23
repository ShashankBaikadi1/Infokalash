
import CallToAction from '../layout/CallToAction'
import Canvas_Feature from '../layout/Canvas_Feature'
import Client_Carousel from '../layout/Client_Carousel'
import Features from '../layout/Features'
import Features_V2 from '../layout/Features_V2'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
// import Hero_Section from '../layout/Hero_Section'
import Hero_Section_V2 from '../layout/Hero_Section_V2'
import IndustryTabs from '../layout/Tab'
import ValuesSection from '../../components/layout/ValuesSection'
import Hero_Section_V3 from '../layout/Hero_Section_V3'
import CarouselComponent from '../layout/CarouselComponent'
import CarouselFeature from '../layout/CarouselFeature'

// import { StickySlider } from '../layout/StickySlider'
const Home = () => {

  return (
    <div>
      <Header/>
      <Hero_Section_V3/>
      {/* <Hero_Section_V2/> */}
      {/* <CarouselFeature/> */}
      <ValuesSection/>

      <Features_V2/>
     
      <CarouselComponent />
   
      <div className=''>
      <IndustryTabs/>
      </div>
   


 <Client_Carousel/>
 <CallToAction/>
 <Footer/>
    </div>
  )
}

export default Home