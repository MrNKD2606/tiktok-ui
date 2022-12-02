import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { Link, useResolvedPath } from "react-router-dom";
import Button from "~/components/Button";
import { CommentIcon, FlagIcon, HeartIcon, MusicIcon, MutedIcon, PauseIcon, PlayIcon, ShareIcon, VolumeIcon } from "~/components/Icons";
import Image from "~/components/Image";

import styles from './Video.module.scss'

const cx = classNames.bind(styles)

function Video({ id, data, mute, volume, onAdjustVolume, onToggleMuted, ontime, onAdjustOntime }) {

    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef()
    const progressRef = useRef()
    const secondRef = useRef()
    const [duration, setDuration] = useState('')
   
    useEffect(() => {
        if (mute) {
            videoRef.current.volume = 0
        } else {
            videoRef.current.volume = volume
        }
    })

    // play video đầu tiên
    useEffect(() => {
        if(videoRef.current.id == 0) {
            videoRef.current.onloadedmetadata = function() {
                setDuration(videoRef.current.duration)
            }
            playVideo()
        }
    }, [])

    // chuyển video khi scroll
    useEffect(() => {
        window.addEventListener('scroll', playVideoInViewport)
        return () => window.removeEventListener('scroll', playVideoInViewport)
    })

    // tua
    useEffect(() => {
        if(videoRef.current.currentTime !== ontime){
            if(videoRef.current.currentTime !== 0){
                const seekTime = ontime * videoRef.current.duration
                videoRef.current.currentTime = seekTime
            }
        }
    }, [ontime])

    

    const playVideo = () => {
        if (isPlaying === false) {
            videoRef.current.play()

            //Tiến độ video thay đổi
            const duration = Math.floor(videoRef.current.duration)
            setDuration(duration)
            videoRef.current.ontimeupdate = function() {

                const du = videoRef.current.duration
                const time = videoRef.current.currentTime
                const progressPercent = Math.floor( time / du * 100)
                progressRef.current.value = progressPercent
                secondRef.current.innerText = getTime(Math.floor(time))
            }
            setIsPlaying(true)
        }
    }
    const pauseVideo = () => {
        if (isPlaying === true) {
            videoRef.current.pause()
            setIsPlaying(false)
        }
    }

    const togglePlayVideo = () => {
        if (isPlaying === false) {
            playVideo()
        } else {
            pauseVideo()
        }
    }

    

    function playVideoInViewport() {
        var bounding = videoRef.current.getBoundingClientRect()
        if(bounding.top >= 0 && bounding.left >= 0 
            && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) 
            && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)){
                playVideo()
        } else {
            pauseVideo()
        }
    }

    function getTime(time){
        let a = 0, b = 0
        let minute = '', second = ''
        if(time != 0){
            if(time < 60){
                b = Math.floor(time)
            } else {
                b = Math.floor(time % 60)
                a = Math.floor(time / 60)
            }
            
            if(a < 10){
                minute = `0${a}`
            } else {
                minute = `${a}`
            }
            if(b < 10){
                second = `0${b}`
            } else {
                second = `${b}`
            }
        } else{
            return `00:00`
        }
        return `${minute}:${second}`
    }
    
    

    return (
        <div className={cx('wrapper')}>
            <Link className={cx('avatar-anchor')}>
                <Image className={cx('image')} src={data.user.avatar} alt={data.user.avatar} />
            </Link>

            <div className={cx('content')}>
                <div className={cx('text-info')}>
                    <Link className={cx('author-container')}>
                        <h3 className={cx('author-unique')}>{data.user.nickname}</h3>
                        <h4 className={cx('author-nickname')}>{data.user.first_name + ' ' + data.user.last_name}</h4>
                    </Link>
                    <div className={cx('video-text')}>
                        {data.description}
                    </div>
                    {/* <Link>
                        <strong className={cx('tag')}>#xuhuong</strong>
                    </Link> */}
                    <h4 className={cx('music')}>
                        <Link>
                            <MusicIcon className={cx('icon')} />
                            <span className={cx('text-icon')}>{data.music}</span>
                        </Link>
                    </h4>
                    <Button outline className={cx('button-wrapper')}>Follow</Button>
                </div>

                <div className={cx('video-wrapper')}>
                    <div className={cx('feed-video')}>
                        <video
                            id={id}
                            loop
                            src={data?.file_url}
                            ref={videoRef}
                        >
                        </video>

                        <div className={cx('control-play')}
                            onClick={togglePlayVideo}
                        >
                            {isPlaying ? <PauseIcon /> : <PlayIcon />}
                        </div>

                        <div className={cx('control-volume', {active: mute})}>
                            <div className={cx('container')}>
                                <input id="volume" type="range" min="0" max="100" step="1" orient="vertical" onChange={onAdjustVolume} value={volume * 100} />
                            </div>
                            <div className={cx('volume-icon')} onClick={onToggleMuted}>
                                {mute ? <MutedIcon /> : <VolumeIcon />}
                            </div>
                            
                        </div>

                        <div className={cx('control-seekBar')}>
                            <div className={cx('container')}>
                                <input
                                    ref={progressRef}
                                    onInput={onAdjustOntime}
                                    id="progress" type="range" min="0" max="100" step="1" orient="vertical"  />
                            </div>
                            <div className={cx('time')}><span ref={secondRef}></span>/{getTime(duration)}</div>
                        </div>

                        <p className={cx('report')}>
                            <FlagIcon className={cx('flag-icon')} />Report
                        </p>
                    </div>

                    <div className={cx('action')}>
                        <button className={cx('action-btn')}>
                            <span className={cx('action-icon')}><HeartIcon /></span>
                            <strong className={cx('strong-text')}>{data.likes_count}</strong>
                        </button>
                        <button className={cx('action-btn')}>
                            <span className={cx('action-icon')}><CommentIcon /></span>
                            <strong className={cx('strong-text')}>{data.comments_count}</strong>
                        </button>
                        <button className={cx('action-btn')}>
                            <span className={cx('action-icon')}><ShareIcon /></span>
                            <strong className={cx('strong-text')}>{data.shares_count}</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;