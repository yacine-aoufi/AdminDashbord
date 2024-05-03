import Navbar from '@/component/navbar/Navbar'
import Sidebar from '@/component/sidebar/Sidebar'
import Link from 'next/link'
import React from 'react'
import "./manageDigi.css";
const page = () => {
  return (
    <main>
<div className='home'>
      <div className="dashboard">
        <Sidebar />
        <div className='content'>
        
         
        <Navbar/>
        <h1>Digital file managment</h1>
        <Link href={"/adminSide/manageDigitalFile/add"}>
        <button type="button" class="btn btn-outline-secondary btn-outline-secondary-custom"
        style={{marginTop:"40px",marginLeft:"40px"}}
        >Add new</button>


        </Link>
        
        <h4>Here is a list of users</h4>

        </div>
      </div>
    </div>
    </main>
  )
}

export default page