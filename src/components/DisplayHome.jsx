import React from 'react'
import NavBar from './NavBar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'

const DisplayHome = () => {
  return (
    <>
        <NavBar />
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Overview</h1>
            <div className='flex overflow-auto gap-4 pb-4'> 
                {albumsData.map((item, index) => (
                    <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default DisplayHome