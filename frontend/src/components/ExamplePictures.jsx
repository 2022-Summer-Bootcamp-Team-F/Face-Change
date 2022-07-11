import styles from './ExamplePictures.module.css';

export default function ExamplePictures() {
    return (
        <div className={styles.ExamplePictures}>
            <div className={styles.cartoon}>
                <img className="Cartoon" alt="cartoon" src="images/cartoon.png"/>
                <p>cartoon</p>
            </div>
            <div className={styles.caricature}>
                <img className="Caricature" alt="caricature" src="images/caricature.png"/>
                <p>caricature</p>
            </div>
            <div className={styles.anime}>
                <img className="anime" alt="anime" src="images/anime.png"/>
                <p>anime</p>
            </div>
        </div>
    );
}