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
       
          {/* Your content components go here */}
         
        <Navbar/>

        </div>
      </div>
    </div>
    </main>
  )
}


export default page