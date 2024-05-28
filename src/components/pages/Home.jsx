// import CallToAction from '../layout/CallToAction'
// import Client_Carousel from '../layout/Client_Carousel'
// import Features_V2 from '../layout/Features_V2'
// import Footer from '../layout/Footer'
// import Header from '../layout/Header'
// import IndustryTabs from '../layout/Tab'
// import ValuesSection from '../../components/layout/ValuesSection'
// import Hero_Section_V3 from '../layout/Hero_Section_V3'
// import CarouselComponent from '../layout/CarouselComponent'
// import Trial from '../layout/Trial'

// const Home = () => {
//   return (
//     <div className='container mx-auto'>
//       <Header/>
//       <Hero_Section_V3/>
//       <ValuesSection/>
//       <Features_V2/>
//       <CarouselComponent />
//       <IndustryTabs/>
//       <Client_Carousel/>
//       <CallToAction/>
//       <Footer/>
    
//     </div>
//   )
// }

// export default Home

import CallToAction from '../layout/CallToAction'
import Client_Carousel from '../layout/Client_Carousel'
import Features_V2 from '../layout/Features_V2'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import IndustryTabs from '../layout/Tab'
import ValuesSection from '../../components/layout/ValuesSection'
import Hero_Section_V3 from '../layout/Hero_Section_V3'
import CarouselComponent from '../layout/CarouselComponent'
import SolutionsSection from '../layout/SolutionsSections'
import Tabs from '../md/Tabs'
// import Trial from '../layout/Trial'

const Home = () => {
  return (
    <div className=''>
      <Header/>
      <Hero_Section_V3/>
      <ValuesSection/>
      <Features_V2/>
      <SolutionsSection/>
      <CarouselComponent />
      <div className="md:hidden ">
        <IndustryTabs />
      </div>
{/* <Tabs/> */}
      <Client_Carousel/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home