export enum EpisodesActionTypes {
    GET_EPISODES_DATA_SERVER = "GET_EPISODES_DATA_SERVER",
    GET_PAGES_EPISODES_DATA_SERVER = "GET_PAGES_EPISODES_DATA_SERVER",
    GET_CHARACTERS_DATA_SERVER = "GET_CHARACTERS_DATA_SERVER",
    OPEN_MODAL = "OPEN_MODAL",
    CLOSE_MODAL = "CLOSE_MODAL",
  }

export const getEpisodesDataServer = (props:string) =>({
    type: EpisodesActionTypes.GET_EPISODES_DATA_SERVER,
    payload: {
        request: {
            method: "GET",
            url: `/episode?page=${props}`
        }
    }
})

export const getPagesEpisodesDataServer = () =>({
type:EpisodesActionTypes.GET_PAGES_EPISODES_DATA_SERVER,
payload: {
    request: {
        method: "GET",
        url: '/episode'
    }
}
})

export const getCharactersDataServer = (props:any) =>({
    type:EpisodesActionTypes.GET_CHARACTERS_DATA_SERVER,
    payload: {
        request: {
            method: "GET",
            url: `/character/${props}`
        }
    }
    })

export const openModal = (props:number) =>({
    type: EpisodesActionTypes.OPEN_MODAL,
    payload: {
        request: {
            method: "GET", 
            url: `/episode/${props}`
        }
    }
})

export const closeModal = () =>({
    type: EpisodesActionTypes.CLOSE_MODAL,
    payload: {},
})