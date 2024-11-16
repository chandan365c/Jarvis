import React, { useContext } from "react";
import './Main.css'
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () =>
{
    const{onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

    return (
        <div className="main">
            <div className="nav">
                <p>NanoBot</p>
            </div>
            <div className="main-container">

                {!showResult ?
                    <>
                        <div className="greet">
                            <p><span>Hello, User</span></p>
                            <p>How can I help you today?</p>
                        </div>
                    </>
                    : 
                    <div className="result">
                        <div className="result-title">
                            <p className="chat-elements">Question: </p>
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <p className="chat-elements">Response: </p>
                            {loading ?
                            <div className="loader">
                                <hr/>
                            </div>
                            :
                            <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                            }
                        </div>
                    </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Ask me anything" />
                        {input ?
                            <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                            : null 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main