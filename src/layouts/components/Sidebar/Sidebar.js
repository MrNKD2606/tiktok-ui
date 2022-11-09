import classNames from "classnames/bind";
import { createContext } from 'react'

import config from "~/config";
import Menu, { MenuItem } from "./Menu";
import styles from './Sidebar.module.scss'
import { HomeIcon, UserGroupIcon, LiveIcon, HomeIconActive, UserGroupIconActive, LiveIconActive } from '~/components/Icons'
import SuggestedAccounts from "./SuggestedAccounts";
import Button from "~/components/Button";
import Discovers from "./Discovers";
import Footer from "./Footer";

const cx = classNames.bind(styles)
export const PreviewContext = createContext()

function Sidebar() {

    const currentUser = false

    return (

        <div className={cx('nav-container')}>
            <div className={cx('scroll-container')}>
                <aside className={cx('wrapper')}>
                    <Menu>
                        <MenuItem title='For you' to={config.routes.home} iconActive={<HomeIconActive />} icon={<HomeIcon />} />
                        <MenuItem title='Following' to={config.routes.following} iconActive={<UserGroupIconActive />} icon={<UserGroupIcon />} />
                        <MenuItem title='LIVE' to={config.routes.live} iconActive={<LiveIconActive />} icon={<LiveIcon />} />
                    </Menu>

                    {!currentUser && (
                        <div className={cx('sidebar-login')}>
                            <p className={cx('p-login')}>Log in to follow creators, like videos, and view comments</p>
                            <Button className={cx('btn-login')} big outline>Log in</Button>
                        </div>
                    )}

                    <PreviewContext.Provider value={true}>
                        <SuggestedAccounts label='Suggested accounts'></SuggestedAccounts>
                    </PreviewContext.Provider>

                    {currentUser && (
                        <SuggestedAccounts label='Following accounts'></SuggestedAccounts>
                    )}

                    <Discovers label='Discovers'></Discovers>

                    <Footer></Footer>

                    <div className={cx('a')}>
                        <div className={cx('b')}>

                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default Sidebar;