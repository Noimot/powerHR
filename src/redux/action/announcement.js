import { getAllAnnouncement } from '../api/new_announcement'
import { GET_USER_FAILURE, GET_USER_SUCCESS, GET_USER_REQUEST } from '../actionTypes'


const allAnnouncement = () => async(dispatch) => {
    try {
        dispatch({
            type: GET_USER_REQUEST,
        });
        const response = await getAllAnnouncement();
        if(response.status === 200){
            dispatch({
                type: GET_USER_SUCCESS,
                payload:{
                    result: response.data.announcements
                }
            });
        }
        else {
            dispatch({
                type: GET_USER_FAILURE,
                payload: {
                    error: 'failed to access resource'
                }
            })
        }
        
    }
    catch{
        dispatch({
            type: GET_USER_FAILURE,
            payload: {
                error: 'unavailable resources'
            }
        })
    }
    // const response =await getAllAnnouncement();
    // const {announcements} = response.data;
    // console.log(announcements)
    // return (dispatch)=>dispatch({
    //     type:'ALL_ANNOUNCEMENT',
    //     payload:announcements
    // });
}


export default allAnnouncement;
