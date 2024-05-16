import { successAction } from '../../lib/actionType';
import { CharactersActionTypes } from '../actions/charactersAction';
import { RootReducer } from './rootReducer';


export interface CharactersInitialType {
  charactersData: any;
  countPages: any;
  searchValue: string;
  isLoading: boolean;
}

const charactersInitialState: CharactersInitialType = {
    charactersData: [],
    countPages: [],
    searchValue: "",
    isLoading: false,
};

export const charactersReducer = (state = charactersInitialState, action: any) => {
  switch (action.type) {
    case successAction(CharactersActionTypes.GET_CHARACTERS_DATA_SERVER): {
      const charactersData = action.payload.data.results;
      const countPages = action.payload.data.info.pages;
      return { ...state, charactersData, countPages };
    }

    case CharactersActionTypes.GET_CHARACTERS_DATA_SERVER: {
      return { ...state, isLoading: true };
    }

    case CharactersActionTypes.TYPE_TEXT: {
      const text = action.payload;
      return {...state, searchValue: text};
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

export const getSearchValue = (state: RootReducer) =>
  state.characters.searchValue;

export const getCountPages = (state:RootReducer) =>
  state.characters.countPages;