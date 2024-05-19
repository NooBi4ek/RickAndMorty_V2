export enum CharactersActionTypes {
    TYPE_TEXT = "TYPE_TEXT",
    GET_CHARACTERS_DATA_SERVER = "GET_CHARACTERS_DATA_SERVER",
    GET_PAGES_CHARACTERS_DATA_SERVER = "GET_PAGES_CHARACTERS_DATA_SERVER",
    CLEAR_TEXT_FIELD = "CLEAR_TEXT_FIELD"
  }

  export const getCharactersDataServer = (props: { currentPage?: string; text: string; status: string; gender: string; countPage?: number|null }) =>({
    type: CharactersActionTypes.GET_CHARACTERS_DATA_SERVER,
    payload: {
        request: {
            method: "GET",
            url: `/character/?page=${props.currentPage}&name=${props.text}&status=${props.status}&gender=${props.gender}`
        }
    }
})

export const typeText = (props:string) =>({
    type: CharactersActionTypes.TYPE_TEXT,
    payload: props
})

export const getPagesCharactersDataServer = () =>({
type:CharactersActionTypes.GET_PAGES_CHARACTERS_DATA_SERVER,
payload: {
    request: {
        method: "GET",
        url: '/character'
    }
}
})

export const clearTextField = () =>({
    type: CharactersActionTypes.CLEAR_TEXT_FIELD,
    payload: {}
})