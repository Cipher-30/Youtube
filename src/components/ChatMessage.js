import React from 'react'

const ChatMessage = ({obj}) => {
  return (
    <div>
        <div className='flex m-2 border py-1  bg-slate-100 rounded-md'>
            <section> <img className="w-10 h-10 m-4 my-auto p-1 cursor-pointer rounded-full hover:bg-gray-200 transition-all duration-100 ease-in-out"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="User"
        /></section>
            <section>
                <h2>{obj?.name}</h2>
                <p>{obj?.message}</p>
            </section>
        </div>
    </div>
  )
}

export default ChatMessage