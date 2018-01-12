import React, {Component} from 'react';
import styles from './cssForthisPage.css';

export default class App extends Component {
    render () {
        console.log(styles, styles.mainDiv);
        return <div className={styles.mainDiv}>
          <p>This is my new react app</p>
        </div>  
    }
}
