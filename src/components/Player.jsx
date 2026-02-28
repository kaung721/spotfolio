import React, { useContext } from 'react'
import { assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

function Player() {
    const {seekBar, seekBg, playStatus, play, pause} = useContext(PlayerContext);
    
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
        
        <div className='hidden lg:flex items-center gap-4 w-[25%]'>
            <img className='w-12' src={songsData[0].image} alt="" />
            <div>
                <p className='font-semibold'>{songsData[0].name}</p>
                <p>{songsData[0].desc}</p>
            </div>
        </div>

        <div className="flex flex-col items-center gap-1 m-auto">
            <div className="flex items-center gap-6">
                
                <img
                className="w-4 opacity-70 hover:opacity-100 hover:scale-110 transition cursor-pointer"
                src={assets.shuffle_icon}
                alt=""
                />

                <img
                className="w-4 opacity-70 hover:opacity-100 hover:scale-110 transition cursor-pointer"
                src={assets.prev_icon}
                alt=""
                />

                {/* Play Button */}
                <div className="bg-white rounded-full flex items-center justify-center w-8 h-8 hover:scale-105 transition">
                <img
                    onClick={play}
                    className="w-7 cursor-pointer"
                    src={assets.play_icon}
                    alt=""
                />
                </div>

                <img
                className="w-4 opacity-70 hover:opacity-100 hover:scale-110 transition cursor-pointer"
                src={assets.next_icon}
                alt=""
                />

                <img
                className="w-4 opacity-70 hover:opacity-100 hover:scale-110 transition cursor-pointer"
                src={assets.loop_icon}
                alt=""
                />

            </div>

            <div className="flex items-center gap-4 w-[40vw] max-w-[1000px]">
                <span className="text-[#b3b3b3] text-xs w-10 text-right">0:52</span>

                <div
                className="relative flex-1 h-1 bg-[#4d4d4d] rounded-full cursor-pointer group"
                >
                <div
                    className="absolute h-1 bg-white rounded-full w-1/4 group-hover:bg-green-500 transition"
                ></div>
                </div>

                <span className="text-[#b3b3b3] text-xs w-10">3:20</span>
            </div>

            </div>


        <div className='hidden lg:flex items-center gap-3 opacity-75 w-[25%] justify-end'>
            <img className='w-4' src={assets.plays_icon} alt="" />
            <img className='w-4' src={assets.mic_icon} alt="" />
            <img className='w-4' src={assets.queue_icon} alt="" />
            <img className='w-4' src={assets.speaker_icon} alt="" />
            <img className='w-4' src={assets.volume_icon} alt="" />
            <div className='w-20 bg-slate-50 h-1 rounded'></div>
            <img className='w-4' src={assets.mini_player_icon} alt="" />
            <img className='w-4' src={assets.zoom_icon} alt="" />
        </div>
    </div>
  )
}

export default Player