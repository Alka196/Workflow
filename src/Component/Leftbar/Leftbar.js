import React from 'react';
import { FaListUl, FaFileAlt,FaThumbsUp, FaEllipsisH, FaTasks, FaClipboardList } from 'react-icons/fa';
import "./Leftbar.css";

function Leftbar() {
  return (
    <div className="leftbar-container">
      <div className="leftbar">
        <ul>
          <li>
            <FaListUl className="icon" /> </li>
            <li>Forms</li>
         
          <li>
            <FaFileAlt className="icon" />  </li>
            <li>Questionaire</li>
        
          <li>
            <FaTasks className="icon" /></li>
            <li>Workflow</li>
          
          <li>
            <FaClipboardList className="icon" /> </li>
            <li>Summary</li>
         
          <li>
            <FaThumbsUp className="icon" /></li>
            <li>Approval</li>
          
          <li>
            <FaEllipsisH className="icon" />
            </li>
            <li>More</li>
         
        </ul>
      </div>
    </div>
  );
}

export default Leftbar;