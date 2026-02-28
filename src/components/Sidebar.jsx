import React from 'react'
import { assets } from '../assets/assets'
import { albumsData } from '../assets/assets'
import { useParams } from 'react-router-dom'

function Sidebar() {
  
    const {id} = useParams();

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        
        <div className='bg-[#121212] h-[25%] rounded-lg flex flex-col justify-around'>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-8' src={assets.home_icon} alt="Home"/>
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-8' src={assets.search_icon} alt="Search"/>
                <p className='font-bold'>Search</p>
            </div>
        </div>
        <div className='bg-[#121212] flex-1 rounded-lg flex flex-col'>
            
            {/* Header (Your Library) */}
            <div className='p-4 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img className='w-8' src={assets.stack_icon} alt="" />
                    <p className='font-semibold'>Your Library</p>
                </div>
                <div className='flex items-center gap-3'>
                    <img className='w-5' src={assets.arrow_icon} alt="" />
                    <img className='w-5' src={assets.plus_icon} alt="" />
                </div>
            </div>

            <div className='flex flex-col flex-1 justify-between px-2 pb-6 pt-2'> 
                {albumsData.map((item, index) => (
                    <div 
                        key={index} 
                        className='flex items-center p-3 gap-4 rounded hover:bg-[#3E3E3E] cursor-pointer transition-colors'
                    >
                        <img className="w-12 h-12 xl:w-20 xl:h-20 object-cover rounded" src={item.image} alt="" />
                        <span className="text-white font-semibold text-lg xl:text-xl">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
        
  )
}

export default Sidebar