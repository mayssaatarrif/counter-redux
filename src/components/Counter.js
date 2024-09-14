import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,incrementByAmount, incrementAsync } from '../state/counter/CounterSlice';

function Counter() {
  const count = useSelector(state=>state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{count}</h2>
      <div>
        {/*dispatching actions*/}
      <button onClick={() => dispatch(incrementAsync(10))}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter