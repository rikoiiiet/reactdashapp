import React from './sidebar.css'
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AnnouncementIcon from '@mui/icons-material/Announcement';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sibarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                <Link to="/" className="link">
                    <li className="sidebarItem active">
                        <HomeIcon className='sidebarIcon'/> Home
                    </li>
                </Link>
                    <li className="sidebarItem">
                        <TimelineIcon className='sidebarIcon'/> Analytics
                    </li>
                    <li className="sidebarItem">
                        <TrendingUpIcon className='sidebarIcon'/> Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick menu</h3>
                <ul className="sidebarList">
                    <Link to="/users" className="link">
                        <li className="sidebarItem">
                            <PersonOutlineIcon className='sidebarIcon'/> Users
                        </li>
                    </Link>
                    <Link to="/productList" className="link">
                    <li className="sidebarItem">
                        <CardGiftcardIcon className='sidebarIcon'/> Products
                    </li>
                    </Link>
                    <li className="sidebarItem">
                        <AttachMoneyIcon className='sidebarIcon'/> Transactions
                    </li>
                    <li className="sidebarItem">
                        <EqualizerIcon className='sidebarIcon'/> Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <MailOutlineIcon className='sidebarIcon'/> Mail
                    </li>
                    <li className="sidebarItem">
                        <DynamicFeedIcon className='sidebarIcon'/> Feedback
                    </li>
                    <li className="sidebarItem">
                        <ChatBubbleOutlineIcon className='sidebarIcon'/> Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <WorkOutlineIcon className='sidebarIcon'/> Manage
                    </li>
                    <li className="sidebarItem">
                        <TimelineIcon className='sidebarIcon'/> Analytics
                    </li>
                    <li className="sidebarItem">
                        <AnnouncementIcon className='sidebarIcon'/> Notification
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
