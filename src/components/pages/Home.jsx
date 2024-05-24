
import CallToAction from '../layout/CallToAction'

import Client_Carousel from '../layout/Client_Carousel'

import Features_V2 from '../layout/Features_V2'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
// import Hero_Section from '../layout/Hero_Section'

import IndustryTabs from '../layout/Tab'
import ValuesSection from '../../components/layout/ValuesSection'
import Hero_Section_V3 from '../layout/Hero_Section_V3'
import CarouselComponent from '../layout/CarouselComponent'


const Home = () => {

  return (
    <div>
      <Header/>
      <Hero_Section_V3/>

      <ValuesSection/>

      <Features_V2/>
  

     
      <CarouselComponent />
   
  
      <IndustryTabs/>

   


 <Client_Carousel/>
 <CallToAction/>
 <Footer/>
    </div>
  )
}

export default Home