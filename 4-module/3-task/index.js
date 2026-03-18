function highlight(table) {
  for (let row of table.rows) {
    // Определить присутствует ли аттрибут
    if (row.cells[3].hasAttribute('data-available')) {
      // Проверить значение аттрибута и назанчить стиль строке
      if (row.cells[3].dataset.available === 'true') {
        row.classList.add('available');
      } else {
        row.classList.add('unavailable');
      }
    } else {
      // Скрыть строку, если аттрибута нет
      row.setAttribute('hidden', 'true');
    }
    
    // Определить пол по значению ячейки и установить соответствующий стиль
    if (row.cells[2].innerText === 'm') {
      row.classList.add('male');    
    } else if (row.cells[2].innerText === 'f') {
      row.classList.add('female');        
    }
      
    // Проверить возраст и вычеркнуть, если меньше положенного  
    if (row.cells[1].innerText < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
