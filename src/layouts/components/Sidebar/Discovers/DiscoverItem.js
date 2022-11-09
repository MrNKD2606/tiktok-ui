import classNames from "classnames/bind";
import styles from './Discovers.module.scss'

import { MusicIcon, TagIcon } from "~/components/Icons";

const cx = classNames.bind(styles)

const { Link } = require("react-router-dom");

const LIST_DISCOVER = [
    {
        icon: 'TagIcon',
        title: 'suthatla',
    },
    {
        icon: 'TagIcon',
        title: 'mackedoi',
    },
    {
        icon: 'TagIcon',
        title: 'sansangthaydoi',
    },
    {
        icon: 'MusicIcon',
        title: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n',
    },
    {
        icon: 'MusicIcon',
        title: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng',
    },
    {
        icon: 'MusicIcon',
        title: 'Thiên Thần Tình Yêu - RICKY STAR',
    },
    {
        icon: 'TagIcon',
        title: '7749hieuung',
    },
    {
        icon: 'TagIcon',
        title: 'genzlife',
    },
    {
        icon: 'MusicIcon',
        title: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
    },
    {
        icon: 'MusicIcon',
        title: 'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham',
    },

]

function DiscoverItem() {
    return (
        LIST_DISCOVER.map((item, index) => (
            <Link className="discover" key={index}>
                <div className={cx('discover-item')}>
                    {item.icon === 'MusicIcon' && <MusicIcon className={cx('icon')} />}
                    {item.icon === 'TagIcon' && <TagIcon className={cx('icon')} />}
                    <p className={cx('title')}>{item.title}</p>
                </div>
            </Link>
        ))


    );
}

export default DiscoverItem;