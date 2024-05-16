import { Box, Button, Heading,  Text,  Image, Card,  CardBody, CardFooter, Divider, Stack,ButtonGroup} from "@chakra-ui/react";
import{ AnimationComponent,AnimationTwo,AnimationThree }from "../AnimationComponent";

const Features = () => {
  return (
    <div className=' mt-12 h-[230vh] w-full '>

        <div className="pt-20">
    <div className="text-center font-bold text-4xl  ">
   All the capabilities, none of the firefighting
    </div>
<div className="text-center font-semibold text-lg text-gray-600 pt-8 ">
    Automate and control end-to-end data pipelines - from combining raw data to driving last mile
    </div>

    <div className="text-center font-semibold text-lg text-gray-600 ">
    business actions - all within one intuitive, zero maintenance platform.
    </div>
    </div>



{/* 
    <Card >
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      height={'60vh'}
      width={'60vh'}
    />
   
  </CardBody>

</Card> */}


<div className="flex">
<div className="bg w-[80vh] h-[30vh] mt-40 ml-[30vh]" >
    <div className="font-semibold text-3xl text-gray-600 ">
Extract data from anywhere
</div>

<div className="pt-5 font-semibold text-lg text-gray-600 ">
Instantly connect and read data from 150+ sources including


</div>
<div className="font-semibold text-lg text-gray-600">
SaaS apps and databases, and precisely control pipeline
</div>
<div className="font-semibold text-lg text-gray-600">
schedules down to the minute.
</div>
</div>

{/* <div className="h-[50vh] w-[50vh]  border bg-gray-400 mt-20 rounded-md ml-[30vh]">

</div> */}
<AnimationThree/>
</div>





<div className="flex">


{/* <div className="h-[50vh] w-[50vh]  border bg-gray-400 mt-20 rounded-md ml-[30vh]">

</div> */}
<AnimationTwo/>

<div className="bg w-[80vh] h-[30vh] mt-40 ml-[30vh]" >
    <div className="font-semibold text-3xl text-gray-600 ">
    Load data how you need
</div>

<div className="pt-5 font-semibold text-lg text-gray-600 ">
Load data into the warehouse in near real-time and control how


</div>
<div className="font-semibold text-lg text-gray-600">
it lands with preload transformations, automated schema
</div>
<div className="font-semibold text-lg text-gray-600">
mapping, and keep data updated with CDC.
</div>
</div>






</div>



<div className="flex">
<div className="bg- w-[80vh] h-[30vh] mt-40 ml-[30vh]" >
    <div className="font-semibold text-3xl text-gray-600 ">
    Transform data for analytics
</div>

<div className="pt-5 font-semibold text-lg text-gray-600 ">
Prepare data for analytics seamlessly as it lands in the


</div>
<div className="font-semibold text-lg text-gray-600">
warehouse through powerful data models and workflows that
</div>
<div className="font-semibold text-lg text-gray-600">
run in sync with your pipelines.
</div>
</div>

{/* <div className="h-[50vh] w-[50vh]  border  mt-20 rounded-md ml-[30vh]">

</div> */}
<AnimationComponent/>
</div>




    </div>
  )
}

export default Features
