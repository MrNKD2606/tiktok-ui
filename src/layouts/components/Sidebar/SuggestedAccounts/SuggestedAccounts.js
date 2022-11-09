import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './SuggestedAccounts.module.scss'
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';
import * as suggestedAccountService from '~/services/suggestedAccountService'

const cx = classNames.bind(styles)

function SuggestedAccounts({ label }) {

    const [suggestsResult, setSuggestsResult] = useState([])
    const [seeAll, setSeeAll] = useState(false)

    useEffect(() => {
        const fetchApi = async () => {
            if (!seeAll) {
                const result = await suggestedAccountService.suggest(1, 5)
                setSuggestsResult(result)
            } else {
                const result = await suggestedAccountService.suggest(1, 16)
                setSuggestsResult(result)
            }
        }
        fetchApi()
    })
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {suggestsResult.map((result) => (
                <AccountItem key={result.id} data={result} />
            ))}

            {seeAll ?
                <p className={cx('more-btn')} onClick={() => setSeeAll(false)}>See less</p>
                :
                <p className={cx('more-btn')} onClick={() => setSeeAll(true)}>See all</p>
            }

        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
}
export default SuggestedAccounts;