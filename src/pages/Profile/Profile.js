import classNames from "classnames/bind";
import HeadlessTippy from '@tippyjs/react/headless'

import Button from "~/components/Button";
import { EllipsisHorizontalIcon, LinkIcon, ShareIcon } from "~/components/Icons";
import Image from "~/components/Image";
// import * as nicknameService from '~/services/nicknameService'

import styles from './Profile.module.scss'
import {useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

const cx = classNames.bind(styles)

function Profile() {

    const location = useLocation()
    const data = location.state

    const [videos, setVideos] = useState([])

    // useEffect(() => {
    //     fetch(`https://tiktok.fullstack.edu.vn/api/users/@${data.nickname}`)
    //         .then(response => response.json())
    //         .then(json => setVideos(json.data.videos))
    // }, [data.nickname])

    // useEffect(() => {
    //     const fetchApi = async () => {
    //         const result = await nicknameService.loadNickname(nickName)
    //     }
    // })

    return (
        <div className={cx('wrapper')}>
            <div className={cx('info-container')}>
                <div className={cx('info')}>
                    <div className={cx('basic')}>
                        <Image 
                            className={cx('avatar')}
                            src=''
                            alt=''
                        />
                        <div className={cx('text')}>
                            <div className={cx('username')}></div>
                            <div className={cx('name')}></div>
                            <Button primary style={{minWidth: '208px'}}>Follow</Button>
                        </div>
                        <div>
                            <div className={cx('following')}><strong></strong> Following</div>
                            <div className={cx('folloewer')}><strong></strong> Folloewer</div>
                            <div className={cx('likes')}><strong></strong> Likes</div>
                        </div>
                        <div className={cx('bio')}>{}</div>
                        <a href='' target='blank'>
                            {true && <div className={cx('website')}><LinkIcon className={cx('link-icon')} />{}</div>}
                        </a>
                    </div>

                    <div className={cx('side-btns')}>
                        <div className={cx('share-btn')}>
                            <ShareIcon offset={[-100, 10]}>
                                <div><ShareIcon /></div>
                            </ShareIcon>
                        </div>

                        <HeadlessTippy
                        
                        >
                            <div><EllipsisHorizontalIcon /></div>
                        </HeadlessTippy>
                    </div>
                </div>

                <div className={cx('video-container')}>
                    <div className={cx('tabs')}>
                        <p className={cx('video-tab')}>Videos</p>
                        <p className={cx('liked-tab')}>Liked</p>
                        <div className={cx('underline')}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;