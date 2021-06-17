import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import allEmployee from '../../redux/action/employee'
import { MentionsInput, Mention } from 'react-mentions'


// export default function NestedList() {

//     const [optionValue, setOptionValue] = useState('')

//     const handleChange = (e) => {
//         setOptionValue(e.target.value)
//     }



//     const dispatch = useDispatch();
//     const employeeDataStore = useSelector(({ allEmployeeReducer }) => allEmployeeReducer)
//     console.log(employeeDataStore)

//     useEffect(() => {
//         dispatch(allEmployee())
//     }, [dispatch])


//     return (

//         <div>
//             <select value={optionValue} onChange={handleChange} className='select-option-value'>
//                 {employeeDataStore.data.map(store => {
//                     return <option value={store.userid}>{store.employee_name}</option>
//                 })}
//             </select>
//         </div>

        

//     )
// }



export default function UserMention() {const users = [
    {
      id: "walter",
      display: "Walter White",
    },
    {
      id: "jesse",
      display: "Jesse Pinkman",
    },
    {
      id: "gus",
      display: 'Gustavo "Gus" Fring',
    },
    {
      id: "saul",
      display: "Saul Goodman",
    },
    {
      id: "hank",
      display: "Hank Schrader",
    },
    {
      id: "skyler",
      display: "Skyler White",
    },
    {
      id: "mike",
      display: "Mike Ehrmantraut",
    },
    {
      id: "lydia",
      display: "Lydìã Rôdarté-Qüayle",
    },
  ];     const [state, setState] = useState("");
    return (
        <div>
             <div className="single-line">
            <h3>Single line input</h3>
            <MentionsInput
              singleLine
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder={"Mention people using '@'"}
              a11ySuggestionsListLabel={"Suggested mentions"}
            >
              <Mention data={users} trigger="@" />
            </MentionsInput>
          </div>
        </div>
    )
}


