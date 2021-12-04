export const textTruncate = (text, length = 25 , ending='...') => {
    if (text.length > length) {
        return text.substring(0, length - ending.length) + ending;
    } else {
        return text;
    }
};