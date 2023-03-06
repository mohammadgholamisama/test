import React, { useEffect } from 'react'
import './TopBar.css'
import { FaTelegram, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import styled from '@emotion/styled'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TopBar() {


  const [topbarList, setTopbarList] = useState([])

  const IconTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      fontSize: 15,
    },
  }));

  useEffect(() => {
    fetch('https://react-b2956-default-rtdb.firebaseio.com/topbar.json')
      .then(res => res.json())
      .then(data => Object.entries(data))
      .then(list => {
        let getTopbarList = list.map(l => l[1])
        setTopbarList(getTopbarList)
      })
  }, [])


  return (
    <div className='top-bar d-none d-lg-block'>
      <div className='d-flex justify-content-between container-xl container-fluid'>
        <div className='top-bar__right'>
          <ul className="top-bar__list p-0">
            {topbarList.map(item => (
              <li className="top-bar__list-item" key={item.id}>
                <Link to="/" className='top-bar__list-link'>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='top-bar__left d-flex align-items-center'>
          <span className='top-bar__email'>mohammad.mgs.98@gmail.com</span>
          <div className="top-bar__icons">
            <IconTooltip title="مارا در تلگرام دنبال کنید" arrow>
              <Link to="/" className='top-bar__icon-link'>
                <FaTelegram className='top-bar__icon mx-1' />
              </Link>
            </IconTooltip>
            <IconTooltip title="مارا در یوتیوب دنبال کنید" arrow>
              <Link to="/" className='top-bar__icon-link'>
                <FaYoutube className='top-bar__icon mx-1' />
              </Link>
            </IconTooltip>
            <IconTooltip title="مارا در توییتر دنبال کنید" arrow>
              <Link to="/" className='top-bar__icon-link'>
                <FaTwitter className='top-bar__icon mx-1' />
              </Link>
            </IconTooltip>
            <IconTooltip title="مارا در اینستاگرام دنبال کنید" arrow>
              <Link to="/" className='top-bar__icon-link'>
                <FaInstagram className='top-bar__icon mx-1' />
              </Link>
            </IconTooltip>
          </div>
        </div>
      </div>
    </div>
  )
}
