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
            col3Header = <p className="text-center">Proficiency</p>; // Text instead of icon
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
            col3Header = <p className="text-center">Date</p>;
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
                    <b>Spotifolio </b>
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
                    <a href="mailto:your@email.com" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">Email Me</a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="bg-[#242424] text-white px-8 py-3 rounded-full font-bold border border-[#a7a7a7] hover:border-white transition-colors">LinkedIn</a>
                </div>
            </div>

        ) : (

            /* --- ARRAY GRID LAYOUT --- */
            <>
                <div className='grid grid-cols-[2fr_1fr_1fr] sm:grid-cols-[2fr_1fr_1fr] mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                    <p><b className='mr-4'>#</b>{col1}</p> 
                    <p>{col2}</p> 
                    {col3Header} 
                </div>
                <hr />
                {
                    currentArray.map((item, index) => (
                        <div 
                            key={index} 
                            onClick={() => {
                                if (item.link) {
                                    window.open(item.link, '_blank', 'noopener,noreferrer');
                                }
                            }}
                            className={`grid grid-cols-[2fr_1fr_1fr] sm:grid-cols-[2fr_1fr_1fr] gap-2 p-4 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] ${item.link ? 'cursor-pointer' : 'cursor-default'}`}>
                            
                            <p className='text-white flex items-center'>
                                <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                                <img className='inline w-14 mx-4' src={item.image || item.icon} alt="" /> 
                                {item.name}
                            </p>
                            
                            <p className='text-[15px]'>
                                {item.company || item.category || item.issuer || item.techStack}
                            </p>
                            
                            <p className='text-[15px] text-center'>
                                {item.date || item.experience}
                            </p>

                        </div>
                    ))
                }
            </>
        )}
    </>
  )
}

export default DisplayAlbum