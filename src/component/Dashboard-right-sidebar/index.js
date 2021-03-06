import React, { useEffect } from 'react'
import './index.css'
import allAnnouncement from '../../redux/action/announcement.js'
import { useDispatch, useSelector } from 'react-redux'
import spinner from './spinner.gif'


const DashboardContent = () => {

    const dispatch = useDispatch();
    const announcementStore = useSelector(({ announcement }) => announcement)
    // const current = Date().toString()
    useEffect(() => {
        dispatch(allAnnouncement())
    }, [dispatch])

    console.log(announcementStore.allAnnouncement)
    console.log(announcementStore)

    // const emptyStore = () => {
    //     {
    //         if (announcementStore.allAnnouncement === []) {
    //             return <p>announcement store is empty</p>
    //         }
    //     }
    // }

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
    return (

        <div className='admin-right-sidebar'>
            <p className='date'>{date}</p>
            <hr />
            {announcementStore.loading && <div className='loading-spinner'><img src={spinner} alt='spinner' /></div>}

           {/* {emptyStore} */}

            {announcementStore.allAnnouncement.length > 0 && announcementStore.allAnnouncement.map((eachAnnouncement) => {
                return <div key={eachAnnouncement.id}>{eachAnnouncement.announcements}
                    <p className='p-time'>{eachAnnouncement.date_posted}</p>
                    <hr />
                </div>
            })
            }

        </div>
    )
}

export default DashboardContent;