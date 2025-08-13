import React from 'react'

export default function Banner() {
 return (
 <div>
 <div className="main bg-gray-900 flex flex-row">
 <div className="image max-w-[600px] ml-28">
 <img className="w-full h-full rounded-lg"src='https://shifu.hotstarext.com/SOURCE/VOD/cd-2025-08-04/SalakaarDTD_BB_Web-57681ec4-6645-4418-92a3-aa4f73849b48.jpg'></img>
 </div>
 <div className="text text-white py-7 px-12 font-sans">
 <h4>Salakaar</h4>
 <p className='text-gray-500'>Streaming from 8 August</p>
 <div className='text-white py-7'>An indian guy goes uncover in the edge of this thriller</div>
 <button className='bg-gray-800 font-bold cursor-pointer'>Explore</button>
 </div>
 </div>
 </div>
 )
}