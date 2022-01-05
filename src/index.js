import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './store/reducer';

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import App0 from './App0';


i18n
.use(initReactI18next) 
.use(LanguageDetector)
.use(HttpApi)
.init({
  supportedLngs: ['en', 'fr'],
  fallbackLng: "en",
  detection: {
    order: ['path', 'cookie', 'htmlTag', 'localStorage',  'subdomain'],
    cashes: ['cookie'],
  },
  backend: {
    loadPath: 'assect/locales/{{lng}}/translation.json',
  },
  interpolation: {
    escapeValue: false 
  },
  react: {useSuspense: false}
});



const logger = store =>{
  return next =>{
    return action =>{
      return next(action);
    }
  }
}

const store = createStore(rootReducer, applyMiddleware(logger,thunk));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App0/>
      {/* <App /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
