import { successAction } from '../../lib/actionType';
import { EpisodesActionTypes } from '../actions/episodesAction';
import { RootReducer } from './rootReducer';


export interface EpisodesInitialType {
  episodesData: any;
  episodeData: any;
  modalCharactersData:any,
  countEpisodesPages: any,
  isLoading: boolean;
  openModal: boolean;
}

const episodesInitialState: EpisodesInitialType = {
  episodesData: [],
  episodeData: [],
  modalCharactersData:[],
  countEpisodesPages:null,
  isLoading: false,
  openModal: false,
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

      return {...state, openModal:true,episodeData: data};
    }

    case EpisodesActionTypes.CLOSE_MODAL: {
      return {...state,openModal: false};
    }

    default:
      return state;
  }
};

export const getEpisodesData = (state: RootReducer) =>
  state.episodes.episodesData;

export const getEpisodeData = (state:RootReducer) =>
  state.episodes.episodeData;

export const getOpenModal = (state:RootReducer) =>
  state.episodes.openModal;

export const getModalCharactersData = (state:RootReducer) =>
  state.episodes.modalCharactersData;

export const getCountPages = (state:RootReducer) =>
  state.episodes.countEpisodesPages;