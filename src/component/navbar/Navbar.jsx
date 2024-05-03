import React, { useContext } from 'react'
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SendIcon from '@mui/icons-material/Send';


const Navbar = () => {

       
  return (
    <div className='navbar'>
    <div className='wrapper'>
        <div className='search'>
       <input type='text' placeholder='Search...'/>
       <SearchIcon/>
        </div>
        <div className='items'>
           <div className='item'>
   <LanguageIcon className='icon'/>English
           </div>
           <div className='item'>
   <DarkModeIcon className='icon' 
//    onClick={()=>dispatch({type:"TOGGLE"})} 

    />
           </div>
           <div className='item'>
   <CloseFullscreenIcon className='icon'/>
           </div>
           <div className='item'>
   <NotificationsActiveIcon className='icon'/>
   <div className='conter'>  1</div>
           </div>
           <div className='item'>
   <SendIcon className='icon'/>
   <div className='conter'>  3</div>
           </div>
           <div className='item'>
  <img 
  src=''
  alt=''
  className='avatar'
  />
           </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar