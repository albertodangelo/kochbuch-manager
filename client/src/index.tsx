import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import{ App } from './container/App';
import * as serviceWorker from './serviceWorker';
import "antd/dist/antd.css";
import { State, initialState } from './models/state';
import { Store, createStore } from 'redux';
import { reducer } from './models/reducer';
import { Provider} from 'react-redux';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { PersistGate } from 'redux-persist/integration/react'

const persistorConfig: PersistConfig<State> = {
    key: 'kochbuch-manager',
    version: 1,
    storage

}

const persistentReducer = persistReducer(persistorConfig, reducer);

const store:Store<State> = createStore( persistentReducer );

const persistor = persistStore(store);

const createApp = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>    
    </Provider>
)

ReactDOM.render(createApp(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
