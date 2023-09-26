import s from './DeckItem.module.css'
import { DeckType, DeckUpdateType } from '../../decks-api'
import { useAppDispatch } from '../../../../app/store'
import { deleteDeckTC, updateDeckTC } from '../../decks-thunks'

type DeckProps = {
  deck:DeckType

}

const TEST_ACC_NAME = 'test acc'

export const DeckItem = ({ deck }: DeckProps) => {
  const isTestingDeck = deck.author.name === TEST_ACC_NAME

  const dispatch = useAppDispatch()
 const DeleteHandler = (id:string)=>{
    dispatch(deleteDeckTC(deck.id))
}
const UpdateHandler = (deckUpdate:DeckUpdateType)=>{
    dispatch(updateDeckTC(deckUpdate))
}
  return (
    <li className={s.item}>
      <h3 className={s.title}>
        {deck.name}
        {isTestingDeck && '✨'}
      </h3>
      <p className={s.characteristic}>
        <b>Author:</b> {deck.author.name}
      </p>
      <p className={s.characteristic}>
        <b>Created:</b> {new Date(deck.created).toLocaleString('ru-Ru')}
      </p>
      <p className={s.characteristic}>
        <b>Updated:</b> {new Date(deck.updated).toLocaleString('ru-Ru')}
      </p>

      {!isTestingDeck && (
        <div className={s.buttonBox}>
          <button onClick={UpdateHandler}>update</button>
          <button onClick={DeleteHandler}>delete</button>
        </div>
      )}
    </li>
  )
}
