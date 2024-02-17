import React from 'react'
import AdminAsideBar from './AdminAsideBar'

const AdminLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex flex-row'>
    <AdminAsideBar/>
    <main>
        {children}
    </main>
    </div>
  )
}

export default AdminLayout