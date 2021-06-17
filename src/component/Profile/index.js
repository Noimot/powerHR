import React, { useEffect } from 'react'
import { DashboardLayout } from '../../layout/DashboardLayout'
import PersonalDetailsComponent from '../PersonalDetailsComponent'
import ContactDetailsComponent from '../ContactDetailsComponent'
import JobStatusComponent from '../JobStatusComponent'
import { SalaryComponent } from '../Salary'
import './index.css'
import { Avatar } from '@material-ui/core'
import employeeUseridAction from '../../redux/action/employeeUserid'
import { useDispatch } from 'react-redux'
// import {employeeUseridApi} from '../../redux/api/employee'


const Profile = ({ match }) => {

    const dispatch = useDispatch()


    console.log('runs')


    // console.log(window.location.pathname)
    // console.log(match)
    //     async function getPath() {
    //         console.log(match.params)
    //         const profileid = await match.params.userid
    //         const data = await profileid
    //         return data;
    //     }
    // const employeeid =  getPath();
    //     (console.log(employeeid))

    useEffect(() => {
        console.log('running')
        dispatch(employeeUseridAction({ userid: match.params.userid }))
    }, [dispatch])

    // useEffect(async() => {
    //     const response = await employeeUseridApi({userid: match.params.userid})
    //     console.log(match.params.userid)
    //     console.log(response)
    //  }, [dispatch])


    return (
        <DashboardLayout>
            <div className='profile-container'>
                <Avatar src='https://picsum.photos/200/300.jpg'>

                </Avatar>
            </div>
            <PersonalDetailsComponent />
            <ContactDetailsComponent />
            <JobStatusComponent />
            <SalaryComponent />
        </DashboardLayout>

    )
}

export default Profile;