import React from 'react';
import { Carousel ,Row,Avatar} from 'antd';
import styles from './authorRe.css';

export class AuthorRe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    render() {

        return (
            <div className={styles.authorContent}>
            <div className={styles.title}>
                <span>作者推荐</span>
                <a className={styles.authorRefresh}><i className="fa fa-refresh" aria-hidden="true"></i> 换一批</a>
            </div>
                 <ul>
                     <li>
                         <a className={styles.userImg} id="userImg"><Avatar size='large' style={{ color: '#f56a00', backgroundColor: '#fde3cf',fontSize:16}}>U</Avatar></a>
                         <a className={styles.follow}>
                         <i className="fa fa-plus" aria-hidden="true"></i> 关注</a>
                         <a className={styles.name}>尤为</a>
                         <p>写了2222.1k字 · 25.5k喜欢</p>
                     </li>
                     <li>
                         <a className={styles.userImg} id="userImg"><Avatar size='large' style={{ color: '#5A9EDC', backgroundColor: '#A8E7F5',fontSize:16}}>S</Avatar></a>
                         <a className={styles.follow}>
                         <i className="fa fa-plus" aria-hidden="true"></i> 关注</a>
                         <a className={styles.name}>沈炼</a>
                         <p>写了418.6k字 · 22.5k喜欢</p>
                     </li>
                     <li>
                         <a className={styles.userImg} id="userImg"><Avatar size='large' style={{ color: '#EEB902', backgroundColor: '#FFD978',fontSize:16}}>Z</Avatar></a>
                         <a className={styles.follow}>
                         <i className="fa fa-plus" aria-hidden="true"></i> 关注</a>
                         <a className={styles.name}>张琳</a>
                         <p>写了418.6k字 · 22.5k喜欢</p>
                     </li>
                     <li>
                         <a className={styles.userImg} id="userImg"><Avatar size='large' style={{ color: '#8ABA04', backgroundColor: '#C6E376',fontSize:16}}>L</Avatar></a>
                         <a className={styles.follow}>
                         <i className="fa fa-plus" aria-hidden="true"></i> 关注</a>
                         <a className={styles.name}>李丹</a>
                         <p>写了418.6k字 · 22.5k喜欢</p>
                     </li>
                     <li>
                         <a className={styles.userImg} id="userImg"><Avatar size='large' style={{ color: '#4251A8', backgroundColor: '#A9AFD7',fontSize:16}}>C</Avatar></a>
                         <a className={styles.follow}>
                         <i className="fa fa-plus" aria-hidden="true"></i> 关注</a>
                         <a className={styles.name}>菜全</a>
                         <p>写了418.6k字 · 22.5k喜欢</p>
                     </li>
                 </ul>
                 <a className={styles.authorMore}>更多...</a>
                  </div>
        )
    }
}