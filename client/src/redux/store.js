import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  userReducer  from "./user/userSlice";
import {persistReducer,persistStore} from "redux-persist";
import propertyReducer from "./property/propertyslice";
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    users:userReducer,
    property:propertyReducer
});

const persistconfig = {
    key:'root',
    storage,
    version:1,
};
const persistedReducer = persistReducer(persistconfig,rootReducer);
export const store =configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false,
    }),
}
);
export const persistor = persistStore(store);

