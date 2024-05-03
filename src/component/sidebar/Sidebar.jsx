import React from 'react'
 import {BiHome,BiBookAlt,BiMessage,BiSolidReport,BiStats,BiTask,BiHelpCircle  } from 'react-icons/bi';
 import './sidebar.css'
const Sidebar = () => {
  return (
    <div className='menu'>
        <div className='logo'>
            <BiBookAlt color='#F86A9A' className='icon'/>
            <h2  >Admin Space   </h2>
        </div>
        <div className='menu--list'>
            <a href='#' className='item'>
                <BiHome color='#F86A9A' className='icon'/>Dashboard
            </a>
            < a href='adminSide/manageProfile' className='item'>
                  <BiTask color='#F86A9A' className='icon'/>Manage Profil
            </a>
            < a href='manageStaff' className='item'>
                <BiSolidReport color='#F86A9A' className='icon'/>Manage Staff

</a>
     < a href='#' className='item'>
<BiStats color='#F86A9A' className='icon'/>Manage News
</a>
< a href='adminSide/makeSchedual' className='item'>
<BiMessage color='#F86A9A' className='icon'/>Schedual Planing
</a>
< a href='#' className='item'>

<BiHelpCircle color='#F86A9A' className='icon'/>Manage Digital File
</a>
        </div>
    </div>
  )
}

export default Sidebar