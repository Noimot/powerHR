// import React, { useState } from 'react'
// import img from './b.jpg'
// import './index.css'


// const AdminSidebar = () => {

//     const [dashboardMenu, setDashboardMenu] = useState('');
//     const [personalInfo, setPersonalInfo] = useState('');
//     return (
//         <section className='admin-sidebar'>
//             <div className='staff-img'>
//                 <img src={img} alt='admin' style={{ width: '100px', height: '100px' }} />
//                 <p>Welcome, <br /> admin name</p>
//             </div>
//             <div>
//                 <select className='select-option' value={dashboardMenu} onChange={e => setDashboardMenu(e.target.value)}>
//                     <option value='Dashboard'>Dashboard</option>
//                     <option value='General announcement'>General announcements</option>
//                     <option value='Tasks'>Tasks</option>
//                     <option value='Memos'>Memos</option>
//                     <option value='Paid Leave'>Paid Leave</option>
//                 </select>
//             </div>


//             <div>
//                 <select className='select-option' value={personalInfo} onChange={e => setPersonalInfo(e.target.value)}>
//                     <option value='Profile'>Profile</option>
//                     <option value='Personal details'>Personal details</option>
//                     <option value='Contact details'>Contact details</option>
//                     <option value='Job status'>Job status</option>
//                     <option value='Work hours'>Work hours</option>
//                     <option value='Salary'>Salary</option>
//                     <option value='Documents'>Documents</option>
//                     <option value='Social media accounts'>Social media accounts</option>
//                 </select>
//             </div>


//             <p>Employees list</p>

//             <p>Sign out</p>

//         </section>
//     )
// }

// export default AdminSidebar;