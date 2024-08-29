import React,{useEffect, useState} from 'react'
import { useSelector } from "react-redux";


import SideBar from './SideBar'
import { youtubeApi } from './utility/const';
import rawData from './utility/rawApiData';
import { Outlet } from 'react-router-dom';
import Skimmer from './Skimmer';


import UserContext from './utility/UserContext';



const Body = () => {

  //SUBSCRIBING THE VALUE FROM STORE
  const toggleBtn = useSelector((store) => store.sidebar.toggleBar);
  const[videos, setVideos] = useState(null);


  const fetchData =async () =>
  {
     
    try{
         
        const data = await fetch(youtubeApi);
        if(!data.ok)
          {
           throw new Error("went wrong during fetching");
          }
        const dataJson = await data.json();
        const dataUseable = dataJson?.items;

        if(dataUseable)
        {
          setVideos(dataUseable);
        }

    }
    catch(error)
    {
      console.error("i am in catch there is something wrong: " , error);
      setVideos(rawData)
      
    }


  }
 



  useEffect( () =>
  {
    fetchData();
  }, []);

  if( videos == null)
 {
  return(<div>
       <Skimmer/>
  </div>)
 }
//  debugger;

  return (
   < UserContext.Provider value={{ videos, setVideos }} >
    <div style={{ minHeight: 'calc(100% - 64px)' }} className='w-full   flex  '>

      {/* SIDEBAR  */}
      {toggleBtn && <SideBar />}

      <div className='w-full h-full ' >
        {/* <MainContainer/> */}
        <Outlet/>

      </div>

    </div>

    </UserContext.Provider>

  )
}






export default Body