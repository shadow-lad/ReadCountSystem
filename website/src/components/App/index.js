import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from '../../redux/configureStore';
import Main from '../Main';
import './index.scss';

const store = ConfigureStore();
class App extends Component {

	render() {

  return (
    <Provider store={store}>
		<BrowserRouter>
			<Main/>
		</BrowserRouter>
	</Provider>
  );
	}
}

export default App;
