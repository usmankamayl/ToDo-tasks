import elements from "./cteateElements.js";
import {getStorage, dataKey} from "./serveceStorage.js";
import {addNumberToStorage} from "./addNumber.js";
const {
    createTable,
    createTitle,
    createForm,
    createRow,
} = elements;


export const renderTodoApp = (app, title) => {
    const logo = createTitle(title);
    const {tableWrapper, tbody} = createTable();
    const form = createForm();
    renderTasks(tbody);
    app.append(logo, form, tableWrapper);
    return {
        logo,
        form,
        tbody,
    }
}

export const renderTasks = (elem) => {
    addNumberToStorage();
    const tasks = getStorage(dataKey);
    tasks.forEach(task => {
        elem.append(createRow(task));
    });
};
