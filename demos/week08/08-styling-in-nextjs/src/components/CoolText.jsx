import styles from "./cooltext.module.css"

export default function CoolText() {
    console.log(styles)
    return (
        <div>
            <p className={styles.text}>This is some cool text</p>
            <div className={styles.box}>
                <p>This is a box</p>
            </div>
        </div>
    )
}