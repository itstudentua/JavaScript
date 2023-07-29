//const textArea = document.getElementById("textAr");
const fileInput = document.getElementById("file-input");
const fileName = document.getElementById('file_name');
let readFile = [];

fileInput.addEventListener('change', readExcel);

function readExcel() {
    const file = fileInput.files[0];
    if (file) {
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

            const res = excelData.map((el) => el[0]);
            readFile = splitStringFunc(res.join());
            console.log(readFile);
            //textArea.textContent = readFile;
            fileName.textContent = (fileInput.value).split('\\').at(-1);
        };

        // Чтение файла в формате binary
        reader.readAsBinaryString(file);
    } else {
        console.log("Файл не выбран.");
    }
}

