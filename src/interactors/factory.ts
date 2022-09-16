/* eslint-disable no-case-declarations */
import { ApiInteractor, BaseInteractor, MockInteractor } from '.';
import { RandomDelayer, StaticDelayer } from '../api/delayers';

/**
 * A factory that supplies the appropriate API interactor\
 * for the current configuration.
 */
export class InteractorFactory {
  /**
   * Get an API interactor according to the config.
   * 
   * @returns BaseInteractor
   */
  get(): BaseInteractor {
    switch (import.meta.env.MODE) {
      case 'development':
        return new MockInteractor();

      case 'preview':
        const staticDelayer = new StaticDelayer(
          import.meta.env.VITE_RESPONSE_DELAY
        );
        return new MockInteractor(staticDelayer);

      case 'demo':
        const randomDelayer = new RandomDelayer(
          import.meta.env.VITE_MIN_RESPONSE_DELAY,
          import.meta.env.VITE_MAX_RESPONSE_DELAY
        );
        return new MockInteractor(randomDelayer);

      case 'production':
        return new ApiInteractor();

      case 'infinite':
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return new MockInteractor({ delay: () => {} });
      default:
        return new MockInteractor();
    }
  }
}
