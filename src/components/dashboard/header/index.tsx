import styles from './styles.module.scss';
import PropTypes from 'prop-types';

export type HeaderProps = {
  firstName: string;
};

/**
 * The dashboard header.
 *
 * Displays the username and an encouraging message.
 *
 * @type {React.FC<HeaderProps>}
 * @param {HeaderProps} props
 * @return {JSX.Element} JSX element
 *
 * @example
 * <Layout
 *   header={
 *     <Placeholder query={userQuery}>
 *       {(user) => <Header firstName={(user as models.User).firstName} />}
 *     </Placeholder>
 *   }
 *   // ...
 * />
 */
export function Header ({ firstName }: HeaderProps) {
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

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
};
