import ConfigurationStore from './configuration/configuration.store';
import { RootStore } from './root/root.store';

const rootStore = new RootStore();

export { rootStore, RootStore, ConfigurationStore };
export default rootStore;