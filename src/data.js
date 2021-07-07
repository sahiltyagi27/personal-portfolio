import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
export const links = [
    {
        id: 1,
        url: '/personal-portfolio',
        text: 'Home',
    },
    {
        id: 2,
        url: '/about',
        text: 'About',
    },
    {
        id: 3,
        url: '/projects',
        text: 'Projects',
    },
    {
        id: 4,
        url: '/contact',
        text: 'Contact',
    },
]

export const social = [
    {
        id: 1,
        url: 'https://github.com/sahiltyagi27',
        icon: <FaGithub />,
    },
    {
        id: 2,
        url: 'https://www.linkedin.com/in/sahil-tyagi-1429b2158/',
        icon: <FaLinkedin />,
    },
    {
        id: 3,
        url: 'mailto:sahiltyagi1997@gmail.com',
        icon:<AiOutlineMail/>
    }
]