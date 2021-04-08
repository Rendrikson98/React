import * as actionsTypes from './actionsTypes';

export const saveResult = (res) => {
    return {
        type: actionsTypes.STORE_RESULT,
        result: res
    }
}

export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            //const oldCounter = getState().ctr.counter;
            //console.log(oldCounter)
            dispatch(saveResult(res));
        }, 2000)
    }
}
export const deleteResult = (resElId) => {
    return {
        type: actionsTypes.DELETE_RESULT,
        resulElId: resElId
    }
}