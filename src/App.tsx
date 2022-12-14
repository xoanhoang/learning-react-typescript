import { Row, Spin } from 'antd';
import i18next from 'i18next';
import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PAGE_ROUTE } from './constants/route';
import { RootStoreProvider } from './context';
import Login from './pages/login';
import A from './pages/resgister';
import rootStore from './store';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <React.StrictMode>
				<I18nextProvider i18n={i18next}>
					<RootStoreProvider store={rootStore}>
						<Suspense
							fallback={
								<Row justify="center" align="middle">
									<Spin />
								</Row>
							}
						>
							<BrowserRouter>
								<Routes>
									<Route path="/" element={<A />} />
									<Route path={PAGE_ROUTE.LOGIN} element={<Login />} caseSensitive />
								</Routes>
							</BrowserRouter>
						</Suspense>
					</RootStoreProvider>
				</I18nextProvider>
			</React.StrictMode>
    </div>
  );
}

export default App;
