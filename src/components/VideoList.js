import React from 'react'
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import UserContext from './utility/UserContext';
import { useDispatch } from 'react-redux';
import { closeSideBar } from './utility/sidebarSlice';

const VideoList = () => {
 
  const {videos} = useContext(UserContext);

  const dispatch = useDispatch();

  const closeBar = () =>
  {
    dispatch(closeSideBar());
  }
  

  return (

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  p-4'>
    {
      videos.map((obj) => {
        return (
          <div className='border rounded-lg shadow-lg  overflow-hidden cursor-pointer group ' key={obj.id}    >
            
            <Link onClick={() => closeBar() } to={"/watchId/"+ obj?.id}>
            
            <div  className='w-full rounded-lg overflow-hidden '>
              <img className='w-full object-cover rounded-lg group-hover:scale-105 transition-all duration-100 ease-in-out' src={obj?.snippet?.thumbnails?.high?.url} alt='Thumbnail' />
            </div>
            
            <div className='px-2 py-1'>
              <p className=''>{obj?.snippet?.localized?.title}</p>
              <p className='text-sm text-gray-600'>{obj?.snippet?.channelTitle}</p>
              <p className='text-sm text-gray-800'>{obj?.statistics?.viewCount} views</p>
            </div>
            
            </Link>

          </div>
        );
      })
    }
  </div>

  )
}

export default VideoList