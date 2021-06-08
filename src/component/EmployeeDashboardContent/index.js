import React, { useEffect, useState } from 'react'
import './index.css'
import allAnnouncement from '../../redux/action/announcement.js'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import spinner from '../Dashboard-right-sidebar/spinner.gif'


const EmployeeDashboardContent = () => {

    
const dispatch = useDispatch();
const announcementStore = useSelector(({announcement}) => announcement)
    // const current = Date().toString()
    useEffect(()=>{
        dispatch(allAnnouncement())
    },[dispatch])

    console.log(announcementStore.allAnnouncement)

    const current = new Date()

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let month = new Array(12);
    month[1] = 'January'
    month[2] = 'February'
    month[3] = 'March'
    month[4] = 'April'
    month[5] = 'May'
    month[6] = 'June'
    month[7] = 'July'
    month[8] = 'August'
    month[9] = 'September'
    month[10] = 'October'
    month[11] = 'November'
    month[12] = 'December'

    // var n = weekday[d.getDay()];

    const date = `${weekday[current.getDay()]}, ${current.getDate()} ${month[current.getMonth() + 1]}`;
    const time = current.getHours() + ':' + current.getMinutes();
    // const date = current;

const [open, setOpen] = useState(true);

const handleClick = () => {
    setOpen(false)
    console.log(open)
}

    return (

        <div className='admin-right-sidebar'>
            {open &&
            <div className='profile-link'>
                <p><Link to='/employeeprofile'> Complete your profile setup by filling in your personal details, contact details and other necessary fields.</Link></p><span onClick={handleClick}>x</span>
            </div>
}
            <p className='employee-date'>{date}</p>
            <hr />
            {announcementStore.loading && <div className='loading-spinner'><img src={spinner} alt='spinner' />&nbsp;&nbsp;Loading.....</div>}
                {announcementStore.allAnnouncement.map((eachAnnouncement) => {
                    return <div key={eachAnnouncement.id}>{eachAnnouncement.announcements}
                    <p className='p-time'>{eachAnnouncement.date_posted}</p>
                    <hr />
                    </div>   
                })
                }

        </div>
    )
}

export default EmployeeDashboardContent;