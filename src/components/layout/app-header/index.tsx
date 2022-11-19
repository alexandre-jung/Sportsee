import styles from './styles.module.scss';
import { ReactComponent as AppLogo } from '../../../assets/images/sportsee-logo.svg';

/**
 * The application main header.
 *
 * @return {JSX.Element} JSX element
 *
 * @example
 * <AppHeader />
 */
export function AppHeader() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navbar}>
          <li className={`${styles.navItem} ${styles.logo}`}>
            <AppLogo /> <span>SportSee</span>
          </li>
          <li className={styles.navItem}>Accueil</li>
          <li className={styles.navItem}>Profil</li>
          <li className={styles.navItem}>Réglages</li>
          <li className={styles.navItem}>Communauté</li>
        </ul>
      </nav>
    </header>
  );
}
