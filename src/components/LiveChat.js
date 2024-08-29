import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from './utility/chatSlice';
import generate, { makeid } from './utility/helper';




// style={{ maxHeight: 'calc(100vh - 64px)' }} 
const LiveChat = () => {
 
    const[yourComment, setYourComment] = useState('');
    const dispatch = useDispatch();

    const chatMessage = useSelector((store) => (store.chat.message));




    useEffect(() =>
    {

       const i =  setInterval( ()=> 
        {
          dispatch( addMessage(
            {
                name:generate(),
                message: makeid(20),
            },
          ))     
        },2000);

        return () =>
        {
            clearInterval(i);
        }

    }, [])


    const sendCommentHandler = () =>
    {
      if(yourComment)
      {
          dispatch(addMessage( {
            name: "Amit",
            message: yourComment
          }))
      }

      setYourComment(''); 
    }




  return (
    <div style={{ maxHeight: 'calc(100vh - 70px)', minHeight: 'calc(100vh - 70px)' }} className='min-w-full max-w-full flex flex-col border border-black'>
  
    <div className='flex flex-col-reverse overflow-y-scroll flex-grow w-full'>
      {chatMessage.length > 0 ? (
        chatMessage.map((obj, index) => (
          <ChatMessage key={index} obj={obj} />
        ))
      ) : (
        <div></div>
      )}
    </div>
  
    <section className='border mt-auto w-full'>
      <form className='flex' onSubmit={(e) => { e.preventDefault() }}>
        <input value={yourComment} className="w-[70%] h-12 px-4 py-2 border border-gray-400" placeholder="Type..." onChange={(e) => setYourComment(e.target.value)} />
        <button className="w-[30%] h-12 border border-black px-4 py-2 bg-slate-300 cursor-pointer" onClick={() => { sendCommentHandler()}}>
          Send
        </button>
      </form>
    </section>
  </div>
  )       
}

export default LiveChat;