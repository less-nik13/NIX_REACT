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

export const convertDuration = (min) => {
    let hours = Math.trunc(min / 60);
    let minutes = min % 60;
    return `${hours}h ${minutes}min`;
};

export const moneyFormat = (value) => {
    // Nine Zeroes for Billions
    return Math.abs(Number(value)) >= 1.0e+9

        ? (Math.abs(Number(value)) / 1.0e+9).toFixed(2) + "B"
        // Six Zeroes for Millions
        : Math.abs(Number(value)) >= 1.0e+6

            ? (Math.abs(Number(value)) / 1.0e+6).toFixed(2) + "M"
            // Three Zeroes for Thousands
            : Math.abs(Number(value)) >= 1.0e+3

                ? (Math.abs(Number(value)) / 1.0e+3).toFixed(2) + "K"

                : Math.abs(Number(value));
};