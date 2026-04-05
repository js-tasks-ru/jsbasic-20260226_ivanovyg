/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.newTable = document.createElement('table');
    this.elem = this.newTable;

    this.newTable.addEventListener('click', function(event) {
      let tbody = this.querySelector('tbody');
      
      if (event.target.dataset.delButton === 'true') {
        tbody.removeChild(event.target.closest('TR'));
      }
    });

    let th = this.newTable.createTHead();
    let tbody = this.newTable.createTBody();

    for (let item of ['Имя', 'Возраст', 'Зарплата', 'Город', '']) {
      let td = document.createElement('td');
      td.innerText = item;
      th.append(td);
    }

    for (let row of rows) {
      let tr = document.createElement('tr');
      tbody.append(tr);

      for (let cell in row) {
        let td = document.createElement('td');
        
        td.innerText = row[cell];
        tr.append(td);
      }

      let deleteButtonTD = document.createElement('td');
      deleteButtonTD.innerHTML = "<button data-del-button='true'>[X]</button>";
      tr.append(deleteButtonTD);
    }
  }
}
