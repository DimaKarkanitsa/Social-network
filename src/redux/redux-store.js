import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from 'redux';
import { dialogsReducer } from './dialogs-reducer';
import { friendsBarReducer } from './friendsBar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import profileReducer from './reduxProfile/profile-reducer';
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from './app-reducer';

const reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   friendsBar: friendsBarReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
})
 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
  ));
window.__store__ = store
export default store

