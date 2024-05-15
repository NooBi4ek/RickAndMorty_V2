export enum CharactersActionTypes {
    GET_CHARACTERS_DATA_SERVER = "GET_CHARACTERS_DATA_SERVER",
    GET_PAGES_CHARACTERS_DATA_SERVER = "GET_PAGES_CHARACTERS_DATA_SERVER",
  }

  export const getCharactersDataServer = (props:string) =>({
    type: CharactersActionTypes.GET_CHARACTERS_DATA_SERVER,
    payload: {
        request: {
            method: "GET",
            url: `/character?page=${props}`
        }
    }
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