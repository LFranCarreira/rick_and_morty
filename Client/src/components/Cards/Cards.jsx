import Card from '../Card/Card.jsx';
import style from './Cards.module.css'
import { useDispatch,useSelector } from 'react-redux';
import { prev,next } from '../../Redux/actions/actions.js';
export default function Cards({ onClose }) {
  const { characters, numPage } = useSelector((state) => state);
  const dispatch = useDispatch();
  const cantCharPerPage = 12;
  let desde = (numPage - 1) * cantCharPerPage;
  let hasta = numPage * cantCharPerPage;

  let cantPage = Math.floor(characters.length / cantCharPerPage);

  const viewCharacters = characters?.slice(desde, hasta);
  return (
    <div className={style.cards}>
      {viewCharacters?.map((char, index) => {
        return <Card key={char.id} char={char} onClose={onClose} />;
      })}
      <div className={style.paginate}>
        {numPage <= 1 ? null : (
          <button onClick={() => dispatch(prev())}>Prev</button>
        )}
        <h3>{numPage}</h3>
        { numPage > cantPage  ? null : (
          <button onClick={() => dispatch(next())}>Next</button>
        )}
      </div>
    </div>
  );
}