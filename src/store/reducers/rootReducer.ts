import { combineReducers } from "redux";
import { EpisodesInitialType, episodesReducer } from "./episodesReducer";
import { CharactersInitialType, charactersReducer } from "./charactersReducer";

export interface RootReducer { 
    episodes: EpisodesInitialType;
    characters: CharactersInitialType;
}

export const rootReducer = combineReducers({
    episodes: episodesReducer,
    characters: charactersReducer,
})