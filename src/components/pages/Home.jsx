
// import Canvas_Feature from '../layout/Canvas_Feature'
// import Features from '../layout/Features'
// import Header from '../layout/Header'
// import Hero_Section from '../layout/Hero_Section'

// const Home = () => {
//   const row1 = [
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
//   ];


//   return (
//     <div className=''>
      
//       <Header/>
//       <Hero_Section/>
      
//       <Features/>
//   <Canvas_Feature/>
 
//   <div className="w-screen h-screen flex items-center justify-center text-black">
//       <div className="w-full flex flex-col items-center justify-center">
//         <h1 className="text-3xl font-medium mb-2 text-[#02203c]">With Great Outcomes.</h1>
//         <p className="text-lg font-light mb-10 text-[#7c8e9a]">Our customers have gotten offers from awesome companies.</p>
//         <div className="w-[1200px] overflow-hidden mask-image-linear-gradient">
//           <div className="flex animate-marquee whitespace-nowrap">
//             {row1.map((el, index) => (
//               <div key={index} className="flex items-center justify-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[clamp(1rem,1rem+3vmin,3rem)]">
//                 <img
//                   src={el}
//                   alt=""
//                   className="object-contain w-full h-full rounded-lg p-5 shadow-md aspect-[16/9]"
//                 />
//               </div>
//             ))}
//           </div>
       
//         </div>
        
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Home
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
const Home = () => {

  return (
    <div className=' overflow-x-0'>
      <Header/>
      <Hero_Section_V2/>
      <Features_V2/>
      {/* <Hero_Section/> */}
      {/* <Features/> */}
      <IndustryTabs/>
      {/* <Canvas_Feature/> */}
  <ValuesSection/>
 <Client_Carousel/>
 <CallToAction/>
 <Footer/>
    </div>
  )
}

export default Home