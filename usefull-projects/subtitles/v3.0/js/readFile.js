//const textArea = document.getElementById("textAr");
const fileInput = document.getElementById("file-input");
const fileName = document.getElementById('file_name');

let readFile = [];

fileInput.addEventListener('change', readExcel);

function readExcel() {
    const file = fileInput.files[0];
    if (file) {
        const allowedExtensions = /(\.xlsx|\.txt|\.doc|\.docx)$/i;
        if (!allowedExtensions.exec(file.name)) {
            alert('Invalid file format\nAllowed only .xlsx, .txt, .doc .docx');
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

            const res = excelData.map((el) => el[0]);
            readFile = splitStringFunc(res.join());
            //textArea.textContent = readFile;
        };

        // Чтение файла в формате binary
        reader.readAsBinaryString(file);
        fileName.textContent = file.name;

    } else {
        console.log("Файл не выбран.");
    }
}

