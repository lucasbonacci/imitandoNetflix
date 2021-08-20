import React, { useState, useEffect } from 'react'
import logo from '../assets/logousario.png'
import './nav.css'
const Nav = () => {

    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShow(true)
            } else {
                setShow(false)
            }
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className='nav__logo'
                src='https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
                alt='netflix logo'
            />

            <img
                className='nav_avatar'
                img={logo}
            />

        </div>
    )
}

export default Nav
