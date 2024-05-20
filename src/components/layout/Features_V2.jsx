

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











//18/5
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import image1 from '../../assets/images/j1.jpg';
// import image2 from '../../assets/images/card2.png';
// import image3 from '../../assets/images/card3.png';
// import image4 from '../../assets/images/card4.png';
// import clientlogo from '../../assets/images/client-logo.png';

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
//       <div className="h-[90vh] w-[110vh] align-center card-container flex flex-col items-center mt-5 ">
//         <motion.div
//           // className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
//           className={`border border-1 h-24 w-[80vh] rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${
//             selectedCard === 1 ? 'border-blue-700' : 'bg-white'
//           }`}
//           onClick={() => handleCardClick(1)}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <div className="flex flex-col items-center w-full">
//             <div className="font-bold text-lg p-2 text-blue-700">Enterprise Master Data Management</div>
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
//           // className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
//           className={`border border-1 h-24 w-[80vh] rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${
//             selectedCard === 2 ? 'border-blue-700' : 'bg-white'
//           }`}
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
//           // className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
//           className={`border border-1 h-24 w-[80vh] rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${
//             selectedCard === 3 ? 'border-blue-700' : 'bg-white'
//           }`}
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
//           // className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
//           className={`border border-1 h-24 w-[80vh] rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${
//             selectedCard === 4 ? 'border-blue-700' : 'bg-white'
//           }`}
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
//       </div>
//       <div className="image-container flex  h-[65vh]  mt-5 w-[90vh] border border-blue-700 rounded-md ">
//         {selectedImage && <img src={selectedImage} alt="Selected Image" className="h-[60vh] ml-2 " />}
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Features_V2;










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



// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import image1 from '../../assets/images/j1.jpg';
// import image2 from '../../assets/images/card2.png';
// import image3 from '../../assets/images/card3.png';
// import image4 from '../../assets/images/card4.png';
// import clientlogo from '../../assets/images/client-logo.png';
// import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

// const Features_V2 = () => {
//   const [selectedImage, setSelectedImage] = useState(image1);
//   const [selectedCard, setSelectedCard] = useState(null);

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
//     <div className="h-screen w-full mt-12">
//       <div>
//         <img src={clientlogo} alt="Client Logo" className="ml-12 w-[200vh]" />
//       </div>
//       <div className="text-gray-700 font-bold mb-6 ml-[15vh] text-4xl mt-5">
//         Provide <span className="text-blue-700">trusted data</span> with less effort and more adoption
//       </div>
//       <div className="flex">
//         <div className="h-[90vh] w-[110vh] align-center card-container flex flex-col items-center mt-5">
//           {[
//             { id: 1, title: 'Enterprise Master Data Management', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur quisquam illum explicabo facilis sint possimus!' },
//             { id: 2, title: 'Intelligent Entity Matching using ML', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur quisquam illum explicabo facilis sint possimus!' },
//             { id: 3, title: 'State of the art data migration ETL pipeline', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur quisquam illum explicabo facilis sint possimus!' },
//             { id: 4, title: 'Scalable tech architecture', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur quisquam illum explicabo facilis sint possimus!' }
//           ].map(card => (
//             <motion.div
//               key={card.id}
//               className={`border-b-2 h-24 w-[80vh]  mb-4 flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out   ${
//                 selectedCard === card.id ? 'border-blue-700' : 'border-gray-300'
//               }`}
//               onClick={() => handleCardClick(card.id)}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               animate={selectedCard === card.id ? { y: -10 } : { y: 0 } }
//               transition={{ duration: 0.3 }} 
//             >
//               <div className="flex flex-col items-start w-full pl-4">
//                 <div className="font-bold text-lg p-2 text-blue-700">{card.title}</div>
//                 <motion.div
//                   className="text-sm text-gray-500 pr-2 pl-2 text-left"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={selectedCard === card.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {card.description}
//                 </motion.div>
//               </div>
//               {selectedCard === card.id ? <FaAngleUp className="mr-4" /> : <FaAngleDown className="mr-4" />}
//             </motion.div>
//           ))}
//         </div>
//         <div className="ml-8">
//           <img src={selectedImage} alt="Selected Feature" className="h-[50vh] w-[50vh] object-cover rounded-lg shadow-md" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features_V2;



// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import image1 from '../../assets/images/j1.jpg';
// import image2 from '../../assets/images/card2.png';
// import image3 from '../../assets/images/card3.png';
// import image4 from '../../assets/images/card4.png';
// import clientlogo from '../../assets/images/client-logo.png';
// import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

// const Features_V2 = () => {
//   const [selectedImage, setSelectedImage] = useState(image1);
//   const [selectedCard, setSelectedCard] = useState(null);

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
//     <div className="h-screen w-full mt-12">
//       <div>
//         <img src={clientlogo} alt="Client Logo" className="ml-12 w-[200vh]" />
//       </div>
//       <div className="text-gray-700 font-bold mb-6 ml-[15vh] text-4xl mt-5">
//         Provide <span className="text-blue-700">trusted data</span> with less effort and more adoption
//       </div>
//       <div className="flex">
//         <div className="h-[90vh] w-[110vh] align-center card-container flex flex-col items-center mt-5">
//           {[
//             { id: 1, title: 'Enterprise Master Data Management', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur quisquam illum explicabo facilis sint possimus!' },
//             { id: 2, title: 'Intelligent Entity Matching using ML', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur quisquam illum explicabo facilis sint possimus!' },
//             { id: 3, title: 'State of the art data migration ETL pipeline', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur quisquam illum explicabo facilis sint possimus!' },
//             { id: 4, title: 'Scalable tech architecture', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur quisquam illum explicabo facilis sint possimus!' }
//           ].map(card => (
//             <motion.div
//               key={card.id}
//               className={`h-24 w-[80vh] mb-4 flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out -translate-y-[50vh] ${
//                 selectedCard === card.id ? 'border border-blue-700 -translate-y-[50vh]' : 'border-b-2 border-gray-300 -translate-y-[50vh] '
//               }`}
//               onClick={() => handleCardClick(card.id)}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               animate={selectedCard === card.id ? { y: -10 } : { y: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="flex flex-col items-start w-full pl-4">
//                 <div className="font-bold text-lg p-2 text-blue-700">{card.title}</div>
//                 <motion.div
//                   className="text-sm text-gray-500 pr-2 pl-2 text-left"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={selectedCard === card.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {card.description}
//                 </motion.div>
//               </div>
//               {selectedCard === card.id ? <FaAngleUp className="mr-4" /> : <FaAngleDown className="mr-4" />}
//             </motion.div>
//           ))}
//         </div>
//         <div className="ml-8">
//           <img src={selectedImage} alt="Selected Feature" className="h-[50vh] w-[50vh] object-cover rounded-lg shadow-md" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features_V2;






// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import image1 from '../../assets/images/j1.jpg';
// import image2 from '../../assets/images/card2.png';
// import image3 from '../../assets/images/card3.png';
// import image4 from '../../assets/images/card4.png';
// import clientlogo from '../../assets/images/client-logo.png';
// import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

// const Features_V2 = () => {
//   const [selectedImage, setSelectedImage] = useState(image1);
//   const [selectedCard, setSelectedCard] = useState(null);

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
//     <>
//       <style>{`
//         .card-enter-active {
//           transition: all 0.3s ease-out;
//         }

//         .card-leave-active {
//           transition: all 0.4s ease-out;
//         }

//         .card-enter-from, .card-leave-to {
//           opacity: 0;
//           transform: translateY(25px);
//         }
//       `}</style>
//       <div className="h-screen w-full mt-12">
//         <div>
//           <img src={clientlogo} alt="Client Logo" className="ml-12 w-full max-w-[200vh]" />
//         </div>/
//         <div className="text-gray-700 font-bold mb-6 ml-[15vh] text-4xl mt-5">
//           Provide <span className="text-blue-700">trusted data</span> with less effort and more adoption
//         </div>
//         <div className="flex">
//           <div className="h-[90vh] w-[110vh] flex flex-col items-center mt-5">
//             {[
//               { id: 1, title: 'Enterprise Master Data Management', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur quisquam illum explicabo facilis sint possimus!' },
//               { id: 2, title: 'Intelligent Entity Matching using ML', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur quisquam illum explicabo facilis sint possimus!' },
//               { id: 3, title: 'State of the art data migration ETL pipeline', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur quisquam illum explicabo facilis sint possimus!' },
//               { id: 4, title: 'Scalable tech architecture', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur quisquam illum explicabo facilis sint possimus!' }
//             ].map(card => (
//               <motion.div
//                 key={card.id}
//                 className={`h-24 w-[80vh] rounded-lg shadow-md mb-4 flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out transform ${
//                   selectedCard === card.id ? 'border border-blue-700 scale-105' : 'border-b-2 border-gray-300'
//                 }`}
//                 onClick={() => handleCardClick(card.id)}
//                 initial="card-enter-from"
//                 animate={selectedCard === card.id ? "card-enter-active" : "card-leave-active"}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="flex flex-col items-start w-full pl-4">
//                   <div className="font-bold text-lg p-2 text-blue-700">{card.title}</div>
//                   <motion.div
//                     className="text-sm text-gray-500 pr-2 pl-2 text-left"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={selectedCard === card.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {card.description}
//                   </motion.div>
//                 </div>
//                 {selectedCard === card.id ? <FaAngleUp className="mr-4" /> : <FaAngleDown className="mr-4" />}
//               </motion.div>
//             ))}
//           </div>
//           <div className="ml-8">
//             <img src={selectedImage} alt="Selected Feature" className="h-[50vh] w-[50vh] object-cover rounded-lg shadow-md" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Features_V2;



import React, { useState } from 'react';
import image1 from '../../assets/images/card1.png'; // adjust the path as needed
import image2 from '../../assets/images/card2.png'; // adjust the path as needed
import image3 from '../../assets/images/card3.png'; // adjust the path as needed
import image4 from '../../assets/images/card4.png'; // adjust the path as needed
import clientlogo from '../../assets/images/client-logo.png'; // adjust the path as needed
const features = [
  {
    id: 0,
    title: "Enterprise Master Data Management",
    description: "Search across your data universe using natural language, business context or using SQL syntax.",
    img: image1
  },
  {
    id: 1,
    title: "Intelligent Entity Matching using ML",
    description: "Visualize column-level relationships from your data sources to your BI dashboards.",
    img: image2
  },
  {
    id: 2,
    title: "State of the art data migration ETL pipeline",
    description: "Build trust in data through effortless compliance, context-rich trust signals, and role-based access controls.",
    img: image3
  },
  {
    id: 3,
    title: "Scalable tech architecture",
    description: "Create a marketplace of complete data products, curated for each domain team.",
    img: image4
  },
  {
    id: 4,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    description: "Create a marketplace of complete data products, curated for each domain team.",
    img: image4
  },
  {
    id: 5,
    title: " Lorem ipsum dolor sit amet.",
    description: "Create a marketplace of complete data products, curated for each domain team.",
    img: image4
  },

];

const FeatureList = () => {
  const [selectedFeature, setSelectedFeature] = useState(0); // Changed from 1 to 0

  const toggleFeature = (id) => {
    setSelectedFeature(selectedFeature === id ? null : id);
  };
 

  return (
    <div className="container">
              <div>
          <img src={clientlogo} alt="Client Logo" className="ml-12 w-full max-w-[200vh]" />
        </div>
             <div className="text-gray-700 font-bold mb-6 ml-[7vh] text-4xl mt-5">
          Provide <span className="text-blue-700">trusted data</span> with less effort and more adoption
         </div>
      <div className="flex gap-2 ">
      <div className="flex w-[vh] overflow-hidden rounded-[px] ml-12 ">
          <div className="relative h-full w-[100vh] flex">
            <div className="relative h-full w-[90vh] flex-none ml-5">
              {/* bg-[#EBECFC1A] */}
              {features.map((feature, index) => (
                <div key={feature.id} className={`border  ${selectedFeature === feature.id ? 'border-blue-300 rounded-[6px] w-[90vh]' : 'border-t-transparent'} ease-in-expo duration-3000`}>
                  <div
                    id={`home-product-${feature.id}`}
                    className={`py-5 px-4 p1 !font-bold cursor-pointer flex items-center justify-between ${selectedFeature === feature.id ? 'text-blue-600' : 'text-gray-600'}`}
                    onClick={() => toggleFeature(feature.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-5 flex-none">{String(index + 1).padStart(2, '0')}</div>
                      <div>{feature.title}</div>
                    </div>
                  
                  </div>
                  <div className={`max-h-0 overflow-hidden ${selectedFeature === feature.id ? 'collapse-transition-open ease-out duration-1500 translate-y-0 max-h-[240px]' : '-translate-y-2 -mb-2 lg:mb-0'}`}>
                    <div>
                      <div className="px-4 mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-5 flex-none"></div>
                          <div className="p3">{feature.description}</div>
                        </div>
                      </div>
                      {selectedFeature === feature.id && (
                        <div className="px-6 overflow-hidden lg:hidden">
                          <img
                            className="shadow-sm"
                            src={feature.img}
                            alt={feature.title}
                            width="347"
                            height="176"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {selectedFeature !== null && (
          <div className="flex-  bg-white border border-blue-300 overflow-hidden hidden lg:flex relative h-[465px] flex-none " style={{ borderRadius: '6px 6px 0px 0px', aspectRatio: '610/406' }}>
            <div className="flex-1 h-full pt-4 px-2 overflow-hidden hidden lg:flex absolute w-full" style={{ background: 'rgba(235, 236, 252, 0.1)' }}>
              {/* <img className="shadow-sm w-full h-auto mt-auto" src={features[selectedFeature].img} loading="lazy" alt={features[selectedFeature].title} width="644" height="327" /> */}
              <img className="shadow-sm w-full h-auto mt-auto" src={features[selectedFeature].img} loading="lazy" alt={features[selectedFeature].title} width="644" height="327" />
            </div>
          </div>
        )}
      </div>
   
    </div>
  );
};

export default FeatureList;










