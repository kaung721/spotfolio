import React from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData, techStack, certifications, projects } from '../assets/assets';

const DisplayAlbum = () => {

    const {id} = useParams();
    const albumData = albumsData[id];    
    
    let currentArray = [];
    let col1 = "Title";
    let col2 = "Company";
    let col3Header = <img className='m-auto w-4' src={assets.clock_icon} alt="Duration" />;

    switch(Number(id)) {
        case 0:
            currentArray = songsData; 
            col1 = "Title"; 
            col2 = "Company";
            col3Header = <img className='m-auto w-4' src={assets.clock_icon} alt="Duration" />;
            break;
        case 1:
            currentArray = techStack;
            col1 = "Technology"; 
            col2 = "Category";
            col3Header = <p className="text-center">Proficiency</p>;
            break;
        case 2:
            currentArray = certifications;
            col1 = "Certificate"; 
            col2 = "Issuer";
            col3Header = <p className="text-center">Date</p>;
            break;
        case 3:
            currentArray = projects;
            col1 = "Project Name"; 
            col2 = "Tech Stack";
            col3Header = <p className="text-center">Date / Links</p>; 
            break;
        default:
            currentArray = []; 
    }

  return (
    <>
        <NavBar/>
        
        {/* TOP SECTION: Album Header */}
        <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
            <img className='w-48 rounded' src={albumData.image} alt="" />
            <div className='flex flex-col'>
                <p>Playlist</p>
                <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                <h4>{albumData.desc}</h4>
                <p className='mt-1'>
                    <img className='inline-block w-5 mr-2' src={assets.spotify_logo} alt="" />
                    <b>Spotfolio </b>
                    {Number(id) !== 4 && `• ${currentArray.length} items`}
                </p>
            </div>
        </div>

        {Number(id) === 4 ? (
            
            /* --- CONTACT PAGE LAYOUT --- */
            <div className="mt-10 pl-2 text-white">
                <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                <p className="text-[#a7a7a7] mb-8">Feel free to reach out for full-stack opportunities or collaborations!</p>
                <div className="flex gap-4">
                    <a href="mailto:kaungmyathein001@hotmail.com" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">Email Me</a>
                    <a href="https://linkedin.com/in/kaungmyathein" target="_blank" rel="noopener noreferrer" className="bg-[#242424] text-white px-8 py-3 rounded-full font-bold border border-[#a7a7a7] hover:border-white transition-colors">LinkedIn</a>
                    <a href="https://github.com/kaung721" target="_blank" rel="noopener noreferrer" className="bg-[#24292e] text-white px-8 py-3 rounded-full font-bold border border-[#a7a7a7] hover:bg-white hover:text-black hover:border-white transition-all duration-300">
    GitHub
</a>
                </div>
            </div>

        ) : (

            /* --- ARRAY GRID LAYOUT --- */
            <>
                {/* 1. Add a dynamic grid class based on the ID */}
                <div className={`grid ${Number(id) === 3 ? 'grid-cols-[2fr_1fr_1fr_1fr] sm:grid-cols-[2fr_1fr_1fr_1fr]' : 'grid-cols-[2fr_1fr_1fr] sm:grid-cols-[2fr_1fr_1fr]'} mt-10 mb-4 pl-2 text-[#a7a7a7]`}>
                    <p><b className='mr-4'>#</b>{col1}</p> 
                    <p>{col2}</p> 
                    {col3Header} 
                    {/* Render a 4th header ONLY if it's the Projects page */}
                    {Number(id) === 3 && <p className="text-center">Links</p>}
                </div>
                <hr />
                
                {
                    currentArray.map((item, index) => (
                        <div 
                            key={index} 
                            onClick={() => {
                                if (item.link && Number(id) !== 3) {
                                    window.open(item.link, '_blank', 'noopener,noreferrer');
                                }
                            }}
                            // 2. Apply the exact same dynamic grid logic to the rows
                            className={`grid ${Number(id) === 3 ? 'grid-cols-[2fr_1fr_1fr_1fr] sm:grid-cols-[2fr_1fr_1fr_1fr]' : 'grid-cols-[2fr_1fr_1fr] sm:grid-cols-[2fr_1fr_1fr]'} gap-2 p-4 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] ${item.link && Number(id) !== 3 ? 'cursor-pointer' : 'cursor-default'}`}
                        >
                            
                            {/* COLUMN 1: Image & Name */}
                            <p className='text-white flex items-center'>
                                <b className='mr-4 text-[#a7a7a7] inline-block w-6 text-right'>{index+1}</b>
                                <img className='inline w-14 mx-4' src={item.image || item.icon} alt="" /> 
                                {item.name}
                            </p>
                            
                            {/* COLUMN 2: Tech Stack / Company / Category */}
                            <p className='text-[15px]'>
                                {item.company || item.category || item.issuer || item.techStack}
                            </p>
                            
                            {/* COLUMN 3: Date  */}
                            <p className='text-[15px] text-center'>
                                {item.date || item.experience}
                            </p>
                            
                            {/* COLUMN 4: Project Links */}
                            {Number(id) === 3 && (
                                <div className='flex justify-center gap-2'>
                                    {/* Source Code Button */}
                                    {item.source && (
                                        <a 
                                            href={item.source} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()} 
                                            className="bg-[#242424] text-white px-3 py-1 rounded-full text-[11px] font-bold border border-[#a7a7a7] hover:border-white transition-colors"
                                        >
                                            Source
                                        </a>
                                    )}
                                    {/* Live Site Button */}
                                    {item.link && (
                                        <a 
                                            href={item.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()} 
                                            className="bg-white text-black px-3 py-1 rounded-full text-[11px] font-bold hover:scale-105 transition-transform"
                                        >
                                            Live
                                        </a>
                                    )}
                                </div>
                            )}

                        </div>
                    ))
                }
            </>
        )}
    </>
  )
}

export default DisplayAlbum