import React from 'react'
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
  return (
   <div className="topbar">
       <div className="topbarWrapper">
           <div className="topbarLeft">
                <span className="logo"><BrightnessHighIcon/> Kokaadmin</span>
            </div>
           <div className="topbarRight">
                <div className="topbarIconsContainer">
                    <NotificationsNoneIcon/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconsContainer">
                    <LanguageIcon/>
                </div>
                <div className="topbarIconsContainer">
                    <SettingsIcon/>
                </div>
                <img src="https://i.pinimg.com/564x/ed/0a/6d/ed0a6d075b4bab79f5be6d7259dcde7a.jpg" alt="" className="topAva" />
            </div>
        </div>
    </div>
  )
}
