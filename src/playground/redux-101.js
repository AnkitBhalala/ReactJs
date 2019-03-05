import { createStore } from 'redux';

const store = createStore((state = { count:0 }, action) => {

  switch(action.type){
    case 'increment':
      return {
        count : state.count + action.incrementBy
      };
    case 'decrement':
      return {
        count : state.count - action.decrementBy
      }
    case 'set':
      return {
        count : action.count
      }
    case 'reset':
      return {
        count : 0
      }
    default:
      return state
  }
});

store.subscribe(() => {
  console.log(store.getState());
});

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'increment',
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'decrement',
  decrementBy
});

const set = ({count = 101} = {}) => ({
  type: 'set',
  count
});

const resetCount = () => ({
  type: 'reset'
});


store.dispatch(incrementCount({incrementBy:45}));

store.dispatch(set({count:90}));
store.dispatch(resetCount());
// store.dispatch();