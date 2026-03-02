import React from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../assets/assets';

const DisplayAlbum = () => {

    const {id} = useParams();
    const albumData = albumsData[id];    

  return (
    <>
        <NavBar/>
        {/* add name instead of spotify, role as the playlist title, responsbilities as songs */}
        <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
            <img className='w-48 rounded' src={albumData.image} alt="" />
            <div className='flex flex-col'>
                <p>Playlist</p>
                <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                <h4>{albumData.desc}</h4>
                <p className='mt-1'>
                    <img className='inline-block w-5 mr-2' src={assets.spotify_logo} alt="" />
                    <b>Spotify </b>
                    • 5,214 likes
                    • <b>50 songs, </b>
                    about 2 hr 30 min
                </p>
            </div>
        </div>
        <div className='grid grid-cols-[2fr_1fr_1fr] sm:grid-cols-[2fr_1fr_1fr] mt-10 mb-4 pl-2 text-[#a7a7a7]'>
            <p><b className='mr-4'>#</b>Title</p> {/* Role */}
            <p>Company</p> {/* Company */}
            <img className='m-auto w-4' src={assets.clock_icon} alt="" /> {/* Duration */}
        </div>
        <hr />
        {
            songsData.map((item, index)=>(
                <div key={index} className='grid grid-cols-[2fr_1fr_1fr] sm:grid-cols-[2fr_1fr_1fr] gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                    <p className='text-white'>
                        <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                        <img className='inline w-12 m-5' src={item.image} alt="" /> {/* Company logo */}
                        {item.name}
                    </p>
                    <p className='text-[15px]'>{item.company}</p>
                    <p className='text-[15px] text-center'>{item.date}</p>
                </div>
            ))
        }
    </>
  )
}

export default DisplayAlbum