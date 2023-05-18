import { freeGame, resetGame } from '../../store/actions/actions';
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

const App = () => {
    const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100));
    console.log(randomNum);
  
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
  
    const HandleSubmit = (event) => {
      event.preventDefault();
      dispatch(freeGame(event.target.usernum.value, randomNum));
      event.target.reset();
    };
  
    const resetHandle = () => {
      dispatch(resetGame());
      setRandomNum(Math.floor(Math.random() * 100));
    };
  
    return (
      <>
        <form onSubmit={HandleSubmit}>
          <input type="number" name="usernum" />
          <input type="submit" />
        </form>
        <>
          <h1 style={{color: 'red'}}>{state.title}</h1>
          {state.completed ? (
            <button onClick={resetHandle}>{state.description}</button>
          ) : (
            <p>{state.description}</p>
          )}
        </>
      </>
    );
  };
export default App;