
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import image1 from '../../assets/images/j1.png';
// import image2 from '../../assets/images/card2.png';
// import image3 from '../../assets/images/card3.png';
// import image4 from '../../assets/images/card4.png';

// const Features_V2 = () => {
//   const [selectedImage, setSelectedImage] = useState(image1);

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
//   };

//   return (
//     <div className="h-screen w-full flex">
//       {/* bg-red-200 */}
//       <div className="h-[90vh]  w-[120vh] align-center card-container flex flex-col items-center justify-center ">
        
//         <motion.div
//           className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4  items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
//           onClick={() => handleCardClick(1)}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
// <div className=''>
//     <div className='font-bold text-lg p-2 text-violet-500'>Enterprise Master Data Management</div>
//     <p className='text-sm text-gray-500 p-2'>
//    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur quisquam illum explicabo facilis sint possimus!.</p>
// </div>
//         </motion.div>

//         <motion.div
//           className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
//           onClick={() => handleCardClick(2)}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
// <div className=''>
//     <div className='font-bold p-2 text-violet-500'>Intelligent Entity Matching using ML</div>
//     <p className='text-sm text-gray-500 p-2'>
//    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur quisquam illum explicabo facilis sint possimus!.</p>
// </div>
//         </motion.div>

//         <motion.div
//           className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
//           onClick={() => handleCardClick(3)}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
// <div className=''>
//     <div className='font-bold p-2 text-violet-500'>State of the art data migration ETL pipeline</div>
//     <p className='text-sm text-gray-500 p-2'>
//    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur quisquam illum explicabo facilis sint possimus!.</p>
// </div>
//         </motion.div>

//         <motion.div
//           className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
//           onClick={() => handleCardClick(4)}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
// <div className=''>
//     <div className='font-bold  p-2  text-violet-500'>Scalable tech stack expertise for Modern enterprise data need</div>
//     <p className='text-sm text-gray-500 p-2'>
//    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur quisquam illum explicabo facilis sint possimus!.</p>
// </div>
//         </motion.div>
//       </div>
//       <div className=" image-container flex items-center justify-center h-[90vh] w-[120vh]">
//       {/* bg-green-200 */}
//         {selectedImage && <img src={selectedImage} alt="Selected Image" className='h-[80vh]' />}
//       </div>
//     </div>
//   );
// };

// export default Features_V2;





// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import image1 from '../../assets/images/j1.png';
// import image2 from '../../assets/images/card2.png';
// import image3 from '../../assets/images/card3.png';
// import image4 from '../../assets/images/card4.png';

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
//     <div className="h-screen w-full flex">
//       <div className="h-[90vh] w-[120vh] align-center card-container flex flex-col items-center justify-center">
//         <motion.div
//           className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
//           onClick={() => handleCardClick(1)}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <div className="">
//             <div className="font-bold text-lg p-2 text-violet-500">Enterprise Master Data Management</div>
//             {selectedCard === 1 && (
//               <p className="text-sm text-gray-500 p-2">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur
//                 quisquam illum explicabo facilis sint possimus!.
//               </p>
//             )}
//           </div>
//         </motion.div>

//         <motion.div
//           className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
//           onClick={() => handleCardClick(2)}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <div className="">
//             <div className="font-bold p-2 text-violet-500">Intelligent Entity Matching using ML</div>
//             {selectedCard === 2 && (
//               <p className="text-sm text-gray-500 p-2">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur
//                 quisquam illum explicabo facilis sint possimus!.
//               </p>
//             )}
//           </div>
//         </motion.div>

//         {/* Add similar logic for the remaining cards */}
//       </div>
//       <div className="image-container flex items-center justify-center h-[90vh] w-[120vh]">
//         {selectedImage && <img src={selectedImage} alt="Selected Image" className="h-[80vh]" />}
//       </div>
//     </div>
//   );
// };

// export default Features_V2;




// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import image1 from '../../assets/images/j1.png';
// import image2 from '../../assets/images/card2.png';
// import image3 from '../../assets/images/card3.png';
// import image4 from '../../assets/images/card4.png';

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
//     <div className="h-screen w-full flex">
//       <div className="h-[90vh] w-[120vh] align-center card-container flex flex-col items-center justify-center">
//         <motion.div
//           className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
//           onClick={() => handleCardClick(1)}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <div className="flex flex-col items-center">
//             <div className="font-bold text-lg p-2 text-violet-500">Enterprise Master Data Management</div>
//             <AnimatePresence>
//               {selectedCard === 1 && (
//                 <motion.p
//                   className="text-sm text-gray-500 p-2"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur
//                   quisquam illum explicabo facilis sint possimus!.
//                 </motion.p>
//               )}
//             </AnimatePresence>
//           </div>
//         </motion.div>

//         <motion.div
//           className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
//           onClick={() => handleCardClick(2)}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <div className="flex flex-col items-center">
//             <div className="font-bold p-2 text-violet-500">Intelligent Entity Matching using ML</div>
//             <AnimatePresence>
//               {selectedCard === 2 && (
//                 <motion.p
//                   className="text-sm text-gray-500 p-2"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur
//                   quisquam illum explicabo facilis sint possimus!.
//                 </motion.p>
//               )}
//             </AnimatePresence>
//           </div>
//         </motion.div>

//         {/* Add similar logic for the remaining cards */}
//       </div>
//       <div className="image-container flex items-center justify-center h-[90vh] w-[120vh]">
//         {selectedImage && <img src={selectedImage} alt="Selected Image" className="h-[80vh]" />}
//       </div>
//     </div>
//   );
// };

// export default Features_V2;




// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import image1 from '../../assets/images/j1.png';
// import image2 from '../../assets/images/card2.png';
// import image3 from '../../assets/images/card3.png';
// import image4 from '../../assets/images/card4.png';

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
//     <div className="h-screen w-full flex">
//       <div className="h-[90vh] w-[120vh] align-center card-container flex flex-col items-center justify-center">
//         <motion.div
//           className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
//           onClick={() => handleCardClick(1)}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <div className="flex flex-col items-center">
//             <div className="font-bold text-lg p-2 text-violet-500">Enterprise Master Data Management</div>
//             <div
//               className={`text-sm text-gray-500 p-2 transition-all duration-700 ease-out ${
//                 selectedCard === 1 ? 'max-h-[6rem] translate-y-0' : 'max-h-0 -translate-y-2 -mb-2'
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
//           <div className="flex flex-col items-center">
//             <div className="font-bold p-2 text-violet-500">Intelligent Entity Matching using ML</div>
//             <div
//               className={`text-sm text-gray-500 p-2 transition-all duration-700 ease-out ${
//                 selectedCard === 2 ? 'max-h-[6rem] translate-y-0' : 'max-h-0 -translate-y-2 -mb-2'
//               }`}
//             >
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut molestiae dolores perferendis tenetur
//               quisquam illum explicabo facilis sint possimus!.
//             </div>
//           </div>
//         </motion.div>

//         {/* Add similar logic for the remaining cards */}
//       </div>
//       <div className="image-container flex items-center justify-center h-[90vh] w-[120vh]">
//         {selectedImage && <img src={selectedImage} alt="Selected Image" className="h-[80vh]" />}
//       </div>
//     </div>
//   );
// };

// export default Features_V2;



import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import image1 from '../../assets/images/j1.png';
import image1 from '../../assets/images/j1.jpg';
import image2 from '../../assets/images/card2.png';
import image3 from '../../assets/images/card3.png';
import image4 from '../../assets/images/card4.png';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

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
    <div className="h-screen w-full flex">
      <div className="h-[90vh] w-[120vh] align-center card-container flex flex-col items-center justify-center">
        <motion.div
          className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          onClick={() => handleCardClick(1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="flex flex-col items-center w-full">
            {/* <div className='fle x'> */}
            <div className="font-bold text-lg p-2 text-violet-500">Enterprise Master Data Management</div>
           {/* <div className=''> <MdOutlineKeyboardArrowDown  /></div></div> */}
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
          className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          onClick={() => handleCardClick(2)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="flex flex-col items-center w-full">
            <div className="font-bold p-2 text-violet-500">Intelligent Entity Matching using ML</div>
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
          className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          onClick={() => handleCardClick(3)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="flex flex-col items-center w-full">
            <div className="font-bold p-2 text-violet-500">State of the art data migration ETL pipeline</div>
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
          className="border border-1 h-24 w-[80vh] bg-white rounded-lg shadow-md mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          onClick={() => handleCardClick(4)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="flex flex-col items-center w-full">
            <div className="font-bold p-2 text-violet-500">Scalable tech stack expertise for Modern enterprise data need</div>
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





        {/* Add similar logic for the remaining cards */}
      </div>
      <div className="image-container flex items-center justify-center h-[90vh] w-[120vh]">
        {selectedImage && <img src={selectedImage} alt="Selected Image" className="h-[80vh]" />}
      </div>
    </div>
  );
};

export default Features_V2;