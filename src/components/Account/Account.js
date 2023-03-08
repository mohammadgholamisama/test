import React, { useState } from 'react'
import './Account.css'
import { Row, Col, Alert } from 'react-bootstrap'


export default function Account() {

    var emailRegex = /[a-zA-Z0-9.-]+@[a-z-]+\.[a-z]{2,3}/;
    // string.match(regex);

    const [emailLogin, setEmailLogin] = useState(false)

    // Sign Up Handler

    const [phoneUser, setPhoneUser] = useState('')
    const [usernameUser, setUsernameUser] = useState('')
    const [emailUser, setEmailUser] = useState('')
    const [passwordUser, setPasswordUser] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [userSignUpStatus, setUserSignUpStatus] = useState(false)

    // Login Handler

    const [loginStatus, setLoginStatus] = useState(false)
    const [loginError, setLoginError] = useState(false)

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')


    // login

    const loginHandler = event => {
        event.preventDefault()

        fetch('https://react-b2956-default-rtdb.firebaseio.com/users.json')
            .then(res => res.json())
            .then(data => Object.entries(data))
            .then(allUsers => {
                let findedUser = allUsers.find(user => {
                    return user[1].emailUser === loginEmail && user[1].passwordUser === loginPassword
                })

                if (findedUser) {
                    setLoginStatus(true)
                    setLoginError(false)

                    setTimeout(() => {
                        window.location.replace('/')
                    }, 1000);
                } else {
                    setLoginStatus(false)
                    setLoginError(true)

                }
            })
    }

    // sign up

    const signUpHandler = event => {
        event.preventDefault()

        if (emailUser.match(emailRegex)) {
            let newUser = {
                id: Math.floor(Math.random() * 100000),
                phoneUser,
                usernameUser,
                emailUser,
                passwordUser,
            }

            fetch(`https://react-b2956-default-rtdb.firebaseio.com/users.json`, {
                method: 'POST',
                body: JSON.stringify(newUser)
            }).then(res => {
                setPhoneUser('')
                setUsernameUser('')
                setEmailUser('')
                setPasswordUser('')
                setEmailError(false)
                setUserSignUpStatus(true)
            })
        } else {
            setEmailError(true)
            setUserSignUpStatus(false)
        }
    }

    return (
        <>
            <div className="account">
                <p className='account-title text-center pb-4 pt-2'>حساب کاربری من</p>
                <div className="account-form mt-2">
                    <div className="container-fluid container-xl">
                        <Row>
                            <Col className='px-4' xs={12} lg={6} >
                                <h4 className='account-page__text '>ورود</h4>
                                {!emailLogin ?
                                    (<form className="account-login__form-number ">
                                        <div className="login-number__box mb-4">
                                            <label className='account-input__label' htmlFor="login">
                                                شماره موبایل *
                                            </label>
                                            <input className='account-form__input my-4' type="text" id="login" />
                                        </div>

                                        <input type="submit" value="ورود" className='account-form__btn py-3 px-3' />
                                        <button className='account-form__btn py-3 px-3' onClick={() => setEmailLogin(true)}>ورود با ایمیل و رمز</button>
                                    </form>)
                                    :
                                    (
                                        <form className="account-form__email" onSubmit={loginHandler}>
                                            {loginStatus &&
                                                <Alert variant="success" className='fs-5' >
                                                    شما با موفقیت وارد شده اید .
                                                </Alert>
                                            }
                                            {loginError &&
                                                <Alert variant="danger" className='fs-5' >
                                                    ایمیل یا پسورد وارد شده صحیح نمیباشد.
                                                </Alert>
                                            }
                                            <div className="login-email__box mb-4">
                                                <label className='account-input__label' htmlFor="email">
                                                    شماره موبایل یا ادرس ایمیل *
                                                </label>
                                                <input className='account-form__input my-4' type="text" id="email" onChange={event => setLoginEmail(event.target.value)} />
                                                <label className='account-input__label' htmlFor="pass">
                                                    گذرواژه *
                                                </label>
                                                <input className='account-form__input my-4' type="password" id="pass" onChange={event => setLoginPassword(event.target.value)} />
                                            </div>

                                            <input type="submit" value="ورود" className='account-form__btn py-3 px-3' />
                                            <div className="forget-pass">
                                                <h6 className='my-4 text-warning'>گذرواژه خود را فراموش کرده اید ؟</h6>
                                                <button className='account-form__btn py-3 px-3' onClick={() => setEmailLogin(false)}>ورود با کد تایید</button>
                                            </div>
                                        </form>
                                    )
                                }
                            </Col>
                            <Col className='mt-5 mt-lg-0 pb-5' xs={12} lg={6} >
                                <h4 className='account-page__text mx-5'>عضویت</h4>
                                <form className="account-form__signup px-5" onSubmit={signUpHandler}>
                                    {emailError &&
                                        <Alert variant="danger" className=' fs-5' >
                                            لطفا ایمیل خود را درست وارد نمایید .
                                        </Alert>}
                                    {userSignUpStatus &&
                                        <Alert variant="success" className='fs-5' >
                                            شما با موفقیت ثبت نام کرده اید .
                                        </Alert>}
                                    <div className="signup-form__box mb-4">
                                        <label className='account-input__label' htmlFor="phone-number">
                                            شماره موبایل  *
                                        </label>
                                        <input className='account-form__input my-4' type="number" id="phone-number" value={phoneUser} onChange={event => setPhoneUser(event.target.value)} required />
                                        <label className='account-input__label' htmlFor="username">
                                            نام کاربری *
                                        </label>
                                        <input className='account-form__input my-4' type="text" id="username" value={usernameUser} onChange={event => setUsernameUser(event.target.value)} required />
                                        <label className='account-input__label' htmlFor="email">
                                            آدرس ایمیل *
                                        </label>
                                        <input className='account-form__input my-4' type="text" id="email" value={emailUser} onChange={event => setEmailUser(event.target.value)} required />
                                        <label className='account-input__label' htmlFor="pass">
                                            گذرواژه *
                                        </label>
                                        <input className='account-form__input my-4' type="password" id="pass" value={passwordUser} onChange={event => setPasswordUser(event.target.value)} required />
                                    </div>
                                    {phoneUser && emailUser && usernameUser && passwordUser ? <input type="submit" value="عضویت" className='account-form__btn py-3 px-3' />
                                        :
                                        <input type="submit" value="عضویت" className='account-form__btn py-3 px-3 bg-secondary' disabled />
                                    }
                                </form>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>


        </>
    )
}
