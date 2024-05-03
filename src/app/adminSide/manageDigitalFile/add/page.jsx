// import Navbar from '@/component/navbar/Navbar'
// import Sidebar from '@/component/sidebar/Sidebar'
// import React from 'react'
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined"
// import "./add.css";
// import Image from 'next/image';

// const page = () => {
//   return (
//     <main>
// <div className='home'>
//       <div className="dashboard">
//         <Sidebar />
//         <div className='content'>
       
         
//         <Navbar/>
//         <div className='top'>
//             <h1>Add New User</h1>
//         </div>

    
//         <div className='bottom'>
//           <div className='left'>
//             <img
//             src=
//             {
//               file ? URL.createObjectURL(file):
//             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3566wy6NLRFFoWPeS_gMbUMtVc7xWinMjHw&usqp=CAU' 
//             }alt=''
//             />
           
//           </div>
//           <div className='right'>
//             <form>
//             <div className='formInput'>
//                     <label htmlFor='file'>
//                       Image:  <DriveFolderUploadOutlinedIcon className='icon'/>


//                     </label>
//                     <input type='file'  id='file' style={{display:"none"}}></input>
//                 </div>
//                 <div className='formInput'>
//                     <label>Username</label>
//                     <input type='text' placeholder='enter Username'></input>
//                 </div>
//                 <div className='formInput'>
//                     <label>Name and surname</label>
//                     <input type='text' placeholder='enter name and surname '></input>
//                 </div>
//                 <div className='formInput'>
//                     <label>Email</label>
//                     <input type='email' placeholder='enter your name'></input>
//                 </div>
//                 <div className='formInput'>
//                     <label>Phone</label>
//                     <input type='text' placeholder='enter name'></input>
//                 </div>
//                 <div className='formInput'>
//                     <label>Password</label>
//                     <input type='password' placeholder='enter your password'></input>
//                 </div>
//                 <div className='formInput'>
//                     <label>Adress</label>
//                     <input type='text' placeholder='enter your adress'></input>
//                 </div>
//                 <div className='formInput'>
//                     <label>Contry</label>
//                     <input type='text' placeholder='enter your adress'></input>
//                 </div>
//                 <button >Send</button>

//             </form>
//             </div>
//             </div>
        
        


//         </div>
//       </div>
//     </div>
//     </main>
//   )
// }

// export default page


'use client'
import Navbar from '@/component/navbar/Navbar'
import Sidebar from '@/component/sidebar/Sidebar'
import React, { useState } from 'react'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined"
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined"
import "./add.css";
import Image from 'next/image';

const Page = () => {
  const [imageFile, setImageFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setImageFile(selectedFile);
  };

  const handlePdfChange = (event) => {
    const selectedFile = event.target.files[0];
    setPdfFile(selectedFile);
  };

  return (
    <main>
      <div className='home'>
        <div className="dashboard">
          <Sidebar />
          <div className='content'>
            <Navbar/>
            <div className='top'>
              <h1>Add New User</h1>
            </div>
            <div className='bottom'>
              <div className='left'>
                {imageFile && imageFile.type.startsWith('image') && (
                  <img
                 
                    src={ file ?URL.createObjectURL(imageFile):'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3566wy6NLRFFoWPeS_gMbUMtVc7xWinMjHw&usqp=CAU'}
                    alt=''
                  />
                )}
              </div>
              <div className='right'>
                <form>
                  <div className='formInput'>
                    <label htmlFor='imageFile'>
                      Image: <DriveFolderUploadOutlinedIcon className='icon'/>
                    </label>
                    <input type='file' id='imageFile' style={{display:"none"}} onChange={handleImageChange}></input>
                  </div>
                  <div className='formInput'>
                    <label htmlFor='pdfFile'>
                      PDF: <PictureAsPdfOutlinedIcon className='icon'/>
                    </label>
                    <input type='file' id='pdfFile' style={{display:"none"}} onChange={handlePdfChange}></input>
                    {pdfFile && pdfFile.type === 'application/pdf' && (
                      <iframe src={URL.createObjectURL(pdfFile)} width="300" height="200"></iframe>
                    )}
                  </div>
                  <div className='formInput'>
                    <label>Username</label>
                    <input type='text' placeholder='enter Username'></input>
                  </div>
                  <div className='formInput'>
                    <label>Name and surname</label>
                    <input type='text' placeholder='enter name and surname '></input>
                  </div>
                  <div className='formInput'>
                    <label>Email</label>
                    <input type='email' placeholder='enter your name'></input>
                  </div>
                  <div className='formInput'>
                    <label>Phone</label>
                    <input type='text' placeholder='enter name'></input>
                  </div>
                  <div className='formInput'>
                    <label>Password</label>
                    <input type='password' placeholder='enter your password'></input>
                  </div>
                  <div className='formInput'>
                    <label>Address</label>
                    <input type='text' placeholder='enter your address'></input>
                  </div>
                  <div className='formInput'>
                    <label>Country</label>
                    <input type='text' placeholder='enter your address'></input>
                  </div>
                  <button type="submit">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page;



