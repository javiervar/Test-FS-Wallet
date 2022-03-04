import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import walletReducer from './reducer'

const rootReducer = combineReducers({
    wallet: walletReducer
})
export type IRootState = ReturnType<typeof rootReducer>;

export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store
}