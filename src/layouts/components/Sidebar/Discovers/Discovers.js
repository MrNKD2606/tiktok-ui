import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import DiscoverItem from "./DiscoverItem";

import styles from './Discovers.module.scss'

const cx = classNames.bind(styles)

function Discovers({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <DiscoverItem />
        </div>
    );
}
Discovers.propTypes = {
    label: PropTypes.string.isRequired,

}
export default Discovers;