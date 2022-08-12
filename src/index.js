import React from "react";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "redux/store";
import { ThemeProvider } from "styled-components";

import { App } from "components/App";

import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter basename="/goit-react-hw-06-phonebook/">
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<App />
				</Provider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
