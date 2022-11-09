import classNames from "classnames/bind";


import styles from './Home.module.scss'

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('wrapper')}>
            {/* <Video /> */}
            <h2 style={{ height: 2000 }}> HomePage</h2>
        </div>
    );
}

export default Home;