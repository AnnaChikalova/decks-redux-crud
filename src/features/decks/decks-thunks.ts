import { Dispatch } from 'redux'
import { decksAPI, DeckUpdateType } from './decks-api'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer'

export const fetchDecksTC = () => {
  return (dispatch: Dispatch) => {
    decksAPI.fetchDecks()
      .then((res) => {
          dispatch(setDecksAC(res.data.items))
        }
      )
  }
}
export const addDeckTC =(name:string) => (dispatch: Dispatch)=>{
  decksAPI.addDeck(name)
    .then(res=>{
      dispatch(addDeckAC(res.data))
    })
}
export const deleteDeckTC = (id:string)=>(dispatch:Dispatch)=>{
  decksAPI.deleteDeck(id)
    .then(res=>{
      dispatch(deleteDeckAC(id))
    })
}
export const updateDeckTC = (deckUpdate:DeckUpdateType)=>(dispatch:Dispatch)=>{
  decksAPI.updateDeck(deckUpdate)
    .then(res=>{
      dispatch(updateDeckAC(deckUpdate))
    })
}
