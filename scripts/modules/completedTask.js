import {dataKey, getStorage, setStorage} from "./serveceStorage.js";
export const completedTask = () => {
    const tbody = document.querySelector('tbody');
    tbody.addEventListener('click', e => {
        if (e.target.closest('.btn-success')) {
            e.target.closest('tr').classList.remove('table-light');
            e.target.closest('tr').classList.add('table-success');
            const id = e.target.closest('tr').dataset.id;
            console.log(id);
            const tasks = getStorage(dataKey);
            console.log(tasks);
            tasks.forEach(task => {
                if (task.id === id) {
                    task.status = 'Выполнена';
                    localStorage.setItem(dataKey, JSON.stringify(tasks));
                }
            })

            e.target.closest('tr').querySelectorAll('td')[1].classList.add('text-decoration-line-through');
            e.target.closest('tr').querySelectorAll('td')[2].textContent = 'Выполнена';
            e.target.closest('.btn-success').setAttribute('disabled', 'true');
        }
    })
}

