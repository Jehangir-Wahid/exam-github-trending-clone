import { combineReducers } from "redux";
import { developerReducer, repositoryReducer } from "./allReducers"

const reducers = combineReducers({
    developers: developerReducer,
    repositories: repositoryReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;