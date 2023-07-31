function showTableFunc(arr) {
    createTable(arr);
    if (second_div.style.display !== 'none') {
        currentSection = "second";
    }
    else {
        currentSection = "first";
    }
    second_div.style.display = 'none';
    first_div.style.display = 'none';
    
    table_block.style.display = 'block';
    elements.forEach(element => {
        element.classList.remove('hide_info'); // Замените 'active' на название класса, который вы хотите переключать
    });
}

function closeTableFunc() {
    // first_div.style.display = 'none';
    // second_div.style.display = 'none';
    
    if (currentSection === 'first') {
        first_div.style.display = 'flex';
        second_div.style.display = 'none';
    }
    else {
        second_div.style.display = 'flex';
        first_div.style.display = 'none';
    }

    table_block.style.display = 'none';
    total_w.textContent = ``;
    uniq_w.textContent = ``;
    new_w.textContent = ``;
    downExcel.style.visibility = 'hidden';
    showTable.style.visibility = 'hidden';
    const tableToRemove = document.querySelector("table");
    if (tableToRemove) {
        tableToRemove.remove();
    }
}

function createTable(arr) {
    

    let data;
    if (arr === "result") {
        data = resultArray.map(el => el);
    }

    else {
        data = googleSheetArray.map(el => el);
    }

    document.getElementById('total_words').textContent = `Total words: ${data.length}`;


    const tableToRemove = document.querySelector("table");
    if (tableToRemove) {
        tableToRemove.remove();
    }

    // Создаем элемент таблицы
    const table = document.createElement("table");

    // Создаем заголовок таблицы
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    // Создаем заголовки для каждого столбца
    //const headers = ["№", "Word", "Translate"];
    const headers = [`№`, "Word"];

    headers.forEach((headerText) => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Создаем тело таблицы
    const tbody = document.createElement("tbody");
    data.forEach((item, index) => {
        const row = document.createElement("tr");

        // Создаем ячейку для номера
        const numberCell = document.createElement("td");
        numberCell.textContent = index + 1;
        row.appendChild(numberCell);

        // Создаем ячейку для слова
        const wordCell = document.createElement("td");
        wordCell.textContent = item;
        row.appendChild(wordCell);

        // // Создаем ячейку для перевода
        // const translateCell = document.createElement("td");
        // translateCell.textContent = "";
        // row.appendChild(translateCell);

        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Добавляем таблицу в контейнер
    tableContainer.appendChild(table);

    function updateHeaderWidth() {
        const table = document.getElementById("table-container");
        const headerCells = table.querySelectorAll("th");
        const dataCells = table.querySelectorAll("td");

        for (let i = 0; i < headerCells.length; i++) {
            headerCells[i].style.width = 0 + dataCells[i].offsetWidth + "px";
        }
    }
    window.addEventListener("resize", updateHeaderWidth);
    setTimeout(() => {
        updateHeaderWidth();
    }, "1");
}