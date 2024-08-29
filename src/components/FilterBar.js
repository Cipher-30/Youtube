import React from 'react'

const FilterBar = () => {

  const list = ["All", "News", "Music", "Cricket", "Live", "Gaming", "Podcast"];

  return (
    <div className='mt-[64px] '>

      {
        list.map((obj) => {
          return (<button key={obj} className=' mx-2 mt-4  px-4 py-1 rounded-lg border border-gray-600 hover:bg-gray-200'>
                   {obj}
                 </button>)
        })
      }

    </div>
  )
}

export default FilterBar