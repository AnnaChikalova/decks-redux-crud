import { DeckType, DeckUpdateType } from './decks-api'

const initialState = {
  decks: [] as DeckType[],
  searchParams: {
    name: '',
  },
}

export type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActionType): DecksState => {
  switch (action.type) {
    case 'SET-DECKS':
      return { ...state, decks: action.decks }
    case 'ADD-DECK':
      return { ...state, decks: [action.deck, ...state.decks] }
    case 'DELETE-DECK':
      return { ...state, decks: state.decks.filter(d => d.id !== action.id) }
    case 'UPDATE-DECK':
      return { ...state, decks: state.decks.map(d=> d.id === action.deckUpdate.id ? {...d, ...action.deckUpdate}: d )}
    default:
      return state
  }
}
export const setDecksAC = (decks: DeckType[]) => ({
  type: 'SET-DECKS',
  decks,
} as const)
export const addDeckAC = (deck: DeckType) => ({
  type: 'ADD-DECK',
  deck,
} as const)
export const deleteDeckAC = (id: string) => ({
  type: 'DELETE-DECK',
  id,
} as const)
export const updateDeckAC = (deckUpdate: DeckUpdateType) => ({
  type: 'UPDATE-DECK',
  deckUpdate
} as const)

export type addDeckACType = ReturnType<typeof addDeckAC>
export type setDecksACType = ReturnType<typeof setDecksAC>
export type deleteDeckAC = ReturnType<typeof deleteDeckAC>
export type updateDeckAC = ReturnType<typeof updateDeckAC>
export type DecksActionType = setDecksACType | addDeckACType | deleteDeckAC | updateDeckAC