import { combineReducers } from "redux";
import { EpisodesInitialType, episodesReducer } from "./episodesReducer";

export interface RootReducer { 
    episodes: EpisodesInitialType;
}

export const rootReducer = combineReducers({
    episodes: episodesReducer,
})