import React from 'react'
import AdminAsideBar from './AdminAsideBar'

const AdminLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
    <div className='flex flex-row'>
    <AdminAsideBar/>
    <main className='flex-1'>
        {children}
    </main>
    </div>
    </div>

  )
}

export default AdminLayout;