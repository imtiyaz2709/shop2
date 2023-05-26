import CategoryInsertForm from '@/app/components/CategoryInsertForm'
import CallingCategory from '@/app/components/callingCategory'
import Link from 'next/link'
import React from 'react'

const page = async() => {
    let catCalling = await fetch("http://127.0.0.1:3000/api/category/all",{next:{revalidate:1}})
    catCalling = await catCalling.json()

    return (
    <div className='flex gap-3'>
        <div className='w-9/12'>
            <CallingCategory data={catCalling.callingData}/>
        </div>
        <div className="w-3/12">
            <CategoryInsertForm/>
        </div>
    </div>
  )
}

export default page