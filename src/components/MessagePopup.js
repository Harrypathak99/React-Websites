// MessagePopup.js

import React, { useEffect } from "react";
import $ from "jquery";

const MessagePopup = ({ message, duration, onClose }) => {
  useEffect(() => {
    $('#messagePopup').fadeIn();
    setTimeout(()=> {
        $('#messagePopup').fadeOut();
    },duration);

    return () => {
      $('#messagePopup').fadeIn();
    };
  }, [duration]);

  return (
    <div id="messagePopup" style={{ display: 'none', position: 'fixed', top: '50%', left: '50%',zIndex: "99", transform: 'translate(-50%, -50%)', padding: '20px', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
      <p>{message}</p>
      <div style={{display: "flex", justifyContent: "center"}}><button onClick={onClose}>Close</button></div>
    </div>
  );
};

export default MessagePopup;
