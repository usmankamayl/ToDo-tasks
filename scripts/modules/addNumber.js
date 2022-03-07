import {dataKey, getStorage} from "./serveceStorage.js";

export const addNumber = () => {
   const td = document.querySelectorAll('.number');
   td.forEach((el, i) => el.textContent =`${i + 1}`);
}


export const addNumberToStorage = () => {
    const tasks = getStorage(dataKey);
    const newTasks = [];
    tasks.forEach((task, index) => {
        task.number = index + 1;
        newTasks.push(task);
    })
    localStorage.setItem(dataKey, JSON.stringify(newTasks));
}
