export const textTruncate = (text, length = 25, ending = '...') => {
    if(text.length > length) {
        return text.substring(0, length - ending.length) + ending;
    } else {
        return text;
    }
};

export const setAuthHeaders = (headersObject = {}) => {
    let headers = { ...headersObject };
    if(localStorage.token) {
        headers = {
            ...headers,
            Authorization: `Bearer ${localStorage.token}`
        };
    }
    return headers;
};
