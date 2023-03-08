import React from 'react'
import './Header.css'
import { FaSearch, FaAngleDown } from 'react-icons/fa'

export default function Header() {


    const scrollHandler = () => {
        window.scrollTo(0, 300)
    }

    return (
        <header>
            <div className="filter-header"></div>
            <div className="header-center">
                <h3 className='header-text text-center px-3 text-white'>با آکادمی سبز لرن برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن</h3>
                <div className="header-search text-center">
                    <div className="header-search__items">
                        <input className='header-search__input' type="text" placeholder='جستجو ...' />
                        <FaSearch className='header-search__input-icon'></FaSearch>
                    </div>
                </div>
            </div>
            <div className="header-arow text-center fs-1 pb-3" onClick={scrollHandler}>
                <FaAngleDown></FaAngleDown>
            </div>

        </header>
    )
}
