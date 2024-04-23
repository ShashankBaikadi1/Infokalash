
import './App.css'
import Home from './components/pages/Home'
import { ChakraProvider } from '@chakra-ui/react'
function App() {


  return (
    <div  className=''>
        <ChakraProvider>
    <Home/>
    </ChakraProvider>
    </div>
  )
}

export default App
