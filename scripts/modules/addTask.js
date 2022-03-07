import elements from "./cteateElements.js";
import {getStorage, setStorage, dataKey} from "./serveceStorage.js";
const {
    createTable,
    createRow,
} = elements;




export const addTask = () => {
    const form = document.querySelector('form');
    const btnSaved = form.querySelector('.btn-primary');
    const btnReset = form.querySelector('.btn-warning');
    const tasks = getStorage('usman');
    form.input.addEventListener('input', () => {
        if (form.input.value.trim().length > 3) {
            btnSaved.removeAttribute('disabled');
        }
    })

    btnReset.addEventListener('click', () => {
        btnSaved.setAttribute('disabled', 'true');
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const rows = document.querySelectorAll('tr');
        const obj = {
            id: Math.random().toString().substring(2, 10),
            number: rows.length,
            task: form.input.value,
            status: 'В процессе',
        }
        const newObj = Object.assign({}, obj);
        const newTr = createRow(newObj);
        const tbody = document.querySelector('tbody');
        tasks.push(newObj);
        setStorage(dataKey, newObj);
        form.input.value = '';
        btnSaved.setAttribute('disabled', 'true');
        tbody.append(newTr);
    })
}


