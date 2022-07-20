
import { legacy_createStore,combineReducers,compose,applyMiddleware} from "redux";
import {reducer as AppReducer} from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
    const rootReducer=combineReducers({AppReducer})
export const store=legacy_createStore(
    rootReducer,composeEnhancers(applyMiddleware(thunk))
    );
