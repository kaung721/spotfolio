import React from 'react'
import { assets } from '../assets/assets'
import { albumsData } from '../assets/assets'
import { useParams } from 'react-router-dom'

function Sidebar() {
  
    const {id} = useParams();

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        
        {/* Top Navigation Block */}
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

        {/* Bottom Library Block */}
        <div className='bg-[#121212] h-[85%] rounded-lg'>
            <div className='p-4 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img className='w-8'src={assets.stack_icon} alt="" />
                    <p className='font-semibold'>Your Library</p>
                </div>
                <div className='flex items-center gap-3'>
                    <img className='w-5' src={assets.arrow_icon} alt="" />
                    <img className='w-5' src={assets.plus_icon} alt="" />
                </div>
            </div>

            <div className='flex flex-col'> 
                {albumsData.map((item, index) => (
                    <div 
                        key={index} 
                        className='flex items-center p-3 m-1 gap-3 rounded hover:bg-[#3E3E3E] cursor-pointer transition-colors'
                    >
                        <img className="w-12 h-12 object-cover rounded" src={item.image} alt={item.name} />
                        <span className="text-white font-semibold text-xl">{item.name}</span>
                    </div>
                ))}
            </div>
            </div>
            
        </div>
  )
}

export default Sidebar