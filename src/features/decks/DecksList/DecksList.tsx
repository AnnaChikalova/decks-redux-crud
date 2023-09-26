import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksAPI, DeckType } from '../decks-api'
import { fetchDecksTC } from '../decks-thunks'
import { useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { DecksState } from '../decks-reducer'
import { DeckItem } from './DeckItem/DeckItem'
import { useFetchDecks }  from './useFetchDecks'

export const DecksList = () => {
 const {decks} = useFetchDecks()
  return <ul className={s.list}>
      {decks.map(d=>(
        <DeckItem  key={d.id} deck={d}/>
      ))}
    </ul>
}
