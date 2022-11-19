import { ReactComponent as MeditationIcon } from '../../../assets/images/meditation-icon.svg';
import { ReactComponent as SwimmingIcon } from '../../../assets/images/swimming-icon.svg';
import { ReactComponent as BicycleIcon } from '../../../assets/images/bicycle-icon.svg';
import { ReactComponent as WeightsIcon } from '../../../assets/images/weights-icon.svg';
import styles from './styles.module.scss';

/**
 * The application main sidebar.
 *
 * @return {JSX.Element} JSX element
 *
 * @example
 * <Sidebar />
 */
export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <MeditationIcon width={48} />
      <SwimmingIcon width={48} />
      <BicycleIcon width={48} />
      <WeightsIcon width={48} />
      <p className={styles.copyright}>Copyright, SportSee 2022</p>
    </div>
  );
}
