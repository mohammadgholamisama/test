import React from 'react'
import { FaAngleDown, FaBars, FaUserAlt } from 'react-icons/fa'
import { SlBasket } from 'react-icons/sl'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {

    let menuList = [
        { id: 6, title: 'خانه', link: '/', arrow: false },
        { id: 1, title: 'فرانت اند', link: '/l', arrow: true },
        { id: 2, title: 'امنیت', link: '/l', arrow: true },
        { id: 3, title: 'مقالات', link: '/l', arrow: true },
        { id: 4, title: 'پایتون', link: '/l', arrow: true },
        { id: 5, title: 'مهارت های نرم', link: '/l', arrow: false },
    ]

    document.addEventListener('click', event => {
        let mobileMenuIcon = document.querySelector('.nav-bar__mobile-menu')
        let mobileMenu = document.querySelector('.mobile-menu')
        if (mobileMenuIcon.contains(event.target)) {
            mobileMenu.style.transform = 'translateX(0)'
        } else {
            mobileMenu.style.transform = 'translateX(300px)'
        }

    })

    return (
        <>
            <div className="mobile-menu">
                <div className="mobile-menu__search text-center mt-2">
                    <input type="text" className="mobile-menu__input" placeholder='جستجو ...' />
                </div>
                <ul className="mobile-menu__list">
                    {menuList.map(item => (
                        <li className="mobile-menu__item" key={item.id}>
                            <NavLink to={`${item.link}`} className={(link) => link.isActive ? 'mobile-menu__item-link activeMenu' : 'mobile-menu__item-link'}>{item.title}</NavLink>
                        </li>
                    ))}
                    <li className="mobile-menu__item">
                        <NavLink to='/account' className={(link) => link.isActive ? 'mobile-menu__item-link activeMenu' : 'mobile-menu__item-link'}>ورود / عضویت</NavLink>
                    </li>
                </ul>
            </div>
            <>
                <nav>
                    <div className='container-xl container-fluid'>
                        <div className="nav-bar d-flex align-items-center justify-content-between">
                            <div className="nav-bar__mobile-menu text-white fs-1 d-flex d-lg-none mx-3 mx-md-0" >
                                <FaBars></FaBars>
                            </div>
                            <Link to='/' className="nav-bar__image">
                                <img src="./images/header/logo.png" alt="logo" />
                            </Link>
                            <div className="nav-bar__menus d-none d-lg-flex">
                                <ul className="nav-bar__list text-white d-flex p-0">
                                    {menuList.map(item => (
                                        <li className="nav-bar__item mx-3 d-flex" key={item.id}>
                                            <Link to={`${item.link}`} className='nav-bar__item-link'>
                                                {item.title}
                                            </Link>
                                            {item.arrow && (
                                                <div className="nav-bar__item-arow">
                                                    <FaAngleDown></FaAngleDown>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="nav-bar__user d-flex align-items-center">
                                <Link to='/account' className='btn  btn-info text-white mx-3 p-2 d-none d-lg-flex' style={{ fontSize: 14 }}>ورود / عضویت</Link>
                                <Link to='/account' className='btn btn-success text-white mx-3 d-flrx d-lg-none'>
                                    <FaUserAlt></FaUserAlt>
                                </Link>
                                <div className="nav-bar__basket-icon d-flex align-items-center">
                                    <SlBasket></SlBasket>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        </>
    )
}
