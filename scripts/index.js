import {renderTodoApp} from "./modules/render.js";
import {addTask} from "./modules/addTask.js";
import {removeTask} from "./modules/removeTask.js";
import {completedTask} from "./modules/completedTask.js";

const init = (selector, title) => {
    const app = document.querySelector(selector);
    app.classList.add('vh-100', 'w-100', 'd-flex', 'align-items-center', 'justify-content-center', 'flex-column');
    renderTodoApp(app, title);
    addTask();
    removeTask();
    completedTask();
}

window.phoneBookInit = init;


