//import elements from './modules/cteateElements.js'
import {renderTodoApp} from "./modules/render.js";
import {addTask} from "./modules/addTask.js";
import {removeTask} from "./modules/removeTask.js";
import {completedTask} from "./modules/completedTask.js";
import {dataKey} from "./modules/serveceStorage.js";
//const {createContainer, createButtonsGroup, createForm, createTable, createRow, createTitle} = elements;



// createTitle();
// createForm();
// createTable();



const init = (selector, title) => {
    const app = document.querySelector(selector);
    app.classList.add('vh-100', 'w-100', 'd-flex', 'align-items-center', 'justify-content-center', 'flex-column');
    renderTodoApp(app, title);
    addTask();
    removeTask();
    completedTask();
}

window.phoneBookInit = init;


