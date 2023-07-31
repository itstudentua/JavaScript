//const textArea = document.getElementById("textAr");

let readFile = "";

fileInput.addEventListener('change', readExcel);

function readExcel() {
    const file = fileInput.files[0];
    if (file) {
        const allowedExtensions = /(\.xlsx|\.txt)$/i;
        if (!allowedExtensions.exec(file.name)) {
            alert('Invalid file format\nAllowed only .xlsx, .txt');
            fileInput.value = ''; // Очищаем поле input для файла
            return;
        }

        

        const reader = new FileReader();
        // Обработчик события, вызываемый после успешного чтения файла
        reader.onload = function (event) {
            const data = event.target.result;
            const workbook = XLSX.read(data, { type: "binary" });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const excelData = XLSX.utils.sheet_to_json(worksheet, {
                header: 1,
            });
            const res = excelData.map((el) => el);
            readFile = splitStringFunc(res.join());
            textAreaInput1.value = readFile;
            console.log(readFile);

        };

        // Чтение файла в формате binary
        reader.readAsBinaryString(file);
        fileName.textContent = file.name;

    } else {
        console.log("Файл не выбран.");
    }
}

