import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Comments from './Comments';
import LiveChat from './LiveChat';
// import { commentApi } from './utility/const';


const WatchPage = () => {


 
  const {Wid} = useParams(); //GETTING WATCH-ID, RETURNS OBJ.

  const[comments, setComments] = useState(null);

  
  
  const fetchData = async () =>
    {
          try{
              const data = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${Wid}&key=AIzaSyCxmBwoDaS7JkxCdPxUAFAdvjBkPbP2mZw`);
              if(!data.ok)
              {
                throw new Error("something went wrong during fetching", )
              }

              const dataJson  = await data.json();
              console.log(dataJson);
              
              setComments(dataJson?.items);
          }
          catch(error)
          {
            console.log('I am in catch', error.message);
          }
    }


    useEffect( () =>
    {
      fetchData();
    },[Wid]);

 

  if(comments == null )
  {
    return ( <h1 className='m-[200px]'>Not now!!!</h1>)
  }
  

  return (

   <div className='mt-[64px]'>
<div className='flex'>

<section className='p-2 rounded-lg flex-grow'>
  {/* I-FRAME */}
  <div className='relative overflow-hidden pb-[56.25%] h-0'>
  <iframe 
    className='absolute top-0 left-0  w-full h-full min-w-[300px]
    min-h-[200px] rounded-lg' 
    src={`https://www.youtube.com/embed/${Wid}?autoplay=1`} 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  
    allowFullScreen
  ></iframe>
</div>
  
  {/* COMMENTS */}
  <div className='mt-8 px-4 py-2 bg-gray-100 border rounded-lg'>
    <h1 className='my-4 text-xl font-bold'>Comments:</h1>
    
    {comments.length > 0 ? (
      comments.map((obj) => (
        <Comments key={obj.id} item={obj} />
      ))
    ) : (null)}
  </div>
</section>

{/* SUGGESTION */}
<div style={{ maxHeight: 'calc(100vh - 70px)' }} className='border-2 w-full flex-grow min-w-[300px]'>
  <LiveChat />
</div>

</div> 



   </div>
  
  )
}

export default WatchPage