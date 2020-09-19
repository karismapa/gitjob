/**
 * Git Job - display github jobs data on an app
 * Project repository : https://github.com/karismapa/gitjob
 * API documentation  : https://jobs.github.com/api
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppController from './src';
import { Provider } from 'react-redux';
import store from './src/_redux/store';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppController />
            </Provider>
        )
    }
};
