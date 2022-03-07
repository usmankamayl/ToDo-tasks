export const completedTask = () => {
    const tbody = document.querySelector('tbody');
    tbody.addEventListener('click', e => {
        if (e.target.closest('.btn-success')) {
            e.target.closest('tr').classList.remove('table-light');
            e.target.closest('tr').classList.add('table-success');
            e.target.closest('tr').querySelectorAll('td')[1].classList.add('text-decoration-line-through');
            e.target.closest('tr').querySelectorAll('td')[2].textContent = 'Выполнена';
            e.target.closest('.btn-success').setAttribute('disabled', 'true');
        }
    })
}
