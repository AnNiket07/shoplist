import { compose, configureStore } from "@reduxjs/toolkit"
// import {compose,createStore} from "redux"
import {reducer} from './reducer'
const composeEnhancer = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store = configureStore({
    reducer: reducer,
},
//reducer,
composeEnhancer
);

export default store;