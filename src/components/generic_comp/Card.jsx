
import { useState, useEffect } from 'react';

export const Card = () => {
  const [text, setText] = useState('Data Engineering Solutions');
  const texts = [
    { text: 'Data Engineering Solutions', style: { color: 'blue', fontWeight: 'bold' } },
    { text: 'Transforming Data into Insights', style: { color: 'blue', fontWeight: 'bold' } },
    // { text: 'Empowering Businesses with Data', style: { color: 'blue', fontWeight: 'bold' } },
    { text: 'Unlocking Potential with Advanced Analytics', style: { color: 'blue', fontWeight: 'bold' } },
  ];

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(texts[i]);
      i = (i + 1) % texts.length;
    }, 2000);
    return () => clearInterval(timer);
  }, [ ]);

  return (
    <div className=''>
    <div className='h-[50vh] w-[80vh] rounded-xl flex items-center justify-center bg-white opacity-90 text-3xl font-bold border p-5  ' style={text.style}>
      {text.text}
      <p style={{ fontSize: '1em', color: 'black' }}></p>
    </div>
    </div>
  );
};