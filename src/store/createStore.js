import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const reducers = {
    // ... your other reducers here ...
    form: formReducer     // <---- Mounted at 'form'
}
const reducer = combineReducers(reducers);
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

export default store;