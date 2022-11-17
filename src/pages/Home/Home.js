import classNames from "classnames/bind";
import { useEffect, useState } from "react";


import Video from "~/layouts/components/Video";
import * as videoService from '~/services/videoService'


import styles from './Home.module.scss'

const cx = classNames.bind(styles)

function Home() {

    const [videos, setVideos] = useState([])
    const [page, setPage] = useState(1)
    const [volume, setVolume] = useState(0.5)

    useEffect(() => {
        const fetchApi = async () => {
            const result = await videoService.loadVideo('for-you', page)
            setVideos(prev => [...prev, ...result])
        }
        fetchApi()
    }, [page])

    const handleAdjustVolume = (e) => {
        setVolume(e.target.value / 100)
    }

    return (
        <div className={cx('wrapper')}>
            {videos.map((video, index) => (
                <Video key={index} data={video} volume={volume} adjustVolume={handleAdjustVolume} />
            ))}
        </div>
    );
}

export default Home;