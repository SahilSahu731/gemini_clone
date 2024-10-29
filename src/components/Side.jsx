// import React from 'react'
import "./side.css";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../context/Context";

const Side = () => {
  const [extend, setExtend] = useState(false);
  const { onSent, previousPrompt, setRecentPrompt, newChat} = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className="side">
      <div className="top">
        <img onClick={()=> setExtend(prev =>!prev)} className="menu" src={assets.menu_icon} alt="" />
        <div onClick={()=> newChat()} className="newchat">
          <img src={assets.plus_icon} alt="" />
          {extend ? <p>NEW CHAT</p> : null}
        </div>
        {extend ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {
              previousPrompt.map((item,index)=>{
                  return (
                    <div onClick={()=> loadPrompt(item)} key={index} className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>{item.slice(0,18)} ... </p>
                  </div>
                  )
              })
            }
           
          </div>
        ) : null}
      </div>
      <div className="niche">
        <div className="niche-item recent-entry">
          <img src={assets.question_icon} alt="" />
         {extend ?  <p>Help</p> : null}
        </div>
        <div className="niche-item recent-entry">
          <img src={assets.history_icon} alt="" />
         { extend ? <p>Activity</p> : null}
        </div>
        <div className="niche-item recent-entry">
          <img src={assets.setting_icon} alt="" />
        {extend ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Side;
