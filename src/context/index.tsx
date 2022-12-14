import React, { createContext, FC } from 'react';
import rootStore from 'src/store';
import { RootStore } from 'src/store/root/root.store';

const RootStoreContext = createContext<RootStore>(rootStore);

interface IRootStoreProvider {
	store: RootStore;
	children: React.ReactNode;
}

const RootStoreProvider: FC<IRootStoreProvider> = ({ store, children }) => {
	return <RootStoreContext.Provider value={store}>{children}</RootStoreContext.Provider>;
};

export { RootStoreContext, RootStoreProvider };
