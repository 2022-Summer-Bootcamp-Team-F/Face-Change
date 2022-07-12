import React from 'react';
import styles from './PicturePageBtn.module.css';

export default function PicturePageBtn() {
    return (
        <div className={styles.PicturePageBtn}>
            <button className={styles.btn}>
                <p className={styles.choice}>사진 선택</p>
            </button>
        </div>
    );
}