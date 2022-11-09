import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('links')}>
                <Link className={cx('link')} to="/">About</Link>
                <Link className={cx('link')} to="/">TikTok </Link>
                <Link className={cx('link')} to="/">Newsroom</Link>
                <Link className={cx('link')} to="/">Contact</Link>
                <Link className={cx('link')} to="/">Careers</Link>
                <Link className={cx('link')} to="/">ByteDance</Link>
            </div>

            <div className={cx('links')}>
                <Link className={cx('link')} to="/">TikTok for Good</Link>
                <Link className={cx('link')} to="/">Advertise</Link>
                <Link className={cx('link')} to="/">Developers</Link>
                <Link className={cx('link')} to="/">Transparency</Link>
                <Link className={cx('link')} to="/">TikTok Rewards</Link>
            </div>

            <div className={cx('links')}>
                <Link className={cx('link')} to="/">Help</Link>
                <Link className={cx('link')} to="/">Safety</Link>
                <Link className={cx('link')} to="/">Terms</Link>
                <Link className={cx('link')} to="/">Privacy</Link>
                <Link className={cx('link')} to="/">Creator Portal</Link>
                <Link className={cx('link')} to="/">Community Guidelines</Link>
            </div>
            <span className={cx('copy-right')}>© 2022 TikTok</span>
        </div>
    );
}

export default Footer;