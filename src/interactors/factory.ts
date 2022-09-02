import { ApiInteractor, MockInteractor } from ".";
import { RandomDelayer, StaticDelayer } from "../api/delayers";

export class InteractorFactory {
  get() {
    switch (import.meta.env.MODE) {
      case "development":
        return new MockInteractor();
      case "preview":
        const staticDelayer = new StaticDelayer(
          import.meta.env.VITE_RESPONSE_DELAY
        );
        return new MockInteractor(staticDelayer);
      case "demo":
        const randomDelayer = new RandomDelayer(
          import.meta.env.VITE_MIN_RESPONSE_DELAY,
          import.meta.env.VITE_MAX_RESPONSE_DELAY,
        );
        return new MockInteractor(randomDelayer);
      case "production":
        return new ApiInteractor();
    }
  }
}
