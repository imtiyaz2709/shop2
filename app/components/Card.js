import React from 'react'

const Card = ({data}) => {
  return (
    <div className='grid grid-cols-5'>
       {
        data?.getData?.map((value,key)=>(
          <div className='flex flex-col gap-2 text-center shadow-lg p-4 justify-center' key={key}>
          <h1 className='text-3xl font-bold'>{value.title}</h1>
          <h2 className='m-0 text-sm font-semibold'>Brand: {value.brand}</h2>
          <h2 className='m-0 text-sm font-semibold'>Category: {value.category.title}</h2>
          <div className='flex gap-2 justify-center'>
            <p>₹{value.discount_price}</p>
            <del className='text-slate-300'>₹{value.price}</del>
            </div>
      </div>
        ))
       }
    </div>
  )
}

export default Card