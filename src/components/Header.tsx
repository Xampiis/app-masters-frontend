 import Image from 'next/image';

import styles from './styles.module.scss';

export function Header() {
    return (           
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image
                src="/images/logo.svg"
                width="336"
                height="521"
                alt="Doar Computadores"
                />
            </div>
        </header>
    )
}
