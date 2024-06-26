import { successAction } from '../../lib/actionType';
import { CharactersItems } from '../../models/CharactersItem';
import { EpisodesItem } from '../../models/EpisodesItem';
import { EpisodesActionTypes } from '../actions/episodesAction';
import { RootReducer } from './rootReducer';


export interface EpisodesInitialType {
  episodesData: EpisodesItem[];
  episodeData: EpisodesItem|null;
  modalCharactersData:CharactersItems[],
  countEpisodesPages: number|null,
  isLoading: boolean;
}

const episodesInitialState: EpisodesInitialType = {
  episodesData: [],
  episodeData: null,
  modalCharactersData:[],
  countEpisodesPages:null,
  isLoading: false,
};

export const episodesReducer = (state = episodesInitialState, action: any) => {
  switch (action.type) {
    case successAction(EpisodesActionTypes.GET_EPISODES_DATA_SERVER): {
      const data = action.payload.data.results;
      return { ...state, episodesData: data };
    }

    case EpisodesActionTypes.GET_EPISODES_DATA_SERVER: {
      return { ...state, isLoading: true };
    }

    case successAction(EpisodesActionTypes.GET_PAGES_EPISODES_DATA_SERVER): {
      const data = action.payload.data.info.pages;
      return {...state, countEpisodesPages: data}
    }

    case successAction(EpisodesActionTypes.GET_EPISODE_CHARACTERS_DATA_SERVER): {
      const data = action.payload.data;
      return {...state, modalCharactersData: data}
    }

    case successAction(EpisodesActionTypes.OPEN_MODAL): {
      const data = action.payload.data;
      return {...state, episodeData: data};
    }

    default:
      return state;
  }
};

export const getEpisodesData = (state: RootReducer) =>
  state.episodes.episodesData;

export const getEpisodeData = (state:RootReducer) =>
  state.episodes.episodeData;

export const getModalCharactersData = (state:RootReducer) =>
  state.episodes.modalCharactersData;

export const getCountPages = (state:RootReducer) =>
  state.episodes.countEpisodesPages;