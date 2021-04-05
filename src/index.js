import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { store } from './store/store';

import { Initial_router } from './routers/Initial_router';
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./static/css/estilos.css"

ReactDOM.render(
     <Provider store={ store }>
        <Initial_router />
        </Provider>
  ,
  document.getElementById('root')
);


