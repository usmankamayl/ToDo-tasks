const createTitle = title => {
    const h3 = document.createElement('h3');
    h3.textContent = `${title}`;
    return h3;
};

const createForm = () => {
    const form = document.createElement('form');
    form.classList.add('d-flex', 'align-items-center', 'mb-3');
    form.insertAdjacentHTML('beforeend', `
             <label class="form-group me-3 mb-0">
        <input type="text" class="form-control" placeholder="ввести задачу" name="input">
      </label>

      <button type="submit" class="btn btn-primary me-3" disabled>
        Сохранить
      </button>

      <button type="reset" class="btn btn-warning">
        Очистить
      </button>
          `);
    return form;
};


const createTable = () => {
    const tableWrapper = document.createElement('div');
    tableWrapper.classList.add('table-wrapper');
    const table = document.createElement('table');
    table.classList.add('table', 'table-hover', 'table-bordered');
    const thead = document.createElement('thead');
    thead.insertAdjacentHTML('beforeend', `
           <tr>
            <th>№</th>
            <th>Задача</th>
            <th>Статус</th>
            <th>Действия</th>
          </tr>`)
    const tbody = document.createElement('tbody')
    table.append(thead, tbody);
    //table.tbody = tbody;
    tableWrapper.append(table);
    //tableWrapper.style.width = '500px';
    return {tableWrapper, table, tbody};
};

const createRow = (obj) => {
    const tr = document.createElement('tr');
    tr.classList.add('table-light');
    tr.dataset.id = obj.id;
    const tdNumber = document.createElement('td');
    tdNumber.textContent = obj.number;
    const tdDesc = document.createElement('td');
    tdDesc.classList.add('task');
    tdDesc.textContent = obj.task;
    const tdStatus = document.createElement('td');
    tdStatus.textContent = obj.status;
    const tdBtns = document.createElement('td');
    const button1 = document.createElement('button');
    button1.classList.add('btn', 'btn-danger', 'me-3');
    //button1.setAttribute('type', 'button');
    button1.textContent = 'Удалить';
    const button2 = document.createElement('button');
    button2.classList.add('btn', 'btn-success');
    //button2.setAttribute('type', 'button');
    button2.textContent = 'Завершить';
    tdBtns.append(button1, button2);
    tr.append(tdNumber, tdDesc, tdStatus, tdBtns);
    return tr;
};


export default {
    createTitle,
    createTable,
    createForm,
    createRow,
}
