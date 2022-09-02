import styles from './styles.module.scss';

export type HeaderProps = {
  firstName: string;
};

export function Header({ firstName }: HeaderProps) {
  return (
    <>
      <h1 style={{ margin: '0' }}>
        <span>Bonjour</span>,{' '}
        <span className={styles.username}>{firstName}</span>
      </h1>
      <p className={styles.welcomeText}>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </>
  );
}
