function generateExcel(arr) {
    // Создаем данные для таблицы (пример)
    let data;
    
    if (arr === "result") {
        data = resultArray.map(el => [el]);
    }
    else {
        data = googleSheetArray.map(el => [el]);
    }

    if (currentSection == undefined || currentSection == "second") {
        data = resultArray.map(el => [el]);
    }

    console.log(currentSection == undefined);

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(data);

    XLSX.utils.book_append_sheet(workbook, worksheet, "Study words");

    // Сохраняем созданный файл в формате Excel
    const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
    });
    saveAsExcelFile(excelBuffer, "example.xlsx");
}

function saveAsExcelFile(buffer, fileName) {
    const data = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    if (navigator.msSaveBlob) {
        // Для Internet Explorer
        navigator.msSaveBlob(data, fileName);
    } else {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(data);
        link.download = fileName;
        link.click();
    }
}