import React from 'react';
import './Sidebar.css'
import SidebarChat from './SidebarChat';
import MessageIcon from '@mui/icons-material/Message';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { IconButton ,Avatar} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
function Sidebar() {
    return <div className='sidebar'>
        <div className="sidebar_header">
            <Avatar src='https://avatars.githubusercontent.com/u/92331948?v=4' />
            <div className="sidebar_headerRight">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <MessageIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
        <div className="sidebar_search">
            <div className="sidebar_searchContainer">
            <SearchIcon />
            <input placeholder='Search Or Start New Chat' type="text" />
            </div>
        </div>
        <div className="sidebar_chats">
            <SidebarChat addNewChat/>
            <SidebarChat />
            <SidebarChat />
        </div>
    </div>
    
}

export default Sidebar;
  