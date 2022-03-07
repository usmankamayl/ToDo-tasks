export let dataKey = prompt('Введите ключ');

export const getStorage = (dataKey) => {
    return JSON.parse(localStorage.getItem(dataKey)) || [];
};
export const setStorage = (dataKey, obj) => {
    const data = getStorage(dataKey);
    data.push(obj);
    localStorage.setItem(dataKey, JSON.stringify(data));
};
export const  removeStorage = (id) => {
    const tasks = getStorage(dataKey);
    tasks.forEach((obj, index) => {
        if (obj.id === id) {
            tasks.splice(index, 1);
        }

    })
    localStorage.setItem(dataKey, JSON.stringify( tasks));
};
