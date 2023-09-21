// CreateStore is the main method to create redux store
// CombineReducers allows the user to combbine multiple reducers together
import {configureStore, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit'

// Creating store
let store = configureStore({
   reducer:{},
   middleware:(getDefaultMiddleware) => getDefaultMiddleware(),
   devTools:true
}) 

// Exporting store
export default store