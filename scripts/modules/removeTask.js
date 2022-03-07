import {removeStorage} from "./serveceStorage.js";
export const removeTask = () => {
    const tbody = document.querySelector('tbody');
    tbody.addEventListener('click', e => {
        if (e.target.closest('.btn-danger')) {
            const id =  e.target.closest('tr').dataset.id;
            e.target.closest('tr').remove();
            removeStorage(id);
        }
    })
}
