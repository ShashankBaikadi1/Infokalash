
import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = ({ data, classname }) => {
    console.log("data", data)
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    return (
        <div className={`relative flex justify-center ${classname}  `}>
            <BsArrowLeftCircleFill onClick={prevSlide} className="absolute left-1 w-16 h-8 text-white arrow arrow-left" />
            {data.map((item, idx) => {
                return (
                    <img
                        src={item.src}
                        alt={item.alt}
                        key={idx}
                        className={slide === idx ? "border rounded-lg object-cover shadow-md w-full h-[500px]" : "hidden"}
                    />
                );
            })}
            <BsArrowRightCircleFill
                onClick={nextSlide}
                className="absolute right-1 w-16 h-8 text-white arrow arrow-right"
            />
            <span className="absolute bottom-1 flex">
                {data.map((_, idx) => {
                    return (
                        <button
                            key={idx}
                            className={
                                slide === idx ? "bg-white h-2 w-2 rounded-full shadow-md mx-1 cursor-pointer" : "bg-gray-400 h-2 w-2 rounded-full shadow-md mx-1 cursor-pointer"
                            }
                            onClick={() => setSlide(idx)}
                        ></button>
                    );
                })}
            </span>
        </div>
    );
};

export default Carousel;
