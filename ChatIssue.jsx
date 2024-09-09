import chat from './chat.png'
import React from 'react';
import './ChatIssue.css'; // Import the CSS file

export const ChatIssue = () => (
  <div className="chat-issue-container">
    <img className="chat-icon" src={chat} alt="Chat Icon" />
    <div className="chat-text">
      <span>Have an issue?<br />Chat wit us</span>
    </div>
  </div>
);

export default ChatIssue;




