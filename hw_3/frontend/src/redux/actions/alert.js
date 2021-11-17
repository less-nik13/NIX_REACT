import { SET_ALERT, REMOVE_ALERT } from '../types/alert';

export const setAlert = (message, type, timeout = 3500) => (dispatch, getState) => {
    const messages = typeof message === 'string' ? [ message ] : message;
    const { alert } = getState();

    if(alert.showAlert) {
        return;
    }

    dispatch({
        type: SET_ALERT,
        payload: { alert: messages, type }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), timeout);
};