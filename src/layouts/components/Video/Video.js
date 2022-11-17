import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "~/components/Button";
import { CommentIcon, FlagIcon, HeartIcon, MusicIcon, MutedIcon, PauseIcon, PlayIcon, ShareIcon, VolumeIcon } from "~/components/Icons";
import Image from "~/components/Image";

import styles from './Video.module.scss'

const cx = classNames.bind(styles)

function Video({ data, mute, volume, adjustVolume, toggleMuted }) {

    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef()

    useEffect(() => {
        if (mute) {
            videoRef.current.volume = 0
        } else {
            videoRef.current.volume = volume
        }
    })
    const playVideo = () => {
        if (isPlaying === false) {
            videoRef.current.play()
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
                            loop
                            src={data?.file_url}
                            ref={videoRef}>
                        </video>

                        <div className={cx('control-play')}
                            onClick={togglePlayVideo}
                        >
                            {isPlaying ? <PauseIcon /> : <PlayIcon />}
                        </div>

                        <div className={cx('control-volume')}>
                            <div className={cx('container')}>
                                <input type="range" min="0" max="100" step="1" orient="vertical" onChange={adjustVolume} value={volume * 100} />
                            </div>
                            <div className={cx('volume-icon')}>
                                <VolumeIcon />
                            </div>
                            {/* <MutedIcon /> */}
                        </div>

                        <div className={cx('control-seekBar')}>
                            <div className={cx('container')}>
                                <input type="range" min="0" max="100" step="1" orient="vertical" onChange={adjustVolume} value={volume * 100} />
                            </div>
                            <div className={cx('time')}>01:23/01:26</div>
                        </div>

                        <p className={cx('report')}>
                            <FlagIcon className={cx('flag-icon')} />Report
                        </p>
                    </div>

                    <div className={cx('action')}>
                        <button className={cx('action-btn')}>
                            <span className={cx('action-icon')}><HeartIcon /></span>
                            <strong className={cx('strong-text')}>333.6k</strong>
                        </button>
                        <button className={cx('action-btn')}>
                            <span className={cx('action-icon')}><CommentIcon /></span>
                            <strong className={cx('strong-text')}>333.6k</strong>
                        </button>
                        <button className={cx('action-btn')}>
                            <span className={cx('action-icon')}><ShareIcon /></span>
                            <strong className={cx('strong-text')}>333.6k</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;