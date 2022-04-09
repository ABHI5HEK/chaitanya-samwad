import React from "react";
import {ImHome} from 'react-icons/im'
import {AiOutlineCreditCard} from 'react-icons/ai'
import {IoMdNotifications} from 'react-icons/io'
import {IoIosJournal} from 'react-icons/io'


export const SidebarData=[
    {
        title:'Home',
        path:'/',
        icon: <ImHome/>,
        cname: 'nav-text'
    },
    {
        title:'Notifications',
        path:'/notifications',
        icon: <IoMdNotifications/>,
        cname: 'nav-text'
    },
    {
        title:'About the Journal',
        path:'/about',
        icon: <IoIosJournal/>,
        cname: 'nav-text'
    },
    {
        title:'Advisory committee',
        path:'/advisory',
        icon: <IoIosJournal/>,
        cname: 'nav-text'
    },
    {
        title:'Editiorial Board',
        path:'/',
        icon: <IoIosJournal/>,
        cname: 'nav-text'
    },
    {
        title:'Reviewer Board',
        path:'/',
        icon: <IoIosJournal/>,
        cname: 'nav-text'
    },
    {
        title:'Previous Issues',
        path:'/',
        icon: <IoIosJournal/>,
        cname: 'nav-text'
    },
    {
        title:'Current Issues',
        path:'/',
        icon: <IoIosJournal/>,
        cname: 'nav-text'
    },
    {
        title:'Submit Paper',
        path:'/',
        icon: <IoIosJournal/>,
        cname: 'nav-text'
    },
    {
        title:'See Your Paper',
        path:'/',
        icon: <IoIosJournal/>,
        cname: 'nav-text'
    },
    {
        title:'Payments',
        path:'/',
        icon: <AiOutlineCreditCard/>,
        cname: 'nav-text'
    },
]