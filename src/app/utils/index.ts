export const formatwithComma = (str?: string) : string => {
    if (!str) return '';
    let len = str.length;
    if (len === 1) return str;
    return str.substring(0, len - 1) + "," + str.substring(len - 1, len);;
}
