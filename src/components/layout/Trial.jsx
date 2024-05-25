import React from 'react'
import image1 from '../../assets/undraw_photos/undraw_data_reports_706v.png'
import image2 from '../../assets/undraw_photos/undraw_data_reports_706v.png'
const Trial = () => {
  return (
    <div className='flex overflow-x-hidden'>
      <div className='p-12 bg-red-200 w-[105vh]'>
        <div className='flex flex-col justify-center items-center  bg-green-200 h-[50vh] w-[55vh] rounded-md'>
          <img src={image1} alt="Description" className='h-[30vh] mb-10 rounded-lg' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className='p-12 bg-red-200 w-[105vh]'>
        <div className='flex flex-col justify-center items-center  bg-green-200 h-[50vh] w-[55vh] rounded-md'>
          <img src={image1} alt="Description" className='h-[30vh] mb-10 rounded-lg' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  )
}

export default Trial
