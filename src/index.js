import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state'
import { addPost, updateNewPostText } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root')); // ВОТ ЭТА СТРОКА
let rerenderEntireTree = (state) =>{
 
    root.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    );}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);