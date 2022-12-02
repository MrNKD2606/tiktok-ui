import classNames from "classnames/bind";
import { useEffect, useState } from "react";


import Video from "~/layouts/components/Video";
import * as videoService from '~/services/videoService'


import styles from './Home.module.scss'

const cx = classNames.bind(styles)

function Home() {

    const [videos, setVideos] = useState([])
    const [page, setPage] = useState(1)
    
    const [volume, setVolume] = useState(0)
    const [prevVolume, setPrevVolume] = useState(0.5)
    const [mute, setMute] = useState(true)
    
    const [ontime, setOntime] = useState(0)
    
    useEffect(() => {
        const fetchApi = async () => {
            const result = await videoService.loadVideo('for-you', page)
            setVideos(prev => [...prev, ...result])
        }
        fetchApi()
    }, [page])

    //Tải thêm video của API khi scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    function handleScroll() {
        if(window.scrollY + window.innerHeight >= document.body.offsetHeight){
            setPage(page => page + 1)
        }
    }

    const handleAdjustVolume = (e) => {
        setVolume(e.target.value / 100)
    }

    const toggleMuted = () => {
        if(mute) {
            setVolume(prevVolume)
            setMute(false)
        } else {
            setPrevVolume(volume)
            setVolume(0)
            setMute(true)
        }
    }

    const handleAdjustTime = (e) => {
        setOntime(e.target.value / 100)
    }

    return (
        <div className={cx('wrapper')}>
            {videos.map((video, index) => (
                <Video 
                    key={index} data={video} 
                    volume={volume} onAdjustVolume={handleAdjustVolume} 
                    mute={mute} onToggleMuted={toggleMuted}
                    ontime={ontime} onAdjustOntime={handleAdjustTime}  
                    id = {index}
                />
            ))}
        </div>
    );
}

export default Home;