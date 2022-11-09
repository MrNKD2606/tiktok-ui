import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import Button from "~/components/Button";
import styles from './AccountPreview.module.scss'

const cx = classNames.bind(styles)

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src={data.avatar} alt="" />
                <Button small primary>Follow</Button>
            </div>

            <div className={cx('body')}>
                <h4 className={cx('nickname')}>
                    <strong>{data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <p className={cx('name')}>{data.nickname}</p>
                <p className={cx('analytics')}>
                    <span className={cx('value')}>{data.followers_count}</span>
                    <span className={cx('label')}>Followers</span>
                    <span className={cx('value')}>{data.likes_count}</span>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;