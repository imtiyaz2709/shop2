import Link from 'next/link'
import React from 'react'

const AdminHeader = () => {
  return (
    <div className='flex bg-black text-white py-2 px-10 justify-between items-center'>
        <h2 className='text-lg font-semibold font-sans'>Admin Panel | Shop</h2>
        <div>
        </div>
        <div className='flex gap-3 '>
          <Link href="">Logout</Link>
        </div>
    </div>
  )
}

export default AdminHeader