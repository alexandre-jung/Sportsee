import { InteractorFactory } from "../interactors/factory";

const interactorFactory = new InteractorFactory();
const interactor = interactorFactory.get();

export default interactor;
