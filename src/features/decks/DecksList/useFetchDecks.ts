import { useAppDispatch, useAppSelector } from '../../../app/store'
import { DeckType } from '../decks-api'
import { useEffect } from 'react'
import { fetchDecksTC } from '../decks-thunks'

export const useFetchDecks = ()=>{
  const decks = useAppSelector<Array<DeckType>>(state => state.decks.decks)
  const dispatch= useAppDispatch()
  useEffect(()=>{
      dispatch(fetchDecksTC())},
    [])
  return {
    decks
  }
}