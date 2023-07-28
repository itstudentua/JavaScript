function createNewSheet() {
    var sheetName = prompt('Введите имя нового листа:');
    if (sheetName) {
      var url = 'https://script.google.com/macros/s/AKfycbwfcfD6ZtHtTZRLn6p8DggiQUZUNMjSu8WOVDhnXm4gYLf8kdpDCAxNhP69fA0ukYPhJA/exec?sheetName=' + encodeURIComponent(sheetName);
      fetch(url)
        .then(response => response.text())
        .then(data => alert('Создан новый лист с именем: ' + data))
        .catch(error => console.error('Ошибка:', error));
    }
  }