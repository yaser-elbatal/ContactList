import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { favContactReducer } from './reducer';


const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ['favContactReducer'],
};
let rootReducer = combineReducers({
    favContactReducer,

})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    // enhancers: () => [Reactotron.createEnhancer()],
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: (getDefaultEnhancers) =>
        getDefaultEnhancers({
            autoBatch: false,
        })
});
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

//   the above code is just Redux toolkit configurations.
