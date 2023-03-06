import React, { useState } from 'react'
import TopBar from '../SiteBar/TopBar/TopBar'
import NavBar from '../SiteBar/NavBar/NavBar'
import './Account.css'
import { Row, Col } from 'react-bootstrap'


export default function Account() {


    const [emailLogin, setEmailLogin] = useState(false)

    return (
        <>
            <TopBar></TopBar>
            <NavBar></NavBar>
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
                                        <form className="account-form__email">
                                            <div className="login-email__box mb-4">
                                                <label className='account-input__label' htmlFor="email">
                                                    شماره موبایل یا ادرس ایمیل *
                                                </label>
                                                <input className='account-form__input my-4' type="text" id="email" />
                                                <label className='account-input__label' htmlFor="pass">
                                                    گذرواژه *
                                                </label>
                                                <input className='account-form__input my-4' type="password" id="pass" />
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
                                <form className="account-form__signup px-5">
                                    <div className="signup-form__box mb-4">
                                        <label className='account-input__label' htmlFor="phone-number">
                                            شماره موبایل  *
                                        </label>
                                        <input className='account-form__input my-4' type="text" id="phone-number" />
                                        <label className='account-input__label' htmlFor="username">
                                            نام کاربری *
                                        </label>
                                        <input className='account-form__input my-4' type="password" id="username" />
                                        <label className='account-input__label' htmlFor="email">
                                            آدرس ایمیل *
                                        </label>
                                        <input className='account-form__input my-4' type="text" id="email" />
                                        <label className='account-input__label' htmlFor="pass">
                                            گذرواژه *
                                        </label>
                                        <input className='account-form__input my-4' type="password" id="pass" />
                                    </div>
                                    <input type="submit" value="عضویت" className='account-form__btn py-3 px-3' />
                                </form>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>


        </>
    )
}
