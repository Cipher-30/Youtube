import React from 'react'

const Comments = ({item}) => {

    const{textOriginal,authorDisplayName,likeCount} = item?.snippet.topLevelComment.snippet;

  return (
    <div  className='flex w-full mt-2 rounded-lg bg-white border border-gray-200'>
     <section className=' border-r '>
     <img className="w-10 h-10 m-4 my-auto p-1 cursor-pointer rounded-full hover:bg-gray-200 transition-all duration-100 ease-in-out"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="User"
        />
       </section>

     <section  className=' flex-1 px-4 py-2 '>
      <h2 className='cursor-pointer'>{authorDisplayName}</h2>
      <p className='ml-4'> {textOriginal}</p>
      <div className='flex mt-1 ml-4'>
        <img className='w-5 h-5 mr-2 cursor-pointer rounded-full hover:bg-gray-200 transition-all duration-100 ease-in-out' alt='like'  src='https://iconape.com/wp-content/png_logo_vector/design-203.png' />
        <span>{likeCount}</span>
      </div>
     </section>

    </div>
  )
}

export default Comments