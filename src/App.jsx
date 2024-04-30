
import './App.css'

import Home from './components/pages/Home'
import { ChakraProvider } from '@chakra-ui/react'

function App() {


  return (
   <div  className=''>
     <ChakraProvider>
    <Home/>
    </ChakraProvider>
          {/* <Card_Title data={Card_Title_Data} className={Card_Title_Data.className} />
          <Card_Subtitle data={Card_Subtitle_Data} className={Card_Subtitle_Data.className} />
          <Card_Inputs data={Card_Inputs_Data} className={Card_Inputs_Data.classname} /> */}
          
    </div>
  )
}

export default App
