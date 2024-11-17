import React, { useContext, useState } from "react";
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const Sidebar = () =>
{

    const[extended, setExtended] = useState(false)
    const {onSent, prevPrompt, setRecentPrompt, newChat} = useContext(Context)
    const navigate = useNavigate();

    //Navigate to UserProfile route
    const handleAccountClick = () => {
        navigate('/user-profile');  
    };

    //Load the previous questions (We're just storing the questions and regenerating the response upon click)
    const loadPrompt = async (prompt) =>
    {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() =>setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
                <div className="new-chat" onClick={() => newChat()}>
                    <img src={assets.plus_icon} alt="" />
                    {extended?<p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompt.map((item, index) => 
                            {
                                return (
                                    <div className="recent-entry" onClick={() => loadPrompt(item)}>
                                        <img src={assets.message_icon} alt="" />
                                        <p>{item.slice(0,18)} ...</p>
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                :null}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry" onClick={handleAccountClick}>
                    <img src={assets.user_icon} alt="" />
                    {extended ? <p>Account</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar