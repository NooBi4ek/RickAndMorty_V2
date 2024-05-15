import { successAction } from '../../lib/actionType';
import { CharactersActionTypes } from '../actions/charactersAction';
import { RootReducer } from './rootReducer';


export interface CharactersInitialType {
  charactersData: any;
  countPages: any,
  isLoading: boolean;
}

const charactersInitialState: CharactersInitialType = {
    charactersData: [],
    countPages: [],
    isLoading: false,
};

export const charactersReducer = (state = charactersInitialState, action: any) => {
  switch (action.type) {
    case successAction(CharactersActionTypes.GET_CHARACTERS_DATA_SERVER): {
      const data = action.payload.data.results;
      console.log(data);
      return { ...state, charactersData: data };
    }

    case CharactersActionTypes.GET_CHARACTERS_DATA_SERVER: {
      return { ...state, isLoading: true };
    }

    case successAction(CharactersActionTypes.GET_PAGES_CHARACTERS_DATA_SERVER): {
      const data = action.payload.data.info.pages;
      return {...state, countPages: data}
    }

    default:
      return state;
  }
};

export const getCharactersData = (state: RootReducer) =>
  state.characters.charactersData;

export const getCountPages = (state:RootReducer) =>
  state.characters.countPages;