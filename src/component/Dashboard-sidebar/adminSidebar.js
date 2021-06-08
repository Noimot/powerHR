import React, { useEffect } from 'react'
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Avatar} from '@material-ui/core'
import './index.css'
import './styles.css'
// import 'react-pro-sidebar/dist/css/styles.css';
import svg from './images/dashboard-icon.svg'
import svgList from './images/list-icon.svg'
import svgLogout from './images/logout-box-line.svg'
import svgProfile from './images/profile-icon.svg'
import { Link } from 'react-router-dom'
import Admin  from '../../redux/action/adminName'
import { useDispatch , useSelector } from 'react-redux';


export default function AdminSidebar() {

    const dispatch = useDispatch();
    const adminStore = useSelector(({adminReducer}) => adminReducer)
    const adminName = adminStore.data.name
    
    useEffect(() => {
      dispatch(Admin())
    },[dispatch])

    const handleClick = () => {
       const del = localStorage.removeItem("x-access-token")
       console.log(del)
    }

    return (
        <>

            <ProSidebar>
                <SidebarHeader>
                    <div className='header-sidebar-custom'>
                        <Avatar src='https://picsum.photos/200/300.jpg'>

                        </Avatar>
                        <p className='header-tag'>Welcome,</p>
                        
                        <p className='admin-name'>{adminName}</p>
                    </div>
                    {/**
     *  You can add a header for the sidebar ex: logo
     */}
                </SidebarHeader>
                <SidebarContent>
                    {/**
     *  You can add the content of the sidebar ex: menu, profile details, ...
     */}
                    <Menu iconShape="square">
                        <SubMenu title={<Link to='/admindashboard'>Dashboard</Link>} style={{color:'#fff'}} icon={<img src={svg} alt='dashboard icon' />}>
                            <MenuItem><Link to='/admindashboard'>General announcement</Link></MenuItem>
                            <MenuItem><Link to='/admintask'>Tasks</Link></MenuItem>
                            <MenuItem><Link to='/adminmemo'>Memos</Link></MenuItem>
                            <MenuItem><Link to='/adminleave'>Paid leave</Link></MenuItem>
                        </SubMenu>
                       <SubMenu title={<Link to='/profile'>Profile</Link>} icon={<img src={svgProfile} alt='profile icon' />}>
                            <MenuItem><a href='#personal-details'>Personal details</a></MenuItem>
                            <MenuItem><a href='#contact-details'>Contact details</a></MenuItem>
                            <MenuItem><a href='#'>Work hours</a></MenuItem>
                            <MenuItem><a href='#salary'>Salary</a></MenuItem>
                            <MenuItem><a href='#'>Documents</a></MenuItem>
                            <MenuItem><a href='#'>Social media accounts</a></MenuItem>
                        </SubMenu>
                        <MenuItem icon={<img src={svgList} alt='employees list icon' />}><Link to='/employeelist'>Employees list</Link></MenuItem>
                        <MenuItem icon={<img src={svgLogout} alt='logout icon' />} onClick={handleClick}><Link to='/'>Sign out</Link></MenuItem>


                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    {/**
     *  You can add a footer for the sidebar ex: copyright
     */}
                </SidebarFooter>
            </ProSidebar>
        </>
    )
}
