import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react'

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss'
import AccountPreview from './AccountPreview';
import { PreviewContext } from './../Sidebar'
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

function AccountItem({ data, to }) {

    const preview = useContext(PreviewContext)

    const renderPreview = (props) => {
        return (
            (preview && <div className={cx('preview')} tabIndex='-1' {...props}>
                <PopperWrapper>
                    <AccountPreview data={data}>

                    </AccountPreview>
                </PopperWrapper>
            </div>)
        )
    }

    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-18, 0]}
                placement='bottom'
                render={renderPreview}
            >
                <Link to={`/@${data.nickname}`}>
                    <div className={cx('account-item')}>
                        <img
                            className={cx('avatar')}
                            src={data.avatar}
                            alt=''
                        />
                        <div className={cx('item-info')}>
                            <h4 className={cx('nickname')}>
                                <strong>{data.nickname}</strong>
                                {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}

                            </h4>
                            <p className={cx('name')}>{data.nickname}</p>
                        </div>

                    </div>
                </Link>
            </Tippy>
        </div >
    );
}

AccountItem.propTypes = {

}

export default AccountItem;