import styles from './Comment.module.css';

export default function Comment() {
    return (
        <div className={styles.Comment}>
            <p className={styles.ment1}>만화 속의 당신은</p>
            <p className={styles.ment2}>어떤 모습인지 궁금한가요?</p>
        </div>
    );
}