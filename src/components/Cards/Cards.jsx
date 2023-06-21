import Card from '../Card/Card.jsx';
import style from './Cards.module.css'

export default function Cards({characters, onClose}) {
  return (
    <div className={style.cards}>
      {
         characters?.map((char, index)=>{
            return <Card  key={char.id} char={char} onClose={onClose} />
         })
      }
    </div>
  );
}