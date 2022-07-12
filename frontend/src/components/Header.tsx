import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.Header}>
            <div className="Logo">
                <img className="logoImage" alt="logo" src="images/logo.png"/>
                <img className="paletteImage" alt="palette" src="images/palette.png"/>
            </div>
        </div>
    );
}