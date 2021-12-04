import { SET_ALERT, REMOVE_ALERT } from '../types/alert';

export const setAlert = (message, type, timeout = 3500) => (dispatch, getState) => {
    const messages = typeof message === 'string' ? [ message ] : message;
    const { alert } = getState();

    if(alert.alert.length && alert.alert[0] === messages[0]) return;

    dispatch({
        type: SET_ALERT,
        payload: { alert: messages, type }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), timeout);
};