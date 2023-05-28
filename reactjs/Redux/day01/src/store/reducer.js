const initialState = {
    counter: 0,
    results:[]
}



const reducer = (state = initialState, action) => {
    const newState = Object.assign({},state);
    switch (action.type) {
        case 'INCREMENT':
            newState.counter = state.counter + 1;
            return newState;
            case 'DECREMENT':
            
                newState.counter = state.counter - 1;
                return newState;
        case 'ADD':
                newState.counter = state.counter + action.val;
                return newState;
        case 'SUBTRACT':
            newState.counter = state.counter - action.val;
            return newState;
            
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
    }
    return state;
}

export default reducer;