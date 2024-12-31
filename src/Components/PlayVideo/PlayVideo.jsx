import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'


const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>Best Youtube channel to Learn Web Development</h3>
        <div className="play-video-info">
            <p>15067 Views &bull; 2 days ago</p>
        
        <div>
            <span><img src={like} alt="" /> 2456
            </span>
            <span><img src={dislike} alt="" /> 120
            </span>
            <span><img src={share} alt="" /> Share
            </span>
            <span><img src={save} alt="" /> Save
            </span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>GreatStack</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>Channel that makes learning Easy</p>
            <p>Subscribe GreatStack to Watch More Tutorials on Web development </p>
            <hr />
            <h4>130 comments</h4>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson <span>i day ago</span></h3>
                    <p>A global computer network providing a variety of information and communication facilities of interconnected networks using standardized communication protocols.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson <span>i day ago</span></h3>
                    <p>A global computer network providing a variety of information and communication facilities of interconnected networks using standardized communication protocols.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson <span>i day ago</span></h3>
                    <p>A global computer network providing a variety of information and communication facilities of interconnected networks using standardized communication protocols.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson <span>i day ago</span></h3>
                    <p>A global computer network providing a variety of information and communication facilities of interconnected networks using standardized communication protocols.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson <span>i day ago</span></h3>
                    <p>A global computer network providing a variety of information and communication facilities of interconnected networks using standardized communication protocols.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson <span>i day ago</span></h3>
                    <p>A global computer network providing a variety of information and communication facilities of interconnected networks using standardized communication protocols.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson <span>i day ago</span></h3>
                    <p>A global computer network providing a variety of information and communication facilities of interconnected networks using standardized communication protocols.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo