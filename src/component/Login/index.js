import React, { useState, useEffect } from 'react'
import logo from './powerHR-logo.svg'
import './index.css'
import Button from '../Button'
import { LoginData } from '../../redux/action/loginData'
import { useSelector, useDispatch } from 'react-redux'


const Login = () => {

   
    const dispatch = useDispatch();
    const loginStore = useSelector(({ loginReducer }) => loginReducer)

    const [loginInfo, setLoginInfo] = useState({
        id: '',
        password: ''
    });

    useEffect(() => {
        document.body.className = 'body-background';
    }, []);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLoginInfo({ ...loginInfo, [name]: value })
    }

    const handleClick = (e) => {
        e.preventDefault()
        if (loginInfo.id.trim() !== '' || loginInfo.password.trim() !== '') {
            console.log(loginInfo.id, loginInfo.password)

            dispatch(LoginData({
                adminId: loginInfo.id,
                password: loginInfo.password
            }))

        }

    }

    return (
        <div className='body-background'>h
            <section className='login-form'>
                <div className='login-width'>
                    <div> <img src={logo} alt='power HR logo' /></div>
                    <form>
                        <p className='sign-in'>SIGN IN</p>
                        <input type='text' name='id' value={loginInfo.id} onChange={handleChange} placeholder='ID NUMBER OR WORK EMAIL*' />
                        <input type='password' name='password' value={loginInfo.password} onChange={handleChange} placeholder='PASSWORD' />
                        <span className='password'>Forgot password?</span>
                        <Button onClick={handleClick} buttonClick='SIGN IN' />
                        {loginStore.loading && <p className='login'>loading ...</p>}
                        {loginStore.loginError && <p className='loginError'>incorrect login credentials</p>}
                        {loginStore.loginSuccess && <p className='login'>logging in ...</p>}
                    </form>

                </div>
            </section>
        </div>
    )
}

export default Login;