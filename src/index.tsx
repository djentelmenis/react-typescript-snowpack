import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import './styles.scss';

const mountNode = document.getElementById('root');
ReactDOM.render(<App name="Jane" />, mountNode);

/* eslint-disable */
// @ts-ignore
if (import.meta.hot) import.meta.hot.accept();
