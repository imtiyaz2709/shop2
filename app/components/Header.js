import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex bg-sky-700 text-white py-4 px-10 justify-between items-center'>
        <h1 className='text-lg font-semibold font-sans'>Shop express</h1>
        <div>
        <input type='search'className='px-3 py-2 border rounded outline-0' size="60" placeholder='Search for product,brands and more' />
        </div>
        <div className='flex gap-3 '>
          <Link href="">MyProfile</Link>
          <Link href="">Orders</Link>
          <Link href="">cart</Link>
        </div>
    </div>
  )
}

export default Header