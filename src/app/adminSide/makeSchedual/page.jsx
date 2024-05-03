import Navbar from '@/component/navbar/Navbar'
import Sidebar from '@/component/sidebar/Sidebar'
import React from 'react'

const page = () => {
  return (
    <main>
<div className='home'>
      <div className="dashboard">
        <Sidebar />
        <div className='content'>
       
         
        <Navbar/>
        <h2>Schedual Planning</h2>
        


        </div>
      </div>
    </div>
    </main>
  )
}

export default page