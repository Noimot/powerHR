import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
background: #F7F7F7;
display:flex;
justify-content: center;
align-items: center;
height: 8rem;
border-radius: 4px;
color: #2C4770;


`


export const NoPendingLeaveRequest = () => {
    return (
        <Div>
            <p>You have no pending Request</p>
        </Div>
    )
};