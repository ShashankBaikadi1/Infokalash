// import React from 'react'

// const Hero_Section_V2 = () => {
//   return (
//     <div>
//       i need a hero section which contains 4 cards with images and text at bottom right having h-36 and w-24 of each card  and when i have a a particular card background and text should change with an transition effect similary i need a different bg and text for all other cards  
//     </div>
//   )
// }

// export default Hero_Section_V2


import React, { useState } from 'react';

const Hero_Section_V2 = () => {
  const [selectedCard, setSelectedCard] = useState(1);

  const cards = [1, 2, 3, 4].map((number) => {
    const isSelected = selectedCard === number;
    return (
      <div
        key={number}
        className={`w-24 h-36 relative transition-all duration-300 ease-in-out cursor-pointer ${isSelected ? 'bg-red-500' : 'bg-blue-500'}`}
        onMouseEnter={() => setSelectedCard(number)}
      >
        <img src={`image${number}.jpg`} alt={`Card ${number}`} className={`w-full h-full object-cover ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
        <p className={`absolute bottom-0 right-0 text-white p-2 ${isSelected ? 'text-black' : 'text-white'}`}>Card {number}</p>
      </div>
    );
  });

  return (
    <div className={`bg-cover bg-center transition-all duration-300 ease-in-out`} style={{ backgroundImage: `url(bg${selectedCard}.jpg)` }}>
      <div className="flex justify-around">{cards}</div>
    </div>
  );
};

export default Hero_Section_V2;
