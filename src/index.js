import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root')); // ВОТ ЭТА СТРОКА
let rerenderEntireTree = (state) =>{
 
    root.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 store={store}/>
        </React.StrictMode>
    );}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);