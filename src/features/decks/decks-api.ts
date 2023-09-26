import axios, { AxiosResponse } from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es/v1/',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  fetchDecks() {
    return instance.get<fetchDecksResponseType>('decks')
  },
  addDeck(name: string) {
    return instance.post<DeckType>('decks', {name})
  },
	deleteDeck(id:string) {
    return instance.delete<DeckType>(`decks/${id}`)
  },
  updateDeck(deckUpdate:DeckUpdateType) {
    return instance.patch<DeckType>('decks', {name:456, isPrivate: true, cover: null })
  }
}

export type fetchDecksResponseType = {
  items: DeckType[];
  pagination: PaginationType
  maxCardsCount: number;
}
export type AuthorType = {
  id: string;
  name: string;
}
export type DeckType = {
  author?: AuthorType;
  id: string;
  userId: string;
  name: string;
  isPrivate: boolean;
  shots: number;
  cover: string;
  rating: number;
  created: string;
  updated: string;
  cardsCount: number;
}
export type DeckUpdateType = Pick<DeckType, 'cover' | 'name' | 'isPrivate' | 'id' >
export type PaginationType = {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
}

