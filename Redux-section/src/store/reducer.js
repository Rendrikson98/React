const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'INCREMENT5':
            return {
                ...state,
                counter: state.counter + action.val
            }
        case 'DECREMENT5':
            return {
                ...state,
                counter: state.counter - action.val
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            }
        case 'DELETE_RESULT':
            /*const id = 2;
            const newArray = [...state.results];
            newArray.splice(id, 1)*/

            const updateArray = state.results.filter(result => result.id !== action.resultElId)

            console.log(updateArray)
            return {
                ...state,
                results: updateArray
            }
        default:
            return state

    }
};

export default reducer;