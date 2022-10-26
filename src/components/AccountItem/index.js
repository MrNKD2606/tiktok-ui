
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9c71cbf25353b01e137810b58d25e26b~c5_300x300.webp?x-expires=1666774800&x-signature=ojlxnmN9Yrpsx858dWQWyddzggg%3D" alt="" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    chelseafc
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Chelsea FC</span>
            </div>
        </div>
    );
}

export default AccountItem;