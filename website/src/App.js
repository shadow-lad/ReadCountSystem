import React, { Component } from "react";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Pages/Main";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();
class App extends Component {
	render() {
		return (
			<CookiesProvider>
				<Provider store={store}>
					<BrowserRouter>
						<Main />
					</BrowserRouter>
				</Provider>
			</CookiesProvider>
		);
	}
}

export default App;
