/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import {name as appName} from './app.json';
import configureStore from './src/store/configureStore';

const store = configureStore();

const appRedux = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => appRedux);
