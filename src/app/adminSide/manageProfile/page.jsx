import Navbar from '@/component/navbar/Navbar'
import Sidebar from '@/component/sidebar/Sidebar'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./manage.css";
import { LuPencilLine } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { Space, Statistic, Card, Table, Typography } from 'antd';
// "use client";

const page = () => {
  //   const [user, setUser]=useState([]);
  
//   useEffect(()=>{
//     loadUsers();
//   },[]);

//   const loadUsers=async ()=>{
//     const result=await axios.get("");
 //      setUsers(Result.data);
//   };
  return (
    <main>
      <div className='home'>
        <div className="dashboard">
          <Sidebar />
          <div className='content'>
            <Navbar/>
            <h2 style={{marginTop:"50px"}}>Manage Profile</h2>
            <button type="button" class="btn btn-outline-secondary" style={{ marginTop: "50px", marginLeft: "50px"}}>Add new</button>
            {/* <button type="button" class="btn btn-outline-warning" style={{ marginTop: "50px", marginLeft: "50px"}}>Add new</button> */}
            <div className='py-4'>
              <div className='table-container'>
                <table className="table border caption-top table-striped">
                  <caption>List of users</caption>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">fname</th>
                      <th scope="col">lname</th>
                      <th scope="col">Birth</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Adress</th>
                      <th scope="col">Action</th>
                    
                    </tr>
                  </thead>
                  <tbody>







{/* {
        users.map((user,index)=>(
        
        <tr>
          <th scope="row" key={index}>{index+1}</th>
          <td>{user}</td>
          <td>{user}</td>
          <td>{user}</td>
          <td>{user}</td>
          <td>{user}</td>
          <td>{user}</td>
          <td>
          <Space size="small">
            <a href="#">
              <LuPencilLine style={{ color: 'blue' }} />
            </a>
            <a href="#">
              <MdDeleteOutline onClick={() => handleDeleteUser(user)} style={{ color: 'red' }} />
            </a>
          </Space>
          </td>
        </tr> 
        ))

    }   */}

                     {/* <tr>
                      
                      <td>wimi</td>
                      <td>toto</td>
                      <td>10-02-2020</td>
                      <td>Male</td>
                      <td>Ls-02</td>
                      <td><Space size="small">
            <a href="#">
              <LuPencilLine style={{ color: '#56509F' }} />
            </a>
            <a href="#">
              <MdDeleteOutline 
            
              style={{ color: '#F86A9A' }} />
            </a>
          </Space></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>anon</td>
                      <td>23-05-2023</td>
                      <td>20017</td>
                      <td>male</td>
                      <td><Space size="small">
            <a href="#">
              <LuPencilLine style={{ color: '#56509F' }} />
            </a>
            <a href="#">
              <MdDeleteOutline style={{ color: '#F86A9A' }} />
            </a>
          </Space></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                      <td>20017</td>
                      <td>male</td>
                      <td><Space size="small">
            <a href="#">
              <LuPencilLine style={{ color: '#56509F' }} />
            </a>
            <a href="#">
              <MdDeleteOutline  style={{ color: '#F86A9A' }} />
            </a>
          </Space></td>
                   
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>hou</td>
                      <td>ben</td>
                      <td>lll</td>
                      <td>20017</td>
                      <td>male</td>
                      <td><Space size="small">
            <a href="#">
              <LuPencilLine style={{ color: '#56509F' }} />
            </a>
            <a href="#">
              <MdDeleteOutline  style={{ color: '#F86A9A' }} />
            </a>
          </Space></td>
                    </tr> */} 
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page;
