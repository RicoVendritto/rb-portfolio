import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: 'e87e5276-0c2a-4af4-b489-e8948d62444e',
    clientToken: 'pub41e98876efd5f07ad915ac2cc36bc839',
    site: 'datadoghq.com',
    service:'portfolio',
    env:'prod',
    version: '1.0.0',
    sampleRate: 100,
    trackInteractions: true
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
