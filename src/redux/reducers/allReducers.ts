import { ActionTypes } from "../action-types";
import { Action } from "../actions";
import { developersInitialState, repositoriesInitialState } from "../initial-states";
import { DevelopersType, RepositoriesType } from "../types";

export const developerReducer = (state: DevelopersType = developersInitialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.GET_DEVELOPERS:
            return { ...state, data: action.payload }
        default:
            return state;
    }

}

export const repositoryReducer = (state: RepositoriesType = repositoriesInitialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.GET_REPOSITORIES:
            return { ...state, data: action.payload }
        default:
            return state;
    }
}
