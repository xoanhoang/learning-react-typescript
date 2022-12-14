import ConfigurationStore from "../configuration/configuration.store";


export interface IRootStore {
	configuration: ConfigurationStore;
}
export type RootStoreChildType = keyof IRootStore;

export class RootStore implements IRootStore {
	configuration: ConfigurationStore;
	constructor() {
		this.configuration = new ConfigurationStore();
	}
}