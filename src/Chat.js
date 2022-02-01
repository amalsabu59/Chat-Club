import React from 'react';
import './Chat.css'
import { IconButton ,Avatar} from '@mui/material';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import AttachmentIcon from '@mui/icons-material/Attachment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';
function Chat() {
  return <div className='chat'>
      <div className="chat_header">
          <Avatar />
          <div className="chat_headerInfo">
              <h3>Room name</h3>
              <p>last seen 12:50 pm</p>
          </div>
          <div className="chat_headerRight">
              <IconButton>
                  <YoutubeSearchedForIcon />
              </IconButton>
              <IconButton>
                  <AttachmentIcon />
              </IconButton>
              <IconButton>
                  <MoreVertIcon />
              </IconButton>
          </div>
      </div>
      <div className="chat_body">
          <p className='chat_message'>
              <span className='chat_name'>Amal</span>
              this is a message
              <span className='chat_timestamp'>{new
                  Date().toUTCString()}</span>

          </p>
          <p className='chat_message'>
              <span className='chat_name'>Amal</span>
              this is a message
              <span className='chat_timestamp'>{new
                  Date().toUTCString()}</span>

          </p>
          <p className='chat_reciever chat_message'>
              <span className='chat_name'>Amal</span>
              this is a message
              <span className='chat_timestamp'>{new
                  Date().toUTCString()}</span>

          </p>
      </div>
      <div className="chat_footer">
          <EmojiEmotionsIcon />
          <form action="">
              <input placeholder='type a message' type="text" />
              <button type='submit'>Send</button>
          </form>
          <MicIcon/>
      </div>
  </div>;
}

export default Chat;
