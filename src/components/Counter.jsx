import { useDispatch, useSelector } from "react-redux"
import {increment,decrement} from '../redux/features/counter/counterSlice'

const Counter = () => {
  const {count} = useSelector((state) => state.counter);
const dispatch = useDispatch();
  return (
    <div>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <div>
      <h1>{count}</h1>
    </div>
    <br />
    <button onClick={() => dispatch(decrement())}>Decrement</button>
  </div>
)
  
}

export default Counter;
