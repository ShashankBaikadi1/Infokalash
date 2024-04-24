/* eslint-disable react/prop-types */
import  { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../assets/Animation - 1713952528284.json';
import animationData_two from '../assets/Animation - 2.json';
import animationData_three from '../assets/Animation - 3.json';
export function AnimationComponent() {
  const animationContainer = useRef(null);

  useEffect(() => {
    if (animationContainer.current) {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg', // or 'canvas'
        loop: true,
        autoplay: true,
        animationData: animationData 
      });

      return () => {
        anim.destroy();
      };
    }
  }, []);

  return (
    <div className="h-[50vh] w-[50vh] border mt-20 rounded-md ml-[30vh]">
      <div ref={animationContainer}></div>
    </div>
  );
}



export function AnimationTwo() {
    const animationContainer = useRef(null);
  
    useEffect(() => {
      if (animationContainer.current) {
        const anim = lottie.loadAnimation({
          container: animationContainer.current,
          renderer: 'svg', // or 'canvas'
          loop: true,
          autoplay: true,
          animationData: animationData_two // Your animation JSON data
        });
  
        return () => {
          anim.destroy();
        };
      }
    }, []);
  
    return (
      <div className="h-[50vh] w-[50vh] border mt-20 rounded-md ml-[30vh]">
        <div ref={animationContainer}></div>
      </div>
    );
  }
  

  
export function AnimationThree() {
    const animationContainer = useRef(null);
  
    useEffect(() => {
      if (animationContainer.current) {
        const anim = lottie.loadAnimation({
          container: animationContainer.current,
          renderer: 'svg', // or 'canvas'
          loop: true,
          autoplay: true,
          animationData: animationData_three // Your animation JSON data
        });
  
        return () => {
          anim.destroy();
        };
      }
    }, []);
  
    return (
      <div className="h-[60vh] w-[50vh] border  mt-20 rounded-md ml-[30vh] ">
        <div ref={animationContainer}></div>
      </div>
    );
  }
  