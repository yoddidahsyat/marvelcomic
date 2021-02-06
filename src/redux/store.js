import { createStore } from 'redux';
import rootReducer from './reducer/rootReducer';

const initialState = {
    isLogin: false,
    user: null
};

const store = createStore(rootReducer, initialState);

export default store;
