import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'
import counter from './reducers/counter'
import configureStore, {injectAsyncReducer} from './reducers/store';


const store = configureStore();
const rootEl = document.getElementById('root')

injectAsyncReducer(store, 'added', counter('added'));

const render = () => {
    var counters = [],
        state = store.getState();

    for(var key in state) {
        counters.push( <Counter key={key}
            value={state[key]}
            name={key}
            onIncrement={(name) => store.dispatch({type: 'INCREMENT', name: name})}
            onDecrement={(name) => store.dispatch({type: 'DECREMENT', name: name})}
        />);
    }
    return ReactDOM.render(
        <div>
            {counters}
        </div>,
        rootEl
    );
};

render();
store.subscribe(render);
