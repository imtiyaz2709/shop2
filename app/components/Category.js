import Link from 'next/link'
import React from 'react'

const Category = ({data}) => {
  return (
    <div className='flex flex-col items-center p-4 gap-5 bg-slate-800 h-[80vh] text-white '>
        {
            data.callingData.map((value,key)=>(
                <Link href={`/filter/${value._id}`} className='text-2xl font-sans font-semibold hover:text-red-700' key={key}>{value.title}</Link>
            ))
        }
    </div>
  )
}

export default Category