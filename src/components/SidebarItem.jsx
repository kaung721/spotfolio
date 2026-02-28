import React from 'react'
import { useNavigate } from 'react-router-dom'

const SidebarItem = ({image, name, desc, id}) => {

    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/page/${id}`)} className='flex items-center p-3 gap-4 rounded hover:bg-[#3E3E3E] cursor-pointer transition-colors'>
        <img className='w-12 h-12 xl:w-20 xl:h-20 object-cover rounded' src={image} alt="" />
        <p className='text-white font-semibold text-lg xl:text-xl'>{name}</p>
    </div>
  )
}

export default SidebarItem