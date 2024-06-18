import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { rootReducer } from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const client = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  responseType: 'json',
});

export const makeStore = () => {
  const sagaMiddleWare = createSagaMiddleware();

  const persistConfig = {
    key: 'nextjs',
    whitelist: ['auth'],
    storage,
  };
  const persistedReducer = persistReducer<any,any>(persistConfig, rootReducer);

  const store: any = createStore(
    persistedReducer,
    applyMiddleware(axiosMiddleware(client), sagaMiddleWare),
  );
  store.__persistor = persistStore(store);
  return store;
};

export const store = makeStore();