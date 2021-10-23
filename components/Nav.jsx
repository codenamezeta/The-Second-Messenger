import { useState, useEffect } from 'react'
import Link from 'next/link'
import { RiMenu2Fill, RiCloseFill } from 'react-icons/ri'
import Image from 'next/image'
//TODO: Auto focus when nav state is toggled.
//? Maybe try: document.getElementById("nav_open_item").focus()

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false)

  // useEffect(() => {
  //   if (navOpen === true) {
  //     document.body.style.overflow = 'hidden'
  //     console.log(document.body.style.overflow)
  //   } else {
  //     document.body.style.overflow = ''
  //     console.log(document.body.style.overflow)
  //   }
  // }, [])

  return (
    <>
      <nav id='navbar'>
        <ul className='container'>
          <li id='navbar_brand'>
            <a href='/'>
              <Image
                src='/imgs/logos/white.png'
                // layout='responsive'
                // objectFit
                height='64'
                width='179'
                alt='TSM'
              />
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/music'>
              Music
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/videos'>
              Videos
            </a>
          </li>
          <li className='nav-item'>
            <Link href='/bio'>
              <a className='nav-link'>Bio</a>
            </Link>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/news'>
              News
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/merch'>
              Merch
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link button button-cta' href='/'>
              More
            </a>
          </li>
          <li id='nav_open_item' onClick={() => setNavOpen(true)}>
            <RiMenu2Fill />
          </li>
        </ul>
      </nav>
      {/* Click blocker expands when Side Sheet is open to prevent accidental clicks on the document body */}
      <div
        id='click_blocker'
        className={navOpen ? 'on' : 'off'}
        onClick={() => setNavOpen(false)}
      ></div>
      {/* <!-- Mobile Navigation --> */}
      <nav id='side_sheet' className={navOpen ? 'open' : 'closed'}>
        <ul>
          <li
            id='nav_close_item'
            className='nav-item'
            onClick={() => setNavOpen(false)}
          >
            <RiCloseFill />
          </li>
          <li className='nav-item'>
            <a id='side_nav_brand' href='/'>
              The Second
              <br />
              Messenger
            </a>
          </li>
          <li className='nav-item'>
            <a href='/music' className='side-nav-link'>
              Music
            </a>
          </li>
          <li className='nav-item'>
            <a href='/videos' className='side-nav-link'>
              Videos
            </a>
          </li>
          <li className='nav-item'>
            <a href='/bio' className='side-nav-link'>
              Bio
            </a>
          </li>
          <li className='nav-item'>
            <a href='/news' className='side-nav-link'>
              News
            </a>
          </li>
          <li className='nav-item'>
            <a href='/merch' className='side-nav-link'>
              Merch
            </a>
          </li>
          <li className='nav-item'>
            <a href='/' className='side-nav-link'>
              More
            </a>
          </li>
          <li className='nav-item'>
            <a href='#!' className='side-nav-link'>
              <i className='fab fa-facebook'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-youtube'></i>
              <i className='fab fa-twitter'></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
