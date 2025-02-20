/* eslint-disable react/no-danger-with-children */
// import React from 'react'
import { useContext } from 'react'
import { assets } from '../assets/assets'
import './main.css'
import { Context } from '../context/Context'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);





  return (
    <div className='main'>
        <div className="nav">
            <p className='font-extrabold'>GROWTH AI</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">

            {!showResult
            ? <>

            <div className="greet">
                <p><span>Hello, Sahil.</span></p>
                <p>How can I help you today</p>
            </div>
            <div className="cards">
               <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
               <div className="card">
                    <p>Summarize this concept inshort : urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
               <div className="card">
                    <p>Team fonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>
               <div className="card">
                    <p>Improve the readability of the following code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>
            : <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p> {recentPrompt} </p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {
                        loading ? <div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                </div>
            </div>
            }
            <div className="main-niche">
                <div className="search">
                    <input onChange={(e)=> setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                    <div className='img'>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                     {input ? <img onClick={()=> onSent()} src={assets.send_icon} alt="" /> : null }
                    </div>
                </div>
                <p className="niche-info">
                    It may display inaccurate info, including about people, double-check its responses. Your privacy will remain safe
                </p>
            </div>
        </div>
      
    </div>
  ) 
}

export default Main
