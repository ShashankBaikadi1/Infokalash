

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// // import image1 from '../../assets/images/j1.png';
// import image1 from '../../assets/images/j1.jpg';
// import image2 from '../../assets/images/card2.png';
// import image3 from '../../assets/images/card3.png';
// import image4 from '../../assets/images/card4.png';
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// const Features_V2 = () => {
//   const [selectedImage, setSelectedImage] = useState(image1);
//   const [selectedCard, setSelectedCard] = useState(1);

//   useEffect(() => {
//     setSelectedImage(image1);
//   }, []);

//   const handleCardClick = (cardNumber) => {
//     switch (cardNumber) {
//       case 1:
//         setSelectedImage(image1);
//         break;
//       case 2:
//         setSelectedImage(image2);
//         break;
//       case 3:
//         setSelectedImage(image3);
//         break;
//       case 4:
//         setSelectedImage(image4);
//         break;
//       default:
//         setSelectedImage(null);
//     }
//     setSelectedCard(cardNumber);
//   };

//   return (
  
//     <div className="h-screen w-full mt-12 ">
//       <div className="text-gray-700 font-bold mb-6 ml-16 text-4xl ">Provide <span className="text-blue-700">trusted data</span> with less effort and more adoption</div>
//       <div className='flex bg-red-200'>
   
//       {/* <div className="h-[90vh] w-[120vh] align-center card-container flex flex-col items-center justify-center bg-green-200"> */}
//       <div className="h-[90vh] w-[120vh] align-center card-container flex flex-col items-center mt-5 bg-green-200">

//         <motion.div
//           className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
//           onClick={() => handleCardClick(1)}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <div className="flex flex-col items-center w-full">
//             {/* <div className='fle x'> */}
//             <div className="font-bold text-lg p-2 text-violet-500">Enterprise Master Data Management</div>
//            {/* <div className=''> <MdOutlineKeyboardArrowDown  /></div></div> */}
//             <div
//               className={`text-sm text-gray-500 pr-2 pl-2 text-center transition-all duration-700 ease-out ${
//                 selectedCard === 1 ? 'max-h-[6rem]' : 'max-h-0 overflow-hidden'
//               }`}
//             >
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur
//               quisquam illum explicabo facilis sint possimus!.
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
//           onClick={() => handleCardClick(2)}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <div className="flex flex-col items-center w-full">
//             <div className="font-bold p-2 text-violet-500">Intelligent Entity Matching using ML</div>
//             <div
//               className={`text-sm text-gray-500 pr-2 pl-2 text-center transition-all duration-700 ease-out ${
//                 selectedCard === 2 ? 'max-h-[6rem]' : 'max-h-0 overflow-hidden'
//               }`}
//             >
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur
//               quisquam illum explicabo facilis sint possimus!.
//             </div>
//           </div>
//         </motion.div>




//         <motion.div
//           className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
//           onClick={() => handleCardClick(3)}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <div className="flex flex-col items-center w-full">
//             <div className="font-bold p-2 text-violet-500">State of the art data migration ETL pipeline</div>
//             <div
//               className={`text-sm text-gray-500 pr-2 pl-2 text-center transition-all duration-700 ease-out ${
//                 selectedCard === 3 ? 'max-h-[6rem]' : 'max-h-0 overflow-hidden'
//               }`}
//             >
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur
//               quisquam illum explicabo facilis sint possimus!.
//             </div>
//           </div>
//         </motion.div>





//         <motion.div
//           className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
//           onClick={() => handleCardClick(4)}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <div className="flex flex-col items-center w-full">
//             <div className="font-bold p-2 text-violet-500">Scalable tech stack expertise for Modern enterprise data need</div>
//             <div
//               className={`text-sm text-gray-500 pr-2 pl-2 text-center transition-all duration-700 ease-out ${
//                 selectedCard === 4 ? 'max-h-[6rem]' : 'max-h-0 overflow-hidden'
//               }`}
//             >
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur
//               quisquam illum explicabo facilis sint possimus!.
//             </div>
//           </div>
//         </motion.div>





//         {/* Add similar logic for the remaining cards */}
//       </div>
//       <div className="image-container flex items-center justify-center h-[75vh] mt-5 w-[110vh] border border-blue-700 ">
//         {selectedImage && <img src={selectedImage} alt="Selected Image" className="h-[60vh]" />}
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Features_V2;











// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// // import image1 from '../../assets/images/j1.png';
// import image1 from '../../assets/images/j1.jpg';
// import image2 from '../../assets/images/card2.png';
// import image3 from '../../assets/images/card3.png';
// import image4 from '../../assets/images/card4.png';
// import clientlogo from '../../assets/images/client-logo.png';
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// const Features_V2 = () => {
//   const [selectedImage, setSelectedImage] = useState(image1);
//   const [selectedCard, setSelectedCard] = useState(1);

//   useEffect(() => {
//     setSelectedImage(image1);
//   }, []);

//   const handleCardClick = (cardNumber) => {
//     switch (cardNumber) {
//       case 1:
//         setSelectedImage(image1);
//         break;
//       case 2:
//         setSelectedImage(image2);
//         break;
//       case 3:
//         setSelectedImage(image3);
//         break;
//       case 4:
//         setSelectedImage(image4);
//         break;
//       default:
//         setSelectedImage(null);
//     }
//     setSelectedCard(cardNumber);
//   };

//   return (
  
//     <div className="h-screen w-full mt-12 ">
//       <div>
//         <img src={clientlogo} alt="Selected Image" className=" ml-12 w-[200vh]" />
//       </div>
//       <div className="text-gray-700 font-bold mb-6 ml-[15vh] text-4xl  mt-5">Provide <span className="text-blue-700">trusted data</span> with less effort and more adoption</div>
//       <div className='flex '>
   
//       {/* <div className="h-[90vh] w-[120vh] align-center card-container flex flex-col items-center justify-center bg-green-200"> */}
//       <div className="h-[90vh] w-[110vh] align-center card-container flex flex-col items-center mt-5 ">

//         <motion.div
//           className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
//           onClick={() => handleCardClick(1)}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <div className="flex flex-col items-center w-full">
//             {/* <div className='fle x'> */}
//             <div className="font-bold text-lg p-2 text-blue-700">Enterprise Master Data Management</div>
//            {/* <div className=''> <MdOutlineKeyboardArrowDown  /></div></div> */}
//             <div
//               className={`text-sm text-gray-500 pr-2 pl-2 text-center transition-all duration-700 ease-out ${
//                 selectedCard === 1 ? 'max-h-[6rem]' : 'max-h-0 overflow-hidden'
//               }`}
//             >
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur
//               quisquam illum explicabo facilis sint possimus!.
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
//           onClick={() => handleCardClick(2)}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <div className="flex flex-col items-center w-full">
//             <div className="font-bold p-2 text-blue-700">Intelligent Entity Matching using ML</div>
//             <div
//               className={`text-sm text-gray-500 pr-2 pl-2 text-center transition-all duration-700 ease-out ${
//                 selectedCard === 2 ? 'max-h-[6rem]' : 'max-h-0 overflow-hidden'
//               }`}
//             >
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur
//               quisquam illum explicabo facilis sint possimus!.
//             </div>
//           </div>
//         </motion.div>




//         <motion.div
//           className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
//           onClick={() => handleCardClick(3)}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <div className="flex flex-col items-center w-full">
//             <div className="font-bold p-2 text-blue-700">State of the art data migration ETL pipeline</div>
//             <div
//               className={`text-sm text-gray-500 pr-2 pl-2 text-center transition-all duration-700 ease-out ${
//                 selectedCard === 3 ? 'max-h-[6rem]' : 'max-h-0 overflow-hidden'
//               }`}
//             >
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur
//               quisquam illum explicabo facilis sint possimus!.
//             </div>
//           </div>
//         </motion.div>





//         <motion.div
//           className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
//           onClick={() => handleCardClick(4)}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <div className="flex flex-col items-center w-full">
//             <div className="font-bold p-2 text-blue-700">Scalable tech stack expertise for Modern enterprise data need</div>
//             <div
//               className={`text-sm text-gray-500 pr-2 pl-2 text-center transition-all duration-700 ease-out ${
//                 selectedCard === 4 ? 'max-h-[6rem]' : 'max-h-0 overflow-hidden'
//               }`}
//             >
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur
//               quisquam illum explicabo facilis sint possimus!.
//             </div>
//           </div>
//         </motion.div>





//         {/* Add similar logic for the remaining cards */}
//       </div>
//       <div className="image-container flex  h-[65vh] mt-5 w-[90vh] border border-blue-700 ">
//         {selectedImage && <img src={selectedImage} alt="Selected Image" className="h-[60vh] " />}
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Features_V2;












import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import image1 from '../../assets/images/j1.jpg';
import image2 from '../../assets/images/card2.png';
import image3 from '../../assets/images/card3.png';
import image4 from '../../assets/images/card4.png';
import clientlogo from '../../assets/images/client-logo.png';

const Features_V2 = () => {
  const [selectedImage, setSelectedImage] = useState(image1);
  const [selectedCard, setSelectedCard] = useState(1);

  useEffect(() => {
    setSelectedImage(image1);
  }, []);

  const handleCardClick = (cardNumber) => {
    switch (cardNumber) {
      case 1:
        setSelectedImage(image1);
        break;
      case 2:
        setSelectedImage(image2);
        break;
      case 3:
        setSelectedImage(image3);
        break;
      case 4:
        setSelectedImage(image4);
        break;
      default:
        setSelectedImage(null);
    }
    setSelectedCard(cardNumber);
  };

  return (
    <div className="h-screen w-full mt-12 ">
      <div>
        <img src={clientlogo} alt="Selected Image" className=" ml-12 w-[200vh]" />
      </div>
      <div className="text-gray-700 font-bold mb-6 ml-[15vh] text-4xl  mt-5">Provide <span className="text-blue-700">trusted data</span> with less effort and more adoption</div>
      <div className='flex '>
      <div className="h-[90vh] w-[110vh] align-center card-container flex flex-col items-center mt-5 ">
        <motion.div
          // className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          className={`border border-1 h-24 w-[80vh] rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${
            selectedCard === 1 ? 'border-blue-700' : 'bg-white'
          }`}
          onClick={() => handleCardClick(1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="flex flex-col items-center w-full">
            <div className="font-bold text-lg p-2 text-blue-700">Enterprise Master Data Management</div>
            <div
              className={`text-sm text-gray-500 pr-2 pl-2 text-center transition-all duration-700 ease-out ${
                selectedCard === 1 ? 'max-h-[6rem]' : 'max-h-0 overflow-hidden'
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur
              quisquam illum explicabo facilis sint possimus!.
            </div>
          </div>
        </motion.div>

        <motion.div
          // className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          className={`border border-1 h-24 w-[80vh] rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${
            selectedCard === 2 ? 'border-blue-700' : 'bg-white'
          }`}
          onClick={() => handleCardClick(2)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="flex flex-col items-center w-full">
            <div className="font-bold p-2 text-blue-700">Intelligent Entity Matching using ML</div>
            <div
              className={`text-sm text-gray-500 pr-2 pl-2 text-center transition-all duration-700 ease-out ${
                selectedCard === 2 ? 'max-h-[6rem]' : 'max-h-0 overflow-hidden'
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur
              quisquam illum explicabo facilis sint possimus!.
            </div>
          </div>
        </motion.div>

        <motion.div
          // className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          className={`border border-1 h-24 w-[80vh] rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${
            selectedCard === 3 ? 'border-blue-700' : 'bg-white'
          }`}
          onClick={() => handleCardClick(3)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="flex flex-col items-center w-full">
            <div className="font-bold p-2 text-blue-700">State of the art data migration ETL pipeline</div>
            <div
              className={`text-sm text-gray-500 pr-2 pl-2 text-center transition-all duration-700 ease-out ${
                selectedCard === 3 ? 'max-h-[6rem]' : 'max-h-0 overflow-hidden'
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur
              quisquam illum explicabo facilis sint possimus!.
            </div>
          </div>
        </motion.div>

        <motion.div
          // className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          className={`border border-1 h-24 w-[80vh] rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${
            selectedCard === 4 ? 'border-blue-700' : 'bg-white'
          }`}
          onClick={() => handleCardClick(4)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="flex flex-col items-center w-full">
            <div className="font-bold p-2 text-blue-700">Scalable tech stack expertise for Modern enterprise data need</div>
            <div
              className={`text-sm text-gray-500 pr-2 pl-2 text-center transition-all duration-700 ease-out ${
                selectedCard === 4 ? 'max-h-[6rem]' : 'max-h-0 overflow-hidden'
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur
              quisquam illum explicabo facilis sint possimus!.
            </div>
          </div>
        </motion.div>
      </div>
      <div className="image-container flex  h-[65vh] mt-5 w-[90vh] border border-blue-700 ">
        {selectedImage && <img src={selectedImage} alt="Selected Image" className="h-[60vh] " />}
      </div>
      </div>
    </div>
  );
};

export default Features_V2;










// Import the necessary components and libraries
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import image1 from '../../assets/images/j1.jpg';
// import image2 from '../../assets/images/card2.png';
// import image3 from '../../assets/images/card3.png';
// import image4 from '../../assets/images/card4.png';
// import clientlogo from '../../assets/images/client-logo.png';
// import { FaAngleDown } from 'react-icons/fa';

// // Define the Features_V2 component
// const Features_V2 = () => {
//   // State variables to keep track of the selected image, card, and whether to show the description
//   const [selectedImage, setSelectedImage] = useState(image1);
//   const [selectedCard, setSelectedCard] = useState(1);
//   const [showDescription, setShowDescription] = useState(false);

//   // When the component mounts, set the initial selected image
//   useEffect(() => {
//     setSelectedImage(image1);
//   }, []);

//   // Function to handle card clicks
//   const handleCardClick = (cardNumber) => {
//     // Switch statement to set the selected image based on the card number
//     switch (cardNumber) {
//       case 1:
//         setSelectedImage(image1);
//         break;
//       case 2:
//         setSelectedImage(image2);
//         break;
//       case 3:
//         setSelectedImage(image3);
//         break;
//       case 4:
//         setSelectedImage(image4);
//         break;
//       default:
//         setSelectedImage(null);
//     }
//     // Update the selected card and toggle the show description state
//     setSelectedCard(cardNumber);
//     setShowDescription(!showDescription);
//   };

//   // Render the component
//   return (
//     <div className="h-screen w-full mt-12 ">
//       {/* Display the client logo */}
//       <div>
//         <img src={clientlogo} alt="Selected Image" className=" ml-12 w-[200vh]" />
//       </div>
//       {/* Display the heading text */}
//       <div className="text-gray-700 font-bold mb-6 ml-[15vh] text-4xl  mt-5">
//         Provide <span className="text-blue-700">trusted data</span> with less effort and more adoption
//       </div>
//       <div className='flex '>
//         {/* Container for the cards */}
//         <div className="h-[90vh] w-[110vh] align-center card-container flex flex-col items-center mt-5 ">
//           {/* Card 1 */}
//           <motion.div
//             className={`border border-1 h-24 w-[80vh] rounded-lg shadow-md mb-4 flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${
//               selectedCard === 1 && showDescription ? 'bg-blue-700 text-white' : 'bg-white'
//             }`}
//             onClick={() => handleCardClick(1)}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <div className="flex flex-col items-start w-full pl-4">
//               <div className="font-bold text-lg p-2">Enterprise Master Data Management</div>
//               <div
//                 className={`text-sm pr-2 pl-2 text-left transition-all duration-700 ease-out ${
//                   selectedCard === 1 ? 'max-h-[6rem]' : 'max-h-0 overflow-hidden'
//                 }`}
//               >
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur
//                 quisquam illum explicabo facilis sint possimus!.
//               </div>
//             </div>
//             {/* Arrow icon that rotates when description is shown */}
//             <FaAngleDown
//               className={`mr-4 transition-transform duration-700 ease-out ${
//                 showDescription ? 'rotate-180' : ''
//               }`}
//             />
//           </motion.div>

//           {/* Repeat for other cards */}
//         </div>
//         {/* Container for the selected image */}
//         <div className="image-container flex  h-[65vh] mt-5 w-[90vh] border border-blue-700 ">
//           {selectedImage && <img src={selectedImage} alt="Selected Image" className="h-[60vh] " />}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Export the component
// export default Features_V2;