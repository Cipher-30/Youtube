import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (

    <div className=' mt-[64px] min-w-[170px] max-w-[300px] w-[18%] min-h-full '>

      <div className='border-b p-2 mx-1  border-gray-500'>

        <ul className='flex flex-col gap-1 '>

          <Link to={"/"}> 
          <li className="flex items-center px-4 py-3 gap-4 rounded-lg hover:bg-gray-200 transition-all duration-100 ease-in-out cursor-pointer">
            <img className="w-6 h-6 " src="https://www.svgrepo.com/show/13696/house.svg" alt="home" />
            Home
          </li></Link>

          <li className="flex items-center  px-4 py-3 gap-4 rounded-lg hover:bg-gray-200 transition-all duration-100 ease-in-out  cursor-pointer">
            <img className="w-6 h-6 " src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa435seBUUSvYN2_4sc5lZbxxnZGJINYmy_A&s' alt='shorts' />
            Shorts
          </li>
          <li className="flex items-center px-4 py-3 gap-4 rounded-lg hover:bg-gray-200 transition-all duration-100 ease-in-out   cursor-pointer">
            <img className="w-6 h-6 " src='https://cdn.icon-icons.com/icons2/2248/PNG/512/youtube_subscription_icon_136007.png' alt='Subscritions' />
            Subscriptions
          </li>

        </ul>

      </div>



      <div className='border-b p-2 mx-1  border-gray-500' >

        <ul className='flex flex-col gap-1 '>

        <li className="flex font-semibold items-center px-4 py-3 gap-4 rounded-lg hover:bg-gray-200 transition-all duration-100 ease-in-out cursor-pointer">
            You
            <img className="w-3 h-3 " src="https://www.svgrepo.com/show/27797/right-arrow.svg" alt="home" />
          </li>

          <li className="flex items-center px-4 py-3 gap-4 rounded-lg hover:bg-gray-200 transition-all duration-100 ease-in-out cursor-pointer">
            <img className="w-6 h-6 " src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="home" />
            Your Channel
          </li>
          <li className="flex items-center px-4 py-3 gap-4 rounded-lg hover:bg-gray-200 transition-all duration-100 ease-in-out cursor-pointer">
            <img className="w-6 h-6 " src='https://iconape.com/wp-content/png_logo_vector/history-2.png' alt='shorts' />
            History
          </li>
          <li className="flex items-center px-4 py-3 gap-4 rounded-lg hover:bg-gray-200 transition-all duration-100 ease-in-out cursor-pointer">
            <img className="w-6 h-6 " src='https://iconape.com/wp-content/png_logo_vector/playlist.png' alt='Subscritions' />
            Playlist
          </li>
          <li className="flex items-center px-4 py-3 gap-4 rounded-lg hover:bg-gray-200 transition-all duration-100 ease-in-out cursor-pointer">
            <img className="w-6 h-6 " src='https://www.iconpacks.net/icons/1/free-video-icon-818-thumb.png' alt='Subscritions' />
            Your Videos
          </li>
          <li className="flex items-center px-4 py-3 gap-4 rounded-lg hover:bg-gray-200 transition-all duration-100 ease-in-out cursor-pointer">
            <img className="w-6 h-6 " src='https://w7.pngwing.com/pngs/864/328/png-transparent-later-watch-ic-google-material-design-3-icon-thumbnail.png' alt='Subscritions' />
            Watch later
          </li>
          <li className="flex items-center px-4 py-3 gap-4 rounded-lg hover:bg-gray-200 transition-all duration-100 ease-in-out cursor-pointer">
            <img className="w-6 h-6 " src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeXl2Lt3lt2rhCIQ48VC4Yv8AbsOjjMTbOWg&s' alt='Subscritions' />
           Liked Videos
          </li>
          <li className="flex items-center px-4 py-3 gap-4 rounded-lg hover:bg-gray-200 transition-all duration-100 ease-in-out cursor-pointer">
            <img className="w-6 h-6 " src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbBU45swgcOx15VET05DND3bCngHOxgnAmBQ&s' alt='Subscritions' />
            Downloads
          </li>

        </ul>


      </div>



      <div className='  p-2 mx-1 '>

        <ul>

        <li className="flex font-semibold items-center px-4  gap-4 rounded-lg ">
            Subscritions
          </li>

        </ul>
      </div>




    </div>
  )
}

export default SideBar