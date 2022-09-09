import { ReactComponent as MeditationIcon } from '../../../assets/images/meditation-icon.svg';
import { ReactComponent as SwimmingIcon } from '../../../assets/images/swimming-icon.svg';
import { ReactComponent as BicycleIcon } from '../../../assets/images/bicycle-icon.svg';
import { ReactComponent as WeightsIcon } from '../../../assets/images/weights-icon.svg';
import styles from './styles.module.scss';

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <MeditationIcon />
      <SwimmingIcon />
      <BicycleIcon />
      <WeightsIcon />
    </div>
  );
}
